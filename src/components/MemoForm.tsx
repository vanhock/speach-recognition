import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeechRecognition } from '../utils/speechRecognition';
import { Memo } from '../types/Memo';

interface MemoFormProps {
    memo?: Memo;
    onSubmit: (memo: Memo) => void;
}

export const MemoForm: React.FC<MemoFormProps> = ({ memo, onSubmit }) => {
    const navigate = useNavigate();
    const [description, setDescription] = useState(memo?.description || '');
    const [isSaving, setIsSaving] = useState(false);
    const { transcript, resetTranscript, listen } = useSpeechRecognition();

    useEffect(() => {
        if (memo) {
            setDescription(memo.description);
        }
    }, [memo]);

    useEffect(() => {
        if (transcript) {
            setDescription(transcript);
        }
    }, [transcript])

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const handleSave = async () => {
        if (!description) {
            alert('Please enter a description');
            return;
        }

        setIsSaving(true);
        await onSubmit({
            id: memo?.id ?? `${Date.now()}`,
            description,
            createdAt: memo?.createdAt ?? new Date(),
            updatedAt: new Date(),
        });
        setIsSaving(false);
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleSpeechRecognition = () => {
        if (!transcript) {
            listen();
        } else {
            setDescription(transcript);
            resetTranscript();
        }
    };

    return (
        <div>
            <div>
                <textarea value={description} onChange={handleDescriptionChange} />
            </div>
            <div>
                <button onClick={handleSave} disabled={isSaving}>
                    Save
                </button>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSpeechRecognition}>Use Voice Input</button>
            </div>
        </div>
    );
};
