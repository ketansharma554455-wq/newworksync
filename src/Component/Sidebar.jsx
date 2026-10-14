import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiCheckSquare,
  FiCalendar,
  FiUsers,
  FiBarChart2,
  FiMessageCircle,
  FiBell,
  FiFileText,
  FiSettings,
  FiLayers,
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", path: "/", icon: FiGrid },
  { name: "Projects", path: "/project", icon: FiFolder },
  { name: "Tasks", path: "/task", icon: FiCheckSquare },
  { name: "Calendar", path: "/calendar", icon: FiCalendar },
  { name: "Team", path: "/team", icon: FiUsers },
  { name: "Reports", path: "/report", icon: FiBarChart2 },
  { name: "Notifications", path: "/notification", icon: FiBell },
  { name: "Messages", path: "/message", icon: FiMessageCircle },
  { name: "Files", path: "/files", icon: FiFileText },
  { name: "Settings", path: "/setting", icon: FiSettings },
];

function Sidebar() {
  return (
    <aside className="flex min-h-full flex-col bg-slate-300 px-3 py-4">
      <div className="mb-5 flex items-center gap-2.5 px-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7665F8] to-[#4F41F1] text-white shadow-md shadow-indigo-200">
          <FiLayers size={19} />
        </div>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#302568]">
            WorkSync
          </h1>
          <p className="text-[9px] font-bold tracking-[1.7px] text-[#968ABF]">
            WORKSPACE
          </p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {menuItems.map(({ name, path, icon: Icon, count }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `group flex min-h-[38px] items-center gap-2.5 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#7665F8] to-[#7865F8] text-white shadow-md shadow-indigo-400"
                  : "text-[#302568] hover:bg-white hover:text-[#4F41F1]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={17} className="shrink-0" />
                <span className="flex-1">{name}</span>
                {count && (
                  <span
                    className={`flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#E9E4FF] text-[#6553D9]"
                    }`}
                  >
                    {count}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-3 border-t border-[#E8E1F5] px-2 pt-3">
        <p className="text-[10px] text-[#968ABF]">
          © 2026 WorkSync
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;