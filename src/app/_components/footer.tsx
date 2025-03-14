import Image from "next/image";

export default function AppFooter() {
    return (
      <footer className="mt-[120px] pt-[80px] dark:bg-transparent bg-third border-t dark:border-[#E5E5E5]/10 border-transparent">
        <div className="container mx-auto text-center flex justify-center">
            <div>
                <a href="/" className="flex justify-center">
                    <Image className="dark:hidden block" src="/images/logo-light.png" width={200} height={200} alt="Logo Mumair" />
                    <Image className="dark:block hidden" src="/images/logo-dark.png" width={200} height={200} alt="Logo Mumair" />
                </a>
                <div className="flex flex-wrap justify-center space-x-5 mt-16 mb-20">
                    <a href="#" className="text-second text-lg hover:text-main duration-200">Home</a>
                    <a href="#about-me" className="text-second text-lg hover:text-main duration-200">About Me</a>
                    <a href="#services" className="text-second text-lg hover:text-main duration-200">Services</a>
                    <a href="#my-projects" className="text-second text-lg hover:text-main duration-200">Projects</a>
                    <a href="#testimonials" className="text-second text-lg hover:text-main duration-200">Testimonials</a>
                    <a href="#contact" className="text-second text-lg hover:text-main duration-200">Contact</a>
                </div>
                <div className="flex justify-center space-x-4">
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
        </div>
        <div className="bg-fiveth mt-16 pb-5 pt-1 text-center">
            <p className="text-lg text-gray-400 mt-8">© 2023 <span className="text-main">Mumair</span>. All rights reserved. Inc.</p>
        </div>
      </footer>
    );
  }
  