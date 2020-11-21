import React from "react";
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from './about';
import static_data from '../../Static/staticData';

describe('About component', () => {
    const { about } = static_data;

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<About/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders about correctly', () => {
        render(<About />);

        const testAbout = screen.getByTestId('test-about');
        expect(testAbout).toHaveClass('about-container', { exact: true });

        const testH1 = screen.getByRole('heading', { level: 1 });
        expect(testH1.textContent).toBe(about.title);

        const testDescriptionContainer = screen.getByTestId('test-about-text');
        expect(testDescriptionContainer.firstChild.textContent).toBe(about.description);

        const testImage = screen.getByAltText('portrait_picture');
        expect(testImage).toHaveAttribute('src', about.portrait);
    });
});
