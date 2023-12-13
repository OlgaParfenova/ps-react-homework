import { ButtonHTMLAttributes } from 'react';

type Navbar = {
  text: string;
  icon?: string;
  label?: string;
};

export type NavbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Navbar;
