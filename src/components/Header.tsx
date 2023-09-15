import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 px-2">
      <div className="container mx-auto flex justify-between items-center flex-col sm:flex-row">
        <Link href="/">
          <span className="text-2xl font-bold italic">
            Coffee Shops Tia Rosa
          </span>
        </Link>
        <nav className="mt-5 sm:m-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/menu">
                <span className="hover:text-gray-400">Menu</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="hover:text-gray-400">Sobre nós</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-gray-400">Contato</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
