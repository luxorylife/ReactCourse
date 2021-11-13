import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">Sass i</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/blog">Блог</Link>
            </li>
            <li>
              <Link to="/add">Написать пасту</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{props.children}</main>

      <footer className="footer">
        <div className="end">Падва сайта</div>
      </footer>
    </div>
  );
};

export default Layout;
