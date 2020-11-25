import React from "react";
import ReactDOM from 'react-dom';
import Loader from './loader';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Loader component', () => {
    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Loader />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders loader (without wrapper and custom count) correctly', () => {
        const { container } = render(<Loader />);

        const loaderContainer = container.firstChild;
        expect(loaderContainer).toHaveClass("", { exact: true });

        const testLoader = screen.getByTestId('test-loader');
        expect(testLoader.childNodes.length).toBe(9);
    });

    it('renders loader (with wrapper and custom count) correctly', () => {
        const { container } = render(
            <Loader
                hasWrapper
                count={5}
            />
        );

        const loaderContainer = container.firstChild;
        expect(loaderContainer).toHaveClass("loader-wrapper", { exact: true });

        const testLoader = screen.getByTestId('test-loader');
        expect(testLoader.childNodes.length).toBe(5);
    });
});
