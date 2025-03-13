import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";




const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
    project: z.string().min(1, "Please select a project"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    terms: z.boolean().refine(value => value === true, "You must accept the terms"),
  });
  type FormData = z.infer<typeof formSchema>;
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(formSchema),
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const onSubmit = (data: FormData) => {
        console.log("Form Submitted:", data);
        setSubmitted(true);
      };
  return (
    <div className="max-w-lg mx-auto p-6  rounded-lg ">
      {submitted ? (
        <p className="text-green-600 text-center">Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
                <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="First name"
                {...register("firstName")}
                className="w-full  p-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
            </div>
            <div>
            <label htmlFor="lastName">Last Name</label>

              <input
                type="text"
                placeholder="Last name"
                {...register("lastName")}
                className="w-full border border-black p-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
            <label htmlFor="emil">Email</label>

              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="w-full border border-black p-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
            <div>
            <label htmlFor="phone Number">Phone Number</label>

              <input
                type="text"
                placeholder="Phone number"
                {...register("phone")}
                className="w-full border border-black p-2 rounded"
              />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>
          </div>
          <div>
          <label htmlFor="Project">Project</label>

            <select {...register("project")} className="w-full border border-black p-2 rounded">
              <option value="">Select one...</option>
              <option value="website">Website Development</option>
              <option value="app">App Development</option>
              <option value="design">UI/UX Design</option>
            </select>
            <p className="text-red-500 text-sm">{errors.project?.message}</p>
          </div>
          <div>
          <label htmlFor="message">Message</label>

            <textarea
              {...register("message")}
              placeholder="Type your message..."
              className="w-full border border-black p-2 rounded h-24"
            ></textarea>
            <p className="text-red-500 text-sm">{errors.message?.message}</p>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" {...register("terms")} className="w-4 h-4" />
            <label>I accept the <span className="underline">Terms</span></label>
          </div>
          <p className="text-red-500 text-sm">{errors.terms?.message}</p>
          <button type="submit" className="w-1/3 bg-black text-white py-2 rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm