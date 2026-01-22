'use client'

import { Box, Container, Typography, Grid, Stack, Paper, useTheme } from "@mui/material";
import { Code2, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutSection() {
  const { t } = useTranslation();
  const theme = useTheme();

  const coreStrengths = [
    {
      icon: <Code2 size={24} color={theme.palette.primary.main} />,
      title: t("About.coreStrengths.0.title"),
      desc: t("About.coreStrengths.0.desc"),
    },
    {
      icon: <Cpu size={24} color={theme.palette.secondary.main} />,
      title: t("About.coreStrengths.1.title"),
      desc: t("About.coreStrengths.1.desc"),
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={6} alignItems="center" textAlign="center">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  letterSpacing: 2,
                  display: 'block',
                }}
              >
                {t("About.sectionTitle")}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mt: 1,
                  fontSize: { xs: "2rem", md: "2.75rem" },
                }}
              >
                {t("About.sectionSubtitle")}
              </Typography>
            </Box>
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Stack spacing={3} sx={{ maxWidth: "700px" }}>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary, fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                {t("About.desc1")}
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.secondary, fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                {t("About.desc2")}
              </Typography>
            </Stack>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            style={{ width: "100%" }}
          >
            <Grid container spacing={3} sx={{ mt: 2, justifyContent: "center" }}>
              {coreStrengths.map((item, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index} sx={{ display: "flex" }}>
                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                    style={{ flex: 1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        flex: 1,
                        p: 4,
                        borderRadius: "20px",
                        border: `1px solid ${theme.palette.divider}`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        transition: "0.3s ease-in-out",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05)",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mb: 2,
                          p: 1.5,
                          bgcolor: theme.palette.primary.light,
                          borderRadius: "12px",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1, fontSize: "1.1rem" }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}
                      >
                        {item.desc}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

        </Stack>
      </Container>
    </Box>
  );
}
