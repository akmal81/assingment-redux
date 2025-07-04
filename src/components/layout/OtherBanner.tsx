interface IProps{
    level:string
}

const OtherBanner = ({level}:IProps) => {
    return (
        <div className="max-w-7xl min-h-[200px] lg:min-h-[300px]  
        bg-[url(./assets/images/banner.jpg)]  
        bg-cover bg-center lg:bg-top-right">
            <div className="w-full min-h-[200px] lg:min-h-[300px] flex items-center justify-center">
                <div className=" sm:w-full md: lg:w-2/4 p-10 text-center space-y-6
                flex flex-col justify-center bg-black/75 items-center rounded-md">
                    <h1 className="text-white text-5xl font-bold">
                        {level}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default OtherBanner;