import React from 'react';
import { Link } from 'react-router-dom';
import { Memo } from '../types/Memo';

interface MemoItemProps {
    memo: Memo;
    onDelete: (id: string) => void;
}

export const MemoItem: React.FC<MemoItemProps> = ({ memo, onDelete }: MemoItemProps) => {
    function handleDeleteClick() {
        onDelete(memo.id);
    }

    return (
        <li>
            <Link to={`/memos/${memo.id}`}>
                <h3>{memo.description}</h3>
            </Link>
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    );
}
