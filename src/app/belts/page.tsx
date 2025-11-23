"use client";

import { Box, Typography, Container, Link, Paper } from "@mui/material";
import { amber } from "@mui/material/colors";

export default function BeltSystem() {
  const belts = [
    { color: "#FFFFFF", name: "White Belt", meaning: "The beginning — purity, potential, and readiness to learn." },
    { color: "#FACC15", name: "Yellow Belt", meaning: "The first rays of knowledge — awakening of awareness and growth." },
    { color: "#FB923C", name: "Orange Belt", meaning: "Strengthening foundation — confidence and energy begin to emerge." },
    { color: "#16A34A", name: "Green Belt", meaning: "Growth and progress — refining techniques and cultivating focus." },
    { color: "#2563EB", name: "Blue Belt", meaning: "Depth and expansion — understanding and calm under pressure." },
    { color: "#9333EA", name: "Purple Belt", meaning: "Transition and maturity — mastery of form and spirit." },
    { color: "#412700", name: "Brown Belt", meaning: "Preparation — discipline, precision, and readiness for black belt." },
    { color: "#000000", name: "Black Belt (1st–10th Dan)", meaning: "Mastery and humility — continual learning, leadership, and enlightenment." },
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
        maxWidth="lg"
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.95)",
          boxShadow: 4,
          borderRadius: 2,
          py: 8,
          px: { xs: 3, sm: 6 },
          backdropFilter: "blur(6px)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 6, gap: 2 }}>
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
              Belt System
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Progression Through Mastery
            </Typography>
          </Box>
        </Box>

        <Box sx={{ maxWidth: "700px", textAlign: "center", mx: "auto", mb: 6 }}>
          <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8 }}>
            The <strong>belt system</strong> in Karate represents the practitioner’s journey of self-improvement.
            Each color symbolizes not only technical skill, but also personal growth — from the innocence of
            white to the wisdom and humility of black.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          {belts.map((belt) => (
            <Box
              key={belt.name}
              sx={{
                position: "relative",
                border: "1px solid #d6d3d1",
                borderRadius: 1,
                overflow: "hidden",
                mb: 2,
                boxShadow: 1,
                transition: "0.3s ease",
                "&:hover": { boxShadow: 4 },
              }}
            >
              <Box
                sx={{
                  height: 56,
                  bgcolor: belt.color,
                  transition: "all 0.3s ease",
                  "&:hover": { filter: "brightness(80%)" },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "rgba(255,255,255,0.9)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": { opacity: 1 },
                  textAlign: "center",
                  p: 2,
                }}
              >
                <Typography variant="h6" sx={{ color: amber[800], fontWeight: 600 }}>
                  {belt.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                  {belt.meaning}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Paper
          elevation={0}
          sx={{
            mt: 8,
            p: 3,
            maxWidth: "700px",
            mx: "auto",
            borderLeft: 4,
            borderColor: amber[400],
            bgcolor: amber[50],
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.primary", lineHeight: 1.8 }}>
            In Karate, advancement is not simply about rank — each belt reflects the student’s dedication,
            discipline, and respect for the art. The journey continues endlessly, even beyond the black belt.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
