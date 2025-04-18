import React from "react";
import { FooterData } from "../utils/consents.ts";
import { RightArrow } from "../utils/icons.tsx";

const Footer = () => {
  return (
 
    <footer
    className=" relative bg-cover bg-center bg-no-repeat text-white mt-12 h-auto"
    style={{ backgroundImage: "url('/assets/images/footer.png')" }}
  >
    <div className=" px-4 sm:px-6 md:px-12   grid grid-cols-1 md:grid-cols-2 gap-8 py-10 md:py-14 lg:py-20 container mx-auto">
      <div>
        <h2 className="text-3xl sm:text-3xl text-center md:text-start  lg:text-5xl font-medium mb-6 sm:mb-8">
          Join Our Parivaar
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-lg">
          Established in 1998, Ghar Ho Aisa is the first real estate company
          to have a registered brand. The company is currently developing
          landmark projects in the western Belt of Mumbai with a Paid-up Land
          Bank of 1.05 Cr. Sq.ft FSI. We are known for our customer-centric
          innovation and going beyond the need.
        </p>
      </div>
      <div className="ml-auto w-full">
        <h2 className="text-3xl text-center md:text-start sm:text-3xl lg:text-5xl font-medium mb-6 sm:mb-8">
          Subscribe
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 sm:p-4 w-full text-gray-800"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <RightArrow />
            </div>
          </div>
          <button className="bg-[#C69E58] px-5 sm:px-6 py-2 sm:py-3 border-2  text-white">
            SUBSCRIBE
          </button>
        </div>
        <p className="mt-4 text-white text-sm sm:text-lg">
          By subscribing you agree to our{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>

    <div className="bg-white text-gray-900 py-10 sm:py-12 rounded-t-[25px] md:rounded-t-[50px] px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto ">

      <div className="flex justify-center sm:justify-start">
        <img src="/assets/images/footerLogo.png" alt="Logo" className="w-40 sm:w-48" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 py-6 md:py-10">
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h3 className="text-[#ad3399] text-xl sm:text-2xl font-medium">Address:</h3>
            <p className="text-gray-700 text-base sm:text-xl font-medium">
              {FooterData.address}
            </p>
          </div>
          <div>
            <h3 className="text-[#ad3399] text-xl sm:text-2xl font-medium">Contact:</h3>
            <p className="text-black text-base sm:text-xl font-medium">
              📞 <span className="underline">{FooterData.contact.phone}</span>
            </p>
            <p className="text-black text-base sm:text-xl font-medium">
              ✉️ <span className="underline">{FooterData.contact.email}</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap gap-6 justify-start md:justify-end">
          <div>
            <h3 className="text-[#ad3399] text-xl sm:text-2xl font-medium">Company</h3>
            <ul className="mt-2 space-y-3 text-gray-700 text-sm sm:text-xl ">
              {FooterData.companyLinks.map((link, index) => (
                <li key={index} className="hover:text-[#ad3399] cursor-pointer text-lg sm:text-xl ">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#ad3399] text-xl sm:text-2xl font-medium">Social</h3>
            <ul className="mt-2 space-y-3 text-gray-700 text-sm sm:text-xl">
              {FooterData.socialLinks.map((social, index) => (
                <li key={index} className="hover:text-[#ad3399] cursor-pointer text-lg  sm:text-xl  ">
                  <a href={social.url}>{social.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t border-black/90 mt-5" />
      <div className="mt-4  text-sm sm:text-xl">© 2023 All rights reserved.</div>
      </div>
    </div>
  </footer>


  

  );
};

export default Footer;
