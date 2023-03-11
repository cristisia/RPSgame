import React from 'react';
import { render } from '@testing-library/react';
import BlankPage from '../pages/BlankPage';

test('renders a blank page', () => {
  const { getByTestId } = render(<BlankPage />);
  const blankPage = getByTestId('blank-page');
  expect(blankPage).toBeInTheDocument();
});
// ekspetasinya untuk mendapatkan negative test tapi dikerjakan 20 menit sebelum deadline jadi masih gagal :(