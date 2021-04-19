//https://levelup.gitconnected.com/how-to-write-unit-tests-with-react-testing-library-d9624fd2b707
import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import Form from '../utils/components/Form';

const value = 'ABC';

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
