import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '../src';

describe('@project44-manifest/components - TextField', () => {
  it('should render and support input', () => {
    render(<TextField aria-label="text field" />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input.value).toBe('');

    fireEvent.change(input, { target: { value: 'foo' } });

    expect(input.value).toBe('foo');
  });

  it('should support an uncontrolled value', async () => {
    const onChange = jest.fn();

    render(<TextField aria-label="text field" defaultValue="foo" onChange={onChange} />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    const newValue = 'bar';

    expect(input.value).toBe('foo');

    await userEvent.type(input, newValue);

    expect(onChange).toHaveBeenCalledTimes(newValue.length);
  });

  it('should support a controlled value', async () => {
    const onChange = jest.fn();

    render(<TextField aria-label="text field" value="foo" onChange={onChange} />);

    const input: HTMLInputElement = screen.getByRole('textbox');
    const newValue = 'bar';

    expect(input.value).toBe('foo');

    await userEvent.type(input, newValue);

    expect(input.value).toBe('foo');

    expect(onChange).toHaveBeenCalledTimes(newValue.length);
  });

  it('should support isDisabled', async () => {
    render(<TextField isDisabled aria-label="text field" />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input).toHaveAttribute('disabled');

    await userEvent.click(input);

    expect(document.activeElement).not.toEqual(input);
  });

  it('should support isReadonly', async () => {
    render(<TextField isReadOnly aria-label="text field" />);

    const input: HTMLInputElement = screen.getByRole('textbox');

    expect(input).toHaveAttribute('readonly');

    await userEvent.click(input);

    expect(document.activeElement).toEqual(input);
  });
});
