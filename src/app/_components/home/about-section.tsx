import Image from "next/image";

export default function HomeAboutSection() {
    return (
        <section id="about-us" className="grid grid-cols-12 pt-[120px]">
            <div className="lg:col-span-6 col-span-12">
                <Image draggable="false" src="/images/about-me.png" alt="About Us" width={1000} height={1000} />
            </div>
            <div className="lg:col-span-6 col-span-12 flex items-center">
                <div>
                    <h1 className="text-[44px] font-semibold text-second">About Me</h1>
                    <p className="text-second/80 mb-4">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <div>
                        <div className="mb-4">
                            <h5 className="mb-2 text-lg font-semibold">UX</h5>
                            <div className="w-full relative">
                                <div className="w-full h-3 rounded-full bg-second/10"></div>                                
                                <div className="w-[88%] absolute h-3 rounded-full bg-main top-0"></div>
                                <div className="w-8 h-8 rounded-full bg-[#EDECEC] border-2 border-main absolute right-[12%] -top-3"></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-2 text-lg font-semibold">Website Design</h5>
                            <div className="w-full relative">
                                <div className="w-full h-3 rounded-full bg-second/10"></div>                                
                                <div className="w-[75%] absolute h-3 rounded-full bg-main top-0"></div>
                                <div className="w-8 h-8 rounded-full bg-[#EDECEC] border-2 border-main absolute right-[25%] -top-3"></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-2 text-lg font-semibold">App Design</h5>
                            <div className="w-full relative">
                                <div className="w-full h-3 rounded-full bg-second/10"></div>                                
                                <div className="w-[95%] absolute h-3 rounded-full bg-main top-0"></div>
                                <div className="w-8 h-8 rounded-full bg-[#EDECEC] border-2 border-main absolute right-[5%] -top-3"></div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h5 className="mb-2 text-lg font-semibold">Graphic Design</h5>
                            <div className="w-full relative">
                                <div className="w-full h-3 rounded-full bg-second/10"></div>                                
                                <div className="w-[85%] absolute h-3 rounded-full bg-main top-0"></div>
                                <div className="w-8 h-8 rounded-full bg-[#EDECEC] border-2 border-main absolute right-[15%] -top-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}