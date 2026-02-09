import { useState } from 'react';
import type { Card } from '../types/card';
import { useChatStore } from '../stores/chat-store';

interface Props {
  card: Card;
}

export default function CommentsTab({ card }: Props) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const { getComments, addComment } = useChatStore();
  
  const comments = getComments(card.id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    addComment({
      id: `comment-${Date.now()}`,
      cardId: card.id,
      author: author.trim() || '익명',
      content: content.trim(),
      timestamp: Date.now()
    });
    
    setContent('');
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('ko-KR', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
      {/* Comments List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">💭</p>
            <p className="text-gray-400 mt-2">아직 댓글이 없습니다</p>
            <p className="text-gray-500 text-sm mt-1">첫 번째 댓글을 남겨보세요!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-900 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  {(comment.author[0] || '?').toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{comment.author}</p>
                  <p className="text-gray-500 text-xs">{formatTime(comment.timestamp)}</p>
                </div>
              </div>
              <p className="text-gray-300 pl-10">{comment.content}</p>
            </div>
          ))
        )}
      </div>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 space-y-3">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="닉네임 (선택)"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 text-sm"
        />
        <div className="flex gap-2">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`${card.nameKo}에 대한 의견을 남겨보세요...`}
            rows={2}
            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 resize-none"
          />
          <button
            type="submit"
            disabled={!content.trim()}
            className="self-end bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}
