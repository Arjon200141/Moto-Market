"use client"
import { review } from "../../../lib/review";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaRegStar } from "react-icons/fa";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Review = () => {
    console.log(review);
    return (
        <div className="">
            <div className="mx-40">
                <h1 className="text-5xl font-medium text-center">What Our Clients Are Saying</h1>
                <p className="text-center mt-4 mb-8 text-yellow-300/50">
                    Hear from our satisfied customers who have experienced the quality and performance of our bikes firsthand. Their reviews reflect the trust and confidence riders place in Moto Market!
                </p>
            </div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    {
                        review.map((reviewDetails) => (
                            <SwiperSlide key={reviewDetails.title}>
                                <div className="flex justify-center">
                                    <div className="hero border-slate-700 border-2 w-3/4 ">
                                        <div className=" "></div>
                                        <div className="hero-content  text-center">
                                            <div className="space-y-4 px-6">
                                                <div className="flex justify-center items-center">
                                                    <img src={reviewDetails.image} alt="" className="h-20 w-20 rounded-2xl" />
                                                </div>
                                                <h1 className=" text-4xl font-semibold">{reviewDetails.reviewerName}</h1>
                                                <p className="text-yellow-600/70">{reviewDetails.reviewDetails}</p>
                                                <div className="pb-4">
                                                    <p className="flex items-center gap-2 justify-center text-xl"><FaRegStar /> {reviewDetails.rating} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </>
        </div>
    );
};

export default Review;