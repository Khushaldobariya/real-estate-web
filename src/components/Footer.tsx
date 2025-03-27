import React from "react";
import { FooterData } from "../utils/consents.ts";
import { RightArrow } from "../utils/icons.tsx";

const Footer = () => {
  return (
 
    <footer
    className="relative bg-cover bg-center bg-no-repeat text-white mt-12 h-auto"
    style={{ backgroundImage: "url('/assets/images/footer.png')" }}
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 py-10 md:py-14 lg:py-20">
      <div>
        <h2 className="text-2xl text-center md:text-start sm:text-3xl lg:text-5xl font-medium mb-6 sm:mb-8">
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
        <h2 className="text-2xl text-center md:text-start sm:text-3xl lg:text-5xl font-medium mb-6 sm:mb-8">
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

    <div className="bg-white text-gray-900 py-10 sm:py-12 rounded-t-[25px] md:rounded-t-[50px] px-4 sm:px-6 lg:px-12">
      <div className="flex justify-center sm:justify-start">
        <img src="/assets/images/footerLogo.png" alt="Logo" className="w-32 sm:w-48" />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row gap-8 py-6 md:py-10">
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h3 className="text-[#ad3399] text-lg sm:text-2xl font-medium">Address:</h3>
            <p className="text-gray-700 text-sm sm:text-xl font-medium">
              {FooterData.address}
            </p>
          </div>
          <div>
            <h3 className="text-[#ad3399] text-lg sm:text-2xl font-medium">Contact:</h3>
            <p className="text-black text-sm sm:text-xl font-medium">
              📞 <span className="underline">{FooterData.contact.phone}</span>
            </p>
            <p className="text-black text-sm sm:text-xl font-medium">
              ✉️ <span className="underline">{FooterData.contact.email}</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap gap-6 justify-start md:justify-end">
          <div>
            <h3 className="text-[#ad3399] text-lg sm:text-2xl font-medium">Company</h3>
            <ul className="mt-2 space-y-3 text-gray-700 text-sm sm:text-xl">
              {FooterData.companyLinks.map((link, index) => (
                <li key={index} className="hover:text-[#ad3399] cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#ad3399] text-lg sm:text-2xl font-medium">Social</h3>
            <ul className="mt-2 space-y-3 text-gray-700 text-sm sm:text-xl">
              {FooterData.socialLinks.map((social, index) => (
                <li key={index} className="hover:text-[#ad3399] cursor-pointer">
                  <a href={social.url}>{social.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t border-black/90 mt-5" />
      <div className="mt-4 text-center text-sm sm:text-xl">© 2023 All rights reserved.</div>
    </div>
  </footer>


  //   <footer
  //   className="relative bg-cover bg-center bg-no-repeat text-white mt-12 pt-12"
  //   style={{ backgroundImage: "url('/assets/images/footer.png')" }}
  // >
  //   <div className="container mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
  //     <div>
  //       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl   font-medium">
  //         Join Our Parivaar
  //       </h2>
  //       <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-200 max-w-lg">
  //         Established in 1998, Ghar Ho Aisa is the first real estate company
  //         to have a registered brand. The company is currently developing
  //         landmark projects in the western Belt of Mumbai with a Paid-up Land
  //         Bank of 1.05 Cr. Sq.ft FSI. We are known for our customer-centric
  //         innovation and going beyond the need.
  //       </p>
  //     </div>
      
  //     <div className="md:ml-auto">
  //       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl   tracking-normal font-medium">
  //         Subscribe
  //       </h2>
  //       <div className="mt-4 flex flex-col sm:flex-row gap-4">
  //         <div className="relative w-full sm:w-80">
  //           <input
  //             type="email"
  //             placeholder="Enter your email"
  //             className="p-3 w-full text-gray-800 border-none outline-none"
  //           />
  //           <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
  //             <RightArrow />
  //           </div>
  //         </div>
  //         <button className="bg-[#C69E58] px-6 py-3  text-white font-medium border-2 ">
  //           SUBSCRIBE
  //         </button>
  //       </div>
  //       <p className="mt-2 text-sm md:text-base text-white max-w-xs">
  //         By subscribing you agree to our{" "}
  //         <a href="#" className="underline">
  //           Privacy Policy
  //         </a>
  //       </p>
  //     </div>
  //   </div>
  
  //   <div className="bg-white text-gray-900 mt-12 py-8 md:py-12 rounded-t-3xl lg:rounded-t-[50px] px-4 md:px-8 lg:px-12">
  //     <div className="container mx-auto flex flex-col md:flex-row gap-8">
  //       <div className="w-full md:w-1/2">
  //         <img
  //           src="/assets/images/footerLogo.png"
  //           alt="Logo"
  //           className="w-28 md:w-32"
  //         />
  //         <h3 className="mt-6 text-[#ad3399] text-lg md:text-xl font-medium">
  //           Address:
  //         </h3>
  //         <p className="mt-2 text-gray-700 text-sm md:text-lg font-medium">
  //           {FooterData.address}
  //         </p>
  
  //         <h3 className="mt-4 text-lg md:text-xl font-medium text-[#ad3399]">
  //           Contact:
  //         </h3>
  //         <p className="mt-2 text-gray-700 text-sm md:text-lg font-medium">
  //           📞 {FooterData.contact.phone}
  //         </p>
  //         <p className="text-sm md:text-lg">✉️ {FooterData.contact.email}</p>
  //       </div>
  
  //       <div className="w-full md:w-1/2 flex flex-wrap gap-6 md:gap-10 justify-start md:justify-end">
  //         <div>
  //           <h3 className="text-lg md:text-xl text-[#ad3399]">Company</h3>
  //           <ul className="mt-2 space-y-2 text-gray-700">
  //             {FooterData.companyLinks.map((link, index) => (
  //               <li key={index} className="hover:text-[#ad3399] cursor-pointer">
  //                 {link}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div>
  //           <h3 className="text-lg md:text-xl text-[#ad3399]">Social</h3>
  //           <ul className="mt-2 space-y-2 text-gray-700">
  //             {FooterData.socialLinks.map((social, index) => (
  //               <li key={index} className="hover:text-purple-500 cursor-pointer">
  //                 <a href={social.url}>{social.name}</a>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  
  //     <hr className="border-t border-black/90 mt-5" />
  //     <div className="mt-8 text-center text-xs md:text-sm text-gray-500">
  //       © 2023 All rights reserved.
  //     </div>
  //   </div>
  // </footer>



//   <footer
//   className="relative bg-cover bg-center bg-no-repeat text-white mt-12 pt-12"
//   style={{ backgroundImage: "url('/assets/images/footer.png')" }}
// >
//   <div className="container mx-auto px-4 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//     <div>
//       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
//         Join Our Parivaar
//       </h2>
//       <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 max-w-lg">
//         Established in 1998, Ghar Ho Aisa is the first real estate company
//         to have a registered brand. The company is currently developing
//         landmark projects in the western Belt of Mumbai with a Paid-up Land
//         Bank of 1.05 Cr. Sq.ft FSI. We are known for our customer-centric
//         innovation and going beyond the need.
//       </p>
//     </div>

//     <div className="md:ml-auto">
//       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-normal font-medium">
//         Subscribe
//       </h2>
//       <div className="mt-4 flex flex-col sm:flex-row gap-4">
//         <div className="relative w-full sm:w-80">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="p-3 w-full text-gray-800 border-none outline-none"
//           />
//           <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
//             <RightArrow />
//           </div>
//         </div>
//         <button className="bg-[#C69E58] px-6 py-3 text-white font-medium border-2">
//           SUBSCRIBE
//         </button>
//       </div>
//       <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-white max-w-xs tracking-wider">
//         By subscribing you agree to our{" "}
//         <a href="#" className="underline">
//           Privacy Policy
//         </a>
//       </p>
//     </div>
//   </div>

//   <div className="bg-white text-gray-900 mt-12 py-8 md:py-12 rounded-t-3xl lg:rounded-t-[50px] px-4 md:px-8 lg:px-12">
//     <div className="container mx-auto flex flex-col md:flex-row gap-8">
//       <div className="w-full md:w-1/2">
//         <img
//           src="/assets/images/footerLogo.png"
//           alt="Logo"
//           className="w-28 md:w-32"
//         />
//         <h3 className="mt-6 text-[#ad3399] text-base sm:text-lg md:text-xl font-medium">
//           Address:
//         </h3>
//         <p className="mt-2 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
//           {FooterData.address}
//         </p>

//         <h3 className="mt-4 text-base sm:text-lg md:text-xl font-medium text-[#ad3399]">
//           Contact:
//         </h3>
//         <p className="mt-2 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg font-medium">
//           📞 {FooterData.contact.phone}
//         </p>
//         <p className="text-xs sm:text-sm md:text-base lg:text-lg">
//           ✉️ {FooterData.contact.email}
//         </p>
//       </div>

//       <div className="w-full md:w-1/2 flex flex-wrap gap-6 md:gap-10 justify-start md:justify-end">
//         <div>
//           <h3 className="text-base sm:text-lg md:text-xl text-[#ad3399]">
//             Company
//           </h3>
//           <ul className="mt-2 space-y-2 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
//             {FooterData.companyLinks.map((link, index) => (
//               <li
//                 key={index}
//                 className="hover:text-[#ad3399] cursor-pointer"
//               >
//                 {link}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-base sm:text-lg md:text-xl text-[#ad3399]">
//             Social
//           </h3>
//           <ul className="mt-2 space-y-2 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg">
//             {FooterData.socialLinks.map((social, index) => (
//               <li
//                 key={index}
//                 className="hover:text-purple-500 cursor-pointer"
//               >
//                 <a href={social.url}>{social.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>

//     <hr className="border-t border-black/90 mt-5" />
//     <div className="mt-8 text-center text-xs sm:text-sm md:text-base text-black/60 tracking-wider">
//       © 2023 All rights reserved.
//     </div>
//   </div>
// </footer>
  

  );
};

export default Footer;
