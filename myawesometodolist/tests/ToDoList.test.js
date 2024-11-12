import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodoList from '../src/components/ToDoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
    it('should add a new todo item', () => {
        render(React.createElement(TodoList));
        const input = screen.getByPlaceholderText(/add a todo/i);
        const addButton = screen.getByText(/add/i);

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    it('should toggle todo item completion', () => {
        render(React.createElement(TodoList));
        const input = screen.getByPlaceholderText(/add a todo/i);
        const addButton = screen.getByText(/add/i);

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        const todoItem = screen.getByText('New Todo');
        fireEvent.click(todoItem);

        expect(todoItem).toHaveClass('completed');
    });

    it('should delete a todo item', () => {
        render(React.createElement(TodoList));
        const input = screen.getByPlaceholderText(/add a todo/i);
        const addButton = screen.getByText(/add/i);

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        const deleteButton = screen.getByText(/delete/i);
        fireEvent.click(deleteButton);

        expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
    });
});

