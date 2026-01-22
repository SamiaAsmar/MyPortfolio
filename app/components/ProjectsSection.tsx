'use client'

import { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Paper, Chip, Stack, Button, useTheme } from "@mui/material";
import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function ProjectsSection() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = t("projects", { returnObjects: true }) as Project[];

  if (!isClient) return null;

  return (
    <Box id="projects" sx={{ py: { xs: 10, md: 15 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
            <Typography variant="overline" sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 2 }}>
              {t("myWork")}
            </Typography>

            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: theme.palette.text.primary, fontSize: { xs: "2rem", md: "2.75rem" } }}
              dangerouslySetInnerHTML={{ __html: t("featuredProjects") }}
            />
          </Stack>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <Grid container spacing={4} alignItems="stretch">
            {(Array.isArray(projects) ? projects : []).map((project: Project, index: number) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={index} sx={{ display: "flex" }}>
                <motion.div variants={fadeUp} transition={{ duration: 0.4 }} style={{ width: "100%" }}>
                  <Paper
                    elevation={0}
                    sx={{
                      width: "100%",
                      borderRadius: "24px",
                      border: `1px solid ${theme.palette.divider}`,
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: 'space-between',
                      bgcolor: theme.palette.background.paper,
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5, color: theme.palette.text.primary }}>
                        {project.title}
                      </Typography>

                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6, mb: 3, flexGrow: 1 }}>
                        {project.description}
                      </Typography>

                      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
                        {(Array.isArray(project.tech) ? project.tech : []).map((tech: string) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              bgcolor: theme.palette.mode === "light" ? "#F3F4F6" : "#1F2937",
                              color: theme.palette.text.secondary,
                              borderRadius: "6px",
                              mb: 0.5,
                            }}
                          />
                        ))}
                      </Stack>

                      <Stack direction="row" spacing={2} sx={{ mt: "auto" }}>
                        <Button
                          size="small"
                          variant="contained"
                          disableElevation
                          component="a"
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={<Github size={16} />}
                          href={project.githubLink}
                          sx={{
                            bgcolor: theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.primary.main,
                            color: theme.palette.common.white,
                            borderRadius: "10px",
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": {
                              bgcolor: theme.palette.mode === "light" ? theme.palette.primary.main : theme.palette.primary.light,
                            },
                          }}
                        >
                          {t("ViewCode")}
                        </Button>
                      </Stack>
                    </Box>
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
