import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <aside className="w-64 bg-green-600 text-white">
        <div className="p-4">
          <h1 className="ml-4 mb-4 text-2xl font-bold">Aplikasi <br></br> Data Gunung Merapi</h1>
          <nav className="ml-4 mt-2">
            <ul>
              <li className="hover:bg-green-500 rounded mb-2">
                <a href="/main">Dashboard</a>
              </li>
              <li className="hover:bg-green-500 rounded mb-2">
                <a href="/main/bencana">Data Bencana</a>
              </li>
              <li className="hover:bg-green-500 rounded">
                <a href="/">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex flex-1 flex-col bg-green-50">
        <header className="bg-white shadow p-4">
          <div className="flex justify-end">
            <a href="/"><button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">
              Logout
            </button></a>
          </div>
        </header>
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <footer className="bg-green-700 p-4 text-white text-center">
          &copy; Admin Rendy Ramadhan
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
