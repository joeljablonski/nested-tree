import { render, screen, cleanup } from '@testing-library/react';
import { App } from '../App';

test('ensure snapshot matches', async () => {

    let app = render(<App />)

    expect(app).toMatchSnapshot();

})

