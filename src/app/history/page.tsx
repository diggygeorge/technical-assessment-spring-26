"use client";

import React from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Paper,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import AnswerBox from "../components/AnswerBox";
import CommentBox from "../components/CommentBox";

export default function History() {
  const timeline = [
    {
      year: "1868–1902",
      title: "The Origins of Shotokan Karate",
      content: (
        <>
          <Typography paragraph>
            <strong>Shotokan Karate</strong> is one of the most widely practiced forms of martial arts in the world. It is based on fundamental techniques of punching, striking, blocking, and kicking — all without the use of weapons. The term{" "}
            <em>karate</em> means <strong>“empty hand”</strong> in Japanese, reflecting its weaponless nature.
          </Typography>
          <Typography paragraph>
            Shotokan was founded by <strong>Sensei Gichin Funakoshi</strong>, who was born in 1868 in Okinawa. When he first began training at age 11, martial arts was banned due to Buddhist influence, which viewed weapon-based fighting as violent.
            As a result, Karate developed as a weaponless art, secretly practiced in hidden places. Funakoshi trained under masters <strong>Anko Itosu</strong> and <strong>Anko Asato</strong>, mastering the art through decades of practice.
          </Typography>
        </>
      ),
    },
    {
      year: "1902–1936",
      title: "Lifting the Ban & Founding of Shotokan",
      content: (
        <>
          <Typography paragraph>
            In 1902, Japan lifted its ban on martial arts. Soon after, martial arts began to be introduced into the school system, thanks to <strong>Shintaro Ogawa</strong>, Japan’s Commissioner of Education.
          </Typography>
          <Typography paragraph>
            In 1922, a 53-year-old Funakoshi demonstrated Karate publicly in Japan for the first time. The performance was so well-received that he was invited to stay and teach. By 1936, he opened his first dojo.
          </Typography>
          <Typography paragraph>
            His students named it <strong>Shotokan</strong> — from <em>Shoto</em> (“pine waves,” Funakoshi’s pen name) and <em>kan</em> (“house”) — meaning “The House of Shoto.”
          </Typography>
        </>
      ),
    },
    {
      year: "1948–2007",
      title: "The Growth of Shotokan Worldwide",
      content: (
        <>
          <Typography paragraph>
            In 1948, Funakoshi established the <strong>Japanese Karate Association (JKA)</strong> to preserve the integrity of his teachings. When he passed away in 1957, his senior student{" "}
            <strong>Masatoshi Nakayama</strong> continued his work.
          </Typography>
          <Typography paragraph>
            Nakayama’s student <strong>Teruyuki Okazaki</strong> later helped spread Karate to the United States and founded the{" "}
            <strong>International Shotokan Karate Federation (ISKF)</strong>, which continues Funakoshi’s philosophy today.
          </Typography>
          <Typography paragraph>
            In 2007, Sensei Okazaki was promoted to the <strong>10th Dan</strong> at age 76 — one of the highest honors in Karate.
          </Typography>
        </>
      ),
    },
    {
      year: "Philosophy",
      title: "The Spirit of Shotokan",
      content: (
        <>
          <Typography>
            The philosophy of Shotokan Karate is built on <strong>self-discipline</strong>, <strong>respect</strong>, and <strong>continuous improvement</strong>. Sensei Okazaki taught that Karate is not just about fighting — it’s about{" "}
            <em>becoming a better person</em>.
          </Typography>
          <Typography>
            The <strong>Niju Kun</strong> (“Twenty Precepts”) defines the moral foundation of Karate. Precept 1 says, “Karate begins and ends with courtesy.” Precept 15 reminds practitioners to “Think of your hands and feet as swords.”
          </Typography>
          <Typography>
            These teachings encourage students to develop integrity, patience, and humility — values that transcend the dojo.
          </Typography>
        </>
      ),
    },
    {
      year: "Today",
      title: "Modern Practice and Legacy",
      content: (
        <>
          <Typography>
            Today, Shotokan Karate continues to thrive worldwide. Its techniques — the three Ks:{" "}
            <strong>Kihon</strong> (fundamentals), <strong>Kata</strong> (forms), and <strong>Kumite</strong> (sparring) — remain central to its training.
          </Typography>
          <Typography>
            Students wear the traditional <strong>gi</strong> and progress through colored belts, symbolizing growth in skill and spirit. Even after achieving black belt, many continue to train, seeking refinement rather than perfection.
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Box sx={{background: "linear-gradient(to bottom right, #f5f5f4, #fef3c7)"}}>
    <Box
      sx={{
        minHeight: "100vh",
        display: {xs: "block", lg: "flex"},
        alignItems: "center",
        justifyContent: "center", 
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "rgba(255,255,255,0.95)",
          boxShadow: 4,
          borderRadius: 2,
          py: 8,
          px: { xs: 3, sm: 6 },
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Header */}
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
              History
            </Typography>
          </Box>
        </Box>

        {/* Timeline Sections */}
        <Box sx={{ color: "text.primary", maxWidth: "900px", mx: "auto" }}>
          {timeline.map((section) => (
            <Box key={section.title} sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", color: amber[700], mb: 1 }}>
                {section.title}
              </Typography>
              {section.year !== "Philosophy" && (
                <Typography
                  variant="subtitle2"
                  sx={{ textTransform: "uppercase", color: "text.secondary", mb: 1 }}
                >
                  {section.year}
                </Typography>
              )}
              {section.content}
            </Box>
          ))}
        </Box>

        <Paper
          elevation={0}
          sx={{
            mt: 8,
            mx: "auto",
            maxWidth: "700px",
            p: 3,
            borderLeft: 4,
            borderColor: amber[400],
            bgcolor: amber[50],
            borderRadius: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontStyle: "italic", color: "text.primary" }}
          >
            “Karate is not about fighting others. It’s about conquering yourself.”
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mt: 1, color: amber[700], fontWeight: 500 }}
          >
            – Sensei Gichin Funakoshi
          </Typography>
        </Paper>
      </Container>
      <div className="justify-center p-6">
        <AnswerBox topic={"history"} />

      </div>
    </Box>
    <CommentBox/>
    </Box>
  );
}
