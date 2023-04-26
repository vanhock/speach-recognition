import { Memo } from '../types/Memo';

const MEMO_STORAGE_KEY = 'memos';

function getMemos(): Memo[] {
  const memosString = localStorage.getItem(MEMO_STORAGE_KEY);
  if (!memosString) {
    return [];
  }
  return JSON.parse(memosString);
}

function getMemo(id: string | undefined): Memo | undefined {
  const memos = getMemos();
  return memos.find((memo) => memo.id === id);
}

function saveMemo(memo: Memo) {
  const memos = getMemos();
  const index = memos.findIndex((m) => m.id === memo.id);
  if (index === -1) {
    memos.push(memo);
  } else {
    memos[index] = memo;
  }
  localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(memos));
}

function deleteMemo(id: string) {
  const memos = getMemos();
  const newMemos = memos.filter((memo) => memo.id !== id);
  localStorage.setItem(MEMO_STORAGE_KEY, JSON.stringify(newMemos));
}

export { getMemos, getMemo, saveMemo, deleteMemo };
