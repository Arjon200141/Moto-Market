"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const bannerDetails = [
    {
        title: "Ride in Style: Explore the Latest Bikes at Moto Market!",
        description: "Discover our exclusive collection of the latest bikes designed for performance and style. Whether you're commuting, touring, or racing, Moto Market has the perfect bike to match your passion. Browse our range of sleek designs and cutting-edge models, and ride like never before.",
        image: "https://i.ibb.co.com/QfKhwjv/bike-shop-6-975681-324418.jpg"
    },
    {
        title: "Unbeatable Deals on Bikes  – Shop Now at Moto Market!",
        description: "Don't miss out on our incredible offers! Moto Market is your go-to destination for unbeatable deals on top-quality bikes. From road bikes to mountain bikes, find the best value for your next ride. Shop now and experience premium biking at a fraction of the cost!",
        image: "https://i.ibb.co.com/9rFnBtc/roylaty-free-images-uhd-wallpaper-1023251-519723.jpg"
    },
    {
        title: "Gear Up for Adventure: Top-Quality Bikes and Gear at Moto Market!",
        description: " Ready for your next adventure? Moto Market has everything you need to hit the road or trail in style and comfort. Shop our high-performance bikes and essential gear, all designed to enhance your riding experience and prepare you for any journey ahead.",
        image: "https://i.ibb.co.com/Rb5RsDT/motorcycle-dealership-27-975681-229240.jpg"
    },
    {
        title: "Performance Meets Passion: Premium Bikes for Every Rider!",
        description: "At Moto Market, we believe every rider deserves the best. Explore our range of premium bikes, crafted with precision for those who value performance, durability, and passion. Whether you're a casual cyclist or an avid rider, find the bike that fits your lifestyle and goals.",
        image: "https://i.ibb.co.com/D7Xgx6s/handsome-sexy-man-motorbike-1303-22174.jpg"
    },
    {
        title: "Revolutionize Your Ride – Latest Models and Best Deals at Moto Market!",
        description: "Transform your biking experience with the latest models at Moto Market. We offer cutting-edge designs, innovative technology, and unbeatable prices on bikes that will revolutionize how you ride. It's time to upgrade – explore our collection and ride into the future.",
        image: "https://i.ibb.co.com/z4166cV/asian-businessman-working-using-digital-tablet-electric-bicycle-8595-37296.jpg"
    },
    {
        title: "From Street to Trail: Discover Bikes Built for Adventure!",
        description: "Whether you're cruising city streets or conquering rugged trails, Moto Market has the perfect bike for your adventure. Explore our diverse range of bikes built for all terrains and discover why our customers trust us for quality, reliability, and performance.",
        image: "https://i.ibb.co.com/F3n0mN7/cool-motorcycle-outdoors.jpg"
    }
]

function Banner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerDetails.map((banner) => (
                        <SwiperSlide key={banner.title}>
                            <div
                                className="hero  h-[90vh]"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-neutral-content text-center">
                                    <div className="max-w-xl">
                                        <h1 className="mb-5 text-4xl font-bold">{banner.title}</h1>
                                        <p className="mb-5">
                                            {banner.description}
                                        </p>
                                        <div className="flex gap-10 justify-center">
                                            <Link href={'/bikes'}>
                                            <button className="text-xl font-semibold border-none px-6 btn bg-yellow-500/70">Discover More</button>
                                            </Link>
                                            <button className="text-xl font-semibold hover:bg-transparent px-6 btn btn-outline text-white">Upcoming Bikes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    );
}
export default Banner;
