import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import AnimatedLetters from './AnimatedLetters';

export const Button = ({text, link, btnPrimary}) => {
    
    // const [letterClass, setLetterClass] = useState('text-animate');
    // useEffect(() => {
    //     setTimeout(() => {
    //         return setLetterClass('text-animate-hover')
    //     }, 800)
    // }, [])

    const primary = "bg-skin-button-accent px-5 py-2 rounded-full right-0 text-xs md:text-base text-skin-base font-bold hover:text-skin-inverted hover:bg-skin-button-accent-hover uppercase";
    const secondary = `border-2 border-skin-button-accent px-5 py-2 rounded-full right-0 text-xs md:text-base text-skin-base 
    font-bold hover:text-skin-inverted hover:bg-skin-button-accent-hover ml-2 uppercase`
    return (
        <a href={link}
            className={btnPrimary ? primary : secondary}>{text}</a>
    )
    //<AnimatedLetters strArray={text.split("")} idx={0} lettersClass={letterClass}> </AnimatedLetters>
}
