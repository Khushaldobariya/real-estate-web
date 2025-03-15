import React from "react";
import { FooterData } from "../utils/consents.ts";

const Footer = () => {
  return (
    
    <footer
    className="relative bg-cover bg-center bg-no-repeat text-white pt-12"
    style={{ backgroundImage: "url('/assets/images/footer.png')" }}
  >
    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-semibold">Join Our Parivaar</h2>
        <p className="mt-4 text-gray-200 max-w-lg">
          Established in 1998, Ghar Ho Aisa is the first real estate company
          to have a registered brand. The company is currently developing
          landmark projects in the western Belt of Mumbai with a Paid-up Land
          Bank of 1.05 Cr. Sq.ft FSI. We are known for our customer-centric
          innovation and going beyond the need.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-semibold">Subscribe</h2>
        <div className="mt-4 flex flex-col sm:flex-row gap-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 w-full  text-gray-800 mb-2 sm:mb-0 "
          />
          <button className="bg-yellow-500 px-6 py-3 border-2   font-semibold">
            SUBSCRIBE
          </button>
        </div>
        <p className="mt-2 text-gray-200 text-md">
          By subscribing you agree to our{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>

    <div className="bg-white text-gray-900 mt-12 py-12 px-6 md:px-12 rounded-t-3xl">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div>
            <img src="/assets/images/footerLogo.png" alt="Logo" className="w-32" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-6 text-[#ad3399]">Address:</h3>
            <p className="mt-2 text-gray-700">{FooterData.address}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#ad3399]">Contact:</h3>
            <p className="mt-2 text-gray-700">📞 {FooterData.contact.phone}</p>
            <p>✉️ {FooterData.contact.email}</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-wrap gap-6 md:gap-10 justify-start md:justify-end">
          <div>
            <h3 className="text-xl font-semibold text-[#ad3399]">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              {FooterData.companyLinks.map((link, index) => (
                <li key={index} className="hover:text-[#ad3399] cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#ad3399]">Social</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              {FooterData.socialLinks.map((social, index) => (
                <li key={index} className="hover:text-purple-500 cursor-pointer">
                  <a href={social.url}>{social.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">© 2023 All rights reserved.</div>
    </div>
  </footer>
  );
};

export default Footer;
