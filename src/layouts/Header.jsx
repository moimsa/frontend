import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header_wrap ${isSticky ? 'sticky' : ''}`}>
      <header>
        <div className="inner">
          <h1 className="navi__main--logo">
            <Link to="/">moimsa</Link>
          </h1>
          <div
            className="nav-btn"
            onClick={toggleNav}
          >
            <div className="btn-bar menu"></div>
            <div className="btn-bar menu"></div>
            <div className="btn-bar menu"></div>
            <div className="btn-bar close"></div>
            <div className="btn-bar close"></div>
          </div>
          <nav className={`navi__comtent ${isNavOpen ? 'active' : ''}`}>
            <ul className="navi__list">
              <li className="navi__item">
                <Link>공지사항 작성</Link>
              </li>
              <li className="navi__item">
                <Link>모임공지사항 작성</Link>
              </li>
              <li className="navi__item">
                <Link>권한임명</Link>
              </li>
              <li className="navi__item">
                <Link>공지사항 게시물</Link>
              </li>
              <li className="navi__item">
                <Link>모임공지 게시물</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
