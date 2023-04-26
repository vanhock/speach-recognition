import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Memo } from '../types/Memo';
import { saveMemo } from '../services/storage';
import { MemoForm } from '../components/MemoForm';
import { H1 } from '../components/H1';

export const MemoNewView: React.FC = () => {
  const navigate = useNavigate();

  const handleSave = (memo: Memo) => {
    saveMemo(memo);
    navigate('/memos');
  }

  return (
    <div>
      <H1>New Memo</H1>
      <MemoForm onSubmit={handleSave} />
    </div>
  );
};
