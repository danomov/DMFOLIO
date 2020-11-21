import React from "react";
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Experience from './experience';
import static_data from '../../Static/staticData';

const handleDate = (startY, endY, startMo, endMo) => {
    if (!startY) return "-";
    return !startMo || !endMo
        ? `${startY} - ${endY ? endY : "Present"}`
        : `${startMo} ${startY} - ${endY ? `${endMo} ${endY}` : "Present"}`;
}

describe('Projects component', () => {
    const { experience } = static_data;

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Experience />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders projects correctly', () => {
        render(<Experience />);

        const testExperience = screen.getByTestId('test-experience');
        expect(testExperience).toHaveClass('experience-container', { exact: true });

        expect(testExperience.querySelector('h1').textContent).toBe(experience.title);

        const testWorkPlaceContainer = screen.getAllByRole('list')[0];
        const lastExpItem = [...experience.work_places].pop();

        expect(testWorkPlaceContainer.childNodes).toHaveLength(experience.work_places.length);
        expect(testWorkPlaceContainer.firstChild)
            .toHaveClass('experience-item active', { exact: true });
        expect(testWorkPlaceContainer.querySelector('.experience-item p').textContent)
            .toBe(lastExpItem.company);
        expect(testExperience.querySelectorAll('h1')[1].textContent)
            .toBe(lastExpItem.role);
    });

    it('creates experience dates correctly', () => {
        render(<Experience />);

        const testExperience = screen.getByTestId('test-experience');
        const lastExpItemDates = [...experience.work_places].pop().dates;

        expect(testExperience.querySelector('p.date').textContent)
            .toBe(
                handleDate(
                    lastExpItemDates.startYear,
                    lastExpItemDates.endYear,
                    lastExpItemDates.startMonth,
                    lastExpItemDates.endMonth,
                )
            );
    });
});
