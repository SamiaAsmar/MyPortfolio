'use client'

import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
  useTheme,
  Stack
} from '@mui/material'
import { FaBars } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import LanguageDropdown from '@/@core/components/LanguageDropdown'
import { useToggleMode } from '@/@core/hooks/useToggleMode'
import { Moon, Sun } from "lucide-react"

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()
  const theme = useTheme()
  const { mode, toggleMode } = useToggleMode()


  const links = [
    { href: '#home', label: t('Nav.Home') },
    { href: '#about', label: t('Nav.About') },
    { href: '#skills', label: t('Nav.Skills') },
    { href: '#projects', label: t('Nav.Projects') },
    { href: '#contact', label: t('Nav.Contact') }
  ]

  return (
    <>
      <AppBar
        position='sticky'
        elevation={0}
        sx={{
          bgcolor: theme.palette.mode === 'light'
      ? 'rgba(255, 255, 255, 0.8)'
      : 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          color: theme.palette.text.primary
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography
              variant='h6'
              component="a"
              href="#hero"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5
              }}
            >
              <Box component="span" sx={{ fontWeight: 800, color: theme.palette.primary.main }}>Samia</Box>
              <Box component="span" sx={{ fontWeight: 400, color: theme.palette.text.secondary }}>.dev</Box>
            </Typography>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 1 }}>
              {links.map(link => (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: theme.palette.text.secondary,
                    textTransform: 'none',
                    fontWeight: 500,
                    px: 2,
                    borderRadius: '8px',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      bgcolor: theme.palette.action.hover
                    }
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>

            {/* Actions (Language & Mobile Toggle) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <LanguageDropdown />
              </Box>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={1} justifyContent="center">
              <IconButton
                onClick={toggleMode}
                sx={{
                  color: mode === 'dark' ? (theme) => theme.palette.common.white : (theme) => theme.palette.common.black,
                  borderRadius: "12px",
                  p: 1.5,
                }}
              >
                {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </IconButton>
            </Stack>


              <IconButton
                sx={{ display: { lg: 'none' }, color: theme.palette.text.primary }}
                onClick={() => setIsOpen(true)}
              >
                <FaBars size={20} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor='top'
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { borderRadius: '0 0 20px 20px', p: 2, bgcolor: theme.palette.background.paper }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <IconButton onClick={() => setIsOpen(false)}><FaBars size={20} /></IconButton>
        </Box>
        <List>
          {links.map(link => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                href={link.href}
                onClick={() => setIsOpen(false)}
                sx={{ borderRadius: '10px', textAlign: 'center' }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: 600, color: theme.palette.text.primary }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider sx={{ my: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
            <LanguageDropdown />
          </Box>
        </List>
      </Drawer>
    </>
  )
}
