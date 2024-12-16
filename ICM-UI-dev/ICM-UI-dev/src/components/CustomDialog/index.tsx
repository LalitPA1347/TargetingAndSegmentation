import React from 'react';
import { Dialog, DialogContent, DialogActions, IconButton, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CustomDialogTypes } from './types';
import './styles.scss';
import CustomButton from '@components/Button/CustomButton';

const CustomDialog: React.FC<CustomDialogTypes> = ({
  open,
  children,
  onCloseEvent,
  width = '600px',
  height = '600px',
  buttonPosition = 'right',
  closeIcon = {
    buttonVisibility: false,
    buttonLabel: 'X',
    onClickButtonEvent: () => {},
  },
  okayButton = {
    buttonVisibility: false,
    buttonLabel: 'Okay',
    onClickButtonEvent: () => {},
  },
  closeButton = {
    buttonVisibility: false,
    buttonLabel: 'Close',
    onClickButtonEvent: () => {},
  },
}) => {
  const showDialogActions = closeButton.buttonVisibility || okayButton.buttonVisibility;
  return (
    <Dialog
      open={open}
      onClose={onCloseEvent}
      sx={{
        '& .MuiDialog-paper': {
          padding: '14px',
          height: height,
          width: width,
          borderRadius: '27px',
          position: 'relative',
          maxWidth: 'none',
          margin: '0px',
          border: 'solid 1.4px #dedede',
        },
      }}
    >
      <div className="dialog-main-container">
        {closeIcon.buttonVisibility && (
          <DialogTitle className="dialogTitle">
            <IconButton aria-label="close" onClick={closeIcon.onClickButtonEvent} className="close-icon">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
        )}
        <DialogContent className="dialog-content">{children}</DialogContent>
        {showDialogActions && (
          <DialogActions className="dialog-action" sx={{ justifyContent: buttonPosition }}>
            {closeButton.buttonVisibility && (
              <CustomButton
                label={closeButton.buttonLabel}
                onClick={closeButton.onClickButtonEvent}
                color="primary"
                variant="outlined"
                className="close-button"
              />
            )}
            {okayButton.buttonVisibility && (
              <CustomButton
                label={okayButton.buttonLabel}
                onClick={okayButton.onClickButtonEvent}
                color="primary"
                variant="contained"
                className="okay-button"
              />
            )}
          </DialogActions>
        )}
      </div>
    </Dialog>
  );
};

export default CustomDialog;
