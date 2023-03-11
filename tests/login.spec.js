import Login from "../src/pages/login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Login Component', () => {
    test('Signup with missing or invalid inputs', async () => {
        const { getByLabelText, getByText } = render(<Login />)
        const nameInput = getByLabelText('Full name')
        const usernameInput = getByLabelText('Username')
        const emailInput = getByLabelText('Email address')
        const passwordInput = getByLabelText('Password')
        const submitButton = getByText('Sign Up')
        fireEvent.change(nameInput, { target: { value: 'Test User' } })
        fireEvent.change(usernameInput, { target: { value: 'testuser' } })
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
        fireEvent.change(passwordInput, { target: { value: 'password' } })
        fireEvent.click(submitButton)
        await waitFor(() => expect(setDoc).toHaveBeenCalledTimes(1))
        expect(setDoc).toHaveBeenCalledWith(doc(database, 'users', `${auth.currentUser.uid}`), data)
      })      
});