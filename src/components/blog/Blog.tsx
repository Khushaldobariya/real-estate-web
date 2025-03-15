import React from 'react'
import { Link } from 'react-router-dom';


type NewsItem = {
    image: string;
    title: string;
    description: string;
    link: string;
    label?: string;
  };
type NewsSectionProps = {
    news: NewsItem[];
  };
  
const Blog = ({news}:NewsSectionProps) => {
  return (
    <section className="px-10 mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Our Latest <span className="text-[#905c87]">News</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
      
        <div className="md:col-span-1">
          <div className="relative">
            <img
              src={news[0].image}
              alt={news[0].title}
           
              className="rounded-lg object-cover w-full h-96"
            />
            
          </div>
          <h3 className="text-xl font-semibold mt-4">{news[0].title}</h3>
          <p className="text-gray-600 mt-2">{news[0].description}</p>
          <a href={news[0].link} className=" hover:underline mt-2 inline-block">
            Read more →
          </a>
        </div>

      
        <div className="space-y-6">
          {news.slice(1).map((item, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={item.image}
                alt={item.title}
          
                className="rounded-lg object-contain w-28 h-28"
              />
              <div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <Link to={item.link} className=" hover:underline text-sm mt-1 inline-block">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog