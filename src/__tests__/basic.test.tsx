import { render, screen, cleanup } from '@testing-library/react';
import { App } from '../App';

test('ensure button changes on click', async () => {

    // render the app
    render(<App />)

    // select all buttons
    const button = await screen.findAllByText('▼');

    // click only the first button
    button[0].click()

    // check that the button changes
    expect(button[0]).toHaveTextContent('▶')

    // click the first button again
    button[0].click()

    // check that the button changes back
    expect(button[0]).toHaveTextContent('▼')

})

