import React, { JSX } from 'react'

interface ContactInfoProps {
    icon: JSX.Element;
    title: string;
    description?: string;
    details: JSX.Element | string;
  }
  
  const ContactInfo = ({ icon, title, description, details }: ContactInfoProps) => {
    return (
      <div className="flex flex-col items-start space-y-2 max-w-md"    >
        <div className="flex flex-col items-center space-x-2">
          {icon}
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        {description && <p className="text-sm text-wrap text-gray-500">{description}</p>}
        <div className="text-sm underline text-wrap ">{details}</div>
      </div>
    );
  };

  export default ContactInfo