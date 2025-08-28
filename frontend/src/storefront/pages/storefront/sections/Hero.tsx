import { heroBannerImg } from "../../../utils/data";

const Hero = () => {
    return (
        <section className="
            container mx-auto md:h-250 lg:h-210 flex flex-col lg:flex-row
            justify-between items-center gap-4 lg:px-2 xl:px-0
            pb-12 lg:pb-0
        ">
            <div className="
                order-2 lg:order-1 px-2 lg:px-0 flex flex-col gap-6 flex-1 xl:flex-2
            ">
                <h1>SMALL BUSINESS PHRASE</h1>
                <button className="btn-primary w-[300px]">
                    <h5>Browse Products</h5>
                </button>
            </div>
            <div className="lg:order-2 w-screen relative flex-2">
                <img className="
                    w-[600px] h-[400px] 
                    md:w-[1000px] md:h-[600px]
                    lg:rounded-4xl"
                    src={heroBannerImg} 
                />
            </div>
        </section>
    );
};

export default Hero;