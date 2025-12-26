import React from 'react';

const FloatingBubbles: React.FC = () => {
  const bubbles = [
    { number: 6, top: '8%', left: '20%', delay: '0s' },
    { number: 1, top: '18%', left: '35%', delay: '0.5s' },
    { number: 2, top: '25%', left: '32%', delay: '1s' },
    { number: 3, top: '32%', left: '45%', delay: '1.5s' },
    { number: 4, top: '38%', left: '55%', delay: '2s' },
    { number: 5, top: '45%', left: '65%', delay: '2.5s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute w-9 h-9 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold text-sm animate-float shadow-lg"
          style={{
            top: bubble.top,
            left: bubble.left,
            animationDelay: bubble.delay,
          }}
        >
          {bubble.number}
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
