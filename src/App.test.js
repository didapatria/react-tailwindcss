import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<App />);
});

//Definis test
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
  const clickInc = 10;
  const clickDec = 0;
  //Increment
  test(`Test on increment button adds 1 to the counter ${clickInc}`, () => {
    const incButton = screen.getByTestId('increment-test')
    const counterEl = screen.getByTestId('counter')

    for(let i = 0; i<clickInc; i++) {
      fireEvent.click(incButton)
    }

    expect(counterEl.textContent).toBe(`${clickInc}`)
  })

  //Decrement
  test(`Test on decrement button reduce 1 to the counter ${clickDec}`, () => {
    const decButton = screen.getByTestId('decrement-test')
    const counterEl = screen.getByTestId('counter')

    for(let i = 10 ; i<clickDec; i--) {
      fireEvent.click(decButton)
    }

    expect(counterEl.textContent).toBe(`${clickDec}`)
  })
})

