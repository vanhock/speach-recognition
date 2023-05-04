import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Memo } from '../types/Memo';
import { getMemo, saveMemo } from '../services/storage';
import { H1 } from '../components/H1';
import { MemoForm } from '../components/MemoForm';

export const MemoView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const memo: Memo | undefined = getMemo(id);

  if (!memo) {
    window.location.href = '/'
    return null;
  }

  const handleSave = (memo: Memo) => {
    saveMemo(memo);
    navigate('/memos');
  }

  return (
    <div>
      <H1>Edit Memo</H1>
      <MemoForm onSubmit={handleSave} memo={memo} />
    </div>
  );
};
