import { ChevronRight, Search } from "lucide-react";
import React, { useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { blogData } from "../../utils/consents.ts";
import { useNavigate } from "react-router-dom";
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

  const handleReadMore = (id: number) => {
    navigate(`/blog/blog-detail/${id}`);
  };

  return (
    <>
      <Navbar isHome={false} />

      <section className="px-4 sm:px-6 lg:px-20 w-full mt-36 flex justify-between">
        <div>
          <Breadcrumbs
            separator=">"
            className="text-gray-500 text-sm md:text-base lg:text-lg"
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
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[56px] font-semibold mt-6">
            <span className="text-black">Our </span>
            <span className="text-[#905c87] pr-4">Latest Blogs</span>
          </h1>
          <div className="mt-[76px] px-6 py-3 bg-[#D9D9D9] rounded-[2px] max-w-sm flex items-center">
            <Search />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="bg-transparent outline-none text-xl font-normal ml-3 pt-1 placeholder:text-black"
            />
          </div>
        </div>
        <div>
          {/* <img
            src={"/assets/images/latestBlog.png"}
            alt="Logo"
            className="w-auto h-auto"
            loading="eager"
          /> */}
          <CircularText />
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl font-semibold mb-4">Blog categories</h2>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`w-full text-left py-2 px-4 mb-2 hover:bg-[#F4F4F4] rounded transition-colors ${
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogData.map((blog, index) => (
                <div
                  key={blog.id}
                  className={`${index === 0 ? "md:  col-span-2" : ""}`}
                >
                  <img
                    src={`/assets/images/latestBlogs/image-${index}.png`}
                    alt={blog.title}
                    className={`w-full ${
                      index === 0 ? "h-[550px]" : "h-[350px]"
                    } object-cover`}
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-semibold bg-[#F4F4F4] w-max px-2 py-1  ">
                        {blog.date}
                      </p>
                      <p className="text-sm font-semibold">{blog.readTime}</p>
                    </div>
                    <h3
                      className={`${
                        index === 0 ? "text-3xl" : "text-2xl"
                      } font-semibold mt-4`}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-base mt-2">
                      {blog.description.substring(0, 100)}...
                    </p>
                    <p
                      className="text-base mt-4 flex items-center gap-3 cursor-pointer"
                      onClick={() => handleReadMore(blog?.id)}
                    >
                      Read more
                      <ChevronRight className="text-base" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBlogs;
