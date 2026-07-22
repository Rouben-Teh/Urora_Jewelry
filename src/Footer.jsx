export default function Footer() {
  return (
    <footer className="w-full h-full">
      <div className="bg-[#FFD5A3] w-full h-full">
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 px-20 max-md:px-10 py-5">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <img
                className="w-10 h-10"
                src={"/Group 12.png"}
                alt="urora-logo"
              />
              <h3 className="font-italianno text-4xl pt-1 pl-2">Urora</h3>
            </div>

            <p className="pr-20">
              Crafting each piece of jewellery with care and dedication.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <div>
                <a href="#">About us</a>
              </div>
              <div>
                <a href="#">Products</a>
              </div>
              <div>
                <a href="#">Gallery</a>
              </div>
              <div>
                <a href="#">Contact</a>
              </div>
            </nav>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Business Hour</h3>
            <p>
              7AM - 6PM Mon - Fri
              <br /> <br /> 135, Jalan Petaling, City Centre, <br />
              50000 Kuala Lumpur, Wilayah <br />
              Persekutuan Kuala Lumpur
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Contact</h3>
            <p>
              Email: urora@gmail.com
              <br />
              Phone: +60 12-3456789
            </p>

            <div className="flex flex-row gap-4 mt-4">
              <a href="#">
                <i className="text-3xl text-[#974100] fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="text-3xl text-[#974100] fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="text-3xl text-[#974100] fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full text-center text-sm py-2">
        Copyright @ 2025 Urora | Powered by Urora
      </div>
    </footer>
  );
}
