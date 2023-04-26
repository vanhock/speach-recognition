import React from 'react';
import { MemoItem } from './MemoItem';
import { Memo } from '../types/Memo';

interface MemoListProps {
  memos: Memo[];
  onDelete: (id: string) => void;
}

export const MemoList: React.FC<MemoListProps> = ({
  memos,
  onDelete,
}: MemoListProps) => {
  return (
    <ul className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'}>
      {memos.map((memo, index) => (
        <MemoItem index={index} key={memo.id} memo={memo} onDelete={onDelete} />
      ))}
    </ul>
  );
};
