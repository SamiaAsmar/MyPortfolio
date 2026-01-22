'use client'

import { Box, Container, Typography, Grid, Paper, Chip, Stack, useTheme } from "@mui/material";
import { Code2, Layout, Sparkles, Terminal } from "lucide-react";
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

export default function SkillsSection() {
  const theme = useTheme();
  const { t } = useTranslation();

  const skillCategories = [
  {
    title: t("categories.web"),
    icon: <Layout size={20} color={theme.palette.primary.main} />,
    skills: (t("skills.web", { returnObjects: true }) ?? []) as string[],
    color: theme.palette.primary.main,
  },
  {
    title: t("categories.engineering"),
    icon: <Code2 size={20} color={theme.palette.secondary.main} />,
    skills: (t("skills.engineering", { returnObjects: true }) ?? []) as string[],
    color: theme.palette.secondary.main,
  },
  {
    title: t("categories.current"),
    icon: <Sparkles size={20} color={theme.palette.success.main} />,
    skills: (t("skills.current", { returnObjects: true }) ?? []) as string[],
    color: theme.palette.success.main,
  },
  {
    title: t("categories.soft"),
    icon: <Terminal size={20} color={theme.palette.info.main} />,
    skills: (t("skills.soft", { returnObjects: true }) ?? []) as string[],
    color: theme.palette.info.main,
  },
];


  return (
    <Box
      id="skills"
      sx={{ py: { xs: 10, md: 15 }, bgcolor: theme.palette.background.default }}
    >
      <Container maxWidth="lg">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
            <Typography
              variant="overline"
              sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 2 }}
            >
              {t("myStack")}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                color: theme.palette.text.primary,
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
              dangerouslySetInnerHTML={{ __html: t("technologiesIUse") }}
            />
          </Stack>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Grid container spacing={3} alignItems="stretch">
            {skillCategories.map((category, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ display: "flex" }}>
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  style={{ width: "100%" }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      width: "100%",
                      borderRadius: "20px",
                      border: `1px solid ${theme.palette.divider}`,
                      bgcolor: theme.palette.background.paper,
                      justifyContent: "space-between",
                      height: "100%",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
                        borderColor: category.color,
                      },
                    }}
                  >
                    <Stack spacing={2}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Box
                          sx={{
                            p: 1,
                            borderRadius: "10px",
                            bgcolor: `${category.color}10`,
                            display: "flex",
                          }}
                        >
                          {category.icon}
                        </Box>

                        <Typography
                          variant="subtitle1"
                          sx={{ fontWeight: 700, color: theme.palette.text.primary }}
                        >
                          {category.title}
                        </Typography>
                      </Box>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {category.skills.map((skill) => (
                          <Chip
                            key={skill}
                            label={skill}
                            sx={{
                              bgcolor:
                                theme.palette.mode === "light"
                                  ? "#F3F4F6"
                                  : "#1F2937",
                              color: theme.palette.text.secondary,
                              fontWeight: 500,
                              fontSize: "0.75rem",
                              borderRadius: "8px",
                              border: `1px solid ${theme.palette.divider}`,
                              "&:hover": {
                                bgcolor: category.color,
                                color: theme.palette.common.white,
                                borderColor: category.color,
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

      </Container>
    </Box>
  );
}
