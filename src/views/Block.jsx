import anime from 'animejs'

const Block = () => {
    const animateBlockOne = () => {
        anime({
            targets: '.block-one',
            translateX: 250,
        })
    }

    const animateBlockTwo = () => {
        anime({
            targets: '.block-two',
            translateX: 250,
        })
    }

    let battery = {
        charged: '0%',
        cycles: 120,
    }

    const batteryLogoAnimate = () => {
      const batteryLog = document.querySelector('.battery-log')

      anime({
        targets: battery,
        charged: '100%',
        cycles: 130,
        round: 1,
        easing: 'linear',
        update: function() {
          batteryLog.innerHTML = JSON.stringify(battery);
        }
      });
    }

    return (
        <section className="flex flex-col items-center justify-center w-screen h-screen gap-3">
            <section className="my-12">
                <div className="w-20 h-20 bg-red-400">
                    <div
                        onClick={animateBlockOne}
                        className="w-20 h-20 bg-red-500 block-one"
                    ></div>
                </div>
            </section>

            <section className="my-12">
                <div onClick={animateBlockTwo} className="flex flex-col gap-3">
                    <div className="w-20 h-20 bg-red-400">
                        <div className="w-20 h-20 bg-red-500 block-two"></div>
                    </div>
                    <div className="w-20 h-20 bg-red-400">
                        <div className="w-20 h-20 bg-red-500 block-two"></div>
                    </div>
                    <div className="w-20 h-20 bg-red-400">
                        <div className="w-20 h-20 bg-red-500 block-two"></div>
                    </div>
                </div>
            </section>

            <section className="my-12">
                <div 
                  onClick={batteryLogoAnimate}
                  className="text-red-500 battery-log">{JSON.stringify(battery)}</div>
            </section>
        </section>
    )
}

export default Block
