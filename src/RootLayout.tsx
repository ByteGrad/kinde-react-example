import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg-zinc-200 min-h-screen flex">
      <div className="flex-[1] bg-zinc-900 text-white/80">
        <ul className="w-full flex flex-col items-center pt-5 gap-2">
          <li className="w-[90%] h-[48px] block rounded text-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-full h-full block leading-[48px] ${
                  isActive ? "bg-white/[8%]" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="w-[90%] h-[48px] block rounded text-center">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `w-full h-full block leading-[48px] ${
                  isActive ? "bg-white/[8%]" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>

      <main className="flex-[3] flex flex-col pt-10 items-center">
        <Outlet />
      </main>
    </div>
  );
}
