import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Memo } from '../types/Memo';
import { saveMemo } from '../services/storage';
import {MemoForm} from '../components/MemoForm';

export const MemoNewView: React.FC = () => {
    const navigate = useNavigate();

    function handleSave(memo: Memo) {
        saveMemo(memo);
        navigate('/memos');
    }

    return (
        <div>
            <h1>New Memo</h1>
            <MemoForm onSubmit={handleSave} />
        </div>
    );
}
