/*
 * 로그인 페이지
 */
// React core
import React from 'react';
// Components
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../components/auth/LoginForm';

import { motion, AnimatePresence } from 'framer-motion';
import animation from '../styles/animation/animation';

const LoginPage = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
      >
        <AuthTemplate>
          <LoginForm />
        </AuthTemplate>
      </motion.div>
    </AnimatePresence>
  );
};
export default LoginPage;
