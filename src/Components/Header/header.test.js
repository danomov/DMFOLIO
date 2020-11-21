import React from "react";
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './header';
import { BrowserRouter as Router } from "react-router-dom";
import static_data from '../../Static/staticData';

describe('Header component', () => {
    const { headerList } = static_data;

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Header />
            </Router>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders header correctly', () => {
        render(
            <Router>
                <Header />
            </Router>
        );

        screen.getByTestId('test-header');

        const testLogo = screen.getAllByRole('link')[0];
        expect(testLogo.id).toBe('logo');

        const testNav = screen.getByRole('navigation');
        expect(testNav.classList).toHaveLength(0);
        const testUl = testNav.firstChild;
        expect(testUl.childNodes).toHaveLength(headerList.length);
        expect(testUl.firstChild.textContent).toBe(headerList[0]);
    });

    it('handles responsiveness correctly', () => {
        window.innerWidth = 991;
        render(
            <Router>
                <Header />
            </Router>
        );

        const testNav = screen.getByRole('navigation');
        expect(testNav).toHaveClass('mobile-menu', { exact: true });

        const testButton = screen.getByRole('button');
        expect(testButton).toHaveClass('menu-button', { exact: true });
    });

    it('toggles navigation menu on mobile view', () => {
        window.innerWidth = 991;
        render(
            <Router>
                <Header />
            </Router>
        );

        const testButton = screen.getByRole('button');
        fireEvent.click(testButton);

        const testNav = screen.getByRole('navigation');
        expect(testNav).toHaveClass('mobile-menu open', { exact: true });
    });
});
