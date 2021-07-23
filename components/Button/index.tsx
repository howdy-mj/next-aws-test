import { FC } from 'react';

export interface ButtonProps {
  primary?: boolean;
  bgColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ label = '버튼' }) => {
  return <button type="button">{label}</button>;
};

export default Button;
