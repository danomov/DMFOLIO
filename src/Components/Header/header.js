import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { data } from "../../Static";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { headerList } = data;

  const handleViewUpdate = useCallback(() => {
    const viewport = window.innerWidth;
    viewport < 992 ? setIsMobile(true) : setIsMobile(false);
  }, [setIsMobile]);

  const handleLoadNavigationMenu = useCallback(() => {
    const navMenu = document.querySelector("nav");
    if (navMenu && isMobile)
      setTimeout(() => (navMenu.style.display = "initial"), 500);
  }, [isMobile]);

  useEffect(() => {
    handleViewUpdate();
    handleLoadNavigationMenu();
    window.addEventListener("resize", handleViewUpdate);
    return () => {
      window.removeEventListener("resize", handleViewUpdate);
    };
  }, [handleLoadNavigationMenu, handleViewUpdate]);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <Link to="/" id="logo" />
      <nav
        className={`${isMobile ? "mobile-menu" : ""} ${
          isMenuOpen && isMobile ? "open" : ""
        }`}
      >
        <ul>
          {headerList.map((headerEl) => (
            <li>
              <a href={`/#${headerEl.toLowerCase()}`}>{headerEl}</a>
            </li>
          ))}
        </ul>
      </nav>
      {isMobile && (
        <button className="menu-button" onClick={handleToggleMenu} />
      )}
    </header>
  );
}
