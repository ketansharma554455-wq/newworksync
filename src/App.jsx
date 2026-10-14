import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Navbar from "./Component/Mainbar/Navbar";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden bg-[#F5F6FF]">
        <aside className="h-screen shrink-0 overflow-y-auto">
          <Sidebar />
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="sticky top-0 z-50 shrink-0">
            <Navbar />
          </div>
          <main className="min-h-0 flex-1 overflow-y-auto p-5 md:p-7">
            <AppRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;