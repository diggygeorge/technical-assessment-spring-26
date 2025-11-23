"use client";

import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Link,
  Container,
} from "@mui/material";
import { amber } from "@mui/material/colors";

export default function Home() {
  const cards = [
    { title: "Kihon", desc: "Fundamentals of technique", href: "/kihon" },
    { title: "Kata", desc: "Structured movement patterns", href: "/kata" },
    { title: "Kumite", desc: "Controlled sparring practice", href: "/kumite" },
    { title: "History", desc: "Explore karate’s Okinawan roots", href: "/history" },
    { title: "Belt System", desc: "Ranks and progression", href: "/belts" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #f5f5f4, #fef3c7)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.95)",
          boxShadow: 4,
          borderRadius: 2,
          py: 6,
          px: { xs: 3, sm: 6 },
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 2 }}>
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
            <Typography variant="h5" sx={{ fontWeight: "bold", color: amber[800] }}>
              KARATE-DO
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Way of the Empty Hand
            </Typography>
          </Box>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderLeft: 4,
            borderColor: amber[500],
            bgcolor: amber[50],
            mb: 4,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic", color: "text.primary" }}
          >
            "The ultimate aim of Karate lies not in victory or defeat, but in the
            perfection of the character of its participants."
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: amber[800], mt: 1, fontWeight: 500 }}
          >
            – Gichin Funakoshi (1868–1957)
          </Typography>
        </Paper>

        <Box sx={{ color: "text.primary", mb: 4 }}>
          <Typography paragraph sx={{ lineHeight: 1.7 }}>
            <strong>Shotokan Karate</strong> is one of the most influential martial
            arts styles in the world, founded by{" "}
            <Box component="span" sx={{ color: amber[700], fontWeight: 500 }}>
              Gichin Funakoshi
            </Box>{" "}
            in the early 20th century. It emphasizes precision, form, and inner
            discipline through <strong>kihon</strong> (basics),{" "}
            <strong>kata</strong> (forms), and <strong>kumite</strong> (sparring).
          </Typography>

          <Typography paragraph sx={{ lineHeight: 1.7 }}>
            Meaning{" "}
            <Box component="span" sx={{ fontStyle: "italic" }}>
              "the way of the empty hand,"
            </Box>{" "}
            Karate-Do reflects a balance between physical strength and spiritual
            harmony — teaching practitioners humility, focus, and respect.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid size={{xs: 6, md: 4}} key={card.title}>
              <Link
                href={card.href}
                underline="none"
                sx={{
                  display: "block",
                  p: 2,
                  bgcolor: amber[50],
                  border: "1px solid",
                  borderColor: amber[300],
                  borderRadius: 2,
                  color: "text.primary",
                  boxShadow: 1,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: amber[100],
                    borderColor: amber[600],
                    boxShadow: 3,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: amber[800] }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 0.5, color: "text.secondary" }}
                >
                  {card.desc}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
