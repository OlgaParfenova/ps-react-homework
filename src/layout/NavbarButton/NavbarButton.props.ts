import { ButtonHTMLAttributes } from 'react';

type Navbar = {
  text: string;
  to: string;
  icon?: string;
  label?: string;
};

export type NavbarButtonProps = ButtonHTMLAttributes<HTMLAnchorElement> & Navbar;
