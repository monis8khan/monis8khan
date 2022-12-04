import { useState, useEffect } from "react";
import AnimatedLetters from "../common/AnimatedLetters";

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <section className="text-skin-base font-poppins m-10" id="About">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center md:p-20">

                <h1 className="text-skin-base text-lg md:text-4xl font-semibold md:px-10 py-10 uppercase">
                    <AnimatedLetters strArray={"Brief Introduction".split("")} idx={1} lettersClass={letterClass}> </AnimatedLetters>
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="inline-block w-4 h-4 md:w-8 md:h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036">
                    <path
                        d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                    </path>
                </svg>
                <p className="leading-relaxed text-xs md:text-lg">
                    
                <AnimatedLetters strArray={`Hello I am Monis (some friends call me dev-egg), a JavaScript developer. I have more than 2 years of experience in website development over different 
                    platforms like Wix/EditorX, Angular, React.`.split("")} idx={1} lettersClass={letterClass}> </AnimatedLetters>
                </p>
                <span className="inline-block h-1 w-10 rounded bg-skin-button-accent-hover mt-8 mb-6"></span>
                <h2 className="text-skin-inverted font-medium title-font tracking-wider text-sm flex flex-col">
                    <a href="#Portfolio"
                        className="mt-3 flex mx-auto text-skin-inverted inline-flex items-center hover:translate-y-1 hover:text-skin-base hover:px-3 hover:rounded-full">Portfolio
                        <div className="rotate-90">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                <path d="M4 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </div>
                    </a>
                </h2>
            </div>
        </section>

    )
}

export default About;