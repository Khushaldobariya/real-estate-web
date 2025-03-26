import { ChevronRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';


type NewsItem = {
    image: string;
    title: string;
    description: string;
    link: string;
    label?: string;
    time:string;
  };
type NewsSectionProps = {
    news: NewsItem[];
  };
  
const Blog = ({news}:NewsSectionProps) => {
  return (
  
    <section className="px-6 md:px-10 lg:px-16 mx-auto ">
  <h2 className=" text-xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-8 text-center md:text-left md:font-medium">
    Our Latest <span className="text-[#9f238a]">News</span>
  </h2>
  <div className="grid lg:grid-cols-2 gap-8">
    

    <div className="lg:col-span-1">
      <div className="relative overflow-hidden">
        <img
          src={news[0].image}
          alt={news[0].title}
          className="w-full h-[300px] md:h-[400px] object-cover hover:scale-125 transition-transform delay-200 "
        />
      </div>
      <div className="w-full  space-y-5 pt-4">
        <p className="text-sm">{news[0].time}</p>
        <h3 className="text-xl md:text-3xl lg:text-[32px]  text-wrap">{news[0].title}</h3>
        <p className="text-gray-700 text-sm md:text-base">{news[0].description}</p>
        <a href={news[0].link} className="flex items-center gap-4 underline font-medium text-sm md:text-base">
          Read more  <ChevronRight size={16} />
        </a>
      </div>
    </div>

   
    <div className="space-y-6">
      {news.slice(1).map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-8 pr-6">
          
          <img
            src={item.image}
            alt={item.title}
            className="w-full sm:w-[200px] md:w-[225px] h-[200px] md:h-[225px] object-cover "
          />
          <div className="space-y-4">
            <p className="text-sm ">{item.time}</p>
            <div>

            <h4 className="text-lg md:text-2xl leading-10  ">{item.title}</h4>
            <p className=" text-sm md:text-base">{item.description}</p>
            </div>
            <a href={news[0].link} className="flex items-center gap-4 underline font-medium text-sm md:text-base">
          Read more  <ChevronRight size={16} />
        </a>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>





)
}
export default Blog


{/* <section className="px-4 md:px-8 lg:px-16 xl:px-20 container mx-auto">
  <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-8 sm:mb-10 text-center md:text-left">
    Our Latest <span className="text-[#905c87]">News</span>
  </h2>

  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
   
    <div className="lg:col-span-1 space-y-5">
      <div className="relative overflow-hidden ">
        <img
          src={news[0].image}
          alt={news[0].title}
          className="w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[450px] object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>
      <div className="w-full md:w-4/5 space-y-3 sm:space-y-4">
        <p className="text-sm text-gray-500">{news[0].time}</p>
        <h3 className="text-xl sm:text-2xl md:text-3xl  text-wrap">
          {news[0].title}
        </h3>
        <p className="text-gray-700 text-base sm:text-lg">{news[0].description}</p>
        <a
          href={news[0].link}
          className="text-[#905c87] underline font-medium text-sm sm:text-base"
        >
          Read more →
        </a>
      </div>
    </div>

 
    <div className="space-y-6 sm:space-y-8">
      {news.slice(1).map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <img
            src={item.image}
            alt={item.title}
            className="w-full sm:w-[180px] md:w-[220px] lg:w-[260px] h-[160px] md:h-[200px] lg:h-[240px] object-cover "
          />
          <div className="space-y-3">
            <p className="text-sm text-gray-500">{item.time}</p>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
            <a
              href={item.link}
              className="text-[#905c87] font-medium text-sm sm:text-base"
            >
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}