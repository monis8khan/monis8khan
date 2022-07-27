import React from 'react'
import { SocialIcons } from './common/SocialIcons'

export const Footer = ({icons}) => {
  return (
    <footer className="">
        <div className="container mx-auto flex md:flex-row">
            <div className="flex flex-col w-2/3 p-10">
                <h2 className="text-skin-base text-lg font-semibold hover:text-skin-muted">
                    <a href="#Home">Monis8Khan</a>
                </h2>
                <p className="text-sm text-skin-base">Developer | JavaScript | TailwindCSS | Angular | Typescript | Linux
                </p>
                <p className="text-sm text-skin-muted mt-10 border-t-2 pt-5">© 2022 MONIS8KHAN All Rights Reserved
                </p>

            </div>
            <div className="flex flex-row w-1/3 p-10 justify-end">

                {/* <!-- social icons --> */}
                <div className="flex flex-row">
                    {icons.map((icon) => (<SocialIcons key={icon.id} icon={icon.svg} link={icon.url} classes='fill-red-800 ml-4 first:ml-0'/>))}
                </div>
            </div>
        </div>
    </footer>
  )
}
