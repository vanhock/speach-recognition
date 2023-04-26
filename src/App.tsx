import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MemoListView } from './views/MemoListView';
import { MemoView } from './views/MemoView';
import { MemoNewView } from './views/MemoNewView';

export const App: React.FC = () => {
  return (
    <div className={'flex justify-center h-full'}>
      <div
        className={
          'flex items-center justify-center rounded-lg p-8 m-9 drop-shadow-2xl min-w-[50%] min-h-[50%]'
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MemoListView />} />
            <Route path="/memos/new" element={<MemoNewView />} />
            <Route path="/memos/:id" element={<MemoView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
