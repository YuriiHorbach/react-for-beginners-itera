import React from 'react';

export type FooterProps = {
  copyright: string;
  contacts: string;
}

export const Footer: React.FC<FooterProps> = (props) => (
  <h3>Footer {props.contacts}</h3>
);
