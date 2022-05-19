import React from 'react';

export type FooterProps = {
  copyright: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
  <h3>Footer {props.copyright}</h3>
);
