import React, { FC } from 'react';
import { css, cx } from 'emotion';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const LoginLogo: FC<BrandComponentProps> = ({ className }) => {
  const maxSize = css`
    max-width: 200px;
  `;

  return (
    <>
      <img className={cx(className, maxSize)} src="public/img/igt/logo.svg" alt="iGrid" />
    </>
  );
};

export const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const background = css`
    background-color: #292933;
    background: -moz-linear-gradient(top, #292933 0, #0f0e15 100%);
    background: -webkit-linear-gradient(top, #292933, #0f0e15);
    background: linear-gradient(180deg, #292933 0, #0f0e15);
    background-image: url(public/img/igt/background.svg);
    background-size: cover;
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

export const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/igt/logo.svg" alt="iGrid" />;
};

export const AppTitle = 'iGrid';

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static AppTitle = AppTitle;
}
