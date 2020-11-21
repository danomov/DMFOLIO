import React from "react";
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Preview from './preview';
import static_data from '../../Static/staticData';
import to_the_space from '../../assets/icons/to_the_space.svg';
import launch from '../../assets/icons/launch.svg'

describe('Preview component', () => {
    const { preview } = static_data;

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Preview />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders preview correctly', () => {
        render(<Preview />);

        const testPreview = screen.getByTestId('test-preview');
        expect(testPreview).toHaveClass('preview-container', { exact: true });

        const testH1 = screen.getByRole('heading', { level: 1 });
        expect(testH1.textContent).toBe(preview.part1);

        const testH2 = screen.getByRole('heading', { level: 2 });
        expect(testH2.textContent).toBe(preview.part2);

        const testDescriptionContainer = screen.getByTestId('test-desc-container');
        expect(testDescriptionContainer.firstChild.textContent).toBe(preview.part3);
    });

    it('renders correct image according to day time', () => {
        const date = new Date().getHours();
        render(<Preview />);

        const testImage = screen.getByAltText('rocket_image');
        if (date > 19 || date < 7) {
            expect(testImage).toHaveAttribute('src', launch);
        } else {
            expect(testImage).toHaveAttribute('src', to_the_space);
        }
    });
});
