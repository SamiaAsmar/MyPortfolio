"use client";

import { Box, Typography, Button, Container, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import NavigationSection from "./components/NavigationSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Page() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        minHeight: "100vh",
      }}
    >
      {/* Navigation */}
      <NavigationSection />

      {/* Hero Section */}
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box
            id="home"
            sx={{
              minHeight: "90dvh",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              pt: { xs: 4, md: 0 },
            }}
          >
            {/* Text Section */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ flex: 1 }}
            >
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 700,
                    color: (theme) => theme.palette.primary.main,
                    letterSpacing: 1.5,
                  }}
                >
                  {t("Hero.AvailableProjects")}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mt: 1,
                    mb: 2,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  {t("Hero.Greeting")}{" "}
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(90deg, #4F46E5 0%, #9333EA 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {t("Hero.Name")}
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: (theme) => theme.palette.text.secondary,
                    fontWeight: 400,
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  {t("Hero.Description")}
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
                >
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      bgcolor: (theme) => theme.palette.text.primary,
                      color: (theme) => theme.palette.background.default,
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      "&:hover": {
                        bgcolor: (theme) => theme.palette.text.secondary,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.2s",
                    }}
                  >
                    {t("Hero.ViewProjects")}
                  </Button>


                  <Button
                    variant="outlined"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: "12px",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderColor: (theme) => theme.palette.divider,
                      color: (theme) => theme.palette.text.primary,
                      "&:hover": {
                        bgcolor: (theme) => theme.palette.action.hover,
                      },
                    }}
                  >
                    {t("Hero.ContactMe")}
                  </Button>
                </Stack>
              </Box>
            </motion.div>

            {/* Illustration */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ flex: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    bgcolor: (theme) => theme.palette.action.hover,
                    filter: "blur(80px)",
                    borderRadius: "50%",
                    zIndex: -1,
                    opacity: 0.6,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/undraw_web-development_f0tp.svg"
                  alt={`${t("Hero.Name")} Illustration`}
                  sx={{
                    width: "100%",
                    maxWidth: "500px",
                    animation: "float 6s ease-in-out infinite",
                    "@keyframes float": {
                      "0%, 100%": { transform: "translateY(0)" },
                      "50%": { transform: "translateY(-20px)" },
                    },
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Sections (Scroll Animations) */}
      {[AboutSection, SkillsSection, ProjectsSection, ContactSection].map(
        (Section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Section />
          </motion.div>
        )
      )}
    </Box>
  );
}
