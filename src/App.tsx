import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MemoListView} from './views/MemoListView';
import {MemoView} from './views/MemoView';
import {MemoEditView} from './views/MemoEditView';
import {MemoNewView} from './views/MemoNewView';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MemoListView />} />
                <Route path="/memos/new" element={<MemoNewView />} />
                <Route path="/memos/:id" element={<MemoView />} />
                <Route path="/memos/:id/edit" element={<MemoEditView />} />
            </Routes>
        </BrowserRouter>
    );
};
