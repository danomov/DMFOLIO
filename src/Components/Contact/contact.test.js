import React from "react";
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './contact';
import static_data from '../../Static/staticData';

describe('Contact component', () => {
    const { contacts } = static_data;

    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Contact />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders contact correctly', () => {
        render(<Contact />);

        const testContact = screen.getByTestId('test-contact');
        expect(testContact).toHaveClass('contacts-container', { exact: true });

        const testH1 = screen.getByRole('heading', { level: 1 });
        expect(testH1.textContent).toBe(contacts.info.title);

        const testParagraph = testContact.querySelectorAll('p');
        expect(testParagraph).toHaveLength(1);
        expect(testParagraph[0].textContent).toBe(contacts.info.description);

        const testSocialContainer = screen.getByTestId('test-social-container');
        expect(testSocialContainer.childNodes).toHaveLength(contacts.info.social.length);
        expect(testSocialContainer.querySelector('a'))
            .toHaveAttribute('href', contacts.info.social[0]);

        const testCallBtn = screen.getByTestId('call-btn');
        expect(testCallBtn).toHaveAttribute('href', `tel:${contacts.info.phone}`);
        expect(testCallBtn.textContent).toBe("Let's Talk");

        const testMailBtn = screen.getByTestId('mail-btn');
        expect(testMailBtn).toHaveAttribute('href', `mailto:${contacts.info.mail}`);
        expect(testMailBtn.textContent).toBe("Let's Chat");

        const testResumeBtn = screen.getByTestId('resume-btn');
        expect(testResumeBtn).toHaveAttribute('href', contacts.info.resumeLink);
        expect(testResumeBtn.textContent).toBe("Resume");
    });
});
