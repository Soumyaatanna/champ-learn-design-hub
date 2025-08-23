import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => (
  <div className="flex justify-center items-center min-h-screen">
    <SignIn path="/login" routing="path" signUpUrl="/register" />
  </div>
);

export default LoginPage;
