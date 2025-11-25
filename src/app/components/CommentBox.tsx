"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { usePathname } from "next/navigation";
import { useUser } from "../context/UserContext"

interface Comment {
  _id?: string;
  name: string;
  comment: string;
  path: string;
}



const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const pathname = usePathname().substring(1);

  const { username, setUsername } = useUser();

  // Fetch comments for a given path
  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/get_comments?path=${pathname}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  };

  // Add a new comment
  const handleSubmit = async () => {
    if (!name || !comment) return;
    if (name.trim()) {
      setUsername(name.trim());
    }
    setLoading(true);
    try {
      await fetch(
        `/api/add_comment?name=${encodeURIComponent(name)}&comment=${encodeURIComponent(comment)}&path=${pathname}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            comment: comment,
            path: pathname
          })
        });
      setComment("");
      fetchComments();
    } catch (error) {
      console.error("Failed to add comment:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [pathname]);

  return (pathname ? 
    <Box sx={{ maxWidth: 600, margin: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
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
        <TextField
          label="Comment"
          fullWidth
          multiline
          minRows={3}
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Posting..." : "Add Comment"}
        </Button>
      </Paper>

      <Paper sx={{ p: 2, maxHeight: 400, overflowY: "auto" }}>
        <List>
          {comments.map((item, index) => (
            <React.Fragment key={item._id || index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<strong>{item.name}</strong>}
                  secondary={item.comment}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
          {comments.length === 0 && (
            <Typography variant="body2" color="text.secondary" align="center">
              No comments yet.
            </Typography>
          )}
        </List>
      </Paper>
    </Box>
  : <></>);
};

export default CommentsSection;