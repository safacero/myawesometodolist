import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AddTodoForm from '../src/components/AddToDoForm';

describe('AddTodoForm', () => {

    it('calls addTodo with input text when form is submitted', () => {
        const addTodo = vi.fn();
        const { getByPlaceholderText, getByText } = render(
            React.createElement(AddTodoForm, { addTodo })
        );

        const input = getByPlaceholderText('Add a todo');
        const button = getByText('Add');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(addTodo).toHaveBeenCalledWith('New Todo');
        expect(input.value).toBe('');
    });

    it('does not call addTodo when input is empty', () => {
        const addTodo = vi.fn();
        const { getByText } = render(
            React.createElement(AddTodoForm, { addTodo })
        );

        const button = getByText('Add');
        fireEvent.click(button);

        expect(addTodo).not.toHaveBeenCalled();
    });
});

