import { SelectChangeEvent } from '@mui/material/Select';

export interface CustomSelectProps {
  label: string;
  options: Array<{ value: string | number; label: string }>;
  placeholder?: string;
  value: string | number;
  onChange: (event: SelectChangeEvent) => void;
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  minWidth?: number;
  backgroundColor?: string;
}
