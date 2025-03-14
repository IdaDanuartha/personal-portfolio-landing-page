import Image from "next/image";

export default function HomeServicesSection() {
    return (
        <section id="services" className="pt-[120px]">
            <div className="mb-10 text-center">
                <h1 className="text-[44px] font-semibold text-second">Services</h1>
                <p className="text-second/80 mt-4">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br className="md:block hidden" /> netus in. Aliquet donec morbi convallis pretium</p>
            </div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-0">
                <div className="bg-third rounded-md p-4 sm:mb-0 mb-8">
                    <Image
                        draggable="false"
                        src="/icons/ui-ux.svg"
                        alt="UI/UX Service"
                        width={75}
                        height={75}
                        className="mt-10"
                    />
                    <h3 className="text-2xl text-[#1E1E1E]/80 font-semibold mt-6 MB-3">UI/UX</h3>
                    <p className="text-[#1E1E1E]/80">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="bg-third rounded-md p-4 sm:mb-0 mb-8">
                    <Image
                        draggable="false"
                        src="/icons/web-design.svg"
                        alt="Web Design Service"
                        width={75}
                        height={75}
                        className="mt-10"
                    />
                    <h3 className="text-2xl text-[#1E1E1E]/80 font-semibold mt-6 MB-3">Web Design</h3>
                    <p className="text-[#1E1E1E]/80">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="bg-third rounded-md p-4 sm:mb-0 mb-8">
                    <Image
                        draggable="false"
                        src="/icons/app-design.svg"
                        alt="App Design Service"
                        width={50}
                        height={50}
                        className="mt-10"
                    />
                    <h3 className="text-2xl text-[#1E1E1E]/80 font-semibold mt-6 MB-3">App Design</h3>
                    <p className="text-[#1E1E1E]/80">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
                <div className="bg-third rounded-md p-4 sm:mb-0 mb-8">
                    <Image
                        draggable="false"
                        src="/icons/graphic-design.svg"
                        alt="Graphic Design Service"
                        width={90}
                        height={90}
                        className="mt-10"
                    />
                    <h3 className="text-2xl text-[#1E1E1E]/80 font-semibold mt-6 MB-3">Graphic Design</h3>
                    <p className="text-[#1E1E1E]/80">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
                </div>
            </div>
        </section>
    )
}