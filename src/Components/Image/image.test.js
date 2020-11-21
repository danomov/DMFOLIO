import React from "react";
import ReactDOM from 'react-dom';
import Image from './image';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Image component', () => {
    const imageLink = "https://www.w3schools.com/w3css/img_lights.jpg"

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Image />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders image correctly', () => {
        const containerClassName = "test-container";
        const { container } = render(
            <Image
                src={imageLink}
                alt="test_image"
                containerClassName={containerClassName}
                className="test-class"
            />
        );
        const testImageContainer = container.firstChild;
        expect(testImageContainer).toHaveClass(`img-container ${containerClassName}`, { exact: true });

        const testImage = screen.getByAltText('test_image');
        expect(testImage).toHaveAttribute('src', imageLink);
        expect(testImage).toHaveClass('img test-class', { exact: true });
    });
});
