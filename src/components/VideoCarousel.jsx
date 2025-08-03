import { hightlightsSlides } from "../constants";
import { useState , useEffect , useRef } from "react";

const VideoCarousel = () => {

    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video , setVideo] = useState({
        isEnd : false,
        startPlay : false,
        videoId : 0,
        isLastVideo : false,
        isPlaying : false
    })

    const { isEnd , startPlay, videoId,  isLastddVideo , isPlaying} = video;

    useEffect( () =>{
        
    })

    return (
        <>

            <div className="flex items-center overflow-hidden">
                {hightlightsSlides.map(list => (
                    <div key={list.id} id="slider" className=" sm:pr-20 pr-10">
                        <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
                            <div className=" w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline={true}
                                    preload="auto"
                                    muted
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>

                            <div className=" absolute top-12 left-[5%]">
                                {list.textLists.map((items,i)=>(
                                    <p key={i}>{items}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default VideoCarousel;