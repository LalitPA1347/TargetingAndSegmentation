import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import Verification from '../pages/OtpVerification';
import LandingDashboard from '../pages/LandingDashboard';
import DataInputAndTemplates from '../pages/DataInputAndTemplates';
import ComingSoon from '@components/ComingSoon';
import Login from '../pages/Login/Login';
import GeneralSetup from '../pages/GeneralSetup';
import TeamSetup from '../pages/TeamSetup';
import ModuleSelection from '../pages/ModuleSelection';
// import { LandingPage } from '../app/modules/ci-landingpage/LandingPage';
// import HomePage from '../app/modules/homepage/HomePage';

export default function MainRoute() {
  return (
    <Routes>
      {/* public router  */}
      <Route path="/" element={<PublicRouter />}>
        {/* <Route index element={<LandingPage />} /> */}
        <Route path="/login" index element={<Login />} />
        <Route path="/otp-verify" element={<Verification />} />
        <Route path="/module-selection" element={<ModuleSelection />} />
      </Route>

      {/* private router  */}
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/home" index element={<LandingDashboard />} />
        <Route path="/data-input-templates" element={<DataInputAndTemplates />} />
        <Route path="/general-setup" element={<GeneralSetup />} />
        <Route path="/team-setup" element={<TeamSetup />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/" index element={<LandingDashboard />} />
      </Route>
    </Routes>
  );
}
