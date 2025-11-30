"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  LinearProgress,
  Stack
} from "@mui/material";
import { amber, red, green } from "@mui/material/colors";
import { useUser } from "../context/UserContext"
import { ObjectId } from 'mongodb'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton, Collapse } from "@mui/material";

interface Answer {
  name: string;
  id: string;
  choice: string;
}
interface Question {
  _id: ObjectId;
  name: string;
  topic: string;
  choices: string[];
  correctAnswer: string;
  answers: Answer[];
}

interface QuestionProps {
  topic: string;
}

export default function AnswerBox({topic}: QuestionProps) {

  const [selectedChoice, setSelectedChoice] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [question, setQuestion] = useState<Question>();  
  const [questionIndex, setQuestionIndex] = useState<number | null>(null);
  const [answerId, setAnswerId] = useState("undefined")
  const [expanded, setExpanded] = useState(false);
  const { username, setUsername } = useUser();
  const [name, setName] = useState(username);

const fetchQuestions = async () => {
  try {
    const response = await fetch(`/api/get_questions?path=${topic}`);
    if (response.ok) {
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        // Pick a random question
        if (questionIndex === null) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setQuestion(data[randomIndex]);
          setQuestionIndex(randomIndex)
        }
        else {
          setQuestion(data[questionIndex])
        }
      } else {
        console.warn("No questions found for this topic.");
      }
    } else {
      console.error("Failed to fetch questions:", response);
    }
  } catch (error) {
    console.error("Failed to load questions:", error);
  }
};

  const handleSubmit = async () => {
    if ((!username && !name) || !selectedChoice) return;

    if (!username) {
      setUsername(name.trim());
    }

    const correct = selectedChoice === question?.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);

    // Save to backend
    const newAnswer = {
      id: question?._id,
      name: username,
      choice: selectedChoice,
      path: topic
    };

    console.log("Submitted:", { newAnswer });
    const addAnswer = async() => {
      try {
        const response = await fetch(`/api/save_answer?id=${question?._id}&name=${encodeURIComponent(username)}&choice=${encodeURIComponent(selectedChoice)}&answer_id=${answerId}`, 
        { method: "POST", body: JSON.stringify({ newAnswer }) });

        if (response.ok) {
          const data = await response.json();
          setAnswerId(data.answerId);
          console.log(data)
        }
      }
      catch (error) {
        console.error("Failed to load comments:", error);
      }
    }
    await addAnswer();
    fetchQuestions();
  };

  // Calculate statistics
  let totalAnswers = question?.answers.length;
  let choiceCounts = question?.choices.map(
    (choice) =>
      question?.answers.filter((a) => a.choice === choice).length || 0
  );

  useEffect(() => {
    fetchQuestions();
  }, [])

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor:
          submitted && isCorrect !== null
            ? isCorrect
              ? green[50]
              : red[50]
            : "white",
        border: submitted
          ? `2px solid ${isCorrect ? green[400] : red[400]}`
          : `1px solid ${amber[200]}`,
        transition: "all 0.3s ease",
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        mt: 3
      }}
    >
    <TextField
        label="Name"
        fullWidth
        variant="outlined"
        value={username ? username : name}
        onChange={(e) => setName(e.target.value)}
        disabled={username}
        required={!username}
        sx={{ mb: 2 }}
    />
      <Typography variant="subtitle2" sx={{ color: amber[800], mb: 1 }}>
        Topic: {topic.toUpperCase()}
      </Typography>

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        {question?.name}
      </Typography>

      <RadioGroup
        value={selectedChoice}
        onChange={(e) => setSelectedChoice(e.target.value)}
      >
        {question?.choices.map((choice) => (
          <FormControlLabel
            key={choice}
            value={choice}
            control={<Radio/>}
            label={choice}
          />
        ))}
      </RadioGroup>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          mt: 2,
          bgcolor: amber[700],
          "&:hover": { bgcolor: amber[800] }
        }}
      >
        Submit
      </Button>

      {/* Feedback */}
      {submitted && (
        <Typography
          sx={{
            mt: 2,
            fontWeight: 600,
            color: isCorrect ? green[700] : red[700]
          }}
        >
          {isCorrect
            ? "✅ Correct! Well done!"
            : `❌ Incorrect.  Please try again!`}
        </Typography>
      )}

      {/* Answer stats */}

{submitted && totalAnswers && totalAnswers > 0 && (
  <Box sx={{ mt: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 1,
      }}
    >
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        Community Answers ({totalAnswers} total)
      </Typography>

      {/* ▼ dropdown arrow */}
      <IconButton
        size="small"
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
    </Box>

    {/* Stats for each choice */}
    <Stack spacing={1}>
      {question?.choices.map((choice, index) => {
        const percent =
          totalAnswers && choiceCounts
            ? Math.round((choiceCounts[index] / totalAnswers) * 100)
            : 0;

        return (
          <Box key={choice}>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              {choice} — {percent}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={percent}
              sx={{
                height: 8,
                borderRadius: 5,
                bgcolor: amber[100],
                "& .MuiLinearProgress-bar": {
                  bgcolor: amber[700],
                },
              }}
            />
          </Box>
        );
      })}
    </Stack>

    {/* Expandable section with all answers */}
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <Typography variant="subtitle2" sx={{ mb: 1, color: amber[800] }}>
        Individual Responses:
      </Typography>

      {question?.answers && question.answers.length > 0 ? (
        <Stack spacing={0.5}>
          {question.answers.map((a) => (
            <Typography key={a.id} variant="body2" sx={{ color: "text.secondary" }}>
              • <strong>{a.name}</strong> — {a.choice}
            </Typography>
          ))}
        </Stack>
      ) : (
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "gray" }}>
          No responses yet.
        </Typography>
      )}
    </Collapse>
  </Box>
)}
    </Paper>
  );
}
