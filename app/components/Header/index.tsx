import { FC } from "react";
import { logo, title } from "@/ublog.config";
import Link from "next/link";
import Login from "./Login";

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href="/" className="font-bold text-xl flex gap-2">
        <div className="w-8 rounded-full bg-white">
          <img src={logo} alt="" />
        </div>
        {title}
      </Link>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
      <Login />
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
