import { useState, useEffect, useCallback } from 'react';
import {SpeechRecognition} from "../types/SpeechRecognition";

export function useSpeechRecognition(): {
    transcript: string;
    listening: boolean;
    resetTranscript: () => void;
    listen: () => void;
} {
    const [transcript, setTranscript] = useState('');
    const [listening, setListening] = useState(false);
    const [recognition, setRecognition] = useState<SpeechRecognition | null>(
        null
    );

    useEffect(() => {
        if (!('webkitSpeechRecognition' in window)) return;

        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = event => {
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const result = event.results[i];
                if (result.isFinal) {
                    finalTranscript += result.item(0).transcript;
                }
            }
            setTranscript(finalTranscript);
        };

        setRecognition(recognition);
    }, []);

    const resetTranscript = useCallback(() => {
        setTranscript('');
        if (recognition) {
            recognition.abort();
        }
    }, [recognition]);

    const listen = useCallback(() => {
        if (!recognition) return;
        if (listening) {
            recognition.stop();
            setListening(false);
        } else {
            recognition.start();
            setListening(true);
        }
    }, [listening, recognition]);

    return { transcript, listening, resetTranscript, listen };
}
