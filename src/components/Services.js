
export const Services = () => {
  return (
    <section class="text-skin-base font-poppins" id="services">
    <div class="container px-5 py-24 mx-auto text-center">
        <h1 class="text-skin-base text-4xl font-semibold p-10 uppercase">
            Services I offer
        </h1>
        <div
            class="flex items-center container mx-auto py-10 px-20 mb-10 sm:flex-row flex-col hover:-translate-y-1 border-t-2">
            <div
                class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-white flex-shrink-0">
                {/* <img src="../assets/WEB.svg" alt="website" class="h-10 text-skin-base"> */}
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-skin-base text-2xl text-underline mb-3 font-bold underline">Web Designing
                </h2>
                <p class="leading-relaxed text-base">A creative and attractive website can not only showcase the
                    creative side of your brand but also elaborate what you specialize in.
                    I will Design your website the way you want, either a landing page to a full E-Commerce
                    Application, using different themes or PSD, XD, Figma mockups.
                </p>
                <a href="#Porfolio"
                    class="mt-3 text-skin-inverted inline-flex items-center hover:translate-x-1 hover:text-skin-base hover:px-3 hover:rounded-full">Hire
                    Now
                    <svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div
            class="flex items-center container mx-auto py-10 px-20 mb-10 sm:flex-row flex-colsa hover:-translate-y-1 border-t-2 border-inherit">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-skin-base text-2xl text-underline mb-3 font-bold underline">Web Development
                </h2>
                <p class="text-skin-base">This is most common when a website is not user-friendly, making
                    it tough for visitors to browse. I am here to help you with all of your issues.
                    I will develop your website in a way so that a user will have the best experience, either a
                    landing page to a full E-Commerce
                    Application.
                </p>
                <a href="#Portfolio"
                    class="mt-3 text-skin-inverted inline-flex items-center hover:translate-x-1 hover:text-skin-base hover:px-3 hover:rounded-full">Hire
                    Now
                    <svg stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
            <div
                class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-white flex-shrink-0">
                {/* <img src="./assets/web-design.svg" alt="website" class="h-10 text-skin-base"> */}
            </div>
        </div>
    </div>
</section>
  )
}
