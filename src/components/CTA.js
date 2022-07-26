import { Button } from "./common/Button"

export const CTA = ({title, desc, btnText}) => {
  return (
    <section id="CTA" class="w-full bg-skin-button-accent items-center p-10 px-20">
        <div class="container mx-auto flex flex-col items-center text-center">
            <div class="w-2/3">
                <h2 class="text-skin-base text-4xl text-underline mb-3 font-bold">{title}
                </h2>
                <p class="leading-relaxed text-skin-base p-2">{desc}
                </p>
            </div>
            <div class="w-1/3 flex flex-row justify-center">                    
                <Button text={btnText} link="#"/>
            </div>
        </div>
    </section>
  )
}
