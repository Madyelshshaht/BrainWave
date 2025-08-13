import { useState } from "react";
import { useLocation } from "react-router-dom"
import { brainwave } from "../assets"
import { navigation } from "../constants"

import MenuSvg from "../assets/svg/MenuSvg"
import { HamburgerMenu } from "./design/Header"




// Scroll Lock
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import Button from "./Button"

const Header = () => {
    const pathName = useLocation();
    console.log(pathName.hash)

    const [openNavigation, setOpenNavigation] = useState(false);

    const ToggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    }

    // On click on any link Close the Navigation
    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    }


    return (
        <div className={`fixed top-0 left-0 z-50 w-full border-b border-n-6  ${openNavigation ? 'bg-[#0E0C15]' : 'bg-[#0E0C15]/90  backdrop-blur-sm '}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 py-2 ">
                <a href="#hero" className="block w-[12rem] xl:mr-8 ">
                    <img src={brainwave} width={190} height={40} alt="brainwave" />
                </a>



                {/* Nav */}
                <nav className={` ${openNavigation ? "flex backdrop-blur-sm bg-[#0E0C15]/80" : "hidden"} fixed  top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent  `}>
                    {/* Click Any Place to Close Menu  && inset-0 ==> top-0 , left-0 , bottom-0, right-0  to cover all element*/}
                    <div onClick={() => setOpenNavigation(false)} className="fixed inset-0"></div>

                    <div className="relative z-20 flex flex-col items-center justify-center m-auto lg:flex-row lg:gap-2">
                        {navigation.map((item) => (
                            <div key={item.id} className={`
                                relative text-2xl uppercase font-code text-n-1 transition-colors hover:text-[#AC6AFF]
                                px-6 py-6 md:py-4 lg:text-base lg:font-semibold  lg:-mr-0.25 cursor-pointer
                                lg:leading-5 lg:hover:text-white hover:opacity-100
                                ${item.onlyMobile ? "lg:hidden" : ""}
                                ${item.url === pathName.hash ? "lg:text-white" : "lg:opacity-50 "}
                            `}>
                                <a key={item.id} href={item.url}
                                    onClick={handleClick}
                                >
                                    {item.title}
                                </a>
                            </div>
                        ))}

                        {/* Design */}
                    </div>
                    {/* Img */}
                    <HamburgerMenu />
                </nav>

                <a href="#signUp" className={`text-base font-semibold font-code uppercase hidden mr-8 text-n-1 opacity-50 transition-colors hover:text-white hover:opacity-100  lg:block`}>
                    New Account
                </a>

                <Button className="max-lg:hidden" href="#Login">
                    Sign In
                </Button>

                <Button className="ml-auto lg:hidden" onClick={ToggleNavigation} px="px-4">
                    <MenuSvg openNavigation={openNavigation} />
                </Button>

            </div>
        </div>
    );
};

export default Header;
