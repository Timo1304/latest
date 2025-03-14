  import Image from "next/image";

  export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center max-w-full h-[29.55%] gap-[48px] bg-white">
            <div className="w-[536px] h-[96px] mt-[80px] mb-[48px] ">
                <h1 className="font-interTight font-semibold text-[40px]  tracking-[0.25px] leading-[120%] text-center">What makes us different makes them stronger</h1>
            </div>
            
            <div className="w-full max-w-[1170px] flex flex-row flex-nowrap gap-[30px] mx-auto">
                <div className="w-full md:w-1/3 h-[370px]  p-4">
                    <div className="flex flex-row gap-[10px] mx-auto">
                        <div className="flex flex-col w-[60px] h-[60px]">
                            <Image src="/assets/food 1.png" alt="food" width={60} height={60} className="rounded-full"/>
                        </div>
                        <div className="flex flex-col w-[286px] h-[85px] mx-auto">
                                <p className="font-interTight font-semibold text-[19px] leading-[150%] tracking-[0.5px]">Real Food</p>
                                <p className="font-interTight font-normal text-[16px] leading-[150%] tracking-[0.5px]">Wholesome recipes for dogs with real meat and veggies.</p>
                        </div>
                    </div>
                    <div className="mt-[80px] mb-[80px]"></div>
                    <div className="flex flex-row gap-[10px] mx-auto"> 
                        <div className="flex flex-col w-[60px] h-[60px]">
                            <Image src="/assets/pet-bowl 1.png" alt="food" width={60} height={60} className="rounded-full"/>
                        </div>
                        <div className="flex flex-col w-[286px] h-[85px] mx-auto">
                            <p className="font-interTight font-semibold text-[19px] leading-[150%] tracking-[0.5px]">Premium Ingredient</p>
                            <p className="font-interTight font-normal text-[16px] leading-[150%] tracking-[0.5px]">Elevating pet care with unmatched safety and quality.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 h-[370px]  p-4">
                        <div className="relative w-[370px] h-[370px] mx-auto">
                            <Image src="/assets/Rectangle food.png" alt="food" layout="fill" objectFit="cover" className="rounded-full"/>
                            <Image src="/assets/Rectangle mv.png" alt="food" width={185} height={370} className="absolute top-0 left-0" />
                            <Image src="/assets/split.png" alt="line" width={22} height={370} className="absolute top-0 right-[174px]" />
                        </div>
                </div>
                <div className="w-full md:w-1/3 h-[370px]  p-4">      
                    <div className="flex flex-row gap-[10px] mx-auto">
                            <div className="flex flex-col w-[60px] h-[60px]">
                                <Image src="/assets/pet-food 1.png" alt="food" width={60} height={60} className="rounded-full"/>
                            </div>
                            <div className="flex flex-col w-[286px] h-[85px] mx-auto">
                                <p className="font-interTight font-semibold text-[19px] leading-[150%] tracking-[0.5px]">Made Fresh</p>
                                <p className="font-interTight font-normal text-[16px] leading-[150%] tracking-[0.5px]">We prioritize maintaining the integrity of whole foods and nutrition.</p>
                            </div>
                        </div>
                        <div className="mt-[80px] mb-[80px]"></div>
                        <div className="flex flex-row gap-[10px] mx-auto"> 
                        <div className="flex flex-col w-[60px] h-[60px]">
                            <Image src="/assets/vet 1.png" alt="food" width={60} height={60} className="rounded-full"/>
                        </div>
                        <div className="flex flex-col w-[286px] h-[85px] mx-auto">
                            <p className="font-interTight font-semibold text-[19px] leading-[150%] tracking-[0.5px]">Vet Developed</p>
                            <p className="font-interTight font-normal text-[16px] leading-[150%] tracking-[0.5px]">We raise the bar for dog nutrition, surpassing industry expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[462px] h-[88px] gap-[16px]  mb-[80px] ml-729px">
                <button className="w-[462px] h-[48px] bg-[#EE6F4B] rounded-[6px] font-interTight font-semibold text-[16px] leading-[150%] tracking-[0.5px] pt-[12px] pb-[12px] pr-[40px] pl-[40px] gap-[10px] ">
                    Get your dog's healthy meal today!
                </button>
                <div className="flex flex-row gap-[20px] mt-[20px]">
                    <Image src="/assets/acshield.png" alt="shield" width={210} height={20} className="mb-82px ml-729px "/>
                    <Image src="/assets/Payments.png" alt="shield" width={228} height={24} className="mb-82px ml-729px "/>
                </div>
            </div>
        </section>    
    );
}