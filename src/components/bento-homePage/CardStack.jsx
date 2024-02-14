import { useEffect, useState } from 'react'
import '../_css/cardStack.css';

const CardStack = () => {
    const [cards, setCards] = useState([
        { color: 'bg-blue-400' },
        { color: 'bg-red-400' },
        { color: 'bg-green-400' },
        { color: 'bg-purple-400' },
        { color: 'bg-yellow-400' },
    ])

    const [scalar, setScalar] = useState(5)

    useEffect(() => {
        const cardsUI = document.querySelectorAll('.card')

        cardsUI.forEach((card, index) => {
            const overTop = index - 1

            card.style.setProperty('--r', `calc(${scalar} * 1deg * ${overTop})`)
        })
    }, [cards, scalar])

    const haTest = () => {
        setScalar(0)

        setCards(cards.slice(0, cards.length - 1))

        setTimeout(() => {
            setScalar(5)
        }, 500)
    }

    return (
        <div className="card-stack">
            {cards.map((c) => (
                <div
                    className={`shadow-md relative card ${c.color}`}
                    key={c.color}
                >
                    <div className="absolute w-3 h-3 bg-white rounded-full left-2 top-2"></div>
                </div>
            ))}

            <button className="mt-32" onClick={haTest}>
                click test
            </button>
        </div>
    )
}

export default CardStack
