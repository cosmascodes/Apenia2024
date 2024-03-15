const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-white px-6 overflow-hidden border-b border-blue-200 flex justify-between">
      <div className="py-6 h-full flex items-center">
        <img src="/images/logo-a.svg" alt="Apenia.com" className="h-12" />
      </div>
      <nav className="h-full ">
        <ul className="text-black flex h-full items-center font-bold">
          <li className="ml-6">
            <a href="#">Link 1</a>
          </li>
          <li className="ml-6">
            <a href="#">Link 2</a>
          </li>
          <li className="ml-6">
            <a href="#">Link 3</a>
          </li>
          <li className="ml-6">
            <a href="#">Link 4</a>
          </li>
          <li className="ml-8 bg-primary text-white px-8 py-1.5 rounded-full">
            <a href="#">Link 4</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
