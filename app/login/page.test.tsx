import { expect, describe, test} from 'vitest'
import { render, screen } from '@testing-library/react'
import LoginPage from "./page";

describe('<LoginPage/>', () => {
    test('renders username input and submits username', async () => {
  
        render(<LoginPage />);
        const usernameInput = await screen.getByTestId('username');

        const submitButton = screen.getByText('Submit');
        submitButton.click();

        const secureWordElement = await screen.findByTestId('secure-word');
        const secureWord = secureWordElement.textContent;
        expect(secureWord).toEqual('Secure Word: ');
    });
})