import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import backgroundBlue from '../../assets/images/verification-page.svg';
import NavbarLogo from '../../components/navbar/NavbarLogo';
import CustomButton from '@components/Button/CustomButton';
import OTPInput from '@components/OptInput';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { SxProps } from '@mui/system';

function Verification() {
  const navigate = useNavigate();

  const handleLoginButton = (event: React.SyntheticEvent, path: string = '/login') => {
    event.preventDefault();
    navigate(path);
  };

  const handleVerifyButton = (event: React.SyntheticEvent, path: string = '/module-selection') => {
    // localStorage.setItem('token', 'abc');
    handleLoginButton(event, path);
  };

  return (
    <>
      <NavbarLogo height={30} />
      <div className="verification-wrapper">
        <div className="verification-left">
          <div className="otp-Container">
            <div className="backToLoginContainer" onClick={(event) => handleLoginButton(event)}>
              <ArrowBackIosIcon className="backArrow" style={{ fontSize: '16px' }} />
              <h6 className="backToLogin">Back to login</h6>
            </div>
            <div className="verify-code mt_40">
              <div className="mb_10">
                <h1 className="verificationCodeText">Verification Code</h1>
              </div>
              <div>
                <p className="sentCode">A 6 digit authentication code has been sent to your email.</p>
              </div>
              <div className="mb_20">
                <h5 className="enterCode">Enter Code</h5>
              </div>
              <div className="otp-input">
                <OTPInput />
              </div>
              <div className="mt_20">
                <h6 className="didnt-receive-code">
                  {`Didn't`} receive a code? <span className="resend">Resend</span>
                </h6>
              </div>
              <div className="mt_60">
                <CustomButton
                  fullWidth={true}
                  label="Verify"
                  variant="contained"
                  backgroundColor="#002060"
                  height={59}
                  width={648}
                  onClick={(event) => handleVerifyButton(event)}
                  sx={{ textTransform: 'none', fontSize: '18px', fontWeight: '550' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="verification-right">
          <img src={backgroundBlue} alt="Background Image" className="bgImage" />
        </div>
      </div>
    </>
  );
}

export default Verification;
