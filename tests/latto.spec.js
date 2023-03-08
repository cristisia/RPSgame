import Latto from '../src/pages/games/latto'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Latto Game Page', () => {
    it('Render Latto Game page', () => {
      render(<Latto />)
      expect(screen.getByTestId('latto-game')).toBeInTheDocument()
      expect(screen.getByTestId('score')).toBeInTheDocument()    
    })
   
  })