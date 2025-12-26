import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/ui/PhoneFrame';
import FloatingInput from '@/components/ui/FloatingInput';
import { Button } from '@/components/ui/button';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email && password;

  const handleLogin = () => {
    if (isFormValid) {
      // Handle login logic
      console.log('Login:', { email, password });
    }
  };

  return (
    <PhoneFrame>
      <div className="h-full min-h-[667px] flex flex-col p-6">
        <div className="pt-4">
          <h1 className="text-2xl font-bold text-foreground mb-1">
            Signin to your
          </h1>
          <h1 className="text-2xl font-bold text-foreground mb-3">
            PopX account
          </h1>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>

          <div className="space-y-5">
            <FloatingInput
              label="Email Address"
              type="email"
              required
              value={email}
              onChange={setEmail}
              placeholder="Enter email address"
            />
            <FloatingInput
              label="Password"
              type="password"
              required
              value={password}
              onChange={setPassword}
              placeholder="Enter password"
            />
          </div>

          <Button
            onClick={handleLogin}
            disabled={!isFormValid}
            className="w-full py-6 text-base font-medium rounded-lg mt-6 disabled:bg-button-disabled disabled:text-muted-foreground disabled:opacity-100"
            variant="default"
          >
            Login
          </Button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Login;
