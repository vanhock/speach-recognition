import React, { useState, useEffect } from 'react';
import {MemoList} from '../components/MemoList';
import { Memo } from '../types/Memo';
import { getMemos, deleteMemo } from '../services/storage';

export const MemoListView: React.FC = () => {
    const [memos, setMemos] = useState<Memo[]>([]);

    useEffect(() => {
        setMemos(getMemos());
    }, []);

    function handleDelete(id: string) {
        deleteMemo(id);
        setMemos(memos.filter(memo => memo.id !== id));
    }

    return (
        <div>
            <h1>Memo List</h1>
            <MemoList memos={memos} onDelete={handleDelete} />
            <a href="/memos/new">New Memo</a>
        </div>
    );
}
