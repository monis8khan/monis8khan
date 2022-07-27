
export const SocialIcons = ({icon, link, classes}) => {
    return (
        <a href={link} className={classes} target="_blank" rel="noreferrer" >
            {icon}
        </a>
    )
}
