'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Stack,
  Fade
} from '@mui/material'
import { Languages, ChevronDown } from 'lucide-react'
import { Locale } from '../configs/i18n'
import useLanguage from '../hooks/useLanguage'

export default function LanguageDropdown() {
  const { t } = useTranslation()
  const { language, handleLanguageChange } = useLanguage()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onSelectLanguage = (newLang: Locale) => {
    handleLanguageChange(newLang)
    handleClose()
  }

  return (
    <Box>
      <Button
        onClick={handleClick}
        variant="text"
        startIcon={<Languages size={18} color={open ? '#4F46E5' : '#6B7280'} />}
        endIcon={<ChevronDown
          size={16}
          style={{
            transform: open ? 'rotate(180deg)' : 'none',
            transition: '0.2s ease-in-out',
            color: '#9CA3AF'
          }}
        />}
        sx={{
          textTransform: 'none',
          color: open ? '#111827' : '#4B5563',
          fontWeight: 600,
          px: 2,
          py: 0.8,
          borderRadius: '10px',
          bgcolor: open ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.04)',
            color: '#111827'
          },
          transition: 'all 0.2s'
        }}
      >
        {language === 'en' ? 'EN' : 'AR'}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        disableScrollLock
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,
            minWidth: 140,
            borderRadius: '12px',
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0px 12px 24px -4px rgba(0,0,0,0.08)',
            p: 0.5
          }
        }}
      >
        <MenuItem
          onClick={() => onSelectLanguage('en')}
          selected={language === 'en'}
          sx={menuItemStyle}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography variant="caption" sx={badgeStyle}>EN</Typography>
            <Typography variant="body2" fontWeight={500}>{t('common.english')}</Typography>
          </Stack>
        </MenuItem>

        <MenuItem
          onClick={() => onSelectLanguage('ar')}
          selected={language === 'ar'}
          sx={menuItemStyle}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography variant="caption" sx={badgeStyle}>AR</Typography>
            <Typography variant="body2" fontWeight={500}>{t('common.arabic')}</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  )
}


const menuItemStyle = {
  borderRadius: '8px',
  mx: 0.5,
  my: 0.2,
  px: 1.5,
  py: 1,
  '&.Mui-selected': {
    bgcolor: 'rgba(79, 70, 229, 0.08)',
    color: '#4F46E5',
    '&:hover': { bgcolor: 'rgba(79, 70, 229, 0.12)' }
  }
}

const badgeStyle = {
  fontWeight: 700,
  fontSize: '0.65rem',
  px: 0.8,
  py: 0.2,
  borderRadius: '4px',
  bgcolor: '#F3F4F6',
  color: '#6B7280',
  border: '1px solid #E5E7EB'
}
