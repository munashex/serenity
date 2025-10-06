import { Link } from "react-router-dom"

const NotFound = () => {

    return (
        <div className="min-h-screen flex flex-col gap-12 items-center justify-center">
         <img src="/notfound.svg" alt="serenity"/> 
         <div className="text-center space-y-2 lg:space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl">We couldn’t find this page</h1>
             <h1 className="text-[#937061] max-w-xl">it looks like the page you’re looking for doesn’t exist or might have been moved. don’t worry, let’s get you back on track!</h1>
         </div>
         <Link to="/" className="default-btn">Back to Home page</Link>
        </div>
    )
}

export default NotFound