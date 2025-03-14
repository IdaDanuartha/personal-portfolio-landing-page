import Image from "next/image";

export default function HomeContactSection() {
    return (
        <section id="contact" className="pt-[120px]">
            <div className="mb-10 text-center">
                <h1 className="text-[44px] font-semibold text-second">Lets Design Together</h1>
                <p className="text-second/80 mt-4">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br /> netus in. Aliquet donec morbi convallis pretium</p>
            </div>
            <form className="flex justify-center items-center space-x-5">
                <input type="text" autoComplete="off" className="md:w-[500px] w-full border text-[#1E1E1E]/80 border-[#AFAFAF] px-6 py-3 rounded-md bg-third" placeholder="Enter Your Email" />
                <button type="submit" className="btn bg-main text-white py-6 px-5 rounded-md">Contact Me</button>
            </form>
        </section>
    )
}