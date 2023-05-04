import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { ThemeProvider } from '../components/base';
import userEvent from '@testing-library/user-event';

class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions & { route: string }, 'wrapper'>
) => {
  const { route = '/test', ...otherOptions } = options || {};
  window.history.pushState({}, 'Test page', route);
  window.ResizeObserver = ResizeObserver;
  window.HTMLElement.prototype.scrollTo = jest.fn();

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Providers, ...otherOptions }),
  };
};

export * from '@testing-library/react';
import '@testing-library/jest-dom';
export { customRender as render };

// eslint-disable-next-line react/display-name
const mockRecaptchaV2 = React.forwardRef<HTMLInputElement, typeof ReCAPTCHA>((props, ref) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  React.useImperativeHandle(ref, () => ({
    reset: jest.fn(),
    getValue: jest.fn(() => 'token'),
  }));
  return <input ref={ref} type="checkbox" data-testid="mock-v2-captcha-element" {...props} />;
});

jest.mock('react-google-recaptcha', () => mockRecaptchaV2);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: () => ({
    status: 404,
    statusText: 'Not Found',
  }),
  useLocation: () => ({
    pathname: '/test',
    key: '1234',
    name: 'Test',
  }),
  useOutlet: () => <>test</>,
}));

jest.mock('../index.tsx', () => ({
  routes: [
    {
      path: '/',
      name: 'Home',
      element: 'Home',
    },
    {
      path: 'about',
      name: 'About',
      element: 'About',
    },
    {
      path: 'career',
      name: 'Career',
      element: 'Career',
    },
    {
      path: 'contact',
      name: 'Contact',
      element: 'Contact',
    },
  ],
}));
