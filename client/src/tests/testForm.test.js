//https://levelup.gitconnected.com/how-to-write-unit-tests-with-react-testing-library-d9624fd2b707
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import Form from '../utils/components/Form';

it('matches snapshot', () => {
	const { asFragment } = render(<Form />);

	expect(asFragment()).toMatchSnapshot();
});

describe('Form Mutate', () => {
	const mockChangeValue = jest.fn();
	let values = 'ABC';

	it('mutate form', () => {
		const { getByTestId, rerender } = render(
			<Form value={values} handleChange={mockChangeValue} />
		);

		act(() => {
			fireEvent.change(getByTestId('form-test'), {
				target: { value: 'CDE' },
			});
		});

		rerender(<Form value={values} handleChange={mockChangeValue} />);
		expect(getByTestId('form-test').value).toBe('ABC');
		expect(mockChangeValue).toBeCalledTimes(1);
	});

	function mutateValue(e) {
		values = e.target.value;
	}
	it('actual mutate form', () => {
		const { getByTestId, rerender } = render(
			<Form value={values} handleChange={mutateValue} />
		);

		act(() => {
			fireEvent.change(getByTestId('form-test'), {
				target: { value: 'CDE' },
			});
		});

		rerender(<Form value={values} handleChange={mockChangeValue} />);
		expect(getByTestId('form-test').value).toBe('CDE');
	});
});

describe('Date And Time', () => {
	let values = '';
	function mutateValue(e) {
		values = e.target.value;
	}

	it('handles valid date', () => {
		const { getByTestId, rerender } = render(
			<Form value={values} handleChange={mutateValue} type='date' />
		);

		act(() => {
			fireEvent.change(getByTestId('form-test'), {
				target: { value: '2021-04-24' },
			});
		});

		rerender(<Form value={values} handleChange={mutateValue} />);
		expect(getByTestId('form-test').value).toBe('2021-04-24');
	});

	it('handles invalid date', ()=>{
		const { getByTestId, rerender } = render(
			<Form value={values} handleChange={mutateValue} type='date' />
		);

		act(() => {
			fireEvent.change(getByTestId('form-test'), {
				target: { value: 'LolXD' },
			});
		});

		rerender(<Form value={values} handleChange={mutateValue} />);
		expect(getByTestId('form-test').value).toBe('');
	})

	it('handles valid time', () => {
		const { getByTestId, rerender } = render(
			<Form value={values} handleChange={mutateValue} type='time' />
		);

		act(() => {
			fireEvent.change(getByTestId('form-test'), {
				target: { value: '09:00' },
			});
		});

		rerender(<Form value={values} handleChange={mutateValue} />);
		expect(getByTestId('form-test').value).toBe('09:00');
	});

	it('handles invalid time', ()=>{
		const { getByTestId, rerender } = render(
			<Form value={values} handleChange={mutateValue} type='date' />
		);

		act(() => {
			fireEvent.change(getByTestId('form-test'), {
				target: { value: 'LolXD' },
			});
		});

		rerender(<Form value={values} handleChange={mutateValue} />);
		expect(getByTestId('form-test').value).toBe('');
	})
});
