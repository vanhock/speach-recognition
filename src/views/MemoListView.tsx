import React, { useState, useEffect } from 'react';
import { MemoList } from '../components/MemoList';
import { Memo } from '../types/Memo';
import { getMemos, deleteMemo } from '../services/storage';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { H1 } from '../components/H1';

export const MemoListView: React.FC = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setMemos(getMemos());
  }, []);

  const handleDelete = (id: string) => {
    deleteMemo(id);
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  const handleNewMemo = () => {
    navigate('/memos/new');
  };

  return (
    <div>
      <H1>Memo List</H1>
      <MemoList memos={memos} onDelete={handleDelete} />
      <Button className={'mt-5'} onClick={handleNewMemo}>New Memo</Button>
    </div>
  );
};
