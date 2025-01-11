import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../Pages/Redux/AuthSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Debugging: Tampilkan Redux state user di konsol
  console.log("Redux state di MainLayout:", user);

  const handleLogout = () => {
    // Dispatch logout ke Redux
    dispatch(logout());

    // Hapus token dari localStorage
    localStorage.removeItem("auth_token");

    // Tampilkan notifikasi logout berhasil
    Swal.fire({
      icon: "success",
      title: "Logout Berhasil",
    }).then(() => {
      navigate("/"); // Arahkan ke halaman login
    });
  };

  return (
    <div className="flex flex-row min-h-screen">
      <aside className="w-64 bg-green-600 text-white">
        <div className="p-4">
          <h1 className="ml-4 mb-4 text-2xl font-bold">
            Aplikasi <br />
            Data Gunung Merapi
          </h1>
          <nav className="ml-4 mt-2">
            <ul>
              <li className="hover:bg-green-500 rounded mb-2">
                <a href="/main">Dashboard</a>
              </li>
              <li className="hover:bg-green-500 rounded mb-2">
                <a href="/main/bencana">Data Bencana</a>
              </li>
              <li className="hover:bg-green-500 rounded">
                <button onClick={handleLogout} className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="flex flex-1 flex-col bg-green-50">
        <header className="bg-white shadow p-4">
          <div className="flex justify-end">
            <p>
              Welcome, {user?.name || "Guest"} ({user?.email || "No Email"})
            </p>
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 ml-4"
            >
              Logout
            </button>
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

export default MainLayout;
