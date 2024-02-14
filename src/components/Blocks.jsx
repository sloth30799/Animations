import anime from "animejs"
import { useEffect, useState } from "react"

const Blocks = () => {
    const [blocks, setBlocks] = useState([0])

    const addBlock = () => {
        setBlocks(blocks.concat([blocks[blocks.length - 1] + 1]))
    }

    const removeBlock = () => {
        const removedBlock = document.querySelector(".block")

        anime({
            targets: removedBlock,
            width: 0,
            easing: "easeInOutQuad",
            complete: () => {
                const newBlocks = [...blocks]
                newBlocks.splice(0, 1)

                setBlocks(newBlocks)
            },
        })
    }

    useEffect(() => {
        anime({
            targets: ".block",
            width: "80px",
            easing: "easeInOutQuad",
        })
    }, [blocks])

    return (
        <section className="flex items-center justify-center w-screen h-screen">
            <button
                onClick={removeBlock}
                className="p-2 py-1 text-sm text-white bg-black rounded-lg"
            >
                -
            </button>
            {blocks.map((b) => (
                <div
                    key={b}
                    className="block w-0 h-screen bg-red-400 border"
                ></div>
            ))}

            <button
                onClick={addBlock}
                className="p-2 py-1 text-sm text-white bg-black rounded-lg"
            >
                +
            </button>
        </section>
    )
}

export default Blocks
