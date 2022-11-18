import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation,Pagination,EffectFade,Autoplay} from 'swiper';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaCogs, FaUser } from 'react-icons/fa';


interface Slide {
    id: number;
    title: string;
    description: string;
    image: string;
}
const slides: Slide[] = [
    {id: 1, title: 'Organized Workplace', description: 'Description for slide 1', image: 'https://studyonline.rmit.edu.au/sites/default/files/RMIT_MHRM_Skyscraper_Article_%232_-Creating_and_Sustaining_a_Positive_Workplace_Culture_Header_0.jpg'},
    {id: 1, title: 'Slide 2', description: 'Description for slide 1', image: 'https://www.aimbigemployment.com.au/wp-content/uploads/2019/12/12-tips-on-how-to-behave-in-the-workplace.png'},
    {id: 1, title: 'Slide 3', description: 'Description for slide 1', image: 'https://picsum.photos/id/1/500/500'},
]

export default function Home() {
    return (
        <>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',

                }}
                effect={'fade'}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Navigation,Pagination,EffectFade,Autoplay]}
            >
                {slides.map((slide,index) => (
                    <>
                
                <SwiperSlide className='bg-gradient-to-r from-blue-600 to-blue-900 w-[100%] h-[200px] ' style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover',height:'300px'}}>
                    <h1 className='text-center my-2 border-b-2 w-[200px] py-2 mx-auto font-bold uppercase'>{slide.title}</h1>
                    <p data-aos='slide-up' className='mt-10 text-center border-3 w-40 mx-auto py-3 '>
                        {slide.description}
                    </p>
                    <div className='w-full flex justify-between'>
                        <button className='btn btn-sm swiper-button-prev btn-circle text-orange-500'>
                            <BsChevronCompactLeft/>
                        </button>
                        <button className='btn btn-sm swiper-button-next  btn-circle text-orange-500'>
                            <BsChevronCompactRight />
                        </button>
                    </div>
                </SwiperSlide>
                
                </>
                ))}
            </Swiper>
            <div data-aos='slide-up' className='grid grid-rows-5 md:grid-row-4 md:grid-cols-4'>
                <div data-aos='slide-up' className='flex flex-col'>
                    <h1 className='text-center my-2 py-2 mx-auto uppercase'>Services</h1>
                    <button className='btn btn-circle btn-lg border-none bg-green-600 mx-auto text-white hover:bg-green-400'><FaCogs className='mx-auto' /></button>
                    <p className='text-center border-3 w-40 mx-auto py-3 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div data-aos='slide-up' className='flex flex-col'>
                    <h1 className='text-center my-2 py-2 mx-auto uppercase'>Realiable for Customers</h1>
                    <button className='btn btn-circle btn-lg border-none bg-red-600 mx-auto text-white hover:bg-green-400'><FaUser className='mx-auto' /></button>
                    <p className='text-center border-3 w-40 mx-auto py-3 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div data-aos='slide-right' className='flex flex-col'>
                    <h1 className='text-center my-2 py-2 mx-auto uppercase'>CUSTOMIZABLE</h1>
                    <button className='btn btn-circle btn-lg border-none bg-yellow-500 mx-auto text-white hover:bg-green-400'><FaCogs className='mx-auto' /></button>
                    <p className='text-center border-3 w-40 mx-auto py-3 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                <div data-aos='slide-left' className='flex flex-col'>
                    <h1 className='text-center my-2 py-2 mx-auto uppercase'>Reachable</h1>
                    <button className='btn btn-circle btn-lg border-none bg-green-600 mx-auto text-white hover:bg-green-400'><FaCogs className='mx-auto' /></button>
                    <p className='text-center border-3 w-40 mx-auto py-3 '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </p>
                </div>
                
            </div>    
        </>
    );
}