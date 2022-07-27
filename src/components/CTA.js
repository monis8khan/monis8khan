import { Button } from "./common/Button"

export const CTA = ({title, desc, btnText}) => {
  return (
    <section id="CTA" className="w-full bg-skin-button-accent items-center py-10 md:px-20">
        <div className="container mx-auto flex flex-col items-center text-center">
            <div className="w-2/3">
                <h2 className="text-skin-base text-lg md:text-4xl text-underline mb-3 font-bold">{title}
                </h2>
                <p className="leading-relaxed text-skin-base text-xs md:text-lg p-2">{desc}
                </p>
            </div>
            <div className="w-1/3 flex flex-row justify-center">                    
                <Button text={btnText} link="#"/>
            </div>
        </div>
    </section>
  )
}
