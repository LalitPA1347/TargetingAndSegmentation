/* eslint-disable react/prop-types */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomAccordionProps } from './types';

import './styles.scss';

const CustomAccordion: React.FC<CustomAccordionProps> = React.memo(
  ({
    title = 'Accordion Title',
    children,
    defaultExpanded = false,
    expandIcon = <ExpandMoreIcon />,
    ariaControls = 'panel-content',
    id = 'panel-header',
    onExpandChange,
    summaryStyles,
    detailsStyles,
    borderRadius = '14px',
    border = '1.4px solid #004EEA',
    backgroundColor = '#ffffff',
    maxWidth = '100%',
    className = '',
    titleClassName = '',
  }) => {
    const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

    // Handle accordion expansion changes
    const handleChange = (event: React.SyntheticEvent, expanded: boolean) => {
      setIsExpanded(expanded);
      onExpandChange && onExpandChange(expanded); // Trigger callback if provided
    };

    return (
      <div className="accordion-container">
        <Accordion
          className={`accordion ${isExpanded ? 'expanded' : ''} ${className}`}
          expanded={isExpanded}
          onChange={handleChange}
          sx={{
            border: border,
            borderRadius: borderRadius,
            maxWidth: maxWidth,
            backgroundColor: backgroundColor,
            '&:before': {
              display: 'none',
            },
            '&:first-of-type': {
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            },
            '&:last-of-type': {
              borderBottomLeftRadius: borderRadius,
              borderBottomRightRadius: borderRadius,
            },
          }}
        >
          <AccordionSummary expandIcon={expandIcon} aria-controls={ariaControls} id={id} style={summaryStyles}>
            <Typography className={`title ${titleClassName}`}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails style={detailsStyles}>
            {' '}
            {/* Custom styles for details */}
            {children}
          </AccordionDetails>
        </Accordion>
      </div>
    );
  },
);

export default CustomAccordion;
