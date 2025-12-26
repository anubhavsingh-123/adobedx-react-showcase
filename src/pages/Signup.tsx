import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/ui/PhoneFrame';
import FloatingInput from '@/components/ui/FloatingInput';
import { Button } from '@/components/ui/button';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState<'yes' | 'no'>('yes');

  const handleSignup = () => {
    console.log('Signup:', { fullName, phoneNumber, email, password, companyName, isAgency });
  };

  return (
    <PhoneFrame>
      <div className="h-full min-h-[667px] flex flex-col p-6 overflow-y-auto">
        <div className="pt-4">
          <h1 className="text-2xl font-bold text-foreground mb-1">
            Create your
          </h1>
          <h1 className="text-2xl font-bold text-foreground mb-6">
            PopX account
          </h1>

          <div className="space-y-5">
            <FloatingInput
              label="Full Name"
              required
              value={fullName}
              onChange={setFullName}
              placeholder="Marry Doe"
            />
            <FloatingInput
              label="Phone number"
              type="tel"
              required
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Marry Doe"
            />
            <FloatingInput
              label="Email address"
              type="email"
              required
              value={email}
              onChange={setEmail}
              placeholder="Marry Doe"
            />
            <FloatingInput
              label="Password"
              type="password"
              required
              value={password}
              onChange={setPassword}
              placeholder="Marry Doe"
            />
            <FloatingInput
              label="Company name"
              value={companyName}
              onChange={setCompanyName}
              placeholder="Marry Doe"
            />

            {/* Agency Radio Group */}
            <div className="pt-2">
              <p className="text-sm text-foreground mb-3">
                Are you an Agency?<span className="text-label">*</span>
              </p>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isAgency === 'yes'
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}
                    onClick={() => setIsAgency('yes')}
                  >
                    {isAgency === 'yes' && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm text-foreground">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isAgency === 'no'
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}
                    onClick={() => setIsAgency('no')}
                  >
                    {isAgency === 'no' && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <span className="text-sm text-foreground">No</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 pb-4">
            <Button
              onClick={handleSignup}
              className="w-full py-6 text-base font-medium rounded-lg"
              variant="default"
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Signup;
