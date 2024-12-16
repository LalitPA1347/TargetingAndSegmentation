// src/components/CustomButton.tsx
import React from 'react';
import { Button, CircularProgress } from '@mui/material';
import { CustomButtonProps } from './CustomButton.types';

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  startIcon,
  endIcon,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  backgroundColor,
  textColor,
  width,
  height,
  onClick,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      onClick={onClick}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      style={{
        backgroundColor: backgroundColor || undefined,
        color: textColor || undefined,
        width: width || undefined,
        height: height || undefined,
      }}
      {...props}
    >
      {loading ? <CircularProgress color="inherit" size={24} /> : label}
    </Button>
  );
};

export default CustomButton;

// NOTE: Use this button as needed. Don't create new button or import other button from mui.

// Primary Button: variant="contained", color="primary", label="Primary Action"
// Secondary Button: variant="outlined", color="secondary", label="Secondary Action"
// Save Button with Icon: label="Save", startIcon={SaveIcon}, backgroundColor="#4caf50", textColor="#ffffff"
// Delete Button with Icon: label="Delete", startIcon={DeleteIcon}, backgroundColor="#f44336", textColor="#ffffff"
// Loading Button: label="Loading...", loading={true}
// Full-Width Button: fullWidth={true}, label="Full Width"
// Rounded Button: style={{ borderRadius: '50px' }}, label="Rounded Button"
// Custom Width and Height Button: width="150px", height="50px", label="Custom Size"
// Icon Only Button: startIcon={DeleteIcon}, label="", backgroundColor="transparent"
// Toggle Button: backgroundColor, label based on toggleState
// Text Button: variant="text", color="primary", label="Text Button"
// Success Button: label="Success", backgroundColor="#4caf50", textColor="#ffffff"
// Warning Button: label="Warning", backgroundColor="#ffeb3b", textColor="#000000"
// Danger Button: label="Danger", backgroundColor="#f44336", textColor="#ffffff"
// Disabled Button: label="Disabled", disabled={true}
// Confirmation Button with Check Icon: label="Confirm", startIcon={CheckIcon}, backgroundColor="#4caf50", textColor="#ffffff"
// Reject Button with Cross Icon: label="Reject", startIcon={CloseIcon}, backgroundColor="#f44336", textColor="#ffffff"
// Small Button: size="small", label="Small"
// Large Button: size="large", label="Large"
// Info Button: label="Info", backgroundColor="#2196f3", textColor="#ffffff"
