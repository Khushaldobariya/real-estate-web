import {  MapPin } from 'lucide-react'
import React from 'react'
import ContactInfo from './ContactInfo.tsx'
import { Email, Phone, Pin } from '../../utils/icons.tsx'

const ContactSection = () => {
  return (
<div className="flex flex-col mx-auto items-start w-full md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-12 p-6 rounded-lg">
      <ContactInfo
        icon={<Email  />}
        title="Email"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
        details={<p >info@ghartofoasia.com</p>}
      />
      
      <ContactInfo
        icon={<Phone />}
        title="Phone"
        description="Ms. Full Name Company Secretary/Investor"
        details={<p>+91 22 42225700</p>}
      />

      <ContactInfo
        icon={<Pin />}
        title="Office"
        description="Registered & corporate office"
        details={
        <p>
        
            6th Flr, Classic Pentagon, W.E. Highway,<br />
            Next to Bisleri Factory, Andheri (East),<br />
            Mumbai - 400 099.
          </p>
    
        }
      />
    </div>
  )
}

export default ContactSection