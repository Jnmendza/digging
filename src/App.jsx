import { Disc, ExternalLink, Search } from "lucide-react";
import DigginLogo from "./DigginLogo";
import demoGif from "./assets/demo.gif";

const DigginLanding = () => {
  return (
    // MAIN CONTAINER: Added consistent padding and a nice grid pattern background
    <div className='min-h-screen bg-[#111] text-white font-sans selection:bg-[#F5DF2E] selection:text-black bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]'>
      {/* NAVIGATION */}
      <nav className='border-b-4 border-[#333] px-6 py-5 flex justify-between items-center bg-[#111] sticky top-0 z-50'>
        <div className='flex items-center gap-3'>
          {/* Logo */}
          <DigginLogo
            size={48}
            className='drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]'
          />
          <span className='text-3xl font-black tracking-tighter uppercase italic'>
            Diggin<span className='text-[#F5DF2E]'>.</span>
          </span>
        </div>
        <a
          href='/privacy'
          className='hidden md:block font-bold text-gray-400 hover:text-[#F5DF2E] transition-colors uppercase tracking-widest text-sm'
        >
          Privacy Policy
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className='relative px-6 py-24 flex flex-col items-center text-center max-w-5xl mx-auto'>
        {/* Badge: Fixed the boxy look */}
        <div className='mb-8 inline-block bg-[#F5DF2E] text-black px-4 py-1 font-black text-sm tracking-widest uppercase transform -rotate-2 border-2 border-white shadow-[4px_4px_0px_0px_#fff]'>
          v1.0 Now Available
        </div>

        {/* Main Headline: Improved readability */}
        <h1 className='text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]'>
          Stop Searching.
          <br />
          {/* Text Gradient Fix */}
          <span className='text-[#F5DF2E]'>Start Diggin.</span>
        </h1>

        {/* Subhead */}
        <p className='text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-medium leading-relaxed'>
          The Chrome extension for serious collectors. Highlight text,
          right-click, & get instant Discogs pricing without leaving the page.
        </p>

        {/* CTA Buttons: Fixed the "Bar" look. They now flex properly. */}
        <div className='flex flex-col md:flex-row gap-6 w-full justify-center items-center'>
          <button className='w-full md:w-auto bg-[#F5DF2E] text-black text-lg font-black px-10 py-5 uppercase tracking-wide border-b-4 border-r-4 border-white hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all active:translate-y-0 active:translate-x-0 active:shadow-none'>
            Add to Chrome — It's Free
          </button>

          <button
            onClick={() => {
              const element = document.getElementById("demo");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className='w-full md:w-auto bg-black border-4 border-[#333] text-white text-lg font-bold px-10 py-5 uppercase tracking-wide hover:bg-[#222] hover:border-[#555] transition-colors flex items-center justify-center gap-3'
          >
            <Disc size={24} />
            Watch the Demo
          </button>
        </div>
      </header>

      {/* DEMO SECTION */}
      <section className='px-6 pb-24' id='demo'>
        <div className='max-w-5xl mx-auto border-4 border-[#333] bg-[#000] p-2 rounded-xl shadow-[0px_0px_40px_0px_rgba(245,223,46,0.1)]'>
          {/* Browser Header */}
          <div className='flex items-center gap-3 mb-4 border-b border-[#333] pb-3 px-2'>
            <div className='flex gap-2'>
              <div className='w-3 h-3 rounded-full bg-[#ff5f56]'></div>
              <div className='w-3 h-3 rounded-full bg-[#ffbd2e]'></div>
              <div className='w-3 h-3 rounded-full bg-[#27c93f]'></div>
            </div>
            <div className='flex-1 bg-[#222] rounded text-xs py-1.5 px-3 text-gray-500 font-mono text-center'>
              Album Reviews Page
            </div>
          </div>

          {/* 2. THE GIF PLAYER */}
          <div className='aspect-video bg-[#111] overflow-hidden rounded-lg border-2 border-[#333]'>
            <img
              src={demoGif}
              alt='Diggin Extension Demo'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </section>

      {/* FEATURES GRID: Fixed the Colors and Layout */}
      <section className='px-6 py-24 bg-[#F5DF2E] text-black border-y-4 border-white'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-5xl md:text-6xl font-black mb-16 tracking-tighter uppercase text-center drop-shadow-sm'>
            Built for Crate Diggers
          </h2>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='border-4 border-black p-8 bg-white shadow-[12px_12px_0px_0px_#000000] hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] transition-all'>
              <Search size={48} className='mb-6 stroke-[3px]' />
              <h3 className='text-2xl font-black mb-4 uppercase'>
                Instant Context
              </h3>
              <p className='font-bold text-lg leading-relaxed text-gray-800'>
                Highlight text anywhere. Our smart fuzzy-search filters out the
                noise and finds the exact release.
              </p>
            </div>

            {/* Feature 2 */}
            <div className='border-4 border-black p-8 bg-white shadow-[12px_12px_0px_0px_#000000] hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] transition-all'>
              <Disc size={48} className='mb-6 stroke-[3px]' />
              <h3 className='text-2xl font-black mb-4 uppercase'>
                Vinyl First
              </h3>
              <p className='font-bold text-lg leading-relaxed text-gray-800'>
                We default to{" "}
                <span className='bg-black text-[#F5DF2E] px-1'>
                  Vinyl Format
                </span>{" "}
                and Mint condition. No more scrolling through CD listings.
              </p>
            </div>

            {/* Feature 3 */}
            <div className='border-4 border-black p-8 bg-white shadow-[12px_12px_0px_0px_#000000] hover:translate-y-1 hover:shadow-[6px_6px_0px_0px_#000000] transition-all'>
              <ExternalLink size={48} className='mb-6 stroke-[3px]' />
              <h3 className='text-2xl font-black mb-4 uppercase'>Deep Links</h3>
              <p className='font-bold text-lg leading-relaxed text-gray-800'>
                One click takes you directly to the "Buy Now" page on Discogs
                with US shipping pre-selected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='px-6 py-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto'>
        <div className='mb-8 md:mb-0'>
          <p className='font-black text-2xl uppercase italic tracking-tighter'>
            Diggin<span className='text-[#F5DF2E]'>.</span>
          </p>
          <p className='text-sm text-gray-600 mt-2 font-medium'>
            © 2026 Jonathan Mendoza.
          </p>
        </div>
        <div className='flex gap-8 font-bold text-lg'>
          <a
            href='/privacy'
            className='hover:text-[#F5DF2E] transition-colors underline decoration-2 decoration-[#333] underline-offset-4'
          >
            Privacy Policy
          </a>
          <a
            href='https://github.com/Jnmendza/diggin-ext'
            className='hover:text-[#F5DF2E] transition-colors underline decoration-2 decoration-[#333] underline-offset-4'
          >
            GitHub
          </a>
          <a
            href='mailto:contact@jonathanmendoza.dev'
            className='hover:text-[#F5DF2E] transition-colors underline decoration-2 decoration-[#333] underline-offset-4'
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default DigginLanding;
