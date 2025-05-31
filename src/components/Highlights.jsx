import React from "react";
import gasp from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg } from "../utils/index.js";
import { rightImg } from "../utils/index.js";
import VideoCarousel from "./VideoCarousel.jsx";

const Highlights = () => {

    useGSAP( () => {
        gasp.to("#title",{ opacity: 0.5, y: 0, delay: 1.5})
        gasp.to(".link",{opacity: 1, y:0, delay: 1.7, stagger: 0.25})
    })

    return(
        <section id="hightlights" className="w-screen-overflow-hidden sm:py-32 py-20 sm:px-10 px-5 h-full bg-[#37303050]">
            <div className="scrim-max-width">
                <div className="mb-12 w-full flex items-end justify-between">
                    <h1 id="title" className="text-gray-100 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20">
                        Get the hightlights.
                    </h1>

                    <div className="flex flex-wrap items-end gap-5">
                        <p className="text-white link hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
                            Watch the film
                            <img className="ml-2" src={watchImg} alt="watch" />
                        </p>

                        <p className="text-white link hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20">
                            Watch the event
                            <img className="ml-2" src={rightImg} alt="right" />
                        </p>
                    </div>
                </div>

                <VideoCarousel/>
            </div>

        
        </section>
    )
}

export default Highlights;