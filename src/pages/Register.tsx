import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const RegisterPage = () => (
  <div className="flex justify-center items-center min-h-screen">
    <SignUp path="/register" routing="path" signInUrl="/login" />
  </div>
);

export default RegisterPage;
