import { referenceTitle, referenceSubtitle } from "../data"
import FadeIn from "../components/FadeIn"
import imageOne from "../assets/refOne.jpg"
import imageTwo from "../assets/refThree.jpg"
import imageThree from "../assets/refTwo.jpg"

const Reference = () => {
    return (
        <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
            <FadeIn delay={0.2} direction="down">
                <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
                    {referenceTitle}
                </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="down">
                <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
                    {referenceSubtitle}
                </h5>
            </FadeIn>

            <div className="flex flex-col md:flex-row md:justify-center gap-8 ">

                <div className="flex flex-col items-start gap-8 mx-auto lg:mx-0">
                    <FadeIn delay={0.2} direction="down">
                        <img src={imageOne} alt="" className="object-scale-down w-[555px] lg:w-[600px] rounded-lg" />
                    </FadeIn>
                    <FadeIn delay={0.2} direction="up">
                        <img src={imageTwo} alt="" className="object-scale-down w-[555px] lg:w-[600px] rounded-lg" />
                    </FadeIn>
                </div>

                <FadeIn delay={0.2} direction="left">
                    <div>
                        <img src={imageThree} alt="" className="object-scale-down w-[555px] rounded-lg" />
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}

export default Reference;