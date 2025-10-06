import { blog } from "../data/blog"
import { Link } from "react-router-dom"

const Blogs = () => {

    const scrollToTop = () => {
        window.scrollTo({behavior: "smooth", top: 0})
      }

    return (
        <div className="px-3 mt-12 lg:px-16">
            <div className="bg-[#f8f3ec] rounded-xl py-7 space-y-3 text-center lg:py-14 px-3 lg:px-14">
                <h1 className="bg-[#efcdc0] mx-auto w-fit p-1 font-bold px-4 rounded-full">Blog</h1> 
                <h1 className="text-3xl lg:text-5xl font-bold">Mental Health Blogs</h1> 
                <h1 className="text-[#937061] lg:text-lg">Read tips, insights, and stories.</h1>
            </div> 

            <div className="grid grid-cols-1 md:grid-cols-2 gap-11 lg:gap-16 mt-20">
                {blog.map((blog) => (
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

            {/* reach out section  */} 
        <div className="mt-16 text-center text-white space-y-7 lg:mt-36 bg-gradient-to-r py-7 lg:py-14 px-3 lg:px-14 rounded-xl from-[#f36551] to-[#f59a84]">
         <h1 className="text-2xl md:text-3xl">Serenity Minds</h1>
         <h1 className="text-2xl md:text-3xl lg:text-5xl lg:max-w-3xl mx-auto">Your journey to healing begins with one small step — reaching out.</h1>
         <Link to="/appointment" className="default-btn mx-auto w-fit">Book an appointment</Link>
         </div>
        </div>
    )
}

export default Blogs
