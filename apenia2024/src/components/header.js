const Header = () => {
  return (
    <header className="fixed top-0 z-50 left-0 w-full h-20 bg-secondary px-6 overflow-hidden flex justify-between">
      <div className="py-6 h-full flex items-center">
        <img src="/images/logo-a.svg" alt="Apenia.com" className="h-12" />
      </div>
      <nav className="hidden h-full ">
        <ul className="text-black flex h-full items-center font-bold">
          <li className="ml-6">
            <a href="#">Customer</a>
          </li>
          <li className="ml-6">
            <a href="#">Company</a>
          </li>
          <li className="ml-6">
            <a href="#">Invest in Business</a>
          </li>
          <li className="ml-6">
            <a href="#">Sign In</a>
          </li>
          <li className="ml-8 bg-primary text-white px-8 py-1.5 rounded-full">
            <a href="#"> Apply </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
