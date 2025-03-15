import React from "react";
import Navbar from "../Navbar.tsx";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { MoveLeft } from "lucide-react";
import ContactForm from "./ContactForm.tsx";

import ContactSection from "./ContactSection.tsx";
import SectionTitle from "../SectionTitle.tsx";

const Contact = () => {
  return (
    <div>
      <Navbar isHome={false} />

      <div className="my-40 px-10">
        <SectionTitle align="left"
       
        breadcrumb={["home", "contact"]}
          title="Contact"
          subtitle="Our friendly team would love to hear from you."
          title1="Us"
        />

        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </div>
      <div className="px-8 flex gap-7">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
