"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { portfolioModules } from "../app/portfolio/portfolio-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setPortfolioOpen(false);
  };

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileOpen);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <div className="site-nav-bar">
          <button
            type="button"
            className={`nav-toggle ${mobileOpen ? "is-open" : ""}`}
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((current) => !current)}
          >
            Menu
          </button>
        </div>

        <button
          type="button"
          className={`nav-backdrop ${mobileOpen ? "is-open" : ""}`}
          aria-label="Close navigation"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={closeMobileMenu}
        />

        <div id="primary-navigation" className={`site-nav-links ${mobileOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
          <div className={`nav-dropdown ${portfolioOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="nav-link nav-summary"
              aria-expanded={portfolioOpen}
              onClick={() => setPortfolioOpen((current) => !current)}
            >
              Portfolio
            </button>
            <div className="nav-dropdown-menu">
              {portfolioModules.map((item) => (
                <Link
                  key={item.slug}
                  className="nav-dropdown-item is-current"
                  href={`/portfolio/${item.slug}`}
                  onClick={closeMobileMenu}
                >
                  {item.menuLabel}
                </Link>
              ))}
            </div>
          </div>
          <Link className="nav-link" href="/sobre-mi" onClick={closeMobileMenu}>
            About
          </Link>
          <Link className="nav-link" href="/contacto" onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}