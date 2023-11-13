import FadeIn from "../components/FadeIn";

import { stepTitle, stepSubtitle, step } from "../data";

const Step = () => {
    return ( 
        <div>
            <div className="mb-[160px] px-10 max-w-[1490px] mx-auto">
                <FadeIn delay={0.2} direction="down">
                    <h1 className="mt-[100px] text-4xl lg:text-[48px] font-medium text-fontBlack mb-6 text-center">
                        {stepTitle}
                    </h1>
                </FadeIn>
                <FadeIn delay={0.4} direction="down">
                    <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
                        {stepSubtitle}
                    </h5>
                </FadeIn>

                <div className="flex flex-col md:flex-row justify-center gap-8 pt-3">
                    {step.map((item,i) =>(
                        <div className="p-3">
                            <FadeIn delay={0.4} direction="left">
                                <div className="flex justify-center">
                                    <img 
                                        src={item.img} 
                                        alt="" 
                                        className="w-[70px]"
                                    />
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4} direction="right">
                                <h3 className="text-center mt-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                                    {item.title}
                                </h3>
                            </FadeIn>
                            <FadeIn delay={0.4} direction="left">
                                <h6 className="mt-2 text-center text-base lg:text-lg text-fontGray font-medium w-[300px]">
                                    {item.subtitle}
                                </h6>
                            </FadeIn>
                        </div>
                        
                    ))}
                    
                    
                </div>
            </div>
        </div>
     );
}
 
export default Step;