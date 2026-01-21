import React from "react";
import DigginLogo from "./DigginLogo";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className='min-h-screen bg-[#111] text-[#f3f3f3] font-sans p-6 md:p-12'>
      <div className='max-w-3xl mx-auto'>
        <Link
          to='/'
          className='inline-flex items-center gap-2 text-[#F5DF2E] font-bold uppercase tracking-widest hover:underline mb-12'
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className='mb-12'>
          <DigginLogo size={64} />
          <h1 className='text-5xl md:text-6xl font-black mt-6 uppercase tracking-tighter'>
            Privacy Policy
          </h1>
          <p className='text-gray-500 font-mono mt-2'>
            Last Updated: January 2026
          </p>
        </div>

        <div className='space-y-12 text-lg leading-relaxed border-t-4 border-[#333] pt-12'>
          <section>
            <h2 className='text-2xl font-black text-[#F5DF2E] uppercase mb-4'>
              1. Data Collection
            </h2>
            <p className='text-gray-300'>
              <strong>Diggin</strong> ("the Extension") strictly limits data
              collection to the functional minimum. We do not track your
              browsing history, we do not store your IP address, and we do not
              use analytics cookies.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-black text-[#F5DF2E] uppercase mb-4'>
              2. How We Use Data
            </h2>
            <p className='text-gray-300 mb-4'>
              The Extension only activates when you explicitly click the
              "Diggin" context menu item. When you do:
            </p>
            <ul className='list-disc pl-6 space-y-2 text-gray-400'>
              <li>We capture the specific text string you highlighted.</li>
              <li>
                We send that text string to the <strong>Discogs API</strong> to
                find matching vinyl records.
              </li>
              <li>
                We temporarily display the results in a popup on your screen.
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-black text-[#F5DF2E] uppercase mb-4'>
              3. Third Party Services
            </h2>
            <p className='text-gray-300'>
              Results are fetched directly from <strong>Discogs.com</strong>. By
              using this extension, you are subject to the Discogs API Terms of
              Service. The Extension acts as a direct conduit between your
              browser and Discogs; no data passes through our own servers.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-black text-[#F5DF2E] uppercase mb-4'>
              4. Contact
            </h2>
            <p className='text-gray-300'>
              For questions regarding privacy, contact us at:
              <br />
              <a
                href='mailto:contact@jonathanmendoza.dev'
                className='text-[#F5DF2E] underline'
              >
                contact@jonathanmendoza.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
