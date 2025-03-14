import Image from "next/image";

export default function HomeHeader() {
    return (
        <header className="grid grid-cols-12 xl:gap-[120px] lg:gap-[80px] gap-0">
            <div className="lg:col-span-7 col-span-12 flex items-center lg:order-1 order-2">
                <div>
                    <p>Hi, I am</p>
                    <h5 className="text-main font-semibold text-xl">Ida Putu Sucita Danuartha</h5>
                    <h1 className="text-[80px] font-bold text-second">UI & UX</h1>
                    <h1 className="text-[80px] font-bold text-second lg:ml-40 ml-0 -mt-10">Designer</h1>
                    <p className="text-second/80">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                    <a href="mailto:danuart14.dev@gmail.com" className="btn bg-main text-white font-normal px-10 py-6 mt-5 text-[16px]">Hire Me</a>
                </div>
            </div>
            <div className="lg:col-span-5 col-span-12 lg:mb-0 mb-12 lg:order-2 order-1">
                <Image src="/images/header.png" className="mb-8" alt="Header Image" draggable="false" width={1000} height={1000} />
                <div className="flex justify-center items-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="dark:hidden block">
                        <Image src="/icons/facebook-light.svg" width={24} height={24} alt="Facebook icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="dark:hidden block">
                        <Image src="/icons/twitter-light.svg" width={24} height={24} alt="Twitter icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="dark:hidden block">
                        <Image src="/icons/instagram-light.svg" width={24} height={24} alt="Instagram icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="dark:hidden block">
                        <Image src="/icons/linkedin-light.svg" width={24} height={24} alt="Linkedin icon" />
                    </a>

                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="dark:block hidden">
                        <Image src="/icons/facebook-dark.svg" width={24} height={24} alt="Facebook icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="dark:block hidden">
                        <Image src="/icons/twitter-dark.svg" width={24} height={24} alt="Twitter icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="dark:block hidden">
                        <Image src="/icons/instagram-dark.svg" width={24} height={24} alt="Instagram icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="dark:block hidden">
                        <Image src="/icons/linkedin-dark.svg" width={24} height={24} alt="Linkedin icon" />
                    </a>
                </div>
            </div>
        </header>
    )
}