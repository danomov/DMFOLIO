import React from "react";
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from './skills';
import static_data from '../../Static/staticData';

describe('Skills component', () => {
    const { skills } = static_data;

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Skills />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders skills correctly',() => {
        render(<Skills />);

        const testSkills = screen.getByTestId('test-skills');
        expect(testSkills).toHaveClass('skills-container', { exact: true });

        const testH1 = screen.getByRole('heading', { level: 1 });
        expect(testH1.textContent).toBe(skills.title);

        const testListSkills = screen.getAllByRole('listitem');
        expect(testListSkills).toHaveLength(skills.skillList.length);
        expect(testListSkills[0].textContent).toBe(skills.skillList[0]);
    });
});
