"use client"

import { useEffect, ReactNode, useState } from "react"
import anime from "animejs"

type LoaderProps = {
    children: ReactNode
}

const PreLoader = ({ children }: LoaderProps) => {
    const [loader, setLoader] = useState(true)

    const loaderText = {
        opacityIn: [0, 1],
        scaleIn: [0.2, 1],
        scaleOut: 3,
        durationIn: 600,
        durationOut: 400,
        delay: 500,
    }

    const circles = [
        { x: -300, y: -200 },
        { x: 350, y: -220 },
        { x: -450, y: 180 },
        { x: 400, y: 140 },
    ]

    useEffect(() => {
        anime
            .timeline()
            .add({
                targets: ".loader-circle",
                keyframes: [
                    {
                        translateX: (el: {
                            getAttribute: (arg0: string) => number
                        }) => {
                            return el.getAttribute("data-x")
                        },
                        translateY: (el: {
                            getAttribute: (arg0: string) => number
                        }) => {
                            return el.getAttribute("data-y")
                        },
                        borderWidth: "8px",
                        duration: 100,
                    },
                    {
                        borderWidth: "1px",
                        duration: 500,
                    },
                    {
                        opacity: 1,
                        width: anime.stagger(70, { start: 150 }),
                        duration: 1000,
                    },
                    {
                        opacity: 0,
                        duration: 300,
                    },
                ],
                easing: "easeInOutSine",
            })
            .add({
                targets: ".loader-border",
                keyframes: [
                    { scale: 1.1, duration: 1000 },
                    { opacity: 0, duration: 1000 },
                ],
                easing: "easeInOutSine",
                complete: () => {
                    setLoader(false)
                },
            })
            .add({
                targets: ".loader-text .letters-1",
                opacity: loaderText.opacityIn,
                scale: loaderText.scaleIn,
                duration: loaderText.durationIn,
            })
            .add({
                targets: ".loader-text .letters-1",
                opacity: 0,
                scale: loaderText.scaleOut,
                duration: loaderText.durationOut,
                easing: "easeInExpo",
                delay: loaderText.delay,
            })
            .add({
                targets: ".loader-text .letters-2",
                opacity: loaderText.opacityIn,
                scale: loaderText.scaleIn,
                duration: loaderText.durationIn,
            })
            .add({
                targets: ".loader-text .letters-2",
                opacity: 0,
                scale: loaderText.scaleOut,
                duration: loaderText.durationOut,
                easing: "easeInExpo",
                delay: loaderText.delay,
            })
            .add({
                targets: ".loader-text .letters-3",
                opacity: loaderText.opacityIn,
                scale: loaderText.scaleIn,
                duration: loaderText.durationIn,
            })
            .add({
                targets: ".loader-text .letters-3",
                opacity: 0,
                scale: loaderText.scaleOut,
                duration: loaderText.durationOut,
                easing: "easeInExpo",
                delay: loaderText.delay,
            })
    }, [])

    if (!loader) return children

    return (
        <section className="flex items-center justify-center w-screen h-screen overflow-hidden">
            <div className="loader-border w-[400px] h-[400px] border-black border-[10px] rounded-full bg-white">
                <h4 className="text-lg font-bold text-black loader-text">
                    <span className="letters letters-1">Ready</span>
                    <span className="letters letters-2">Set</span>
                    <span className="letters letters-3">Go!</span>
                </h4>
                {circles.map((c, i) => (
                    <div
                        data-x={c.x}
                        data-y={c.y}
                        className="border border-gray-400 rounded-full opacity-0 loader-circle aspect-square"
                        key={i}
                    ></div>
                ))}
            </div>
        </section>
    )
}

export default PreLoader
