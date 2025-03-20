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
  
    <section className="px-6 md:px-10 mx-auto ">
  <h2 className="text-3xl font-medium text-gray-800 mb-8 text-center md:text-left font-medium">
    Our Latest <span className="text-[#905c87]">News</span>
  </h2>
  <div className="grid lg:grid-cols-2 gap-8">
    
    {/* Main News Item */}
    <div className="lg:col-span-1">
      <div className="relative">
        <img
          src={news[0].image}
          alt={news[0].title}
          className="w-full h-[300px] md:h-[400px] object-cover "
        />
      </div>
      <div className="w-full md:w-4/5 space-y-3 pt-4">
        <p className="text-sm text-gray-500">{news[0].time}</p>
        <h3 className="text-xl md:text-3xl  text-wrap">{news[0].title}</h3>
        <p className="text-gray-700">{news[0].description}</p>
        <a href={news[0].link} className="text-[#905c87] underline font-medium text-sm md:text-lg">
          Read more →
        </a>
      </div>
    </div>

    {/* Additional News Items */}
    <div className="space-y-6">
      {news.slice(1).map((item, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full sm:w-[200px] md:w-[250px] h-[200px] md:h-[250px] object-cover "
          />
          <div className="space-y-3">
            <p className="text-sm text-gray-500">{item.time}</p>
            <h4 className="text-lg md:text-2xl ">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
            <a href={item.link} className="text-[#905c87] underline font-medium text-sm md:text-lg">
              Read more →
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