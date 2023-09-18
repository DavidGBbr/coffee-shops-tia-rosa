const Header = () => {
  return (
    <header className="bg-primary text-white py-4 px-2">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row">
        <a href="/">
          <span className="text-2xl font-bold italic">
            Coffee Shops Tia Rosa
          </span>
        </a>
        <nav className="mt-5 sm:m-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#about">
                <span className="hover:text-secondary">Sobre nós</span>
              </a>
            </li>
            <li>
              <a href="#menu">
                <span className="hover:text-secondary">Menu</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className="hover:text-secondary">Contato</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
