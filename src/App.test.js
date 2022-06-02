/* eslint-disable jest/valid-title */
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<App />);
});

afterEach(cleanup);

// Definition of test
describe("UI Test", () => {
  test('renders image', () => {
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', './images/didapatria.png');
    expect(logo).toHaveAttribute('alt', 'logo');
  });
  
  test('renders title', () => {
    const title = screen.getByText(/Tailwind CSS with Create React App/i);
    expect(title).toBeInTheDocument();
  });

  test('header render with correct text', () => {
    const headerEl = screen.getByTestId('header');
    expect(headerEl.textContent).toBe('Counter App');
  });
})

describe("Functional Test", () => {
  const clicked = 10;

  // Increment
  test(`Test on increment button adds 1 to the counter ${clicked}`, () => {
    const incButton = screen.getByTestId('increment-test')
    const counterEl = screen.getByTestId('counter')

    for(let i = 0; i<clicked; i++) {
      fireEvent.click(incButton)
    }

    expect(counterEl.textContent).toBe(`${clicked}`)
  })

  // Decrement
  test('Test on decrement button reduce 10 to the counter 0', () => {
    const decButton = screen.getByTestId('decrement-test')
    const counterEl = screen.getByTestId('counter')

    for(let i = clicked ; i<0; i--) {
      fireEvent.click(decButton)
    }

    expect(counterEl.textContent).toBe('0')
  })

  // Reset
  test('Test on reset button to the counter 0', () => {
    const resetButton = screen.getByTestId('reset-test')
    const counterEl = screen.getByTestId('counter')

    fireEvent.click(resetButton)

    expect(counterEl.textContent).toBe('0')
  })
})

