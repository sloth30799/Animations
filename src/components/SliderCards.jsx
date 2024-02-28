import { useEffect, useRef, useState } from 'react'

const SliderCards = () => {
    const cards = [
        {
            name: 'Natsu Dragneel',
            title: 'Salamander',
            comment:
                'Natsu is carefree and reckless in nature, and, despite his consistent brawls with the other members of Fairy Tail, he is a fiercely loyal and protective friend. He is willing to go down fighting for his friends, regardless of how futile it might seem. Natsu has a straightforward mind, and often tackles issues with a "hands on" approach. His solution to problems often involves violence.',
        },
        {
            name: 'Monkey D. Luffy',
            title: 'Straw Hat Pirate',
            comment:
                "Luffy is the captain of the Straw Hat Pirates and is best known for his trademark straw hat that he always wears. He has a cheerful and optimistic personality and possesses immense strength and determination. Luffy's ultimate goal is to find the legendary One Piece and become the Pirate King.",
        },
        {
            name: 'Ichigo Kurosaki',
            title: 'Substitute Shinigami',
            comment:
                'Ichigo is a teenager with the ability to see ghosts. After gaining the powers of a Soul Reaper, he takes on the duty of protecting humans from evil spirits and guiding departed souls to the afterlife. Despite his brash nature, Ichigo is fiercely protective of his friends and will go to great lengths to keep them safe.',
        },
        {
            name: 'Goku',
            title: 'Saiyan Warrior',
            comment:
                'Goku is a Saiyan from the planet Vegeta who was sent to Earth as a baby. He possesses incredible strength, speed, and the ability to use powerful energy-based attacks. Goku is known for his love of fighting and constantly seeks to become stronger by training and facing formidable opponents.',
        },
        {
            name: 'Lelouch vi Britannia',
            title: 'Zero',
            comment:
                'Lelouch is a former prince of the Britannian Empire who leads a double life as the masked vigilante Zero. He possesses the power of Geass, which allows him to command anyone to obey his orders. Lelouch is a strategic genius and is willing to use any means necessary to achieve his goal of overthrowing the Britannian regime.',
        },
    ]

    const slider = useRef(null)
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(null)
    const [scrollLeft, setScrollLeft] = useState(null)
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id
                    setActiveSlide(id)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, options)

        const slides = document.querySelectorAll('.slider-item')
        slides.forEach((slide) => {
            observer.observe(slide)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    const handleBtnNavigation = (direction) => {
        const activeSlideArr = activeSlide.split('-')

        if (direction === 1) {
            const slide = document.getElementById(
                `slide-${Number(activeSlideArr[1]) + 1}`
            )
            slide.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            })
        } else {
            const slide = document.getElementById(
                `slide-${Number(activeSlideArr[1]) - 1}`
            )
            slide.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            })
        }
    }

    const handleMouseDown = (e) => {
        setIsDown(true)
        setStartX(e.pageX - slider.current.offsetLeft)
        setScrollLeft(slider.current.scrollLeft)
    }

    const handleMouseUp = () => {
        setIsDown(false)

        const slide = document.getElementById(`${activeSlide}`)
        slide.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
    }

    const handleMouseMove = (e) => {
        if (!isDown) return

        e.preventDefault()
        const x = e.pageX - slider.current.offsetLeft
        const walk = x - startX
        slider.current.scrollLeft = scrollLeft - walk
    }

    return (
        <section className="relative w-full h-full px-10 pt-20">
            <div
                ref={slider}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseUp}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="flex w-full h-full gap-3 overflow-hidden"
            >
                {cards.map((c, index) => (
                    <div
                        id={`slide-${index}`}
                        className="flex flex-col flex-shrink-0 w-full h-full slider-item active:cursor-grabbing"
                        key={c.name}
                    >
                        <p>{c.comment}</p>
                        <div className="mt-auto">
                            <h5 className="text-right">{c.name}</h5>
                            <p className="text-right">{c.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 flex items-center p-3">
                <button
                    className="block p-3 m-1 text-lg bg-blue-500 rounded-xl"
                    onClick={() => handleBtnNavigation(0)}
                >
                    {'<'}
                </button>
                <button
                    className="block p-3 m-1 text-lg bg-blue-500 rounded-xl"
                    onClick={() => handleBtnNavigation(1)}
                >
                    {'>'}
                </button>
            </div>
        </section>
    )
}

export default SliderCards
