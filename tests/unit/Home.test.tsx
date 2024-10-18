import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/page';

test('Home Page', () => {
  render(<Home />);

  expect(
    screen.getByRole('heading', { level: 1, name: 'Next Boilerplate' })
  ).toBeInTheDocument();
});
