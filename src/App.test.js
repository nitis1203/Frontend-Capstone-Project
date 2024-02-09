import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
    test('Renders static text correctly', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText('Make a reservation');
        expect(headingElement).toBeInTheDocument();
    });

    test('Submits the form with correct data', async () => {
        const mockConsoleLog = jest.spyOn(console, 'log'); // Spy on console.log
        render(<BookingForm setAvailableTimes={() => {}} />);

        // Simulate user input...
        fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-02-09' } });
        fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
        fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '3' } });
        fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'ddddd@gmail.com' } });

        // Simulate form submission
        fireEvent.click(screen.getByText('Make a reservation'));

        // Wait for form submission to complete
        await waitFor(() => {
            // Assert that form data is logged to the console
            expect(mockConsoleLog).toHaveBeenCalledWith({
                date: '2024-02-09',
                time: '18:00',
                guests: '3',
                occasion: 'Birthday',
                email: 'ddddd@gmail.com',
                // Add other form fields if needed
            });
        });

        mockConsoleLog.mockRestore(); // Restore console.log to its original implementation
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
