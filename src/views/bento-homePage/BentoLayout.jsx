import SliderCards from "../../components/SliderCards"

const BentoLayout = () => {
    return (
        <div className="bg-black bg-opacity-90">
            {/* mobile */}
            <div className="grid gap-3 p-3 sm:hidden">
                <div className="w-100 h-[300px] bg-red-500 rounded-2xl"></div>
                <div className="w-100 h-[300px] bg-red-500 rounded-2xl"></div>
                <div className="w-100 h-[100px] bg-red-500 rounded-2xl"></div>
                <div className="w-100 h-[100px] bg-red-500 rounded-2xl"></div>
                <div className="w-100 h-[100px] bg-red-500 rounded-2xl"></div>
                <div className="w-100 h-[150px] bg-red-500 rounded-2xl"></div>
                <div className="w-100 h-[100px] bg-red-500 rounded-2xl"></div>
            </div>

            {/* tablet */}
            <div className="hidden h-screen grid-cols-3 gap-3 p-4 md:grid lg:hidden">
                <div className="w-100 h-[100%] col-span-2 bg-blue-500 rounded-2xl"></div>
                <div className="w-100 h-[100%] col-span-1 bg-blue-500 rounded-2xl"></div>
                <div className="w-100 h-[100%] col-span-2 grid grid-cols-2 gap-3">
                    <div className="col-span-1 bg-blue-500 rounded-2xl"></div>
                    <div className="col-span-1 bg-blue-500 rounded-2xl"></div>
                    <div className="col-span-1 bg-blue-500 rounded-2xl"></div>
                    <div className="col-span-1 bg-blue-500 rounded-2xl"></div>
                </div>
                <div className="w-100 h-[100%] col-span-1 bg-blue-500 rounded-2xl"></div>
            </div>

            {/* others */}
            <div className="hidden h-screen grid-cols-3 p-6 lg:gap-4 xl:gap-6 lg:grid">
                <div className="w-100 h-[100%] col-span-2 grid grid-rows-3 lg:gap-4 xl:gap-6">
                    <div className="grid grid-cols-3 row-span-2 lg:gap-4 xl:gap-6 rounded-2xl">
                        <div className="grid items-end grid-cols-2 col-span-2 gap-3 bg-purple-400 lg:p-4 xl:p-8 rounded-2xl">
                            <h4 className="text-3xl tracking-tight">
                                {
                                    "I'M DIEGO, A DESIGNER AND WEBFLOW DEVELOPER BASED IN BRAZIL."
                                }
                            </h4>
                            <p className="tracking-wide text-md">
                                I have been building websites for more than 10
                                years. I always thought that focusing on just
                                one area was not much fun, so I learned the
                                whole process: planning, building and launching
                                websites. This allowed me to specialize in
                                storytelling, using skills like branding, design
                                and motion, to drive the user’s attention to the
                                right places and create more engaging and
                                memorable experiences.
                            </p>
                        </div>
                        <div className="col-span-1 bg-purple-400 rounded-2xl">
                            <SliderCards />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 row-span-1 lg:gap-4 xl:gap-6 rounded-2xl">
                        <div className="grid col-span-1 bg-purple-400 rounded-2xl">

                        </div>
                        <div className="grid col-span-1 bg-purple-400 rounded-2xl">

                        </div>
                        <div className="grid col-span-1 bg-purple-400 rounded-2xl">

                        </div>
                    </div>
                </div>
                <div className="w-100 h-[100%] col-span-1 grid grid-rows-3 lg:gap-4 xl:gap-6">
                    <div className="row-span-1 bg-purple-400 rounded-2xl"></div>
                    <div className="row-span-2 bg-purple-400 rounded-2xl"></div>
                </div>
            </div>
        </div>
    )
}

export default BentoLayout
