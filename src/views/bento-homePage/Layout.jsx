import anime from "animejs"
import { useEffect, useState } from "react"

const Layout = () => {
    const pageLength = 500
    const pageCount = 5

    const [scrollY, setScrollY] = useState(0)
    const [page, setPage] = useState(0)

    const flipBox = anime({
        targets: ".title-block",
        rotateX: "180",
        direction: 'alternate',
        autoplay: false,
        duration: 500, // Animation duration in milliseconds
        easing: "easeInOutQuad"
    })

    useEffect(() => {
        console.log(page)
        anime({
            targets: ".scroll-line",
            height: `${100 * (page / pageCount)}vh`,
            easing: "easeInSine",
        })

        flipBox.restart()
    }, [page])

    const handleWheelScroll = (e) => {
        const updatedScrollY =
            scrollY + e.deltaY > pageLength * pageCount
                ? pageLength * pageCount
                : scrollY + e.deltaY < 0
                ? 0
                : scrollY + e.deltaY

        setScrollY(updatedScrollY)

        const updatedPage = Math.floor(scrollY / pageLength)

        if(page !== updatedPage) {
            setPage(updatedPage)
        }
    }

    const handleClick = () => {
        // flipBox.restart()
    }

    window.addEventListener("wheel", handleWheelScroll)

    return (
        <main className="flex w-full h-screen">
            <section className="container flex items-start justify-center w-full h-screen p-2 mx-auto bg-blue-400 shadow-inner">
                <h1
                 className="title-block block w-[100px] px-2 py-1 text-center text-white bg-gray-700 border border-purple-900 shadow-md rounded-xl ">
                    {page}
                </h1>

                <button onClick={handleClick}>click</button>
            </section>
            <aside className="w-8 h-screen">
                <div className="w-1 mx-auto bg-purple-500 scroll-line"></div>
            </aside>
        </main>
    )
}

export default Layout
