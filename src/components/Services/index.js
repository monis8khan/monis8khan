import { useState, useEffect } from "react";
import AnimatedLetters from "../common/AnimatedLetters";
import { ServiceCard } from "../common/ServiceCard"

const Services = ({services}) => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2000)
    }, [])
    return (
        <section className="text-skin-base font-poppins" id="Services">
            <div className="container px-5 py-24 mx-auto text-center">
                <h1 className="text-skin-base text-lg md:text-4xl font-semibold p-10 uppercase">
                <AnimatedLetters strArray={"What I can provide.".split("")} idx={1} lettersClass={letterClass}> </AnimatedLetters>
                </h1>
                    {services.map((service) => (<ServiceCard key={service.id.toString()} name={service.name}  description={service.description} image={service.image} id={service.id}/>))}
            </div>
        </section>
    )
}

export default Services;