import React from 'react'
import { Button } from './common/Button'

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-row mt-10" id="Hero">
        {/* <!-- intro and social buttons --> */}
        <div className="w-1/2 flex flex-col justify-center">
            {/* <!-- intro  --> */}
            <p className="text-skin-base">
                Hello, I am
            </p>
            <h1 className="text-skin-base font-bold text-5xl uppercase">
                Monis <br />Hasan Khan
            </h1>
            <p className="text-skin-base">
                Developer | JavaScript | TailwindCSS | Angular | Typescript | Linux
            </p>


            {/* <!-- social icons --> */}
            <div className="w-full pt-5 flex flex-row">
                {/* <!-- facebook --> */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"
                    className='fill-red-800'>
                    <path
                        d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z">
                    </path>
                </svg>
                {/* <!-- instagram --> */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"
                    className="ml-4 fill-red-800">
                    <path
                        d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z">
                    </path>
                </svg>
                {/* <!-- linkedin --> */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"
                    className="ml-4 fill-red-800">
                    <path
                        d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z">
                    </path>
                </svg>
                {/* <!-- youtube --> */}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"
                    className="ml-4 fill-red-800">
                    <path
                        d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z">
                    </path>
                </svg>
            </div>

            {/* <!-- hire now and email button --> */}
            <div className="w-full pt-10">
                {/* <button
                    className="bg-skin-button-accent px-5 py-2 rounded-full right-0 text-base text-skin-base font-bold hover:text-skin-inverted hover:bg-skin-button-accent-hover">Hire
                    now!</button> */}
                    <Button text={"Hire Now!"} btnPrimary={true} link="#Home" />
                    <Button text={"Book a Meeting!"} link="#Home" />
                {/* <button className="border-2 border-skin-button-accent px-5 py-2 rounded-full right-0 text-base text-skin-base 
                    font-bold hover:text-skin-inverted hover:bg-skin-button-accent-hover ml-2">BOOK A MEETING!</button> */}
            </div>
        </div>
        {/* <!-- image section --> */}
        <div className="shadow-2xl shadow-red-900 rounded-full w-1/2 hover:-translate-y-6">
            {/* <!-- shape --> */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#9B0000"
                    d="M42.8,-64.7C51.3,-52.7,51.2,-34.6,52,-19.8C52.8,-5,54.5,6.7,52,17.6C49.4,28.5,42.5,38.8,33.1,47.1C23.7,55.5,11.9,62,1.8,59.5C-8.3,57,-16.6,45.6,-25.5,37.1C-34.3,28.6,-43.8,22.9,-48.1,14.5C-52.4,6,-51.6,-5.2,-46.1,-12.8C-40.6,-20.4,-30.5,-24.2,-22.1,-36.2C-13.6,-48.2,-6.8,-68.3,5.2,-75.4C17.1,-82.6,34.3,-76.6,42.8,-64.7Z"
                    transform="translate(100 100)" />
            </svg>

        </div>
    </div>
  )
}
