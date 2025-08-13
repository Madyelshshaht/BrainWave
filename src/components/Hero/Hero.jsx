import React, { useRef } from "react";
import Section from "../Section";
import { curve, heroBackground, robot } from "../../assets";
import Button from "../Button";


import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero"
import { heroIcons } from "../../constants";

import { ScrollParallax } from 'react-just-parallax';
import Notification from "../Notification";
import Generating from "../Generating";
import CompanyLogos from "../CompanyLogos/CompanyLogos";

// import notificationImages from "../../constants/notificationImages";



const Hero = () => {

    const parallaxRef = useRef(null);


    return (
        <Section
            className="pt-[12rem]  -mt-[5.8rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id={"hero"}
        >
            <div className="container relative" ref={parallaxRef}>

                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]    ">
                    <h1 className="h1 mb-6">
                        Explore the Possibilites of AI Chatting with
                        <span className="inline-block relative mt-3 ml-3">
                            BrainWave{" "}
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
                        Unleash the power of AI within Brainwave. Upgrade your productivity
                        with Brainwave, the open AI chat app.
                    </p>
                    <Button href="/pricing" white>
                        Get started
                    </Button>
                </div>

                <div className="relative md:max-w-5xl max-w-[23rem] mx-auto xl:mb-24 ">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-tr from-purple-500 via-pink-500  to-indigo-500 ">
                        <div className="relative bg-[#0E0C15]  rounded-2xl">
                            {/* Top border */}
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] " />
                            {/* Img */}
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img
                                    src={robot}
                                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                                    width={1024}
                                    height={490}
                                    alt="AI"
                                />

                                <Generating className='absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-7 md:w-[31rem] md:-translate-x-1/2' />

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[5.5rem]  bottom-[7.5rem] px-1 py-1 bg-[#474060]/40 
                                    backdrop-blur-sm border border-[#474060]/10 rounded-2xl lg:flex">
                                        {heroIcons.map((icon, idx) => (
                                            <li className="p-5" key={idx}>
                                                <img src={icon} width={24} height={24} alt="Icon" />
                                            </li>
                                        ))}
                                    </ul>

                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification
                                        className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] lg:flex"
                                        title="Code generation"
                                    />
                                </ScrollParallax>

                            </div>
                        </div>
                        <Gradient />
                    </div>

                    <div className="absolute -top-[50%] left-1/2  w-[234%] -translate-x-[54%] md:-top-[46%] md:w-[138%] lg:-top-[104%] ">
                        <img
                            src={heroBackground}
                            alt="HeroBackground"
                            className="w=full"
                            width={1440}
                            height={1800}
                        />
                    </div>
                    
                    <BackgroundCircles />
                </div>

                <CompanyLogos className={'relative z-10 lg:mt-20 mt-10 '} />
            </div>
            <BottomLine />
        </Section >
    );
};

export default Hero;
