import Gunung1 from '/src/assets/gunung1.jpg'; 

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard Kebencanaan</h1>

      {/* Berita Terkini */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Berita Terkini</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded shadow">
            <p>[BERITA] Gunung Merapi Status Siaga, Warga Diimbau Waspada</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <p>[BERITA] Erupsi Gunung Semeru, Pemerintah Siapkan Evakuasi</p>
          </div>
        </div>
      </div>

      {/* Peta Lokasi */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Peta Lokasi Gunung Aktif</h2>
        <div className="p-4 bg-gray-100 rounded shadow">
          <img
            src={Gunung1}
            alt="Peta Lokasi Gunung Aktif"
            className="rounded"
          />
          <p className='text-sm mt-2 font-bold'>Gunung Rinjani</p>
          <p className="text-sm mt-2 text-gray-600">
            Peta ini menunjukkan lokasi gunung aktif di Indonesia. Data ini bersifat sementara.
          </p>
        </div>
      </div>

        <div className="mt-6">
        <div className="p-4 bg-gray-100 rounded shadow">
          <img
            src={Gunung1}
            alt="Peta Lokasi Gunung Aktif"
            className="rounded"
          />
          <p className='text-sm mt-2 font-bold'>Gunung Rinjani</p>
          <p className="text-sm mt-2 text-gray-600">
            Peta ini menunjukkan lokasi gunung aktif di Indonesia. Data ini bersifat sementara.
          </p>
        </div>
      </div>

      {/* Data Gunung */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 mt-6">Data Gunung</h2>
        <div className="grid grid-cols-1 gap-4">
          <a href="/main/bencana">
            <button className="w-full p-4 bg-green-600 text-white rounded shadow hover:bg-green-700">
              Data Gunung Aktif
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
