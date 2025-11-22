import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`font-headline text-2xl tracking-wider text-primary ${className}`}>
      Âm Vang Sử Thi
    </div>
  );
};

export default Logo;
