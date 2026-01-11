'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

// Sabitler
const API_URL = 'http://localhost:3001/auth/login';

export default function LoginPage() {
    // 1. State Tanımlamaları (Hataların çözümü burada)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 2. Giriş Mantığı ve Yönlendirme
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                // Bilgileri sakla
                // Giriş başarılı olduğunda
                localStorage.setItem('access_token', result.access_token); // Backend'den gelen isim
                localStorage.setItem('user', JSON.stringify(result.user));

                // 🚀 ROL TABANLI YÖNLENDİRME
                const userRole = result.user.role;

                if (userRole === 'admin') {
                    window.location.href = '/admin/dashboard'; 
                } else if (userRole === 'doctor') {
                    window.location.href = '/dashboard';
                } else {
                    window.location.href = '/';
                }
            } else {
                setError(result.message || 'Giriş yapılamadı. Bilgilerinizi kontrol edin.');
            }
        } catch (err) {
            setError('Sunucuya bağlanılamıyor. Backend çalışıyor mu?');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-100">
                
                <div className="flex flex-col items-center">
                    <LogIn className="w-8 h-8 text-indigo-600 mb-2" />
                    <h2 className="text-3xl font-bold text-gray-900">Giriş Yap</h2>
                    <p className="text-sm text-gray-500 mt-1">Panase Yönetim Sistemi</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-3 text-sm text-red-700 bg-red-100 rounded-md border border-red-300">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">E-posta</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="eposta@panase.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Şifre</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition duration-150 ${
                            loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-700 hover:bg-indigo-800'
                        }`}
                    >
                        {loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
                    </button>
                </form>
            </div>
        </div>
    );
}