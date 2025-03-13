import React from "react";
import Navbar from "../Navbar.tsx";
import { Breadcrumbs } from "@mui/material";
import { MoveLeft } from "lucide-react";
import ContactForm from "./ContactForm.tsx";

const Contact = () => {
  return (
    <div>
      <Navbar isHome={false} />
      <div className="my-40 px-10">
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          Home
        </Breadcrumbs>

        <Breadcrumbs
          separator={<MoveLeft fontSize="small" />}
          aria-label="breadcrumb"
        >
          Contact
        </Breadcrumbs>

        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
          <h1 className="text-[#a0238a] text-5xl tracking-wider">
            Contact <span className="text-black">us</span>
          </h1>
          <p>Our friendly team would love to hear from you.</p>

            </div>
            <div className="w-full md:w-1/2">
            <ContactForm /></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
