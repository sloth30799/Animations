import { useState } from "react"
import anime from "animejs"

import checkList from "/src/assets/icons/checkList.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        if (!isOpen) {
            anime({
                targets: ".menu-icon",
                translateX: anime.stagger(-100),
                easing: 'easeInOutSine',
                duration: 100,
                complete: () => {
                    setIsOpen(true)
                },
            })
        } else {
            anime({
                targets: ".menu-icon",
                translateX: 0,
                easing: 'easeInOutSine',
                duration: 100,
                complete: () => {
                    setIsOpen(false)
                },
            })
        }
    }

    return (
        <div className="relative p-1 px-2 w-[30px] h-[30px] rounded-xl">
            <img
                src={checkList}
                width={40}
                alt="menu-icon"
                onClick={toggleOpen}
                className="absolute top-0 right-0 z-10 p-1 rounded-full cursor-pointer menu-icon hover:bg-blue-200"
            />
            <img
                src={checkList}
                width={40}
                alt="menu-icon"
                className="absolute top-0 right-0 p-1 rounded-full cursor-pointer menu-icon hover:bg-blue-200"
            />
            <img
                src={checkList}
                width={40}
                alt="menu-icon"
                className="absolute top-0 right-0 p-1 rounded-full cursor-pointer menu-icon hover:bg-blue-200"
            />
            <img
                src={checkList}
                width={40}
                alt="menu-icon"
                className="absolute top-0 right-0 p-1 rounded-full cursor-pointer menu-icon hover:bg-blue-200"
            />
        </div>
    )
}

export default Navbar
