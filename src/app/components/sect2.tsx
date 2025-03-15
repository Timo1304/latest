import Image from "next/image";

export default function Sect2() {
    return (
        <section className="flex flex-col  max-w-full h-[1200px] pt-[80px] pb-[80px] gap-[80px] ">
            <div className="max-w-[1170px] items-center justify-between flex  m-auto]">
                <div className="relative left-1/3 transform -translate-x-1/2 max-w-[570px] text-center items-center justify-between rounded-[10px] ">
                    <Image src="/assets/doggo 2.png" alt="Two_dogs_eating" width={570} height={480} />
                </div>
            

                <div className="relative left-2/5 transform -translate-x-1/2 items-center justify-between m-auto">
                    <div className=" flex-row w-[570px] h-[280px] gap-[32px] pl-[32x] m-auto">
                        <h2 className="font-interTight w-[538px] h-[144px] text-[40px] leading-[120%] tracking-[0.25px] m-auto font-semibold">
                            Improve overall gastrointestinal health for better nutrient absorption
                        </h2>
                        <p className="font-interTight w-[538px] h-[120px] text-[16px] leading-[150%] tracking-[0.5px] m-auto font-normal ">
                        Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.

                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-[1170px] relative items-center flex flex-row justify-evenly m-auto">
                <div className=" w-[570px] h-[480px] flex items-center m-auto">
                    <div className=" w-[570px] h-[280px] gap-[32px] ">
                        <h2 className="font-interTight w-[538px] h-[144px] text-[40px] leading-[120%] tracking-[0.25px] m-auto font-semibold">
                            Prebiotics nourish the beneficial gut bacteria, supporting digestive health
                        </h2>
                        <p className="font-interTight w-[538px] h-[120px] text-[16px] leading-[150%] tracking-[0.5px] m-auto font-normal ">
                            Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.
                        </p>
                    </div>
                </div>
            


                <div className=" w-[570px] h-[480px] flex items-center justify-center rounded-[10px] m-auto">
                    <Image src="/assets/pellets.png" alt="food" width={570} height={480} />
                </div>
            </div>
        </section>    
    );
}