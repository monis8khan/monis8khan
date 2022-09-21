import React from 'react'
import { PortfolioCard } from '../common/PortfolioCard'
import { Button } from '../common/Button'


const Portfolio = ({ portfolios }) => {
    return (
        <section id="Portfolio" className="m-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 text-center md:text-left">
                <div className='py-10'>
                    <h3 className="text-skin-base text-sm md:text-lg font-semibold uppercase">
                        - my work
                    </h3>
                    <h1 className="text-skin-base text-lg md:text-4xl font-semibold uppercase">
                        Portfolio
                    </h1>
                    <p className="leading-relaxed text-skin-base text-xs md:text-lg my-4 md:my-10">A gallery of work I have done for my clients
                    </p>
                    <Button text={"Hire Now!"} btnPrimary={true} link="#Home" />
                    <Button text={"Book a Meeting!"} link="#Home" />
                </div>
                {portfolios.map((portfolio)=>(<PortfolioCard key={portfolio.id} portfolio={portfolio} />))}
            </div>
        </section>
    )
}

export default Portfolio;