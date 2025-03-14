"use client"

import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


export default function HomeTestimonialsSection() {

    return (
        <section id="testimonials" className="pt-[120px]">
            <div className="mb-10 text-center">
                <h1 className="text-[44px] font-semibold text-second">Testimonials</h1>
                <p className="text-second/80 mt-4">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br className="md:block hidden" /> netus in. Aliquet donec morbi convallis pretium
                </p>
            </div>
            <div className="mb-20">
            <Swiper 
                slidesPerView={1.5}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    1050: {
                      slidesPerView: 1.5,
                    },
                }}
                modules={[Pagination]} 
                className="mySwiper"
            >
                <SwiperSlide className="pb-20">
                    <div className="bg-third rounded-md p-10 flex sm:flex-row flex-col items-start sm:space-x-6 space-x-0 sm:space-y-6 space-y-0">
                        <Image
                            src="/images/testimonial1.png"
                            alt="Testimonial User 1"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                        <div className="flex items-center sm:mt-0 mt-8">
                            <div>
                                <div className="relative">
                                    <Image
                                        src="/icons/quote.svg"
                                        alt="Quote icon"
                                        width={20}
                                        height={20}
                                        className="absolute -top-4 -left-4"
                                    />
                                    <p className="text-[#1E1E1E]/80">Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                                    <Image
                                        src="/icons/quote.svg"
                                        alt="Quote icon"
                                        width={20}
                                        height={20}
                                        className="absolute -bottom-4 -right-4"
                                    />
                                </div>
                                <h3 className="text-2xl text-[#1E1E1E]/80 font-semibold mt-4 mb-1">John Doe</h3>
                                <p className="text-[#1E1E1E]/80">CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pb-20">
                    <div className="bg-third rounded-md p-10 flex sm:flex-row flex-col items-start sm:space-x-6 space-x-0 sm:space-y-6 space-y-0">
                        <Image
                            src="/images/testimonial2.png"
                            alt="Testimonial User 2"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                        <div className="flex items-center sm:mt-0 mt-8">
                            <div>
                                <div className="relative">
                                    <Image
                                        src="/icons/quote.svg"
                                        alt="Quote icon"
                                        width={20}
                                        height={20}
                                        className="absolute -top-4 -left-4"
                                    />
                                    <p className="text-[#1E1E1E]/80">Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                                    <Image
                                        src="/icons/quote.svg"
                                        alt="Quote icon"
                                        width={20}
                                        height={20}
                                        className="absolute -bottom-4 -right-4"
                                    />
                                </div>
                                <h3 className="text-2xl text-[#1E1E1E]/80 font-semibold mt-4 mb-1">Alexander Ibrahim</h3>
                                <p className="text-[#1E1E1E]/80">UI Designer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="pb-20">
                    <div className="bg-third rounded-md p-10 flex sm:flex-row flex-col items-start sm:space-x-6 space-x-0">
                        <Image
                            src="/images/testimonial1.png"
                            alt="Testimonial User 1"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                        <div className="flex items-center sm:mt-0 mt-8">
                            <div>
                                <div className="relative">
                                    <Image
                                        src="/icons/quote.svg"
                                        alt="Quote icon"
                                        width={20}
                                        height={20}
                                        className="absolute -top-4 -left-4"
                                    />
                                    <p className="text-[#1E1E1E]/80">Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</p>
                                    <Image
                                        src="/icons/quote.svg"
                                        alt="Quote icon"
                                        width={20}
                                        height={20}
                                        className="absolute -bottom-4 -right-4"
                                    />
                                </div>
                                <h3 className="text-2xl text-[#1E1E1E]/80 font-semibold mt-4 mb-1">John Doe</h3>
                                <p className="text-[#1E1E1E]/80">CEO</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </section>
    );
}