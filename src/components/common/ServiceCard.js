export const ServiceCard = ({name, description, image, id}) => {
    return (
        <div
            className={id%2 ===0 ? "flex items-center container mx-auto py-10 md:px-20 mb-10 sm:flex-row flex-col hover:-translate-y-1 border-t-2 border-inherit" : 
            "flex items-center container mx-auto py-10 md:px-20 mb-10 sm:flex-row-reverse flex-col hover:-translate-y-1 border-t-2 border-inherit"}>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-skin-base text-base md:text-2xl text-underline mb-3 font-bold underline">{name}
                </h2>
                <p className="text-skin-base text-xs md:text-base">{description}
                </p>
                <a href="#Portfolio"
                    className="mt-3 text-skin-inverted inline-flex items-center hover:translate-x-1 hover:text-skin-base hover:px-3 hover:rounded-full">Hire
                    Now
                    {/* <svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg> */}
                </a>
            </div>
            <div
                className={id%2 ===0 ?  "sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-white flex-shrink-0 sm:ml-10" : 
                "sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-white flex-shrink-0 sm:mr-10"}>
                <img src={image} alt="website" className="h-10 text-skin-base" />
            </div>
        </div>)
}
