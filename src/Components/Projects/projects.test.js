import React from "react";
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from './projects';
import static_data from '../../Static/staticData';

describe('Projects component', () => {
    const { projects } = static_data;

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Projects />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders projects correctly', () => {
        render(<Projects />);

        const testH1 = screen.getAllByRole('heading', { level: 1 });
        expect(testH1[0].textContent).toBe(projects.title);

        const testProjectListContainer = screen.getByTestId('test-project-list-container');
        expect(testProjectListContainer.childNodes).toHaveLength(projects.initialShowProjects);

        const testProjectInfo = projects.projectList[0];
        const firstProject = testProjectListContainer.firstChild;
        expect(firstProject.querySelector('h1').textContent).toBe(testProjectInfo.name);
        expect(firstProject.querySelector('p').textContent).toBe(testProjectInfo.description);

        const projectLinksContainer = firstProject.querySelector('.project-links-container');
        const testProjectLink = testProjectInfo.links[0];
        expect(projectLinksContainer.childNodes).toHaveLength(testProjectInfo.links.length);
        expect(projectLinksContainer.firstChild).toHaveAttribute('href', testProjectLink.link);
        expect(projectLinksContainer.firstChild)
            .toHaveClass(testProjectLink.link.includes("git") ? "git" : "", { exact: true });
    });

    it('expands more projects correctly', () => {
        render(<Projects />);
        const testExpandButton = screen.getByRole('button');
        expect(testExpandButton.textContent).toBe('Show More');

        const testProjectListContainer = screen.getByTestId('test-project-list-container');
        expect(testProjectListContainer.childNodes).toHaveLength(projects.initialShowProjects);

        fireEvent.click(testExpandButton);

        expect(testExpandButton.textContent).toBe('Show Less');
        expect(testProjectListContainer.childNodes).toHaveLength(projects.projectList.length - 1);
    });
});
