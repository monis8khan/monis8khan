import React, { useState } from 'react'
import angularBootstrap from '../assets/angularPortfolio.png'
export const PortfolioCard = ({ portfolio }) => {
    const [hide, setHide] = useState({
        showBox: false
    });
    const handleBoxToggle = () => setHide({ showBox: !hide.showBox });
    return (
        <div className="w-full relative h-80 flex alignpy-auto rounded-lg overflow-hidden hover:shadow-2xl shadow-slate-50 hover:-translate-y-2" onMouseEnter={handleBoxToggle} onMouseLeave={handleBoxToggle}>
            <div className="absolute">
                <img src={portfolio.image} className="rounded-lg" alt="angularBootstrap" width="100%" />
            </div>
            {hide.showBox && <div className="w-full absolute font-bold text-center text-white h-full">
                <div className="flex flex-col h-full justify-between">
                    <span className='bg-skin-fill py-2 opacity-90'>{portfolio.name}</span>
                    <a href={portfolio.url} className='flex-end bg-skin-button-accent opacity-90' target={'_blank'} rel="noreferrer">View</a>
                </div>
            </div>}
        </div>
    )
}
