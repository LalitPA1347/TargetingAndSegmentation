import React from 'react';
import incentiveACE from '../../assets/images/incentive-ace-logo.svg';
import './NavbarLogo.scss';

type NavBarPropsType = { height: number };

const NavbarLogo: React.FC<NavBarPropsType> = ({ height, ...props }) => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={incentiveACE} alt="IncentiveACE Logo" />
      </div>
    </div>
  );
};

export default NavbarLogo;
