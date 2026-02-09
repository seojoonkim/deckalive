import { useEffect, useState } from 'react';
import AdminLayout from '../components/admin/AdminLayout';

const ADMIN_PASSWORD = 'admin';

function AdminGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // Check sessionStorage for existing auth
  useEffect(() => {
    if (sessionStorage.getItem('deckalive-admin-auth') === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('deckalive-admin-auth', 'true');
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      </div>
      
      <form
        onSubmit={handleSubmit}
        className="relative glass-card rounded-2xl p-8 w-full max-w-sm"
      >
        <div className="text-center mb-6">
          <span className="text-4xl mb-3 block">🃏</span>
          <h1 className="text-2xl font-bold gradient-text">
            DeckAlive Admin
          </h1>
          <p className="text-gray-500 text-sm mt-2">비밀번호를 입력하세요</p>
        </div>

        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="비밀번호"
          autoFocus
          className={`w-full px-4 py-3 rounded-xl bg-gray-900 border ${
            error ? 'border-red-500' : 'border-gray-700'
          } text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
        />

        {error && (
          <p className="text-red-400 text-xs mt-2">비밀번호가 틀렸습니다.</p>
        )}

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-500 hover:to-pink-500 transition-all hover:shadow-lg hover:shadow-purple-500/25"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default function AdminPage() {
  return (
    <AdminGate>
      <AdminLayout />
    </AdminGate>
  );
}
