import Image from "next/image";

export default function Sect1() {
    return (
        <section className="flex flex-row items-center justify-center max-w-full h-[731px] pt-80px pb-80px gap-[30px] bg-[#F8F8F8]">
            <div className="flex flex-col w-[570px] h-[571px] gap-[48px] pr-[32px] ">
                <div className="w-[538px] h-[184px] gap-[16px] mr-[32px]">
                    <div>
                        <h1 className="font-interTight font-semibold text-[30px]  tracking-[0.25px] leading-[120%] ">What makes us different makes them Nutrition is the foundation for longer, healthier lives in dogs.</h1>
                    </div>
                    <div className="m-[16px]"></div>
                    <div>
                        <p className="font-interTight font-normal text-[16px] leading-[150%] tracking-[0.5px]">Invest in your dog's future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.</p>
                    </div>
                </div>
                <div className="w-[538px] h-[243px] gap-[16px]">
                    <div className="w-[538px] h-[29px]">
                        <h2 className="font-interTight font-semibold text-[19px]  tracking-[0.5px] leading-[150%]">
                        Key Points:
                        </h2>
                    </div>
                    <div className="w-[538px] h-[198px]">
                        <div className="flex flex-row h-[50px] gap-[48px] mb-[12px]">
                            <p className="font-interTight text-[33px] leading-[150%] tracking-[0.25px] font-bold text-[#EE6F4B]">
                                97%
                            </p>
                            <p className="font-interTight font-normal text-[15px] leading-[150%] tracking-[0.5px] h-[48px] gap-[48px] text-justify">
                                Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.
                            </p>
                        </div>

                        <div className="flex justify-center mt-[12px] mb-[12px]">
                                <div className="w-[534px] border-t-1 border-[#E3E3E8] my-4"></div>
                        </div>

                        <div className="flex flex-row  h-[50px] gap-[48px] mt-[12px]">
                            <p className="font-interTight text-[33px] leading-[150%] tracking-[0.25px] font-bold text-[#EE6F4B]">
                                84%
                            </p>
                            <p className="font-interTight font-normal text-[16px] leading-[150%] tracking-[0.5px]  h-[50px] gap-[48px] text-justify">
                            Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.
                            </p>
                        </div>

                        <div className="flex justify-center mt-[12px] mb-[12px]">
                                <div className="w-[534px] border-t-1 border-[#E3E3E8] my-4"></div>
                        </div>

                        <div className="flex flex-row  h-[50px] gap-[48px]">
                            <p className="font-interTight text-[33px] leading-[150%] tracking-[0.25px] font-bold text-[#EE6F4B]">
                                92%
                            </p>
                            <p className="font-interTight font-normal text-[16px] leading-[150%] tracking-[0.5px] h-[50px] gap-[48px] text-justify">
                            Our dog food's high protein and fat digestibility contribute to ideal stool quality.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="w-[538px] h-[48px] mr-[375px] mb-[80px]">
                    <button className="w-[538px] h-[48px] bg-[#EE6F4B] rounded-[6px] font-interTight font-semibold text-[16px] leading-[150%] tracking-[0.5px] pt-[12px] pb-[12px] pr-[40px] pl-[40px] gap-[10px] ">
                        Give your furry friend the gift of wholesome nutrition
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-[570px] h-[570px] mt-[80.5px] mb-[80.5px]  ">
                <Image src="/assets/doggo.png" alt="dog" width={570} height={570} className="rounded-[10px]" />
            </div>
        </section>    
    );
}