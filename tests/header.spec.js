import Header from "../src/components/Header";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Header', () => {
  it('Renders Navbar', () => {
    render(<Header />)
    expect(screen.queryByTestId('navbar')).toBeDefined()
    expect(screen.queryByTestId('nav-logo')).toBeDefined()
    expect(screen.queryByTestId('home')).toBeDefined()
    expect(screen.queryByTestId('profile')).toBeDefined()
    expect(screen.queryByTestId('listuser')).toBeDefined()
    expect(screen.queryByTestId('gamelist')).toBeDefined()
    expect(screen.queryByTestId('login')).toBeDefined()
    expect(screen.queryByTestId('userscore')).toBeDefined()
    expect(screen.queryByTestId('logout')).toBeDefined()
  })
}) 