import React from 'react';
import { render, screen } from '@testing-library/react';
import ChessBoard from "./components/ChessBoard/ChessBoard";

test('Render Chessboard', () => {
  render(<ChessBoard />);
  const linkElement = screen.getByText(/Click on to cell for Possibility knight Position/i);
  expect(linkElement).toBeInTheDocument();
});
