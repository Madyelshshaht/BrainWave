import ButtonGradient from "../assets/svg/ButtonGradient";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
    const classes = `button relative inline-flex items-center justify-center h-11  transition-colors
        hover:cursor-pointer  
        hover:text-[#AC6AFF]
        ${px || "px-7"} 
        ${white ? "text-n-8" : "text-n-1"}
        ${className || ""}
        `;

    const SpanClasses = `relative z-10 `;

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={SpanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )


    const renderLink = () => (
        <a href={href} className={classes} onClick={onClick}>
            <span className={SpanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

    return (
        <>
            {href ? renderLink() : renderButton()}
            <ButtonGradient />
        </>
    )


};

export default Button;
