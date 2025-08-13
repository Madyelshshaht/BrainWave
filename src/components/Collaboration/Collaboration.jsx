import { collabApps, collabContent, collabText } from "../../constants";
import Section from "../Section";
import { brainwaveSymbol, check } from "../../assets";
import Button from "../Button";
import { LeftCurve, RightCurve } from "../design/Collaboration";


const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container ">
                <div className="lg:flex justify-between items-center lg:px-1 md:px-5 overflow-hidden pb-10 ">

                    {/* Left */}
                    <div className="lg:max-w-[25rem]">
                        <h2 className="h2">AI  Chat app for seamless collaboration</h2>

                        <ul className="max-w-[22rem] md:mb-8 mt-5">
                            {collabContent.map((i, idx) => (
                                <li key={idx} className="mb-3 py-4">
                                    <div className="flex items-center">
                                        <img src={check} alt="Check" width={24} height={24} />
                                        <h6 className="body-2 ml-5">{i.title}</h6>
                                    </div>
                                    {i.text && (
                                        <p className="body-2 mt-8 text-n-4">
                                            {i.text}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <Button>
                            Try it now
                        </Button>

                    </div>
                    
                    {/* Right */}
                    <div className="xl:w-[38rem]  pb-5">

                        <p className="body-2 mb-8 text-n-4 mt-5 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
                            {collabText}
                        </p>

                        {/* The First Circle */}
                        <div className="relative left-1/2 flex md:w-[22rem] sm:w-[18rem] w-[15rem] max-sm:mt-20 aspect-square  
                        border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                            {/* Second Circle */}
                            <div className="flex aspect-square m-auto md:w-60 sm:w-50 w-35  border border-n-6 rounded-full">

                                <div className="relative md:w-[6rem] sm:w-[5rem] w-[4rem]  aspect-square m-auto p-[0.2rem]  rounded-full
                                bg-gradient-to-tr from-purple-500 via-pink-500  to-indigo-800   ">
                                    <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                        <img
                                            src={brainwaveSymbol}
                                            // width={48}
                                            // height={48}
                                            alt="brainwave"
                                            className="md:w-[48] md:h-[48px] w-[40px] h-[40px]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <ul>
                                {collabApps.map((app, index) => (
                                    <li
                                        key={app.id}
                                        className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom  rotate-${index * 45}`}
                                    >
                                        <div
                                            className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] 
                                                bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}
                                        >
                                            <img
                                                className="m-auto"
                                                width={app.width}
                                                height={app.height}
                                                alt={app.title}
                                                src={app.icon}
                                            />
                                        </div>
                                    </li>
                                ))}
                            </ul>


                            <LeftCurve />
                            <RightCurve />

                        </div>

                    </div>

                </div>
            </div>
        </Section >
    )
}

export default Collaboration;