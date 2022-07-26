import React from 'react'

export const Button = ({text, link, btnPrimary}) => {
    const primary = "bg-skin-button-accent px-5 py-2 rounded-full right-0 text-xs md:text-base text-skin-base font-bold hover:text-skin-inverted hover:bg-skin-button-accent-hover uppercase";
    const secondary = `border-2 border-skin-button-accent px-5 py-2 rounded-full right-0 text-xs md:text-base text-skin-base 
    font-bold hover:text-skin-inverted hover:bg-skin-button-accent-hover ml-2 uppercase`
    return (
        <a href={link}
            className={btnPrimary ? primary : secondary}>{text}</a>
    )
}
