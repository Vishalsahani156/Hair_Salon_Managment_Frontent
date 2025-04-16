import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);
  const navTogglerRef = useRef(null);
  const navLinksRef = useRef([]);
  const backTopBtnRef = useRef(null);
  const headerRef = useRef(null);
  const filterBtnsRef = useRef([]);
  const filterItemsRef = useRef([]);

  const addEventOnElem = (elem, type, callback) => {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  };

  const toggleNavbar = () => {
    navbarRef.current.classList.toggle("active");
  };

  const closeNavbar = () => {
    navbarRef.current.classList.remove("active");
  };

  const headerActive = () => {
    if (window.scrollY > 100) {
      headerRef.current.classList.add("active");
      backTopBtnRef.current.classList.add("active");
    } else {
      headerRef.current.classList.remove("active");
      backTopBtnRef.current.classList.remove("active");
    }
  };

  const filter = function () {
    const lastClickedFilterBtn = filterBtnsRef.current.find(btn => btn.classList.contains("active"));
    if (lastClickedFilterBtn) {
      lastClickedFilterBtn.classList.remove("active");
    }
    this.classList.add("active");
    for (let i = 0; i < filterItemsRef.current.length; i++) {
      if (this.dataset.filterBtn === filterItemsRef.current[i].dataset.filter ||
        this.dataset.filterBtn === "all") {
        filterItemsRef.current[i].style.display = "block";
        filterItemsRef.current[i].classList.add("active");
      } else {
        filterItemsRef.current[i].style.display = "none";
        filterItemsRef.current[i].classList.remove("active");
      }
    }
  };

  useEffect(() => {
    const navToggler = navTogglerRef.current;
    const navLinks = navLinksRef.current;

    addEventOnElem(navToggler, "click", toggleNavbar);
    addEventOnElem(navLinks, "click", closeNavbar);
    addEventOnElem(window, "scroll", headerActive);

    return () => {
      // Cleanup event listeners
      navToggler.removeEventListener("click", toggleNavbar);
      navLinks.forEach(link => link.removeEventListener("click", closeNavbar));
      window.removeEventListener("scroll", headerActive);
    };
  }, []);

  return (
    <div>
      <header ref={headerRef} data-header>
        {/* Header content */}
      </header>
      <button ref={navTogglerRef} data-nav-toggler>
        Toggle Navbar
      </button>
      <nav ref={navbarRef} data-navbar>
        <ul>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <a
                ref={el => navLinksRef.current[index] = el}
                data-nav-link
                href="#"
              >
                Link {index + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button ref={backTopBtnRef} data-back-top-btn>
        Back to Top
      </button>
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            ref={el => filterBtnsRef.current[index] = el}
            data-filter-btn
            onClick={filter}
          >
            Filter {index + 1}
          </button>
        ))}
      </div>
      <div>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            ref={el => filterItemsRef.current[index] = el}
            data-filter
            style={{ display: 'block' }}
          >
            Item {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
