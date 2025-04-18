import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { twMerge } from "tailwind-merge";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: string[];
  title1: string;
  className?: string;
  align: "center" | "left" | "right";
};

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  breadcrumb, 
  title1, 
  className, 
  align 
}) => {
  return (
    <div className={twMerge("py-8 flex flex-col", align === "center" ? "text-center items-center " : align === "left" ? "text-left items-start" : "text-right items-end", className)}>
      {breadcrumb && breadcrumb.length > 0 && (
        <Breadcrumbs separator=">" className="text-gray-500 text-sm md:text-base lg:text-lg">
          {breadcrumb.map((item, index) => (
            <Typography key={index} color={index === breadcrumb.length - 1 ? "textPrimary" : "inherit"}>
              {item}
            </Typography>
          ))}
        </Breadcrumbs>
      )}
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  mt-2 space-x-3">
          <span className="text-black">{title}</span>
          <span className="text-[#905c87] pr-4">{title1}</span>
        </h1>
      {subtitle && <p className={` text-base sm:text-lg md:text-xl mt-3 ${align =="center" && "max-w-lg mx-auto"}` }>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
