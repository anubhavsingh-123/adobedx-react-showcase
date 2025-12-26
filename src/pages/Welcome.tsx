import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneFrame from '@/components/ui/PhoneFrame';
import FloatingBubbles from '@/components/FloatingBubbles';
import { Button } from '@/components/ui/button';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <div className="h-full min-h-[667px] flex flex-col relative">
        {/* Bubbles section */}
        <div className="flex-1 relative">
          <FloatingBubbles />
        </div>

        {/* Content section */}
        <div className="px-6 pb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Welcome to PopX
          </h1>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>

          <div className="space-y-3">
            <Button
              onClick={() => navigate('/signup')}
              className="w-full py-6 text-base font-medium rounded-lg"
              variant="default"
            >
              Create Account
            </Button>
            <Button
              onClick={() => navigate('/login')}
              className="w-full py-6 text-base font-medium rounded-lg"
              variant="secondary"
            >
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Welcome;
