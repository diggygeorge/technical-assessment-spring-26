"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Box,
  Typography,
  Container,
  Link,
  Paper,
  Grid,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AnswerBox from "../components/AnswerBox";
import CommentBox from "../components/CommentBox";

export default function History() {
  const cards = [
    { title: "Kihon", desc: "Basics", href: "/kihon" },
    { title: "Kata", desc: "Structured movement patterns", href: "/kata" },
    { title: "Kumite", desc: "Sparring", href: "/kumite" },
    { title: "Belt System", desc: "Ranks and progression", href: "/belts" },
  ];

  const timeline = [
    {
      year: "1868–1902",
      title: "The Origins of Shotokan Karate",
      image:
        "https://jkawfamerica.com/wp-content/uploads/2020/07/Master-Gichin-Funakoshi-JKA.jpg",
      caption: "Gichin Funakoshi",
      content: (
        <>
          <Typography paragraph>
            <strong>Shotokan Karate</strong> is one of the most widely practiced
            forms of martial arts in the world. It is based on fundamental
            techniques of punching, striking, blocking, and kicking — all
            without the use of weapons. The term <em>karate</em> means{" "}
            <strong>“empty hand”</strong> in Japanese, reflecting its weaponless
            nature.
          </Typography>
          <Typography paragraph>
            Shotokan was founded by <strong>Sensei Gichin Funakoshi</strong>,
            who was born in 1868 in Okinawa. When he first began training at age
            11, martial arts was banned due to Buddhist influence, which viewed
            weapon-based fighting as violent. As a result, Karate developed as a
            weaponless art, secretly practiced in hidden places. Funakoshi
            trained under masters <strong>Anko Itosu</strong> and{" "}
            <strong>Anko Asato</strong>, mastering the art through decades of
            practice.
          </Typography>
        </>
      ),
    },
    {
      year: "1902–1936",
      title: "Lifting the Ban & Founding of Shotokan",
      image:
        "https://www.themartialway.com.au/wp-content/uploads/2015/02/Funakoshi-7-248x300.jpg",
      caption: "Sensei Funakoshi demonstrating Kata to the public",
      content: (
        <>
          <Typography paragraph>
            In 1902, Japan lifted its ban on martial arts. Soon after, martial
            arts began to be introduced into the school system, thanks to{" "}
            <strong>Shintaro Ogawa</strong>, Japan’s Commissioner of Education.
          </Typography>
          <Typography paragraph>
            In 1922, a 53-year-old Funakoshi demonstrated Karate publicly in
            Japan for the first time. The performance was so well-received that
            he was invited to stay and teach. By 1936, he opened his first dojo.
          </Typography>
          <Typography paragraph>
            His students named it <strong>Shotokan</strong> — from{" "}
            <em>Shoto</em> (“pine waves,” Funakoshi’s pen name) and{" "}
            <em>kan</em> (“house”) — meaning “The House of Shoto.”
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
            In 1948, Funakoshi established the{" "}
            <strong>Japanese Karate Association (JKA)</strong> to preserve the
            integrity of his teachings. When he passed away in 1957, his senior
            student <strong>Masatoshi Nakayama</strong> continued his work.
          </Typography>
          <Typography paragraph>
            Nakayama's student <strong>Teruyuki Okazaki</strong> later helped
            spread Karate to the United States and founded the{" "}
            <strong>International Shotokan Karate Federation (ISKF)</strong>,
            which continues Funakoshi's philosophy today.
          </Typography>
          <Typography paragraph>
            In 2007, Sensei Okazaki was promoted to the <strong>10th Dan</strong>{" "}
            at age 76 — one of the highest honors in Karate.
          </Typography>
        </>
      ),
    },
    {
      year: "Philosophy",
      title: "The Spirit of Shotokan",
      content: (
        <>
          <Typography paragraph>
            The philosophy of Shotokan Karate is built on{" "}
            <strong>self-discipline</strong>, <strong>respect</strong>, and{" "}
            <strong>continuous improvement</strong>. Sensei Okazaki taught that
            Karate is not just about fighting — it's about{" "}
            <em>becoming a better person</em>.
          </Typography>
          <Typography paragraph>
            The <strong>Niju Kun</strong> ("Twenty Precepts") defines the moral
            foundation of Karate. Precept 1 says, "Karate begins and ends with
            courtesy." Precept 15 reminds practitioners to "Think of your hands
            and feet as swords."
          </Typography>
          <Typography paragraph>
            These teachings encourage students to develop integrity, patience,
            and humility — values that transcend the dojo.
          </Typography>
        </>
      ),
    },
    {
      year: "Today",
      title: "Modern Practice and Legacy",
      image: "https://ihadojo.com/assets/iha-shuri-castle.jpg",
      caption: "The globalization of karate today",
      content: (
        <>
          <Typography>
            Today, Shotokan Karate continues to thrive worldwide. Its techniques
            — the three Ks: <strong>Kihon</strong> (fundamentals),{" "}
            <strong>Kata</strong> (forms), and <strong>Kumite</strong>{" "}
            (sparring) — remain central to its training.
          </Typography>
          <Typography>
            Students wear the traditional <strong>gi</strong> and progress
            through colored belts, symbolizing growth in skill and spirit. Even
            after achieving black belt, many continue to train, seeking
            refinement rather than perfection.
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #f5f5f4, #fef3c7)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, sm: 4 } }}>
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
            <Typography variant="h4" sx={{ fontWeight: "bold", color: amber[800] }}>
              History of Shotokan Karate
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              Use arrows to navigate
            </Typography>
          </Box>
        </Box>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          style={{ paddingBottom: "40px" }}
        >
          {timeline.map((section, index) => (
            <SwiperSlide key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 5 },
                  mx: { xs: 0, md: 10 },
                  bgcolor: "white",
                  borderRadius: 3,
                  minHeight: "480px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Image (if exists) */}
                {section.image && (
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.title}
                      sx={{
                        width: "100%",
                        maxWidth: 500,
                        maxHeight: 300,
                        objectFit: "cover",
                        objectPosition: "50% 20%", // focus slightly below top
                        borderRadius: 2,
                        boxShadow: 2,
                        display: "block",
                        mx: "auto",
                      }}
                    />
                    {section.caption && (
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mt: 1,
                          color: "text.secondary",
                          fontStyle: "italic",
                        }}
                      >
                        {section.caption}
                      </Typography>
                    )}
                  </Box>
                )}


                <Box sx={{ mb: 3, textAlign: "left", width: "100%" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: amber[700], mb: 1 }}
                  >
                    {section.title}
                  </Typography>

                  {section.year !== "Philosophy" && (
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textTransform: "uppercase",
                        color: "text.secondary",
                        mb: 2,
                        fontWeight: 600,
                        letterSpacing: 1,
                      }}
                    >
                      {section.year}
                    </Typography>
                  )}
                </Box>

                <Box sx={{ flexGrow: 1, textAlign: "left", width: "100%" }}>
                  {section.content}
                </Box>
              </Paper>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <Box
            className="swiper-button-prev"
            sx={{
              color: amber[700],
              left: "40px",
              "&:after": { display: "none" },
            }}
          >
            <ArrowBackIosIcon fontSize="large" />
          </Box>

          <Box
            className="swiper-button-next"
            sx={{
              color: amber[700],
              right: "40px",
              "&:after": { display: "none" },
            }}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </Box>
        </Swiper>

        {/* Quote */}
        <Paper
          elevation={0}
          sx={{
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
            “Karate is not about fighting others. It's about conquering yourself.”
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mt: 1, color: amber[700], fontWeight: 500 }}
          >
            – Sensei Gichin Funakoshi
          </Typography>
        </Paper>

        <Box className="justify-center p-6">
          <AnswerBox topic={"history"} />
        </Box>

        <CommentBox />

        {/* Other Topics */}
        <Typography
          sx={{ color: "black", textAlign: "center", p: 1, fontWeight: "bold" }}
        >
          Check out the other topics!
        </Typography>

        <Grid container spacing={2} sx={{ p: 2, justifyContent: "center" }}>
          {cards.map((card) => (
            <Grid sx={{xs: 4, md: 2}} key={card.title}>
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
      </Container>
    </Box>
  );
}
