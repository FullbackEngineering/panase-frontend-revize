// src/app/dashboard/hastalar/page.tsx

'use client';

import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useState, useEffect, FormEvent } from 'react';
import { User, Mail, Phone, CalendarDays, PlusCircle, NotepadText, XCircle } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth?: string; // API'den string olarak gelebilir
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

const API_URL = 'http://localhost:3001/clients'; // Backend Clients API adresi

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Yeni hasta ekleme formu state'leri
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [newClientName, setNewClientName] = useState('');
  const [newClientEmail, setNewClientEmail] = useState('');
  const [newClientPhone, setNewClientPhone] = useState('');
  const [newClientDateOfBirth, setNewClientDateOfBirth] = useState('');
  const [newClientNotes, setNewClientNotes] = useState('');
  const [isAddingClient, setIsAddingClient] = useState(false);
  const [addClientError, setAddClientError] = useState<string | null>(null);
  const [addClientSuccess, setAddClientSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchClients();
  }, []);

  // 🚨 GÜNCELLENDİ: Tüm hastaları çeken fonksiyon (Gerçek API)
  const fetchClients = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        throw new Error('Oturum bulunamadı. Lütfen tekrar giriş yapın.');
      }

      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        window.location.href = '/auth/login'; // Token geçersizse login sayfasına yönlendir
        return;
      }
      if (!response.ok) {
        throw new Error('Danışanlar çekilemedi.');
      }

      const data: Client[] = await response.json();
      setClients(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu.');
    } finally {
      setIsLoading(false);
    }
  };

  // 🚨 YENİ: Yeni hasta ekleme formu gönderme fonksiyonu (Gerçek API)
  const handleAddClient = async (e: FormEvent) => {
    e.preventDefault();
    setIsAddingClient(true);
    setAddClientError(null);
    setAddClientSuccess(null);

    // Basit frontend doğrulaması
    if (!newClientName || !newClientEmail) {
      setAddClientError("Ad ve E-posta zorunludur.");
      setIsAddingClient(false);
      return;
    }

    const token = localStorage.getItem('access_token');
    if (!token) {
      setAddClientError("Oturum bulunamadı. Lütfen tekrar giriş yapın.");
      setIsAddingClient(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: newClientName,
          email: newClientEmail,
          phone: newClientPhone || null, // Boşsa null gönder
          dateOfBirth: newClientDateOfBirth || null, // Boşsa null gönder
          notes: newClientNotes || null, // Boşsa null gönder
        })
      });

      const result = await response.json();

      if (response.ok) {
        setAddClientSuccess("Yeni danışan başarıyla eklendi!");
        // Formu temizle
        setNewClientName('');
        setNewClientEmail('');
        setNewClientPhone('');
        setNewClientDateOfBirth('');
        setNewClientNotes('');
        setShowAddClientForm(false); // Formu kapat
        fetchClients(); // Listeyi güncelle
      } else {
        setAddClientError(result.message || "Danışan eklenirken bir hata oluştu.");
      }
    } catch (err) {
      setAddClientError("Sunucuya bağlanılamıyor.");
    } finally {
      setIsAddingClient(false);
    }
  };

  return (
    <div className="p-8">
      <DashboardHeader title="Hastalarım" />

      {/* "Yeni Hasta Ekle" Butonu */}
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setShowAddClientForm(!showAddClientForm)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" /> Yeni Hasta Ekle
        </button>
      </div>

      {/* Yeni Hasta Ekle Formu */}
      {showAddClientForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Yeni Danışan Ekle</h3>
          <form onSubmit={handleAddClient} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addClientSuccess && (
              <div className="md:col-span-2 mb-4 bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg">
                {addClientSuccess}
              </div>
            )}
            {addClientError && (
              <div className="md:col-span-2 mb-4 bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg">
                {addClientError}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad Soyad</label>
              <input type="text" id="name" value={newClientName} onChange={(e) => setNewClientName(e.target.value)} required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
              <input type="email" id="email" value={newClientEmail} onChange={(e) => setNewClientEmail(e.target.value)} required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
              <input type="tel" id="phone" value={newClientPhone} onChange={(e) => setNewClientPhone(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Doğum Tarihi</label>
              <input type="date" id="dateOfBirth" value={newClientDateOfBirth} onChange={(e) => setNewClientDateOfBirth(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notlar</label>
              <textarea id="notes" rows={3} value={newClientNotes} onChange={(e) => setNewClientNotes(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddClientForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={isAddingClient}
                className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white transition-colors ${
                  isAddingClient ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {isAddingClient ? 'Ekleniyor...' : 'Hasta Ekle'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Danışan Listesi */}
      {isLoading && <div className="text-center p-10 text-gray-500">Danışanlar yükleniyor...</div>}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p className="font-bold">Hata!</p>
          <p>{error}</p>
        </div>
      )}
      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.length === 0 ? (
            <p className="p-10 text-gray-500 col-span-3 text-center">Henüz kayıtlı danışan bulunamadı.</p>
          ) : (
            clients.map((client) => (
              <div key={client.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <div className="flex items-center space-x-3 mb-3">
                  <User className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center"><Mail className="w-4 h-4 mr-2 text-gray-400" /> {client.email}</p>
                  <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-gray-400" /> {client.phone || 'Belirtilmemiş'}</p>
                  {client.dateOfBirth && (
                    <p className="flex items-center">
                      <CalendarDays className="w-4 h-4 mr-2 text-gray-400" /> 
                      {format(new Date(client.dateOfBirth), 'dd MMMM yyyy', { locale: tr })}
                    </p>
                  )}
                  {client.notes && (
                    <p className="flex items-start"><NotepadText className="w-4 h-4 mr-2 mt-1 text-gray-400" /> {client.notes}</p>
                  )}
                  <p className="text-xs text-gray-400 pt-2">
                    Kayıt Tarihi: {format(new Date(client.createdAt), 'dd.MM.yyyy HH:mm', { locale: tr })}
                  </p>
                </div>
                {/* 🚨 İleride düzenleme/silme butonları buraya eklenebilir */}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}