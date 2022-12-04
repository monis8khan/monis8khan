import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Services from "./components/Services"
import CTA from "./components/CTA";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { useState } from "react";

//-- 
import angularBootstrap from './components/assets/angularPortfolio.png'
// import bodykits4u from './components/assets/bodykits4u.PNG'
import tailwind from './components/assets/tailwind.PNG'
import wixPortfolio from './components/assets/wixPortfolio.png'
// import dummy from './components/assets/dummy.png'
// import tmh from './components/assets/trustmentalhealth.png'


function App() {

  //Data For Services
  const [services] = useState([
    {
      id: 1,
      name: "Web Designing",
      description: `With my design skills I can create perfect UI/UX for your websites`,
      image: "https://img.icons8.com/ios/100/000000/windows10-personalization.png"
    },
    {
      id: 2,
      name: "Web Development",
      description: `Develop webstores, Integrate 3rd party services with your website using Restful APIs.`,
      image: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-development-web-design-and-development-flatart-icons-outline-flatarticons-2.png"
    },
    {
      id: 3,
      name: "Solution to the problem",
      description: `What I emphasize most is finding a long lasting oslution to the problem people are facing, rather than just implementing a temporary solution.`,
      image: "https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-development-business-model-canvas-wanicon-lineal-wanicon.png"
    }
  ])
  //-- data for icons 
  const [icons] = useState([
    {
      id: "Youtube",
      svg:
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z">
          </path>
        </svg>,
      url: "https://www.youtube.com/channel/UC9rCrV84KD-en-fCNJNZb2Q"

    },
    {
      id: "LinkedIn",
      svg:
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z">
          </path>
        </svg>,
      url: "https://www.linkedin.com/in/monis8khan/"

    },
    {
      id: "Github",
      svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
        <path
          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z">
        </path>
      </svg>,
      url: "https://github.com/monis8khan"
    },
    // {
    //   id: "Facebook",
    //   svg:
    //     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    //       <path
    //         d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z">
    //       </path>
    //     </svg>,
    //   url: "#test"

    // },
    // {
    //   id: "Instagram",
    //   svg:
    //     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    //       <path
    //         d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z">
    //       </path>
    //     </svg>,
    //   url: "#test"

    // }
  ])
  //-- data for portfolio 
  const [portfolios] = useState([
    {
      id: "1",
      image: angularBootstrap,
      name: "Angular Bootstrap Portfolio",
      url: "https://monis8khan.github.io/get_bootstrapped/",
    },    
    // {
    //   id: "6",
    //   image: tmh,
    //   name: "Trust Mental Health",
    //   url: "#",
    // },
    // {
    //   id: "2",
    //   image: bodykits4u,
    //   name: "Bodykits4You!",
    //   url: "#",
    // },
    {
      id: "3",
      image: wixPortfolio,
      name: "Wix Portfolio",
      url: "https://dev8egg.wixsite.com/portfolio",
    },
    {
      id: "4",
      image: tailwind,
      name: "React Tailwind Portfolio!",
      url: "#",
    },
    // {
    //   id: "5",
    //   image: dummy,
    //   name: "Dummy Website",
    //   url: "#",
    // },
  ])


  return (
    <div className="bg-skin-fill font-poppins">
      <Header />
      <Hero icons={icons} />
      <About />
      <Services services={services} />
      <CTA title="Want to discuss about your project?"
        desc="Lets talk in detail, I am free tomorrow. Can you do?"
        btnText="Book A Meeting!"
        link="https://calendly.com/monis8khan" />
      <Portfolio portfolios={portfolios} />
      <CTA title="Lets get your project done!"
        desc="If it is what you require? Hit me up right now!"
        btnText="Hire Me Now!"
        link="https://www.upwork.com/freelancers/~01998f62fb85045982" />
      <Footer icons={icons} />
    </div>
  );
}

export default App;