import React from 'react';
import { Link } from 'react-router-dom';
import { Memo } from '../types/Memo';
import {OutlineButton} from "../components/OutlineButton";

interface MemoItemProps {
  index: number,
  memo: Memo;
  onDelete: (id: string) => void;
}

export const MemoItem: React.FC<MemoItemProps> = ({
    index,
  memo,
  onDelete,
}: MemoItemProps) => {
  function handleDeleteClick() {
    onDelete(memo.id);
  }

  return (
    <li
      className={
        'bg-white rounded-lg shadow-md p-4 flex flex-col justify-between'
      }
    >
      <Link to={`/memos/${memo.id}`}>
        <div className={'text-lg'}>
          <div className={'font-bold'}>#{index + 1}</div> {memo.description}
        </div>
      </Link>
      <OutlineButton className={'mt-2'} onClick={handleDeleteClick}>Delete</OutlineButton>
    </li>
  );
};
