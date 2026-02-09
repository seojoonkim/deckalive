import { useState } from 'react';
import type { Card } from '../types/card';
import { useTranslation } from '../stores/language-store';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: number;
}

interface Props {
  card: Card;
}

// 임시 더미 댓글 (실제로는 서버에서 가져와야 함)
const dummyComments: Record<string, Comment[]> = {
  'pikachu-illustrator': [
    { id: '1', author: 'TCGCollector', content: '세상에서 가장 갖고 싶은 카드! 언젠간 꼭...', timestamp: Date.now() - 86400000 },
    { id: '2', author: 'ArtLover', content: '일러스트가 정말 아름답네요', timestamp: Date.now() - 172800000 },
  ],
  'black-lotus': [
    { id: '1', author: 'MTGVeteran', content: 'Alpha Black Lotus... 전설 그 자체', timestamp: Date.now() - 86400000 },
  ],
  'charizard-1st': [
    { id: '1', author: 'Pokemon90s', content: '어린 시절 로망이었어요 ㅠㅠ', timestamp: Date.now() - 43200000 },
    { id: '2', author: 'CardHunter', content: 'PSA 10 꿈에서라도 갖고 싶다', timestamp: Date.now() - 129600000 },
  ],
};

export default function CommentsTab({ card }: Props) {
  const { t } = useTranslation();
  const [comments, setComments] = useState<Comment[]>(dummyComments[card.id] || []);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `c-${Date.now()}`,
      author: author.trim() || 'Anonymous',
      content: newComment.trim(),
      timestamp: Date.now(),
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setAuthor('');
  };

  const formatTime = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

  return (
    <div className="p-4 space-y-6">
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-5 space-y-4">
        <h2 className="text-lg font-bold text-white">{t.comments.title}</h2>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-all"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={t.comments.placeholder}
          rows={3}
          className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50 transition-all resize-none"
        />
        <button
          type="submit"
          disabled={!newComment.trim()}
          className="btn-primary px-6 py-2 rounded-xl disabled:opacity-50"
        >
          {t.comments.submit}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="glass-dark rounded-2xl p-8 text-center">
            <p className="text-gray-500">{t.comments.empty}</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="glass-dark rounded-2xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-white">{comment.author}</span>
                <span className="text-xs text-gray-500">{formatTime(comment.timestamp)}</span>
              </div>
              <p className="text-gray-300">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
