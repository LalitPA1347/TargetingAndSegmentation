import React, { useState } from 'react';
import {
  TextField,
  Checkbox,
  Box,
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CustomButton from '@components/Button/CustomButton';
import { loginSchema, LoginFormValues } from './loginValidation';
import Carousel from '../../components/Carousel/Carousel';
import carousel1 from '../../assets/images/login-carousel-image.svg';
import carousel2 from '../../assets/images/login-carousel-image.svg';
import carousel3 from '../../assets/images/login-carousel-image.svg';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import NavbarLogo from '@components/navbar/NavbarLogo';

const Login: React.FC = () => {
  const carouselImages = [carousel1, carousel2, carousel3];
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<LoginFormValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [capsLockWarning, setCapsLockWarning] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const validateField = (field: keyof LoginFormValues) => {
    const result = loginSchema.shape[field].safeParse(formValues[field]);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: result.success ? undefined : result.error?.errors[0]?.message,
    }));
  };

  const handleBlur = (field: keyof LoginFormValues) => () => {
    validateField(field);
  };

  const handleChange = (field: keyof LoginFormValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined,
    }));
  };

  const handleCapsLock = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCapsLockWarning(e.getModifierState('CapsLock') ? 'Caps Lock is on' : '');
  };

  const handleLoginButton = (event: React.SyntheticEvent, path: string = '/otp-verify') => {
    event.preventDefault();
    navigate(path);
  };

  console.log("Login page, testing for github action!")
  return (
    <div className="loginPage">
      <NavbarLogo height={30} />
      <div className="loginContainer">
        <div className="left">
          <Box className="formContainer">
            <div className="loginHeader">
              <Typography variant="h4" component="h1">
                Login
              </Typography>
              <Typography className="subHeader" sx={{ color: '#676767' }}>
                Login to access your IncentiveACE account
              </Typography>
            </div>
            <form className="mainForm">
              <FormControl className="email-container">
                <FormLabel className="email-label" htmlFor="email">
                  Email
                </FormLabel>
                <TextField
                  placeholder="Enter Email"
                  className="form-email"
                  variant="outlined"
                  // size="medium"
                  fullWidth
                  value={formValues.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </FormControl>
              <FormControl className="pwd-container">
                <FormLabel className="pwd-label" htmlFor="email">
                  Password
                </FormLabel>
                <TextField
                  placeholder="Enter Password"
                  className="form-pwd"
                  variant="outlined"
                  fullWidth
                  type="password"
                  size="medium"
                  value={formValues.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  onKeyUp={handleCapsLock}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </FormControl>
              {capsLockWarning && <Typography className="warning">{capsLockWarning}</Typography>}

              <Box className="rememberMeContainer">
                <FormControlLabel control={<Checkbox size="small" />} label="Remember me" />
                <a href="/forgot-password" className="forgotPassword">
                  Forgot Password
                </a>
              </Box>
              <CustomButton
                size="small"
                label="Login"
                variant="contained"
                color="primary"
                fullWidth={true}
                className="loginButton"
                onClick={handleLoginButton}
              />
            </form>
          </Box>
        </div>
        <div className="right">
          <div className="carouselContainer">
            <Carousel images={carouselImages}>
              {/* Children: overlay content */}
              <div className="carouselText">
                <Typography component="h1" variant="h3" sx={{ fontWeight: 'bold' }}>
                  Welcome to IncentiveACE
                </Typography>
                <Typography variant="subtitle1">Enter the Future of Incentives, today</Typography>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
