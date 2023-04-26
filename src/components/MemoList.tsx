import React from 'react';
import {MemoItem} from './MemoItem';
import { Memo } from '../types/Memo';

interface MemoListProps {
    memos: Memo[];
    onDelete: (id: string) => void;
}

export const MemoList:React.FC<MemoListProps> = ({ memos, onDelete }: MemoListProps) => {
    return (
        <ul>
            {memos.map(memo => (
                <MemoItem key={memo.id} memo={memo} onDelete={onDelete} />
            ))}
        </ul>
    );
}
