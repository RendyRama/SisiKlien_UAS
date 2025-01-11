import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Bencana = () => {
    const [data, setData] = useState([]); // Data bencana
    const [form, setForm] = useState({ 
        nama_gunung: '', 
        status_aktivitas: '', 
        rekomendasi: '', 
        laporan: '' 
    }); // Form data
    const [editId, setEditId] = useState(null); // ID untuk edit
    const [showForm, setShowForm] = useState(false); // Tampilkan form
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            console.error('Token tidak ditemukan. Arahkan ke halaman login.');
            navigate('/login'); 
        }
    }, [navigate]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            nama_gunung: form.nama_gunung,
            status_aktivitas: form.status_aktivitas,
            rekomendasi: form.rekomendasi,
            laporan: form.laporan,
        };
        try {
            if (editId) {
                const response = await axios.put(`http://localhost:5000/api/bencana/${editId}`, payload);
                setData(data.map((item) => (item.id === editId ? response.data : item)));
            } else {
                const response = await axios.post(`http://localhost:5000/api/bencana`, payload);
                setData([...data, response.data]);
            }
            setForm({ nama_gunung: '', status_aktivitas: '', rekomendasi: '', laporan: '' });
            setEditId(null);
            setShowForm(false); // Sembunyikan form setelah submit
        } catch (error) {
            console.error('Error submitting data:', error.response?.data || error.message);
            if (error.response?.status === 401) {
                navigate('/login');
            }
        }
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setForm({ 
            nama_gunung: item.nama_gunung, 
            status_aktivitas: item.status_aktivitas, 
            rekomendasi: item.rekomendasi, 
            laporan: item.laporan 
        });
        setShowForm(true); 
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/bencana/${id}`);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error.response?.data || error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/bencana');
                setData(response.data || []);
            } catch (error) {
                console.error('Error fetching data:', error.response?.data || error.message);
                if (error.response?.status === 401) {
                    navigate('/login');
                }
            }
        };
        fetchData();
    }, [navigate]);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Data Kebencanaan Gunung Merapi</h1>
            
            {/* Tombol Tambah */}
            <button 
                onClick={() => {
                    setShowForm(true); 
                    setForm({ nama_gunung: '', status_aktivitas: '', rekomendasi: '', laporan: '' }); 
                    setEditId(null);
                }}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Tambah Gunung
            </button>
            
            {/* Form Tambah / Edit */}
            {showForm && (
                <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded shadow-md bg-white">
                    <div className="mb-4">
                        <label htmlFor="nama_gunung" className="block text-sm font-medium text-gray-700">Nama Gunung:</label>
                        <input
                            type="text"
                            name="nama_gunung"
                            value={form.nama_gunung}
                            onChange={handleInput}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status_aktivitas" className="block text-sm font-medium text-gray-700">Status Aktivitas:</label>
                        <select
                            name="status_aktivitas"
                            value={form.status_aktivitas}
                            onChange={handleInput}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="" disabled>Pilih Status</option>
                            <option value="Normal">Normal</option>
                            <option value="Waspada">Waspada</option>
                            <option value="Siaga">Siaga</option>
                            <option value="Awas">Awas</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="rekomendasi" className="block text-sm font-medium text-gray-700">Rekomendasi:</label>
                        <textarea
                            name="rekomendasi"
                            value={form.rekomendasi}
                            onChange={handleInput}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="laporan" className="block text-sm font-medium text-gray-700">Laporan:</label>
                        <textarea
                            name="laporan"
                            value={form.laporan}
                            onChange={handleInput}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                            {editId ? 'Update' : 'Tambah'}
                        </button>
                        <button 
                            type="button" 
                            onClick={() => setShowForm(false)} 
                            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                        >
                            Tutup
                        </button>
                    </div>
                </form>
            )}

            {/* Tabel Data */}
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Nama Gunung</th>
                        <th className="py-2 px-4 border-b">Status Aktivitas</th>
                        <th className="py-2 px-4 border-b">Rekomendasi</th>
                        <th className="py-2 px-4 border-b">Laporan</th>
                        <th className="py-2 px-4 border-b">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(data) && data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b">{item.id}</td>
                            <td className="py-2 px-4 border-b">{item.nama_gunung}</td>
                            <td className="py-2 px-4 border-b">{item.status_aktivitas}</td>
                            <td className="py-2 px-4 border-b">{item.rekomendasi}</td>
                            <td className="py-2 px-4 border-b">{item.laporan}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="px-2 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Bencana;
