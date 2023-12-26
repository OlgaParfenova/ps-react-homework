import { NavLinkProps } from 'react-router-dom';

type NavbarButton = {
  text: string;
  icon?: string;
  label?: string;
  className?: string;
};

export type NavbarButtonProps = Omit<NavLinkProps, 'className'> & NavbarButton;
