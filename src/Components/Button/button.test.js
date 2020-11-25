import React from "react";
import ReactDOM from 'react-dom';
import Button from './button';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
    const link = "https://www.google.com";
    const className = "test-btn";

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders button (a tag) correctly', () => {
        const content = "Click this link";

        render(
            <Button
                className={className}
                content={content}
                href={link}
            />
        );
        const testButton = screen.getByRole('link');
        expect(testButton).toHaveTextContent(content);
        expect(testButton).toHaveClass(`${className}`, { exact: true });
        expect(testButton).toHaveAttribute('href', link);
    });

    it('renders button (button tag) correctly', () => {
        const content = "Click Me";
        const className = "test-button";
        render(
            <Button
                className={className}
                type="button"
                content={content}
            />
        );
        const testButton = screen.getByRole('button');
        expect(testButton).toHaveTextContent(content);
        expect(testButton).toHaveClass(`${className} shine`, { exact: true });
    });

    it('renders button with hover', () => {
        let testButton;
        const { rerender } = render(
            <Button
                className={className}
                type="button"
                hasHover
            />
        );
        testButton = screen.getByRole('button');
        expect(testButton).toHaveClass(`${className} hover shine`, { exact: true });

        rerender(
            <Button
                className={className}
                hasHover
                link={link}
            />
        );
        testButton = screen.getByRole('link');
        expect(testButton).toHaveClass(`${className} hover`, { exact: true });
    });
});
