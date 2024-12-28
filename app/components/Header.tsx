const Header = () => {
    return (
      <header className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          {/* Logo et Nom */}
          <h1 className="text-lg font-bold">
            <a href="#hero" className="hover:text-blue-400">
              Ornel Rony Diffo Tandjong
            </a>
          </h1>
  
          {/* Menu de navigation */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#hero"
                className="hover:underline hover:text-blue-400 transition-colors"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:underline hover:text-blue-400 transition-colors"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:underline hover:text-blue-400 transition-colors"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
  
          {/* Menu mobile */}
          <div className="md:hidden">
            <button
              id="menu-toggle"
              aria-label="Open menu"
              className="focus:outline-none hover:text-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
  