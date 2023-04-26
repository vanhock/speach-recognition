import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpeechRecognition } from '../utils/speechRecognition';
import { Memo } from '../types/Memo';
import { Button } from '../components/Button';
import { TextArea } from '../components/TextArea';

interface MemoFormProps {
  memo?: Memo;
  onSubmit: (memo: Memo) => void;
}

export const MemoForm: React.FC<MemoFormProps> = ({ memo, onSubmit }) => {
  const navigate = useNavigate();
  const [description, setDescription] = useState(memo?.description || '');
  const [isSaving, setIsSaving] = useState(false);
  const { transcript, resetTranscript, listen, listening } = useSpeechRecognition();

  useEffect(() => {
    if (memo) {
      setDescription(memo.description);
    }
  }, [memo]);

  useEffect(() => {
    if (transcript) {
      setDescription(transcript);
    }
  }, [transcript]);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSave = () => {
    if (!description) {
      alert('Please enter a description');
      return;
    }

    setIsSaving(true);
    onSubmit({
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
    listen(); // toggle listening
    if (transcript) {
      setDescription(transcript);
      resetTranscript();
    }
  };

  return (
    <div>
      <div>
        <TextArea value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="flex mt-5">
        <Button className={'mr-2 bg-red-500 hover:bg-red-600'} onClick={handleSpeechRecognition}>
          {listening ? 'Stop listening' : 'Use Voice Input' }
        </Button>
        <Button className={'mr-2'} onClick={handleSave} disabled={isSaving}>
          Save
        </Button>
        <Button className={'mr-2 bg-gray-400 hover:bg-gray-500 text-white'} onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
