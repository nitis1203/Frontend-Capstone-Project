import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe('BookingForm Component', () => {
    test('Renders static text correctly', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText('Make a reservation');
        expect(headingElement).toBeInTheDocument();
    });


    test('Validates HTML5 validation attributes', () => {
        render(<BookingForm />);

        // Check if HTML5 validation attributes are applied
        expect(screen.getByLabelText('Name')).toHaveAttribute('required');
        expect(screen.getByLabelText('Email')).toHaveAttribute('required');
        expect(screen.getByLabelText('Choose date')).toHaveAttribute('required');
        expect(screen.getByLabelText('Number of guests')).toHaveAttribute('required');
        expect(screen.getByLabelText('Occasion')).toHaveAttribute('required');
    });

    test('Validates JavaScript validation functions', () => {
        render(<BookingForm />);

        // Validate email format
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalidemail' } });
        expect(screen.getByText('Invalid email address')).toBeInTheDocument();

        // Add more validation tests for other fields as needed
    });
});
