import React from 'react';

const navItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Contact Us" }
];

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">LOGO</h1>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300">{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
