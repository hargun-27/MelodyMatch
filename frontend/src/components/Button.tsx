import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`bg-spotifyWhite text-spotifyBlack font-bold py-2 px-4 rounded-xl hover:bg-slate-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
