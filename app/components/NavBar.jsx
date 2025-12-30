import { navLinks } from "../constants/index";

const NavBar = () => {
  return (
    <header className="m-4">
      <nav>
        {/* <img src="/logo.svg" alt="Apple logo" /> */}

        <ul className="flex flex-row items-center justify-center gap-4">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>{/* <img src="/search.svg" alt="Search" /> */}</button>{" "}
          <button>{/* <img src="/cart.svg" alt="Cart" /> */}</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
