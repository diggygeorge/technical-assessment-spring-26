"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { amber } from "@mui/material/colors";
import AnswerBox from "../components/AnswerBox"
import CommentBox from "../components/CommentBox"

export default function Kata() {
  const katas = [
    {
      belt: "White Belt",
      data: [
        { kyu: "8th", name: "Taikyoku Shodan", meaning: "First Cause, First Level", moves: 20 },
        { kyu: "7th", name: "Heian Shodan", meaning: "Peaceful Mind, First Level", moves: 21 },
      ],
    },
    {
      belt: "Green Belt",
      data: [
        { kyu: "6th", name: "Heian Nidan", meaning: "Peaceful Mind, Second Level", moves: 26 },
        { kyu: "5th", name: "Heian Sandan", meaning: "Peaceful Mind, Third Level", moves: 20 },
        { kyu: "4th", name: "Heian Yondon", meaning: "Peaceful Mind, Fourth Level", moves: 27 },
      ],
    },
    {
      belt: "Brown Belt",
      data: [
        { kyu: "3rd", name: "Heian Godan", meaning: "Peaceful Mind, Fifth Level", moves: 23 },
        { kyu: "2nd", name: "Tekki Shodan", meaning: "Iron Horse, First Level", moves: 29 },
        { kyu: "1st", name: "Bassai Dai", meaning: "Penetrating the Fortress of an Enemy, Big", moves: 42 },
      ],
    },
    {
      belt: "Black Belt (Shodan)",
      data: [
        { kyu: "Shodan", name: "Kanku Dai", meaning: "To View the Sky, Big", moves: 65 },
        { name: "Empi", meaning: "Flying Swallow", moves: 37 },
        { name: "Jion", meaning: "Temple Sound", moves: 47 },
      ],
    },
    {
      belt: "After Shodan (Favorite Kata)",
      data: [
        { name: "Hangetsu", meaning: "Half Moon", moves: 41 },
        { name: "Sochin", meaning: "Tranquil Force", moves: 41 },
        { name: "Meikyo", meaning: "Bright Mirror", moves: 33 },
        { name: "Ji'in", meaning: "Temple Sound", moves: 35 },
        { name: "Jitte", meaning: "Ten Hands", moves: 24 },
        { name: "Tekki Nidan", meaning: "Iron Horse, Second Level", moves: 24 },
        { name: "Tekki Sandan", meaning: "Iron Horse, Third Level", moves: 36 },
        { name: "Bassai Sho", meaning: "Penetrating the Fortress, Small", moves: 27 },
        { name: "Kanku Sho", meaning: "To View the Sky, Small", moves: 48 },
        { name: "Nijushiho", meaning: "Twenty Four Steps", moves: 34 },
        { name: "Wankan", meaning: "King’s Crown", moves: 24 },
        { name: "Gankaku", meaning: "Crane on a Rock", moves: 42 },
        { name: "Chinte", meaning: "Rare Hand", moves: 32 },
        { name: "Gojushiho Sho", meaning: "Fifty Four Steps, Small", moves: 65 },
        { name: "Gojushiho Dai", meaning: "Fifty Four Steps, Big", moves: 67 },
        { name: "Unsu", meaning: "Cloud Hands", moves: 48 },
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #f5f5f4, #fef3c7)",
        fontFamily: "Roboto, sans-serif",
        py: 6,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.95)",
          boxShadow: 4,
          borderRadius: 2,
          py: 6,
          px: { xs: 3, sm: 6 },
          backdropFilter: "blur(6px)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 5, gap: 2 }}>
          <Link
            href="/"
            underline="none"
            sx={{
              "&:hover": { transform: "scale(1.1)" },
              transition: "0.3s",
              display: "inline-block",
            }}
          >
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                bgcolor: amber[700],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 22,
                boxShadow: 2,
              }}
            >
              空手
            </Box>
          </Link>

          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: amber[800] }}>
              Kata
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Forms of Karate
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
          <strong>Kata (形)</strong>, meaning “form,” is a prescribed series of techniques against imaginary attackers.
          Each movement represents a self-defense technique against a potential opponent. These self-defense
          “applications” are called <strong>bunkai</strong> (analysis). Every kata has an <em>embusen</em> — a specific
          performance line — and must begin and end on the same spot.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
          Kata training is one of karate’s oldest traditions, used to pass down techniques, timing, rhythm, and proper
          breathing. Some kata are powerful and grounded; others require agility and flow. Students must perform kata
          with focus, spirit, and humility — as if defending against real opponents. Kata begins and ends with a bow;
          only after the final bow is it truly finished.
        </Typography>

        <Typography variant="body1" sx={{ mb: 5, fontWeight: "medium", color: "text.primary" }}>
          Below are the kata practiced in a typical dojo. Each rank requires mastery of all previous kata to that rank's level.
        </Typography>

        {katas.map((section) => (
          <Accordion key={section.belt}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: "bold", color: amber[800] }}>
                {section.belt}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Kyu / Rank</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Kata</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Meaning</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}># of Moves</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {section.data.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.kyu || "—"}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.meaning}</TableCell>
                      <TableCell>{row.moves}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="body2" sx={{ color: "gray" }}>
            “Kata is the essence of karate — it teaches not just motion, but meaning.”
          </Typography>
        </Box>
      </Container>
      <div className="justify-center p-6">
        <AnswerBox topic={"kata"} />
        <CommentBox/>
      </div>
    </Box>
  );
}
