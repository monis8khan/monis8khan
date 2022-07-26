import React from 'react'
import angularBootstrap from './assets/angularPortfolio.png'
import bodykits4u from './assets/bodykits4u.PNG'
import tailwind from './assets/tailwind.PNG'
import wixPortfolio from './assets/wixPortfolio.png'
import dummy from './assets/dummy.png'

export const Portfolio = () => {
  return (    
    <section id="portfolio" class="mt-10">
    <div class="container mx-auto flex flex-row py-10">
        <div class="w-1/2">
            <h3 class="text-skin-base text-lg font-semibold uppercase">
                - my work
            </h3>
            <h1 class="text-skin-base text-4xl font-semibold uppercase">
                Portfolio
            </h1>

            <p class="leading-relaxed text-skin-base mt-10">A gallery of work I have done for my clients
            </p>
        </div>
        <div class="w-1/2 pl-10">
            <div class="rounded-lg h-80 overflow-hidden">
                <img src={angularBootstrap} alt="angularBootstrap" srcset="" width="100%" />
            </div>
        </div>
    </div>
    <div class="container mx-auto flex flex-row py-10">
        <div class="w-1/2 pr-10 -mt-40">
            <div class="rounded-lg h-80 overflow-hidden">
                <img src={bodykits4u} alt="bodykits" srcset="" width="100%" />
            </div>
        </div>
        <div class="w-1/2 pl-10">
            <div class="rounded-lg h-80 overflow-hidden">
                <img src={tailwind} alt="angularBootstrap" srcset="" width="100%" />
            </div>
        </div>
    </div>
    <div class="container mx-auto flex flex-row py-10">
        <div class="w-1/2 pr-10 -mt-40">
            <div class="rounded-lg h-80 overflow-hidden">
                <img src={wixPortfolio} alt="angularBootstrap" srcset="" width="100%" />
            </div>
        </div>
        <div class="w-1/2 pl-10">
            <div class="rounded-lg h-80 overflow-hidden">
                <img src={dummy} alt="angularBootstrap" srcset="" width="100%" />
            </div>
        </div>
    </div>
</section>
  )
}
