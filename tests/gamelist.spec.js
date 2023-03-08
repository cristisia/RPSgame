import GameList from '../src/pages/gamelist'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('GameList Page', () => {
    it('Render gamelist page', () => {
      render(<GameList />)
      expect(screen.getByTestId('leaderboards')).toBeInTheDocument()
      // expect(screen.queryByTestId('game-list')).toBeDefined()
     
    })
  })