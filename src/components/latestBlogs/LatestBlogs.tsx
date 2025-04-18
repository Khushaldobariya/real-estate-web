import { ChevronRight, Search } from "lucide-react";
import React, { useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { blogData } from "../../utils/consents.ts";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar.tsx";
import CircularText from "./CircularText.tsx";

const LatestBlogs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const breadcrumb = ["Home", "Blogs"];
  const categories = [
    "View all",
    "Market analysis",
    "Local market trends",
    "Eco-friendly and sustainable housing",
    "Financing and mortgage advice",
  ];

  const handleReadMore = (blog) => {
    navigate(`/blog/blog-detail/${blog.id}`, { state: { blog } });
  };

  return (
    <>
      <Navbar isHome={false} />
      <div className="container mx-auto">

      <section className="px-4 sm:px-6 lg:px-20 w-full mt-24 md:mt-36 flex flex-col md:flex-row justify-between ">
        <div>
          <Breadcrumbs
            separator=">"
            className="text-gray-500 text-base md:text-lg lg:text-xl"
          >
            {breadcrumb.map((item, index) => (
              <Typography
                key={index}
                color={
                  index === breadcrumb.length - 1 ? "textPrimary" : "inherit"
                }
              >
                {item}
              </Typography>
            ))}
          </Breadcrumbs>
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  mt-8">
            <span className="text-black">Our </span>
            <span className="text-[#905c87] pr-4">Latest Blogs</span>
          </h1>
          <div className="mt-12 px-6 py-4 bg-[#D9D9D9] max-w-sm flex items-center">
            <Search className="w-6 h-6" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="bg-transparent outline-none text-lg md:text-xl font-normal ml-3 w-full placeholder:text-black"
            />
          </div>
        </div>
        <div className="mt-8 md:mt-0 hidden md:block">
          <CircularText />
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-20 py-16 ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-full lg:w-1/4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Blog categories
            </h2>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`w-full text-left py-3 px-4 mb-3 hover:bg-[#F4F4F4] transition-colors text-lg ${
                  selectedCategory === category
                    ? "bg-[#F4F4F4]"
                    : "bg-transparent"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogData.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`${index === 0 ? "md:col-span-2" : ""}`}
                >
                  <img
                    src={`/assets/images/latestBlogs/Image-${index}.webp`}
                    alt={blog.title}
                    className={`w-full ${
                      index === 0 ? "h-[600px]" : "h-[400px]"
                    } object-cover`}
                  />
                  <div className="py-6 space-y-6">
                    <div className="flex items-center gap-4">
                      <p className="text-base md:text-lg font-semibold bg-[#F4F4F4] w-max px-3 py-2">
                        {blog.date}
                      </p>
                      <p className="text-base md:text-lg font-semibold">
                        {blog.readTime}
                      </p>
                    </div>
                    <h3
                      className={`${
                        index === 0
                          ? "text-xl md:text-4xl"
                          : "text-lg md:text-2xl"
                      } font-semibold tracking-wider`}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-base md:text-lg">
                      {blog.description}
                    </p>
                    <Link
                      to={`/blog/blog-detail/${blog.id}`}
                      state={{ blog }}
                      className="flex items-center w-fit gap-2 md:gap-4 text-lg relative after:bg-[#9b4992] after:absolute after:h-0.5 after:w-full after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-[#9b4992] cursor-pointer"
                    >
                      Read more
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default LatestBlogs;
