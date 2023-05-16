"use client";

import { useEffect, useRef, useState } from "react";

export default function Clock() {
    const [now, setNow] = useState<Date>(new Date());
    const containerRef = useRef<HTMLDivElement>(null);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [selectedFont, setSelectedFont] = useState<string>('font-sans');

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const fontLib = ["font-sans", "font-serif", "font-heading"];

    useEffect(() => {
        const time = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return (() => {
            clearInterval(time);
        })
    }, []);

    const openFullScreen = () => {
        if (!isFullScreen) {
            if (containerRef.current?.requestFullscreen) {
                containerRef.current?.requestFullscreen();
                setIsFullScreen(true);
            }
        }

        if (isFullScreen) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullScreen(false);
            }
        }
    }

    useEffect(() => {
        function onFullscreenChange() {
            const isFS = Boolean(document.fullscreenElement)
            setIsFullScreen(isFS);
        }

        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, [])

    return (
        <div ref={containerRef} className="border-4 border-light-primary dark:border-dark-primary flex flex-col justify-center items-center rounded-3xl select-none relative py-40">
            <div className="absolute top-3 right-3 flex flex-row-reverse justify-center items-center">
                <button
                    type="button"
                    onClick={openFullScreen}
                    className="text-light-primary dark:text-dark-primary focus:outline-none">
                    <span className="material-icons">
                        {isFullScreen ? 'fullscreen_exit' : 'fullscreen'}
                    </span>
                </button>
                {/* <button
                    type="button"
                    onClick={openFullScreen}
                    className="text-light-primary dark:text-dark-primary focus:outline-none">
                    <span className="material-icons">
                        text_fields
                    </span>
                </button> */}
            </div>
            <div>
                <h2 className="w-full text-center text-3xl text-light-primary dark:text-dark-primary">
                    {`${weekday[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`}
                </h2>
                <h1 className={`w-full text-center ${selectedFont} text-[16rem] text-light-primary dark:text-dark-primary leading-none`}>
                    <span>{now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()}</span>
                    <span className="mx-1">:</span>
                    <span>{now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()}</span>
                    <span className="mx-1">:</span>
                    <span>{now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()}</span>
                </h1>
                <h2 className="w-full text-center text-4xl text-light-primary dark:text-dark-primary uppercase">
                    {`${now.getHours() >= 12 ? 'Past-Morning' : 'After-Midnight'}`}
                </h2>
            </div>
        </div>
    )
}
