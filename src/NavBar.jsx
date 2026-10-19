import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const TriggerMenu = (value) => {
    setMenuOpen(value);
  };

  useEffect(() => {
    if (!menuOpen) return undefined;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const htmlStyles = {
      overflow: document.documentElement.style.overflow,
      touchAction: document.documentElement.style.touchAction,
    };
    const bodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      touchAction: document.body.style.touchAction,
    };

    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.touchAction = "none";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      Object.assign(document.documentElement.style, htmlStyles);
      Object.assign(document.body.style, bodyStyles);
      window.scrollTo(scrollX, scrollY);
    };
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 z-50 h-12 px-10 bg-[#FFD5A3]">
      <div className="flex items-center justify-center h-full">
        <a href="#" className="font-italianno text-4xl">
          Urora
        </a>
        <ul className="flex flex-1 gap-6 text-md h-full justify-end items-center max-md:hidden">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#product">Products</a>
          </li>
          <li>
            <a href="#feature">Features</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="hidden max-md:flex justify-end flex-1">
          <div
            className="flex cursor-pointer w-8 h-8 justify-center items-center rounded-lg hover:bg-[#d972237e]"
            onClick={() => TriggerMenu(true)}
          >
            <i className="text-xl text-[#974100] fa-solid fa-bars"></i>
          </div>
          <div
            className={`fixed inset-0 z-[60] w-dvw h-dvh flex touch-none overscroll-none ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} flex-col items-end p-5 gap-5 transition-all duration-500 ease-in bg-[#FFD5A3]`}
          >
            <div
              className="flex cursor-pointer w-8 h-8 justify-center items-center rounded-lg hover:bg-[#d972237e]"
              onClick={() => TriggerMenu(false)}
            >
              <i className="text-xl text-[#974100] fa-solid fa-x"></i>
            </div>
            <ul className="flex flex-col flex-1 gap-6 text-md h-full items-center self-center">
              <li>
                <a onClick={() => TriggerMenu(false)} href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a onClick={() => TriggerMenu(false)} href="#product">
                  Products
                </a>
              </li>
              <li>
                <a onClick={() => TriggerMenu(false)} href="#feature">
                  Features
                </a>
              </li>
              <li>
                <a onClick={() => TriggerMenu(false)} href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a onClick={() => TriggerMenu(false)} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
