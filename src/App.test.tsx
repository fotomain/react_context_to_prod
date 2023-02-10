import React from 'react';
import { render } from '@testing-library/react';
import AppWorkPage from './AppWorkPage';

test('renders without crashing', () => {
  const { baseElement } = render(<AppWorkPage />);
  expect(baseElement).toBeDefined();
});
