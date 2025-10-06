import { useParams } from "react-router-dom" 
import { blog } from "../data/blog"
import { Link } from "react-router-dom"
import NotFound from "./NotFound"

const Blog = () => {
const {id} = useParams() 
const blogData = blog.find((item) => item.id === Number(id)) 

const relatedBlog = blog.filter((item) => item.id !== Number(id))

const scrollToTop = () => {
  window.scrollTo({behavior: "smooth", top: 0})
}

if(!blogData) {
  return (
    <NotFound/>
  )
}

    return (
        <div className="px-3 mt-12 lg:px-16">
          <div className="bg-[#f8f3ec] flex flex-col rounded-xl gap-5 items-center text-center lg:items-start lg:text-start py-7 space-y-3  lg:py-14 px-3 lg:px-14">
          <div className="flex flex-row gap-4">
           {blogData?.category.map((cat, index) => (
           <h1 
            className={
            index % 2 === 0 
             ? 'bg-[#f8ecc0] p-1 px-2 font-bold rounded-full' 
             : 'p-1 px-2 font-bold rounded-full bg-[#c9d8ec]'
            } 
            key={cat.name}
            >
            {cat.name}
            </h1>
            ))}
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold lg:max-w-3xl">{blogData?.name}</h1>
          </div>

           <div className="mt-16 space-y-8">
            <img src={blogData?.image} alt={blogData?.name} 
            className="rounded-xl  w-full object-cover"
            /> 
            <h1 className="text-[#937061] lg:text-lg">{blogData?.description}</h1> 
           <div className="space-y-2">
           <h1 className="text-2xl lg:text-3xl font-bold">{blogData?.name}</h1> 
           <h1 className="lg:text-lg">{blogData?.content}</h1>
           </div>
           </div>
          

            {/* related blog section */}
            <div className="mt-20 lg:mt-36">
            <div className="flex flex-col  gap-4">
            <h1 className="bg-[#f1d1c6] w-fit p-2 px-2 rounded-full font-bold">Blogs and Insights</h1>
            <h1 className="text-3xl lg:text-5xl">Read Other Blogs</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-11 lg:gap-16 mt-12 lg:mt-20">
                {relatedBlog.map((blog) => (
                    <Link to={`/blog/${blog.id}`} onClick={scrollToTop} key={blog.id} className="space-y-8"> 
                        
                        <div className="overflow-hidden rounded-xl">
                            <img 
                                src={blog.image} 
                                alt={blog.image} 
                                className="rounded-xl transform transition-transform duration-500 hover:scale-110" 
                            />
                        </div>

                        <div className="space-y-2"> 
                            <div className="flex flex-row gap-4">
                                {blog.category.map((cat, index) => (
                                    <h1 
                                        className={
                                            index % 2 === 0 
                                                ? 'bg-[#f8ecc0] p-1 px-2 font-bold rounded-full' 
                                                : 'p-1 px-2 font-bold rounded-full bg-[#c9d8ec]'
                                        } 
                                        key={cat.name}
                                    >
                                        {cat.name}
                                    </h1>
                                ))}
                            </div>
                            <h1 className="text-2xl font-bold">{blog.name}</h1> 
                            <h1 className="text-[#937061]">{blog.description}</h1>
                        </div>
                    </Link>
                ))}
            </div> 
            </div>

            {/* reach out section  */} 
           <div className="mt-16 text-center text-white space-y-7 lg:mt-36 bg-gradient-to-r py-7 lg:py-14 px-3 lg:px-14 rounded-xl from-[#f36551] to-[#f59a84]">
            <h1 className="text-2xl md:text-3xl">Serenity Minds</h1>
            <h1 className="text-2xl md:text-3xl lg:text-5xl lg:max-w-3xl mx-auto">Your journey to healing begins with one small step — reaching out.</h1>
           <a href="mailto:munashemugondaa@gamil.com" className="default-btn mx-auto w-fit">Book an appointment</a>
           </div>
        </div>
    )
}

export default Blog


