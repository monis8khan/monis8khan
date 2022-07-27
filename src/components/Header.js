import { Button } from "./common/Button"

export const Header = () => {
    const menuHandler = (event) => {
        const btn = document.getElementById("menu-btn")
        const nav = document.getElementById('menu')
        btn.classList.toggle("open")
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    }
    return (
        <header className="mx-auto px-0 flex flex-row">
            <div className="px-10 py-10 w-2/4">
                <h1 className="text-skin-base text-lg font-semibold hover:text-skin-muted">
                    <a href="#Home">Monis8Khan</a>
                </h1>
            </div>
            <div className="w-2/4 flex md:hidden justify-end items-center p-10">
                <button id="menu-btn" className="block hamburger md:hidden focus:outline-none" onClick={menuHandler}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div className="w-2/4 hidden md:flex flex-row">
                <div className="px-10 w-1/2 flex flex-row justify-end">
                    <a href="#About">
                        <li className="list-none px-5 py-10 hover:bg-skin-button-accent text-center text-skin-base">
                            About
                        </li>
                    </a>
                    <a href="#Services">
                        <li className="list-none px-5 py-10 hover:bg-skin-button-accent text-center text-skin-base">
                            Services
                        </li>
                    </a>
                    <a href="#Portfolio">
                        <li className="list-none px-5 py-10 hover:bg-skin-button-accent text-center text-skin-base">
                            Portfolio
                        </li>
                    </a>
                </div>

                <div className="px-10 py-10 w-1/2 flex justify-end">
                    <Button text="Hire Now!" link="#" btnPrimary={true} />
                </div>
            </div>

            <div className="md:hidden">
                <div id="menu"
                    className="absolute flex-col items-center hidden self-end py-10 mt-20 space-y-6 font-bold bg-skin-fill sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-white">
                    <a href="#About">
                        <li className="list-none px-20 hover:bg-skin-button-accent text-center text-skin-base">
                            About
                        </li>
                    </a>
                    <a href="#Services">
                        <li className="list-none px-20 hover:bg-skin-button-accent text-center text-skin-base">
                            Services
                        </li>
                    </a>
                    <a href="#Portfolio">
                        <li className="list-none px-20 hover:bg-skin-button-accent text-center text-skin-base">
                            Portfolio
                        </li>
                    </a>
                </div>
            </div>
        </header>
    )
}