interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}

interface SpeechRecognitionResult {
    isFinal: boolean;
    readonly length: number;
    item: (index: number) => SpeechRecognitionAlternative;
}

interface SpeechRecognition {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start: () => void;
    stop: () => void;
    onresult: (event: {
        resultIndex: number;
        results: SpeechRecognitionResult[] }) => void;
    onerror: (event: any) => void;
    abort: () => void;
}

declare global {
    interface Window {
        webkitSpeechRecognition: new () => SpeechRecognition;
    }
    interface SpeechRecognitionEvent extends Event {
        resultIndex: number;
        results: SpeechRecognitionResultList;
    }
    interface SpeechRecognitionResultList extends ArrayLike<SpeechRecognitionResult> {
        readonly length: number;
        item(index: number): SpeechRecognitionResult;
    }
}

export type {
    SpeechRecognition
};
