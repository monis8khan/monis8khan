import React, { useState } from 'react'
import angularBootstrap from '../assets/angularPortfolio.png'
export const PortfolioCard = ({ featured }) => {
    const [hide, setHide] = useState({
        showBox: false
    });
    const [portfolio] = useState(featured[0])
    const handleBoxToggle = () => setHide({ showBox: !hide.showBox });
    return (
    <div className="w-1/2 pl-10">
        <div className="w-full relative h-80 flex alignpy-auto rounded-lg overflow-hidden" onMouseEnter={handleBoxToggle} onMouseLeave={handleBoxToggle}>
            <div className="absolute">
                <img src={angularBootstrap} className="rounded-lg" alt="angularBootstrap" width="100%" />
            </div>
            {hide.showBox && <div className="w-full absolute font-bold text-center text-white h-full">
                <div className="flex flex-col h-full justify-between">
                    <span className='bg-skin-fill py-2 opacity-90'>{portfolio.name}</span>
                    <a href={portfolio.url} className='flex-end bg-skin-button-accent opacity-90'>View</a>
                </div>
            </div>}
        </div>
    </div>
    )
}
