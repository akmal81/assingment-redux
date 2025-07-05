import { Link } from "react-router";
import { Button } from "../ui/button";
import { BookPlus } from "lucide-react";

const Banner = () => {
    return (
        <div className="max-w-7xl min-h-[400px] lg:min-h-[600px]  
        bg-[url(./assets/images/banner.jpg)]  
        bg-cover bg-center lg:bg-top-right">
            <div className="w-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
                <div className=" sm:w-full md: lg:w-2/4 p-10 text-center space-y-6
                flex flex-col justify-center bg-black/75 items-center rounded-md">
                    <h1 className="text-white text-5xl font-bold">
                        Manage Your Library with Ease and Efficiency
                    </h1>
                    <p className="text-white">Your one stop library management system</p>
                    <Link to="/create-book">
                        <Button className="bg-green-500 text-black hover:bg-green-300"><BookPlus className="font-bold" />Add Book</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;