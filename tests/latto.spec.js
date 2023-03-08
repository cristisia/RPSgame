import Latto from '../src/pages/games/latto'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('GameList Page', () => {
    it('Render gamelist page', () => {
      render(<Latto />)
      expect(screen.getByTestId('latto-game')).toBeInTheDocument()
      // expect(screen.queryByTestId('game-list')).toBeDefined()
     
    })
  })