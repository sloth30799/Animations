import anime from "animejs"
import { useEffect, useState } from "react"

const ScrollLine = () => {
    const [scroll, setScroll] = useState(0)

    const handleScroll = () => {
        const Scrolled = document.documentElement.scrollTop
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        const ScrollPercent = (Scrolled / MaxHeight) * 100
        setScroll(ScrollPercent)
        console.log(scroll)
    }

    window.addEventListener("scroll", handleScroll)

    useEffect(() => {
        anime({
            targets: ".scroll-line",
            height: `${scroll}vh`,
            easing: "easeInQuad",
            duration: 300,
        })
    }, [scroll])

    return (
        <section className="h-[500vh]">
            <div className="fixed w-1 bg-red-400 scroll-line"></div>
        </section>
    )
}

export default ScrollLine
