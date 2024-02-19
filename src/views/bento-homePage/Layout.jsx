import { useEffect, useState } from 'react'
import anime from 'animejs'

import Navbar from '/src/components/bento-homePage/Navbar'
import SquareGlitches from '../../components/SquareGlitches'

const Layout = () => {
    const pageLength = 500
    const pageCount = 5

    const [scrollY, setScrollY] = useState(0)
    const [page, setPage] = useState(0)

    const flipBox = anime({
        targets: '.title-block',
        rotateX: '180',
        direction: 'alternate',
        autoplay: false,
        duration: 500, // Animation duration in milliseconds
        easing: 'easeInOutQuad',
    })

    useEffect(() => {
        anime({
            targets: '.scroll-line',
            height: `${100 * (page / pageCount)}vh`,
            easing: 'easeInSine',
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

        if (page !== updatedPage) {
            setPage(updatedPage)
        }
    }

    window.addEventListener('wheel', handleWheelScroll)

    return (
        <main className="flex w-full h-screen">
            <section className="container grid w-full h-screen grid-cols-2 gap-2 p-2 mx-auto shadow-inner">
                <div className="col-span-1 pt-12 justify-self-center">
                    <SquareGlitches />
                </div>

                <div className="flex flex-col items-end justify-start col-span-1">
                    <Navbar />

                    <div className="mt-8">
                        <h2 className="text-[1.6rem] font-extrabold text-right italic underline">
                            COOL TEXT
                        </h2>
                        <h1 className="text-[2.4rem] font-extrabold text-right">
                            SUPER COOL TEXT
                        </h1>
                        <h1 className="text-[1rem] font-extrabold text-right">
                            SOMEWHAT COOL TEXT
                        </h1>

                        <p className="my-3 text-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem et ad, impedit cumque consequatur nulla
                            autem, magni itaque voluptatem aliquam molestias
                            maxime ullam nesciunt commodi labore sapiente odio
                            dicta quasi!
                        </p>
                    </div>
                </div>
                <div className="col-span-1 bg-red-400"></div>
                <div className="col-span-1 bg-red-400"></div>
                <div className="col-span-1 bg-red-400"></div>
                <div className="col-span-1 bg-red-400"></div>
            </section>
            <aside className="w-8 h-screen">
                <div className="w-1 mx-auto bg-purple-500 scroll-line"></div>
            </aside>
        </main>
    )
}

export default Layout
