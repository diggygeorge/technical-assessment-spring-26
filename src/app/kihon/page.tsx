"use client";

import React from "react";
import { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { amber } from "@mui/material/colors";
import AnswerBox from "../components/AnswerBox";
import CommentBox from "../components/CommentBox";

export default function Kihon() {
    const cards = [
    { title: "Kata", desc: "Structured movement patterns", href: "/kata" },
    { title: "Kumite", desc: "Sparring", href: "/kumite" },
    { title: "History", desc: "Explore karate’s Okinawan roots", href: "/history" },
    { title: "Belt System", desc: "Ranks and progression", href: "/belts" },
  ];

  return (
    <Box sx={{background: "linear-gradient(to bottom right, #f5f5f4, #fef3c7)"}}>
    <Box
      sx={{
        minHeight: "100vh",
        paddingBottom: 2,
        display: { xs: "block", lg: "flex"},
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
              Kihon
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The Foundation of Karate
            </Typography>
          </Box>
        </Box>

        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "text.primary" }}>
          <strong>Kihon (基本)</strong> means “basics” or “fundamentals.” It describes the practice and repetition of the
          essential techniques of karate. Kihon originated from <strong>kata</strong> as a method of instruction.
          Beginners start with a single technique, then learn combinations. At first, movements may feel confusing —
          but with enough repetition, they become instinctive. Mastering kihon leads to mastery in all other areas of
          karate.
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: "text.primary" }}>
          There are five main categories of kihon, each representing a different element of movement and control.
        </Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold", color: amber[800] }}>
              Tachi (Stances)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ lineHeight: 1.7 }}>
              Highest level instructors consider <strong>tachi (stances)</strong> the most important element of kihon.
              Only with a solid stance can the karateka deliver techniques with maximum power. A weak stance results in
              imbalance — a devastating weakness in combat. Shotokan stances are typically longer and deeper than other
              karate styles. There are four categories of stances (when tachi is placed second in a compound word, it
              becomes <em>dachi</em>):
            </Typography>

            <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
              Outer Tension Stances
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Deep, stable, and ideal for leg training — used for long-range techniques.
            </Typography>
            <List dense>
              {[
                "zenkutsu-dachi — front stance",
                "kokutsu-dachi — back stance",
                "kiba-dachi — horse-riding stance",
                "fudo-dachi / sochin-dachi — immovable stance / strength and calm stance",
                "shiko-dachi — square stance",
              ].map((s) => (
                <ListItem key={s}>
                  <ListItemText primary={s} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
              Inner Tension Stances
            </Typography>
            <Typography sx={{ mb: 1 }}>
              Require inward knee pressure and develop <strong>ki</strong> (inner energy); used for short-range combat.
            </Typography>
            <List dense>
              {[
                "hangetsu-dachi — half-moon stance",
                "sanchin-dachi — hourglass stance",
                "nekoashi-dachi — cat-leg stance",
              ].map((s) => (
                <ListItem key={s}>
                  <ListItemText primary={s} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
              Natural Stances
            </Typography>
            <List dense>
              {[
                "hachiji-dachi / shizentai — natural stance",
                "uchi-hachiji-dachi — inward stance",
                "musubi-dachi — attention stance",
                "heisoku-dachi — feet together stance",
                "renoji-dachi — L stance",
                "teinoji-dachi — T stance",
                "heiko-dachi — parallel stance",
              ].map((s) => (
                <ListItem key={s}>
                  <ListItemText primary={s} />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
              Unstable Stances
            </Typography>
            <List dense>
              {[
                "ashi-dachi — leg stance",
                "tsuru-dachi — crane leg stance",
                "sagiashi-dachi — heron leg stance",
                "genkaku-dachi — rigid crane stance",
                "kosa-dachi — cross stance",
                "hizakutsu-dachi — knee bending stance",
                "hiza-dachi — one knee stance",
                "iaigoshi-dachi — kneeling stance",
                "ippon-ashi-dachi — one leg stance",
              ].map((s) => (
                <ListItem key={s}>
                  <ListItemText primary={s} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold", color: amber[800] }}>
              Uke (Blocks)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ lineHeight: 1.7, color: "text.primary" }}>
              <strong>Uke</strong> means “block” or literally “to receive.” Blocks defend against attacks and prepare for
              counterstrikes. Timing is critical — a block must meet the attack at the exact moment. Advanced karateka
              can use blocks as attacks and vice versa. Every <em>kata</em> begins with a block — symbolizing defense as
              the essence of karate.
            </Typography>

            {[
              {
                title: "Basic Closed-Hand Blocks",
                list: [
                  "age-uke — rising block",
                  "soto-uke — outside block",
                  "gedan-barai — down block",
                  "uchi-uke — inside block",
                ],
              },
              {
                title: "Open-Hand Blocks",
                list: [
                  "shuto-uke — knife hand block",
                  "tate-shuto-uke — vertical knife hand block",
                  "kake-uke — hooking block",
                  "haishu-uke — backhand block",
                  "tsukami-uke — grasping block",
                  "koko-uke — tiger-mouth block",
                  "haito-uke — reverse knife hand block",
                ],
              },
              {
                title: "Advanced Blocks",
                list: [
                  "haiwan-uke — back-arm block",
                  "nagashi-uke — flowing block",
                  "osae-uke — pressing block",
                  "sukui-uke — scooping block",
                  "maki-otoshi-uke — rolling dropping block",
                  "hangetsu-barai-uke — sweeping half moon foot block",
                ],
              },
              {
                title: "Double-Hand Blocks",
                list: [
                  "morote-uke — augmented block",
                  "kosa-uke — cross block",
                  "juji-uke — X block",
                  "kakiwake-uke — wedge block",
                  "manji-uke — swirling block",
                  "bo-uke — staff block",
                  "awase-uke — combined block",
                  "hasami-uke — scissor block",
                  "oshi-uke — pushing block",
                ],
              },
            ].map((cat) => (
              <Box key={cat.title} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
                  {cat.title}
                </Typography>
                <List dense>
                  {cat.list.map((i) => (
                    <ListItem key={i}>
                      <ListItemText primary={i} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold", color: amber[800] }}>
              Tsuki (Punches)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph sx={{ lineHeight: 1.7 }}>
              <strong>Tsuki</strong> means “punch” or “thrust.” Punches are delivered with the front two knuckles of the
              fist (<em>seiken</em>) and represent the most common offensive technique in karate. Proper punches
              emphasize precision, hip rotation, and protection of the hands.
            </Typography>

            {[
              {
                title: "Basic Punches",
                list: [
                  "choku-zuki — straight punch",
                  "oi-zuki — lunge punch",
                  "gyaku-zuki — reverse punch",
                  "kisami-zuki — jab punch",
                  "sanbon-zuki — triple punch",
                ],
              },
              {
                title: "Advanced Punches",
                list: [
                  "ura-zuki — inverted punch",
                  "age-zuki — rising punch",
                  "kage-zuki — hook punch",
                  "mawashi-zuki — roundhouse punch",
                  "tate-zuki — vertical punch",
                  "uke-zuke — blocking punch",
                ],
              },
              {
                title: "Double-Hand Punches",
                list: [
                  "morote-zuki — double-hand punch",
                  "yama-zuki — mountain punch",
                  "yumi-zuki — bow punch",
                  "awase-zuki — U punch",
                  "heiko-zuki — parallel punch",
                  "hasami-zuki — scissor punch",
                ],
              },
              {
                title: "Fore-Knuckle Punches",
                list: [
                  "ippon-ken — one-knuckle fist",
                  "nakadaka-ippon-ken — middle finger one-knuckle fist",
                  "hiraken — flat fist",
                ],
              },
              {
                title: "Spear-Hand Techniques",
                list: [
                  "shihon-nukite — four finger spear hand",
                  "ippon-nukite — one finger spear hand",
                  "nihon-nukite — two finger spear hand",
                  "tate-nukite — vertical spear hand",
                  "hira-nukite — flat spear hand",
                ],
              },
            ].map((cat) => (
              <Box key={cat.title} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
                  {cat.title}
                </Typography>
                <List dense>
                  {cat.list.map((i) => (
                    <ListItem key={i}>
                      <ListItemText primary={i} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold", color: amber[800] }}>
              Keri (Kicks)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ lineHeight: 1.7 }}>
              <strong>Keri</strong> means “kick.” Kicks are among karate’s most powerful techniques due to leg strength
              and reach, but they demand balance, flexibility, and proper retraction (<em>hiki ashi</em>) to maintain
              defense. Shotokan emphasizes strong, clean kicks for distance control.
            </Typography>

            {[
              {
                title: "Basic Kicks",
                list: [
                  "mae-geri — front kick",
                  "yoko-geri — side kick",
                  "yoko-geri-keage — side snap kick",
                  "yoko-geri-kekomi — side thrust kick",
                  "mawashi-geri — roundhouse kick",
                ],
              },
              {
                title: "Advanced Kicks",
                list: [
                  "ushiro-geri — back kick",
                  "ura-mawashi-geri — reverse roundhouse kick",
                  "mikazuki-geri — crescent kick",
                  "tobi-geri — jump kick",
                  "nidan-geri — flying front/two-level kick",
                ],
              },
              {
                title: "Advanced Leg Attacks",
                list: [
                  "fumi-komi — stomping kick",
                  "ashi-barai — foot sweep",
                  "nami-gaeshi (nami-ashi-geri) — returning wave leg kick",
                ],
              },
            ].map((cat) => (
              <Box key={cat.title} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
                  {cat.title}
                </Typography>
                <List dense>
                  {cat.list.map((i) => (
                    <ListItem key={i}>
                      <ListItemText primary={i} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold", color: amber[800] }}>
              Uchi (Strikes)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph sx={{ lineHeight: 1.7 }}>
              <strong>Uchi</strong> means “strike.” Strikes are highly versatile, using various hand or arm parts to hit
              precise targets. They require accuracy and control, often complementing blocks and counters. With correct{" "}
              <em>kime</em> (focus), strikes can disable opponents swiftly.
            </Typography>

            {[
              {
                title: "Roundhouse Strikes (Mawashi-Uchi)",
                list: [
                  "kentsui-uchi — hammer-fist strike",
                  "uraken-uchi — backfist strike",
                  "shuto-uchi — knife-hand strike",
                  "haito-uchi — ridge hand strike",
                  "teisho — palm heel strike",
                ],
              },
              {
                title: "Animal Strikes",
                list: [
                  "keito — chicken head strike",
                  "seiryuto — ox-jaw strike",
                  "washide — eagle hand strike",
                ],
              },
              {
                title: "Smashing Techniques (Ate-Waza)",
                list: [
                  "empi-uchi — elbow strike",
                  "empi-ate — elbow smash",
                  "hiza-tsuchi — knee strike",
                  "hiza-ate — knee smash",
                ],
              },
            ].map((cat) => (
              <Box key={cat.title} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ color: amber[700], mt: 2 }}>
                  {cat.title}
                </Typography>
                <List dense>
                  {cat.list.map((i) => (
                    <ListItem key={i}>
                      <ListItemText primary={i} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>

        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography variant="body2" sx={{ color: "gray" }}>
            “Without Kihon, there is no Karate. True mastery begins with mastery of the fundamentals.”
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
            src="https://karate.groups.stanford.edu/sites/g/files/sbiybj29341/files/styles/card_1900x950/public/media/image/7f8de2b5c270a90b48803ee8e15dd086_0.jpg.webp?h=f3860d4a&itok=dmR1wttg"
            alt="Kihon stances"
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
              The <strong>many</strong> Kihon stances in Karate.
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
