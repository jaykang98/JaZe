// Filename: Footer.tsx
import React from "react";

interface FooterProps {
  footer: string;
}

const Footer: React.FC<FooterProps> = ({ footer }: FooterProps) => {
  return <footer> {footer}
  </footer>;
};

export default Footer;
