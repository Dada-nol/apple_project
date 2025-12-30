import Image from "next/image";
import { navLinks } from "../constants/index";

const NavBar = () => {
  return (
    <header className="mt-4 mx-[60px]">
      <nav className="flex justify-between items-center">
        {<img src="/logo.svg" alt="Apple logo" />}

        <ul className="flex flex-row items-center justify-center gap-4">
          {navLinks.map(({ label }) => (
            <li
              key={label}
              className="hover:text-white text-sm font-light text-gray-400"
            >
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <button>
            <Image src="/search.svg" alt="Search" width={24} height={24} />
          </button>
          <button>
            <Image src="/cart.svg" alt="Cart" width={24} height={24} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
