import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="phone-frame bg-card rounded-3xl overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
