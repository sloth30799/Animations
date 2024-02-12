import anime from "animejs"
import { useState } from "react"

const AnimeDemo = () => {
    const [animated, setAnimated] = useState({
        one: false,
        two: false,
        log: false,
    })

    const animateBlockOne = () => {
        if (animated.one) {
            anime({
                targets: ".block-one",
                left: "0",
                backgroundColor: "#C44536",
                borderRadius: ["50%", "0%"],
                easing: "easeInOutQuad",
            })

            setAnimated({
                ...animated,
                one: false,
            })

            return
        }

        anime({
            targets: ".block-one",
            left: "240px",
            backgroundColor: "#197278",
            borderRadius: ["0%", "50%"],
            easing: "easeInOutQuad",
        })

        setAnimated({
            ...animated,
            one: true,
        })
    }

    const animateBlockTwo = () => {
        if (animated.two) {
            anime({
                targets: ".block-two",
                translateX: 0,
                scale: 1,
                rotate: "1turn",
            })

            setAnimated({
                ...animated,
                two: false,
            })

            return
        }

        anime({
            targets: ".block-two",
            translateX: 250,
            scale: 1.5,
            rotate: "1turn",
            delay: anime.stagger(500)
        })

        setAnimated({
            ...animated,
            two: true,
        })
    }

    let battery = {
        charged: "0%",
        cycles: 120,
    }

    const batteryLogoAnimate = () => {
        const batteryLog = document.querySelector(".battery-log")

        anime({
            targets: battery,
            charged: "100%",
            cycles: 130,
            round: 1,
            easing: "linear",
            update: function () {
                batteryLog.innerHTML = JSON.stringify(battery)
            },
        })
    }

    const multipleAnimate = () => {
        if (animated.two && animated.one) {
            anime({
                targets: [".block-one", ".block-two"],
                translateX: 0,
            })

            setAnimated({
                ...animated,
                one: false,
                two: false,
            })

            return
        }

        anime({
            targets: [".block-one", ".block-two"],
            translateX: 250,
        })

        setAnimated({
            ...animated,
            one: true,
            two: true,
        })
    }

    const animateWithRelativeValue = () => {
        anime({
            targets: ".r-block",
            translateX: {
                value: "*=2.5", // 100px * 2.5 = '250px'
                duration: 1000,
            },
            width: {
                value: "-=20px", // 28 - 20 = '8px'
                duration: 1800,
                easing: "easeInOutSine",
            },
            rotate: {
                value: "+=2turn", // 0 + 2 = '2turn'
                duration: 1800,
                easing: "easeInOutSine",
            },
            direction: "alternate",
        })
    }

    const fnBasedAnimation = () => {
        // el => current target
        // i => index
        // l => total number of animated targets
        anime({
            targets: ".fn-based-block",
            translateX: function (el) {
                return el.getAttribute("data-x")
            },
            translateY: function (el, i) {
                return 50 + -50 * i
            },
            scale: function (el, i, l) {
                return l - i + 0.25
            },
            rotate: function () {
                return anime.random(-360, 360)
            },
            borderRadius: function () {
                return ["50%", anime.random(10, 35) + "%"]
            },
            duration: function () {
                return anime.random(1200, 1800)
            },
            delay: function () {
                return anime.random(0, 400)
            },
            direction: "alternate",
            loop: true,
        })
    }

    return (
        <section className="flex flex-col items-center justify-center gap-3">
            <section className="my-12">
                <div
                    onClick={animateWithRelativeValue}
                    className="w-10 h-10 bg-green-300 rounded-full cursor-pointer r-block"
                ></div>
            </section>

            <section className="flex flex-col gap-3 my-12">
                <div
                    data-x="50"
                    onClick={fnBasedAnimation}
                    className="w-10 h-10 bg-green-300 rounded-full cursor-pointer fn-based-block"
                ></div>
                <div
                    data-x="300"
                    onClick={fnBasedAnimation}
                    className="w-10 h-10 bg-green-300 rounded-full cursor-pointer fn-based-block"
                ></div>
                <div
                    data-x="500"
                    onClick={fnBasedAnimation}
                    className="w-10 h-10 bg-green-300 rounded-full cursor-pointer fn-based-block"
                ></div>
            </section>

            <div className="w-full h-1 bg-black"></div>

            <section className="my-12">
                <div className="relative w-10 h-10 bg-red-400">
                    <div
                        onClick={animateBlockOne}
                        className="w-10 h-10 absolute left-[100] bg-red-500 cursor-pointer block-one"
                    ></div>
                </div>
            </section>

            <section className="my-12">
                <div onClick={animateBlockTwo} className="flex flex-col gap-12">
                    <div className="w-10 h-10 bg-red-400">
                        <div className="w-10 h-10 bg-red-500 block-two"></div>
                    </div>
                    <div className="w-10 h-10 bg-red-400">
                        <div className="w-10 h-10 bg-red-500 block-two"></div>
                    </div>
                    <div className="w-10 h-10 bg-red-400">
                        <div className="w-10 h-10 bg-red-500 block-two"></div>
                    </div>
                </div>
            </section>

            <section className="my-12">
                <div
                    onClick={batteryLogoAnimate}
                    className="text-red-500 battery-log"
                >
                    {JSON.stringify(battery)}
                </div>
            </section>

            <button onClick={multipleAnimate}>Multiple</button>
        </section>
    )
}

export default AnimeDemo
