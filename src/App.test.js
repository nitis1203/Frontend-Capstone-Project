// BookingForm.test.js
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

        // Simulate user input
        fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2024-02-14' } });
        fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '17:00' } });
        fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

        // Simulate form submission
        fireEvent.click(screen.getByText('Make a reservation'));

        // Wait for form submission to complete
        await waitFor(() => {
            // Assert that form data is logged to the console
            expect(mockConsoleLog).toHaveBeenCalledWith({
                date: '2024-02-14',
                time: '17:00',
                guests: '5',
                occasion: 'Birthday'
            });
        });

        mockConsoleLog.mockRestore(); // Restore console.log to its original implementation
    });
});
