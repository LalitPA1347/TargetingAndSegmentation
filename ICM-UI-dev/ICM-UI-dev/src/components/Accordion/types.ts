// Define the type for the props
export interface CustomAccordionProps {
  title?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  expandIcon?: React.ReactNode;
  ariaControls?: string;
  id?: string;
  onExpandChange?: (isExpanded: boolean) => void;
  summaryStyles?: React.CSSProperties;
  detailsStyles?: React.CSSProperties;
  borderRadius?: React.CSSProperties;
  border?: string;
  backgroundColor?: string;
  maxWidth?: string;
  className?: string;
  titleClassName?: string;
}
