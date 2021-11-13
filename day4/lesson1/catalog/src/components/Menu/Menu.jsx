import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const links = [
  { key: 1, title: 'Главная', url: '/' },
  { key: 2, title: 'О нас', url: '/about' },
  { key: 3, title: 'Контакты', url: '/contact' },
  { key: 4, title: 'Каталог', url: '/catalog' },
];

const Menu = () => {
  return (
    <nav className="menu-wrapper">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.key}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          );
        })}
        {/* {<li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/contact">Контакты</Link>
        </li>
        <li>
          <Link to="/catalog">Каталог</Link>
        </li>} */}
      </ul>
    </nav>
  );
};

export default Menu;
