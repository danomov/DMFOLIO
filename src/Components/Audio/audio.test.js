import React from "react";
import ReactDOM from 'react-dom';
import Audio from './audio';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import background_music from "../../assets/audio/background_music.mp3";

describe('Audio component', () => {
    it('renders without crashes', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Audio />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders audio correctly', () => {
        render(<Audio />);

        const testAudio = screen.getByTestId('test-audio');
        expect(testAudio).toHaveAttribute('src', background_music);

        const testAudioButton = screen.getByRole('button');
        expect(testAudioButton).toHaveClass("audio-control muted", { exact: true });
    });

    it('starts audio', () => {
        window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
        window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
        render(<Audio />);

        const testAudioButton = screen.getByRole('button');

        fireEvent.click(testAudioButton);
        expect(testAudioButton).toHaveClass("audio-control", { exact: true });

        fireEvent.click(testAudioButton);
        expect(testAudioButton).toHaveClass("audio-control muted", { exact: true });
    });
});
