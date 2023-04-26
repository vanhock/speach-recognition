import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Memo } from '../types/Memo';
import { getMemo, saveMemo } from '../services/storage';
import {MemoForm} from '../components/MemoForm';

export const MemoEditView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const memo: Memo | undefined = getMemo(id);

    if (!memo) {
        navigate('/memos');
        return null;
    }

    function handleSave(memo: Memo) {
        saveMemo(memo);
        navigate('/memos');
    }

    return (
        <div>
            <h1>Edit Memo</h1>
            <MemoForm onSubmit={handleSave} memo={memo} />
        </div>
    );
}
