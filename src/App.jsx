import { useRef, useEffect, useState } from "react";
import Navbar from "./NavBar.jsx";
import Slider from "./Slider";
import Footer from "./Footer.jsx";
import RadioBtn from "./InputRadioForm.jsx";
import Gallery from "./Gallery.jsx";
import MusicPlayer from "./MusicPlayer.jsx";

function App() {
  const targetSectionRef = useRef(null);

  const handleScroll = () => {
    targetSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const heroSectionRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const handleMainScroll = () => {
    heroSectionRef.current?.scrollIntoView({
      top: 100,
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(!entry.isIntersecting);
      },
      {
        threshold: 0,
      },
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slideData = [
    {
      src: `${import.meta.env.BASE_URL}/01b3bdd0-e39f-4c09-8f26-90e022c1ffa1.png`,
      title: ["Handcraft", "Series"],
    },
    { src: `${import.meta.env.BASE_URL}/1.png`, title: ["Elegant", "Series"] },
    {
      src: `${import.meta.env.BASE_URL}/3961bb343b9db0a3542ea5aa1fa3a00a.jpg`,
      title: ["Collection", "Series"],
    },
  ];

  const slides = slideData.map((s, i) => (
    <div key={i} className="w-full h-full">
      <div className="absolute top-0 left-0 w-[40dvw] max-md:w-full h-full opacity-50 z-10 bg-[#D97223]"></div>
      <img
        className="w-dvw h-dvh object-cover"
        src={s.src}
        alt="urora-jewelry"
      />
      <div className="absolute top-1/3 left-20 max-md:left-10 z-20">
        <h1 className="font-italianno text-9xl leading-22 text-[#FFF4E6] mb-10">
          {s.title[0]}
          <br />
          {s.title[1]}
        </h1>
        <button onClick={handleScroll}>Know more</button>
      </div>
    </div>
  ));

  const productData = [
    { src: `${import.meta.env.BASE_URL}/4.png`, title: "Ear rings" },
    { src: `${import.meta.env.BASE_URL}/5.png`, title: "Ring" },
    { src: `${import.meta.env.BASE_URL}/6.png`, title: "Necklace" },
  ];

  const products = productData.map((s, i) => (
    <div
      key={i}
      className="relative w-80 aspect-auto rounded-3xl overflow-hidden"
    >
      <img src={s.src} alt="urora-jewelry" />
      <h2 className="absolute top-1/2 -translate-y-1/2 w-full text-center font-italianno text-6xl text-white">
        {s.title}
      </h2>
    </div>
  ));

  const featureData = [
    {
      src: `${import.meta.env.BASE_URL}/Group 17.png`,
      title: ["Tailor", "Made"],
    },
    {
      src: `${import.meta.env.BASE_URL}/Group 18.png`,
      title: ["Meticulously", "Handmade"],
    },
    {
      src: `${import.meta.env.BASE_URL}/Group 20.png`,
      title: ["Reasonable", "Price"],
    },
    {
      src: `${import.meta.env.BASE_URL}/Group 19.png`,
      title: ["1 Year", "Warranty"],
    },
  ];

  const features = featureData.map((s, i) => (
    <div key={i} className="flex flex-col w-40 items-center">
      <img className="w-30 h-30 mb-2" src={s.src} alt="urora-jewelry" />
      <h2 className="text-center text-2xl font-bold">
        {s.title[0]}
        <br />
        {s.title[1]}
      </h2>
    </div>
  ));

  return (
    <main id="main" className="w-full h-full">
      <Navbar />

      <section
        id="hero"
        ref={heroSectionRef}
        className="w-full h-full scroll-mt-12"
      >
        <Slider slides={slides} />
      </section>

      <section id="about" className="w-full h-full mb-40 flex max-md:flex-col">
        <div className="relative mt-30 w-115 max-md:w-[80%] h-120 rounded-r-3xl bg-[#d972237e]">
          <img
            className="absolute top-5 left-1/4 max-md:left-1/12 rounded-3xl object-cover w-80 h-120"
            src={`${import.meta.env.BASE_URL}/01b3bdd0-e39f-4c09-8f26-90e022c1ffa1.png`}
            alt="urora-jewelry"
          />
        </div>
        <div className="flex-1">
          <div className="px-20 max-md:px-10 pt-40">
            <h1>Crafting each piece of jewellery with care and dedication.</h1>
            <p>
              We believe every piece of jewellery tells a story. Founded with a
              passion for timeless elegance and fine craftsmanship, we create
              beautiful, high-quality pieces that celebrate life's special
              moments. From classic designs to modern statements, our
              collections are made to inspire confidence and capture hearts.
              Each item is thoughtfully crafted using ethically sourced
              materials, ensuring beauty with integrity. Whether you're shopping
              for yourself or a loved one, we’re here to help you find the
              perfect sparkle.
            </p>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="relative w-full h-full flex flex-col p-10 gap-10 items-center mb-10"
      >
        <div className="absolute top-0 left-0 -z-10 w-full h-115 rounded-3xl bg-[#FFD5A3]"></div>
        <h1 className="text-center pt-5">What We Offer</h1>
        <p className="text-center">
          Our jewellery collection includes handmade necklaces, bracelets, and
          earrings. Looking for something unique? We also welcome custom orders
          for special pieces.
        </p>
        <div className="mt-10 w-full flex flex-row max-md:flex-col gap-10 items-center justify-center">
          {products}
        </div>
      </section>

      <section
        id="feature"
        className="w-full h-full flex max-md:flex-col mb-10 pt-20"
      >
        <div className="flex-2 px-20 max-md:px-10 py-30">
          <h1>
            Every piece is handmade, personally designed, and honestly priced.
          </h1>
          <p>
            At Eurera, we create unique, handmade jewellery tailored just for
            you. Our pieces blend artisanal craftsmanship with personal touches,
            making luxury more personal and accessible.
          </p>
        </div>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-5 p-20 justify-center items-center">
          {features}
        </div>
      </section>

      <section id="gallery" className="w-full h-full pt-15 gap-10">
        <h1 className="text-center">Gallery</h1>
        <div className="relative px-10 mt-5 h-full">
          <div className="absolute top-0 left-0 -z-10 w-full h-2/3 rounded-3xl bg-[#FFD5A3]"></div>
          <Gallery />
        </div>
      </section>

      <section
        id="contact"
        ref={targetSectionRef}
        className="w-full h-full mb-40 flex max-md:flex-col"
      >
        <div className="relative mt-30 w-115 max-md:w-[80%] h-120 rounded-r-3xl bg-[#d972237e]">
          <img
            className="absolute top-5 left-1/4 max-md:left-1/12 rounded-3xl object-cover w-80 h-120"
            src={`${import.meta.env.BASE_URL}/3d3204429fce490d02d4d5b3c9428341 2.png`}
            alt="urora-jewelry"
          />
        </div>

        <div className="flex-1">
          <div className="px-20 max-md:px-10 pt-40">
            <h1>Interested? Let’s Talk!</h1>
            <p>
              Just leave your details below — our customer service team will
              contact you shortly with more information.
            </p>
          </div>

          <RadioBtn />
        </div>
      </section>

      <Footer />

      {showButton && (
        <button
          className="fixed flex w-10 h-10 bottom-25 right-7.5 z-100 p-2! justify-center items-center"
          onClick={handleMainScroll}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}

      <MusicPlayer path={`${import.meta.env.BASE_URL}/bgm.mp3`} />
    </main>
  );
}

export default App;
