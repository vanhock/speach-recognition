import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { Memo } from '../types/Memo';
import { getMemo } from '../services/storage';

export const MemoView: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const memo: Memo | undefined = getMemo(id);

    if (!memo) {
        navigate('/memos');
        return null;
    }

    return (
        <div>
            <h1>{memo.description}</h1>
            <a href={`/memos/${id}/edit`}>Edit</a>
        </div>
    );
}
