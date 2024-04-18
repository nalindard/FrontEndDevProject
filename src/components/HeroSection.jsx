import Button from '../components/Button.jsx'

function HeroSection() {
    return (
        <div className="w-full bg-slate-500 lg:relative">
            <img src="./src/assets/hero-image.jpg" alt="hero image" className="w-full" />

            <div className='w-full bg-gradient-to-r from-dark to-analogous-2 font-bold px-5 md:px-10 pt-5 md:pt-6 flex flex-wrap justify-start 
            lg:absolute lg:bottom-10 lg:left-[60px] xl:left-20 lg:pl-10 lg:pt-6 lg:pr-[26px] xl:pr-[34px] lg:w-[622px] font-inter'>
                <p className='[font-size:36px] [line-height:36px] md:text-5xl md:font-bold md:[line-height: 48px] md:[letter-spacing: -0.02em] text-left pb-5 md:h-auto'>
                    We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                </p>
                <span className='pb-8 lg:pt-5'>
                    <Button text={"GET FREE CONSULATION"} styles={{ minWidth: '174px', fontSize: '14px', lineHeight: '14px', letterSpacing: '-0.02em' }} cssClasses={'bg-secondary py-3 px-5 text-left rounded'} />
                </span>
            </div>
        </div>
    )
}

export default HeroSection