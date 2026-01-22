'use client'

import {
  Box, Container, Typography, Grid, Paper,
  Stack, Button, IconButton, useTheme
} from "@mui/material";
import { Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const theme = useTheme();
  const { t } = useTranslation();
  const myEmail = "asmarsamia2003@gmail.com";

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 15 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">

          <Grid size={{xs:12,md:5}}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: theme.palette.primary.main, fontWeight: 700, letterSpacing: 2 }}
                >
                  {t("contact.overline")}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{ fontWeight: 800, mt: 1, mb: 2, color: theme.palette.text.primary }}
                  dangerouslySetInnerHTML={{ __html: t("contact.title") }}
                />

                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary, fontSize: "1.1rem" }}
                >
                  {t("contact.description")}
                </Typography>
              </Box>

              <Stack spacing={3}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: "16px",
                    border: `1px solid ${theme.palette.divider}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}
                >
                  <Box sx={{ p: 1.5, bgcolor: theme.palette.primary.main + "10", borderRadius: "12px" }}>
                    <Mail size={24} color={theme.palette.primary.main} />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>
                      {t("contact.emailLabel")}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {myEmail}
                    </Typography>
                  </Box>
                </Paper>

                {/* Location */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: "16px",
                    border: `1px solid ${theme.palette.divider}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}
                >
                  <Box sx={{ p: 1.5, bgcolor: "#9333EA10", borderRadius: "12px" }}>
                    <MapPin size={24} color="#9333EA" />
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontWeight: 600 }}>
                      {t("contact.locationLabel")}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {t("contact.locationValue")}
                    </Typography>
                  </Box>
                </Paper>
              </Stack>

              <Stack direction="row" spacing={2}>
                <IconButton
                  href="https://www.linkedin.com/in/samia-asmar-52014431a/"
                  target="_blank"
                  sx={{
                    bgcolor: theme.palette.mode === "light"
                      ? theme.palette.text.primary
                      : theme.palette.background.paper,
                    color: theme.palette.mode === "light"
                      ? theme.palette.common.white
                      : theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.common.white
                    }
                  }}
                >
                  <Linkedin size={20} />
                </IconButton>

                <IconButton
                  href="https://github.com/SamiaAsmar"
                  target="_blank"
                  sx={{
                    bgcolor: theme.palette.mode === "light"
                      ? theme.palette.text.primary
                      : theme.palette.background.paper,
                    color: theme.palette.mode === "light"
                      ? theme.palette.common.white
                      : theme.palette.text.primary,
                    border: `1px solid ${theme.palette.divider}`,
                    "&:hover": {
                      bgcolor: theme.palette.primary.main,
                      color: theme.palette.common.white
                    }
                  }}
                >
                  <Github size={20} />
                </IconButton>

              </Stack>
            </Stack>
          </Grid>

          <Grid size={{xs:12,md:7}}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: "32px",
                border: `2px dashed ${theme.palette.divider}`,
                textAlign: "center"
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Mail size={40} color={theme.palette.primary.main} />
              </Box>

              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                {t("contact.readyTitle")}
              </Typography>

              <Typography sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                {t("contact.readyDescription")}
              </Typography>

              <Button
                variant="contained"
                size="large"
                href={`mailto:${myEmail}`}
                endIcon={<ExternalLink size={18} />}
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: "16px",
                  textTransform: "none",
                  fontWeight: 700
                }}
              >
                {t("contact.sendEmail")}
              </Button>

              <Typography variant="caption" sx={{ color: theme.palette.text.secondary, mt: 2, display: "block" }}>
                {t("contact.copyEmail")} {myEmail}
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
