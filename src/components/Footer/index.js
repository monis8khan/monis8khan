import React from 'react'
import { SocialIcons } from '../common/SocialIcons'

const Footer = ({ icons }) => {
    return (
        <footer className="">
            <div className="container mx-auto flex flex-col-reverse md:flex-row text-center md:text-left">
                <div className="flex flex-col md:w-2/3 p-10">
                    <h2 className="text-skin-base text-3xl font-semibold hover:text-skin-muted">
                        <a href="#Home">Monis8Khan.github.io</a>
                    </h2>
                    {/* <p className="text-skin-base my-auto">I am Javascript developer with great skills in customization of wix/editorX websites using Velo-Api. 
                    I can integrate 3rd party applications in your wix website using rest APIs. 
                    I can create custom functionality using wix-collections and velo code.</p> */}
                    <p className="text-sm text-skin-base pt-4 font-bold">Usefull Links
                    </p>
                    <div className="flex flex-row justify-center md:justify-start py-2 text-xs">
                        <a href="#About">
                            <li className="list-none text-center text-skin-base">
                                - About
                            </li>
                        </a>
                        <a href="#Services">
                            <li className="list-none ml-4 text-center text-skin-base">
                                - Services
                            </li>
                        </a>
                        <a href="#Portfolio">
                            <li className="list-none ml-4 text-center text-skin-base">
                                - Portfolio
                            </li>
                        </a>
                    </div>
                    <p className="text-xs md:text-sm text-skin-muted mt-10 border-t-2 pt-5">© 2022 MONIS8KHAN All Rights Reserved
                    </p>

                </div>
                <div className="md:w-1/3 px-4 md:p-10">

                    {/* <!-- social icons --> */}
                    <div className="flex flex-row justify-center md:justify-end p-2">
                        {/* <p className="text-skin-base my-auto"></p> */}
                        {icons.map((icon) => (<SocialIcons key={icon.id} icon={icon.svg} link={icon.url} classes='fill-red-800 ml-4 first:ml-0' />))}
                    </div>
                    <p className="text-xs md:text-sm text-skin-base text-center md:text-right">Developer | JavaScript | TailwindCSS | Angular | Typescript | Linux
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
