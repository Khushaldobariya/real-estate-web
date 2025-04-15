import React, { JSX } from 'react'

interface ContactInfoProps {
    icon: JSX.Element;
    title: string;
    description?: string;
    details: JSX.Element | string;
  }
  
  const ContactInfo = ({ icon, title, description, details }: ContactInfoProps) => {
    return (
      <div className="flex flex-col items-start space-y-2 max-w-md">
        <div className="flex flex-col items-center space-y-4">
          {icon}
          <h3 className="text-xl sm:text-2xl font-medium">{title}</h3>
        </div>
        {description && <p className="text-sm sm:text-base lg:text-lg text-wrap t">{description}</p>}
        <div className="text-sm sm:text-base lg:text-lg underline text-wrap">{details}</div>
      </div>
    );
  };

  export default ContactInfo