/**
 * 로그인 페이지
 */
// React core
import React from 'react';
// Framer-motion
import { motion, AnimatePresence } from 'framer-motion';
// Component
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../components/auth/LoginForm';
// Style
import animation from '../styles/animation/animation';

const LoginPage = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="login"
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
