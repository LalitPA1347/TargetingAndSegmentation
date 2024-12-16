export interface CustomCardProps {
  Icon?: React.ElementType;
  heading: string;
  subHeading: string;
  buttonLabel: string;
  cardBgColor: string;
  iconColor: string;
  handleBtnClick: () => void;
}
