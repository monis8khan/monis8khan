
import { Button } from './common/Button'
import { SocialIcons } from './common/SocialIcons'

export const Hero = ({ icons }) => {

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
                    {icons.map((icon) => (<SocialIcons key={icon.id} icon={icon.svg} link={icon.url} classes='fill-red-800 ml-4 first:ml-0' />))}
                </div>

                {/* <!-- hire now and email button --> */}
                <div className="w-full pt-10">
                    <Button text={"Hire Now!"} btnPrimary={true} link="#Home" />
                    <Button text={"Book a Meeting!"} link="#Home" />
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
