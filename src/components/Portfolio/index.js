import React from 'react'
import { PortfolioCard } from '../common/PortfolioCard'
import { Button } from '../common/Button'
import AnimatedLetters from '../common/AnimatedLetters'
import { useState, useEffect } from 'react'


const Portfolio = ({ portfolios }) => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    return (
        <section id="Portfolio" className="m-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 text-center md:text-left">
                <div className='py-10'>
                    <h3 className="text-skin-base text-sm md:text-lg font-semibold uppercase">
                        <AnimatedLetters strArray={"- My Work".split("")} idx={1} lettersClass={letterClass}> </AnimatedLetters>
                    </h3>
                    <h1 className="text-skin-base text-lg md:text-4xl font-semibold uppercase">
                        <AnimatedLetters strArray={"Portfolio".split("")} idx={7} lettersClass={letterClass}> </AnimatedLetters>
                    </h1>
                    <p className="leading-relaxed text-skin-base text-xs md:text-lg my-4 md:my-10">
                        <AnimatedLetters strArray={"A gallery of work I have done for my clients".split("")} idx={1} lettersClass={letterClass}> </AnimatedLetters>
                    </p>
                    <Button text={"Hire Now!"} btnPrimary={true} link="#Home" />
                    <Button text={"Book a Meeting!"} link="#Home" />
                </div>
                {portfolios.map((portfolio) => (<PortfolioCard key={portfolio.id} portfolio={portfolio} />))}
            </div>
        </section>
    )
}

export default Portfolio;