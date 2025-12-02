"use client";

import React from "react";
import {
  Box,
  Link,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { amber } from "@mui/material/colors";
import CommentBox from "../components/CommentBox";
import AnswerBox from "../components/AnswerBox";


export default function Kumite() {
    const cards = [
    { title: "Kihon", desc: "Basics", href: "/kihon" },
    { title: "Kata", desc: "Structured movement patterns", href: "/kata" },
    { title: "History", desc: "Explore karate’s Okinawan roots", href: "/history" },
    { title: "Belt System", desc: "Ranks and progression", href: "/belts" },
  ];

  const sparringTypes = [
    { term: "kihon-gohon-kumite", desc: "Basic five-step sparring" },
    { term: "kihon-sanbon-kumite", desc: "Basic three-step sparring" },
    { term: "kihon-ippon-kumite", desc: "Basic one-step sparring" },
    { term: "jiyu-ippon-kumite", desc: "Semi-free sparring" },
    { term: "randori", desc: "Light free sparring" },
    { term: "jiyu-kumite", desc: "Free sparring" },
    { term: "yakusoku kumite", desc: "Announcement sparring" },
    { term: "shiai-kumite", desc: "Competition sparring" },
    { term: "shobu-ippon-kumite", desc: "One point match" },
    { term: "sanbon-ippon-kumite", desc: "Three point match" },
    { term: "ippon", desc: "One point" },
    { term: "waza-ari", desc: "Half point" },
    { term: "oyo-kumite", desc: "Application sparring" },
    { term: "jiyu-kamae", desc: "Freestyle position" },
  ];

  return (
    <Box sx={{background: "linear-gradient(to bottom right, #f5f5f4, #fef3c7)"}}>
    <Box
      sx={{
        minHeight: "100vh",
        paddingBottom: 2,
        display: { xs: "block", lg: "flex"},
        justifyContent: "center",
        alignItems: "flex-start",
        py: 8,
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "rgba(255,255,255,0.95)",
          boxShadow: 4,
          borderRadius: 2,
          py: 6,
          px: { xs: 3, sm: 6 },
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Header */}
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
              Kumite
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Application through Sparring
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 4, color: "text.primary" }}>
          <Typography paragraph>
            <strong>Kumite</strong> (組手) means sparring, or literally "meeting of hands." 
            In kumite, two karatekas engage in combat training using blocks and attacks learned from 
            <strong> kihon</strong> and <strong>kata</strong>. Sparring is the only facet of karate that requires a partner.
          </Typography>
          <Typography paragraph>
            The principles of kihon still apply: proper techniques, correct power and speed, and above all, control. 
            Full contact is prohibited; students aim at the gi, not the body, while mentally targeting the opponent. 
            Beginners usually practice <strong>yakusoku-kumite</strong> ("sparring with announcement") whereas advanced 
            practitioners train <strong>jiyu-kumite</strong> ("free sparring") to develop versatility, assertiveness, and self-control.
          </Typography>
        </Box>

        {sparringTypes.map((item) => (
          <Accordion key={item.term} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ bgcolor: amber[50] }}
            >
              <Typography sx={{ fontWeight: 600, color: amber[800] }}>
                {item.term}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "white" }}>
              <Typography color="text.primary">{item.desc}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ mt: 6, textAlign: "center", color: "text.primary" }}>
          <Typography>
            Kumite teaches valuable lessons beyond technique: awareness of the opponent, 
            application of techniques under pressure, development of mental focus, 
            and the realization of serenity in stressful situations. 
            Mastery of kumite enhances all aspects of a karateka’s skill.
          </Typography>
        </Box>
      </Container>
      <Box className="justify-center p-6" sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
        <AnswerBox topic={"kihon"} />

        <Box
          sx={{
            border: "2px solid #d97706", // amber-600 tone
            borderRadius: 3,
            overflow: "hidden",
            maxWidth: "700px",
            width: "100%",
            boxShadow: 2,
            bgcolor: "white",
          }}
        >
          <img
            src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/nrei2trsdlt8vqif0fqq"
            alt="olympic kumite"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

          <Box
            sx={{
              p: 1.5,
              textAlign: "center",
              bgcolor: "#fffaf0",
              borderTop: "1px solid #fbbf24",
            }}
          >
            <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary" }}>
              Kumite in the <strong>2020 Olympics!</strong>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    <CommentBox/>
      <Typography sx={{color: "black", textAlign: "center", p: 1, fontWeight: "bold"}}>
        Check out the other topics!
      </Typography>
      <Grid container spacing={2} sx={{p: 2, justifyContent: "center"}}>
        {cards.map((card) => (
          <Grid size={{xs: 4, md: 2}} key={card.title}>
            <Link
              href={card.href}
              underline="none"
              sx={{
                display: "block",
                p: 1,
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
                className="text-center"
                variant="subtitle1"
                sx={{ fontWeight: 600, color: amber[800] }}
              >
                {card.title}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
