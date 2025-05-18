import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo } from "../utils/index.js";
import { smallHeroVideo } from "../utils/index.js";
import { useEffect } from "react";

const Hero = () => {

    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 1.5,
        });

        gsap.to("#cta",{
            opacity: 1,
            delay: 1.5,
            y: -50
        })
    });

    const [videoSrc , setVideoSrc] = useState( window.innerWidth < 760 ? smallHeroVideo : heroVideo );

    const handleVideoSrcSet = () => {

        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    };

    useEffect( () => {
        window.addEventListener('resize',handleVideoSrcSet);

        return(
            window.removeEventListener(('resize',handleVideoSrcSet),[])
        )
    })

    return(
        <section className="w-full h-[calc(100vh-60px)] bg-black relative">     
            <div className="h-5/6 w-full flex flex-col justify-center items-center">
                <p id="hero" className="text-gray-100 font-semibold text-2xl opacity-0">iPhone 15 pro</p>

                <div className="md:w-10/12 w-9/12 md:mt-2 mt-4">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>

                <div    id="cta"
                        className="flex flex-col items-center translate-y-20 opacity-0">

                    <a href="#hightlights" className="px-5 py-2 rounded-3xl bg-white text-black my-5 hover:bg-transparent border border-transparent hover:border hover:text-white hover:border-white">Buy</a>

                    <p className="font-normal text-xl">From $199/month or $999</p>
                </div>

            </div>

        </section>
    )
}

export default Hero;