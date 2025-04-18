import {
  AlignLeft,
  ChevronLeft,
  ChevronRight,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar.tsx";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { blogData } from "../../utils/consents.ts";

// Define TypeScript interface for blog data
interface BlogPost {
  id: number;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

// Define interface for route params


// Define interface for location state
interface LocationState {
  blog?: BlogPost;
}

const BlogDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // If blog data is passed through location state, use it
    const state = location.state as LocationState;
    if (state && state.blog) {
      setBlog(state.blog);
    } else if (id) {
      // Otherwise fetch it based on the ID from the URL
      const blogId = parseInt(id);
      const foundBlog = blogData.find(blog => blog.id === blogId);
      if (foundBlog) {
        setBlog(foundBlog as BlogPost);
      }
    }

    // Get 3 related posts (excluding current blog)
    const filteredPosts = blogData
      .filter(post => post.id !== parseInt(id || '0'))
      .slice(0, 3);
    setRelatedPosts(filteredPosts as BlogPost[]);
  }, [id, location.state]);

  if (!blog) {
    return <div className="mt-[187px] px-4 sm:px-6 lg:px-20 w-full">Loading...</div>;
  }

  return (
    <>
      <Navbar isHome={false} />
      <section className="mt-[187px] px-4 sm:px-6 lg:px-20 w-full container mx-auto">
        <button className="bg-transparent flex items-center gap-2" onClick={() => navigate(-1)}>
          <ChevronLeft />
          <span className="pt-1">All Posts</span>
        </button>
        <div className="mt-[48px]">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold bg-[#F4F4F4] w-max px-2 py-1  ">
              Category
            </p>
            <p className="text-sm font-semibold">5 min read</p>
          </div>
          <div className="mt-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wider">
              {/* Rashmi Group Revolutionizes Housing Landscape with “Ghar Ho To
              Aisa and Apne Dam Par” Initiative: A Game Changer in Accessible
              Housing */}
              {blog.title}
            </p>
          </div>
          <div className="mt-20">
            <img
              src={`/assets/images/latestBlogs/Image-0.webp`}
              alt={"insdjsbnf"}
              className={`w-full h-[700px] object-cover`}
            />
            <div className="md:flex md:justify-between mt-8">
              <div className="flex items-center gap-12">
                <div>
                  <label htmlFor="">Written by</label>
                  <p className="font-semibold text-base">
                    Admin- Ghar Ho Toh Aisa
                  </p>
                </div>
                <div>
                  <label htmlFor=""> Published on</label>
                  <p className="font-semibold text-base"> 3 February 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="h-8 w-8 flex items-center justify-center bg-[#F4F4F4] rounded-full">
                  <img
                    src={`/assets/images/latestBlogs/Link.svg`}
                    alt={"link"}
                    className={`h-4 w-4 object-cover`}
                  />
                </button>
                <button className="h-8 w-8 flex items-center justify-center bg-[#F4F4F4] rounded-full">
                  <img
                    src={`/assets/images/latestBlogs/Linkedin.svg`}
                    alt={"linkedin"}
                    className={`h-4 w-4 object-cover`}
                  />
                </button>
                <button className="h-8 w-8 flex items-center justify-center bg-[#F4F4F4] rounded-full">
                  <img
                    src={`/assets/images/latestBlogs/X.svg`}
                    alt={"twitter"}
                    className={`h-4 w-4 object-cover`}
                  />
                </button>
                <button className="h-8 w-8 flex items-center justify-center bg-[#F4F4F4] rounded-full">
                  <img
                    src={`/assets/images/latestBlogs/Facebook.svg`}
                    alt={"facebook"}
                    className={`h-4 w-4 object-cover`}
                  />
                </button>
              </div>
            </div>
            <div className="mt-20 md:mt-24 lg:mt-28">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 text-base md:text-lg">
                <div className="lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Introduction</h2>
                  <p className="text-base md:text-lg lg:text-xl  tracking-wider">
                    In the realm of housing, Rashmi Group has emerged as a
                    pioneer with its groundbreaking initiative, "Ghar Ho To Aisa
                    and Apne Dam Par." This transformative approach not only
                    redefines the landscape of housing but also empowers
                    individuals to take charge of their dream homes. The essence
                    of the initiative lies in its commitment to providing not
                    just houses but homes where families can thrive. Rashmi
                    Group's vision revolves around making homeownership a
                    reality for everyone, irrespective of economic background.
                    The slogan "Ghar Ho To Aisa" encapsulates the aspiration to
                    create homes that go beyond brick and mortar, fostering a
                    sense of belonging and security among the homeowners.
                  </p>
                  <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-300 flex items-center justify-center mb-6">
                    <span className="text-gray-500 text-lg">
                      Image caption goes here
                    </span>
                  </div>
                  <p className="mb-12 text-sm md:text-base italic">| Image caption goes here</p>
                  <p className="text-base md:text-lg lg:text-xl  tracking-wider">
                    At the core of this initiative is the belief in
                    self-sufficiency, embodied by the phrase "Apne Dam Par."
                    Rashmi Group recognizes the financial challenges that many
                    face when it comes to buying a house. Instead of relying
                    solely on traditional financing models, the initiative
                    encourages individuals to leverage their own strengths and
                    resources to fulfill this fundamental need.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl  tracking-wider">
                    One of the key features of the initiative is its innovative
                    financing options. Rashmi Group has introduced flexible
                    payment plans that accommodate not only various income
                    levels, ensuring that individuals can progress towards
                    homeownership at their own pace. This approach not only
                    eases the financial burden but also promotes a sense of
                    ownership and responsibility.
                  </p>
                  <h2 className="text-2xl font-bold mt-8 mb-5">Conclusion</h2>
                  <p className="text-base md:text-lg lg:text-xl  tracking-wider">
                    In conclusion, Rashmi Group’s “Ghar Ho To Aisa and Apne Dam
                    Par” initiative stands as a game changer in the realm of
                    housing. By reimagining the traditional approach to
                    homeownership and embracing innovation, the group has not
                    only built houses but also sowed the seeds for vibrant,
                    thriving communities. This initiative is not merely a
                    business model, but it is a commitment to transforming lives
                    and shaping a future where everyone can proudly say, “Ghar
                    Ho To Aisa.”
                  </p>
                </div>
                <div className="lg:w-1/3 p-6 ">
                  <div className="border border-black p-8">
                    <h3 className="text-3xl sm:text-4xl  font-semibold mb-4">
                      Join Our Parivaar
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl mb-6">
                      Subscribe to receive the latest blog posts to your inbox
                      every week.
                    </p>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-2 mb-4 border rounded"
                    />
                    <button className="w-full bg-[#9F238B] rounded-md text-white py-2">
                      Subscribe
                    </button>
                    <p className="text-xs md:text-sm lg:text-base mt-4">
                      By subscribing you agree to with our Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[13px] mt-6 md:mt-12 lg:mt-[83px]">
                <button className="flex items-center gap-1 bg-transparent w-[73px] h-[55px] border border-[#9F238B] text-[#9F238B] justify-center p-0">
                  <ThumbsUp className="text-3xl" />
                </button>
                <button className="flex items-center gap-1 bg-transparent w-[73px] h-[55px] border border-[#9F238B] text-[#9F238B] justify-center p-0">
                  <ThumbsDown className="text-3xl" />
                </button>
                <p className="text-xl font-medium mb-0">20 Upvotes</p>
              </div>
            </div>
            <div className="mt-[100px]">
              <h1 className="text-2xl md:3xl lg:text-4xl xl:text-5xl font-semibold  ">
                Leave a comment!
              </h1>
              <div className="mt-[65px]">
                <div>
                  <p className="text-lg md:text-xl lg:text-2xl">Message</p>
                  <textarea
                    name=""
                    id="textarea"
                    rows={5}
                    style={{ resize: "none" }}
                    className="border border-black w-full py-[21px] px-[27px] mt-3"
                    placeholder="Type a message....."
                  ></textarea>
                </div>
                <div className="mt-8">
                  <p className="text-lg md:text-xl lg:text-2xl">Name</p>
                  <input
                    type="text"
                    name=""
                    id="name"
                    style={{ resize: "none" }}
                    className="border border-black w-full py-[18px] px-[27px] mt-3"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mt-12">
                  <button className="bg-[#9F238B] text-white py-3 px-6">
                    <span>Post Comment</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold">Related posts</h2>
              <div className="flex items-center justify-between mt-6 w-full">
                <p className="text-gray-600">
                  Some of our readings you might like too
                </p>
                <button className="bg-white border border-gray-300 px-4 py-2 rounded">
                  View all
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[80px]">
                <div className="border border-black overflow-hidden">
                  <img
                    src="/assets/images/latestBlogs/Image-6.webp"
                    alt="Target"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-semibold bg-[#F4F4F4] w-max px-2 py-1  ">
                        August 8, 2023
                      </p>
                      <p className="text-sm font-semibold">5 min read</p>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                      Is It Apne Dam Par Legit?
                    </h3>
                    <p className="text-gray-600 mt-2">
                      When it looks too good, it’s said that Apne Dam Par (ADP)
                      can save you up to 40% of your home loan interest. If we
                      put this word into numbers, it’s more than 15 lacs! So,
                      is...
                    </p>
                    <p className="text-base mt-4 flex items-center gap-3 cursor-pointer">
                      Read more
                      <ChevronRight className="text-base" />
                    </p>
                  </div>
                </div>
                <div className="border border-black overflow-hidden">
                  <img
                    src="/assets/images/latestBlogs/Image-5.webp"
                    alt="Target"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-semibold bg-[#F4F4F4] w-max px-2 py-1  ">
                        August 17, 2023
                      </p>
                      <p className="text-sm font-semibold">5 min read</p>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                      Growth Partner – Everything you need to know about
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Growth Partner is the latest innovation of Rashmi Group
                      (Ghar Ho To Aisa). This plan is inspired by A...
                    </p>
                    <p className="text-base mt-4 flex items-center gap-3 cursor-pointer">
                      Read more
                      <ChevronRight className="text-base" />
                    </p>
                  </div>
                </div>
                <div className="border border-black overflow-hidden">
                  <img
                    src="/assets/images/latestBlogs/Image-7.webp"
                    alt="Target"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <p className="text-sm font-semibold bg-[#F4F4F4] w-max px-2 py-1  ">
                        July 7, 2023
                      </p>
                      <p className="text-sm font-semibold">5 min read</p>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4">
                      Buying a Home: 9 Factors for a Connected Living Experience
                    </h3>
                    <p className="text-gray-600 mt-2">
                      "Home is not just a place, it’s a feeling of belonging
                      where cherished memories are made and dreams take root."
                    </p>
                    <p className="text-base mt-4 flex items-center gap-3 cursor-pointer">
                      Read more
                      <ChevronRight className="text-base" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
