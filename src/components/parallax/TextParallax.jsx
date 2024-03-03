import triangleIcon from "../../assets/icons/triangle.svg"

import { useEffect, useState } from "react"
import anime from "animejs"

const TextParallax = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const charLists = [
		"Naruto Uzumaki",
		"Goku Son",
		"Monkey D. Luffy",
		"Sailor Moon",
		"Ichigo Kurosaki",
		"Edward Elric",
		"Spike Spiegel",
		"Light Yagami",
		"Lelouch Lamperouge",
		"Gon Freecss",
	]

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	useEffect(() => {
		anime({
			targets: [".char-list"],
			translateY: -scrollPosition,
			duration: 0, // Set duration to 0 to instantly apply the translation
		})

		anime({
			targets: ".triangle",
			translateY: scrollPosition / 8,
			rotate: (el) => {
				return el.getAttribute("data-rotate")
			},
			duration: 0,
		})
	}, [scrollPosition])

	const oneItemHeight = 50
	const activeIndexCondition = Math.floor(scrollPosition / oneItemHeight)

	return (
		<section className="w-full">
			<div className="sticky top-0 flex flex-col justify-between w-full h-screen bg-slate-400">
				<h4 className="py-3 text-lg text-center underline underline-offset-2">Text Parallax</h4>
				<div className="flex items-center justify-center h-full">
					<div className="flex justify-between w-full px-3 overflow-hidden h-[300px]">
						<div className="flex self-center gap-1 pt-2">
							<img
								src={triangleIcon}
								alt="arrow"
								data-rotate={90}
								className="w-3 h-3 -mt-1.5 rotate-90 triangle"
							/>
							<ul className="flex flex-col items-center number-list">
								{charLists.map((c, i) => (
									<li
										key={i}
										className={`mb-1 ml-1 ${
											activeIndexCondition === i
												? "w-2 h-[2px] bg-black"
												: "w-1.5 h-[2px] bg-gray-200"
										}`}
									></li>
								))}
							</ul>
						</div>

						<ul className="char-list pt-[80px]">
							{charLists.map((c, i) => (
								<li
									key={c}
									className={`my-1 text-2xl font-bold text-center h-[60px] ${
										activeIndexCondition === i
											? "text-black"
											: "text-blue-400"
									}`}
								>
									{c}
								</li>
							))}
						</ul>

						<div className="flex self-center gap-1 pt-2">
							<ul className="flex flex-col items-center number-list">
								{charLists.map((c, i) => (
									<li
										key={i}
										className={`mb-1 mr-1 ${
											activeIndexCondition === i
												? "w-2.5 h-[2px] bg-black"
												: "w-1.5 h-[2px] bg-gray-200"
										}`}
									></li>
								))}
							</ul>
							<img
								src={triangleIcon}
								alt="arrow"
								data-rotate={-90}
								className="w-3 h-3 -mt-1.5 -rotate-90 triangle"
							/>
						</div>
					</div>
				</div>
				<p className="py-3 text-sm text-center">#####</p>
			</div>

			{/* scroll height */}
			<div className="sticky top-0 w-full h-[499px] bg-transparent"></div>
		</section>
	)
}

export default TextParallax
