import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App';

test('if user enters a todo, the todo is shown', async () => {
  render(<App />);

  // login
  userEvent.click(screen.getByRole('button', { name: /click here to login/i }));

  // add todo
  userEvent.type(screen.getByRole('textbox', { name: /title/i }), "buy new shoes");
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(await screen.findByText(/buy new shoes/i)).toBeInTheDocument();
});