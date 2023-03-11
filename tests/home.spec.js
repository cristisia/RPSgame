import Home from "../src/pages/homepage";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe('Homepage', () => {
  it('Renders Home page', async () => {
    render(<Home />)
    await waitFor(() => {
      expect(screen.queryByTestId('text-intro')).toBeDefined()
      expect(screen.queryByTestId('play-button')).toBeDefined()
      expect(screen.queryByTestId('video-embed')).toBeDefined()
    })
  })
})