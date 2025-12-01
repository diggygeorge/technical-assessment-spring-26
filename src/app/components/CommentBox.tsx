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
  createdAt: string;
}



const CommentBox = () => {
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
    if ((!username && !name) || !comment) {
      alert("Please choose a name and message to comment!")
      return
    };

    let user = username;
    if (!user && name.trim()) {
      setUsername(name.trim());
      user = name.trim();
    }

    console.log("Posting as:", user);

    setLoading(true);
    try {
      await fetch(
        `/api/add_comment?name=${encodeURIComponent(user)}&comment=${encodeURIComponent(comment)}&path=${pathname}`, {
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
    <Box
  sx={{
    maxWidth: 600,
    mx: "auto",
    p: 2,
    background: "#fff",
    borderRadius: 2,
    boxShadow: 1,
  }}
>
  <Typography
    variant="h6"
    color="black"
    gutterBottom
    sx={{ fontWeight: 600, mb: 1 }}
  >
    Comments
  </Typography>

  {/* Input Section */}
  <Paper sx={{ p: 1.5, mb: 1.5, boxShadow: "none", background: "#fafafa" }}>
    <TextField
      label="Name"
      fullWidth
      variant="outlined"
      value={username ? username : name}
      onChange={(e) => setName(e.target.value)}
      disabled={username}
      required={!username}
      size="small"
      sx={{ mb: 1 }}
    />
    <TextField
      label="Comment"
      fullWidth
      multiline
      minRows={2}
      variant="outlined"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
      size="small"
      sx={{ mb: 1 }}
    />
    <Button
      variant="contained"
      color="primary"
      size="small"
      onClick={handleSubmit}
      disabled={loading}
      sx={{
        px: 2.5,
        py: 0.6,
        textTransform: "none",
      }}
    >
      {loading ? "Posting..." : "Post"}
    </Button>
  </Paper>

  {/* Comments List */}
  <Paper
    sx={{
      p: 1.5,
      maxHeight: 300,
      overflowY: "auto",
      background: "#fafafa",
      boxShadow: "none",
      borderRadius: 1,
    }}
  >
    <List dense>
      {comments.length === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ py: 1 }}
        >
          No comments yet.
        </Typography>
      ) : (
        comments.map((item, index) => (
          <React.Fragment key={item._id || index}>
            <ListItem
              alignItems="flex-start"
              sx={{
                py: 0.25,
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="subtitle2" component="span" sx={{ fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: "text.secondary", fontSize: "0.85rem", display: "block" }}
                    >
                      {item.comment}
                    </Typography>
                    <Typography
                      variant="caption"
                      component="span"
                      sx={{
                        color: "text.disabled",
                        fontSize: "0.75rem",
                        display: "block",
                      }}
                    >
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                          })
                        : ""}
                    </Typography>
                  </>
                }
              />

            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))
      )}
    </List>
  </Paper>
</Box>

  : <></>);
};

export default CommentBox;