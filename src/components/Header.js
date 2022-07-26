import { Button } from "./common/Button"

export const Header = () => {
    return (
        <header className="mx-auto px-0 flex flex-row">
            <div className="px-10 py-10 w-2/4">
                <h1 className="text-skin-base text-lg font-semibold hover:text-skin-muted">
                    <a href="#">Monis8Khan</a>
                </h1>
            </div>
            <div className="px-10 w-1/4 flex flex-row justify-end">
                <a href="#About">
                    <li className="list-none px-5 py-10 hover:bg-skin-button-accent text-center text-skin-base">
                        About
                    </li>
                </a>
                <a href="#">
                    <li className="list-none px-5 py-10 hover:bg-skin-button-accent text-center text-skin-base">
                        Services
                    </li>
                </a>
                <a href="#">
                    <li className="list-none px-5 py-10 hover:bg-skin-button-accent text-center text-skin-base">
                        Portfolio
                    </li>
                </a>
            </div>
            <div className="px-10 py-10 w-1/4 flex justify-end">
                <Button text="Hire Now!" link="#" btnPrimary={true}/>
            </div>
        </header>
    )
}