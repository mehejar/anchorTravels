import { useForm } from "react-hook-form"
import usePlans from "../../Hooks/usePlans"
import PlanCard from "./PlanCard"
import { useState } from "react"
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaPlaneDeparture } from "react-icons/fa";
import { CgArrowsExchange } from "react-icons/cg";


import './styles.css'

import 'swiper/css/pagination';

const SearchPlan = () => {
    const [plans] = usePlans()
    const [search, setSearch] = useState('');
    const [to, setTo] = useState('');

    const searchPlan = plans.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.from.toLowerCase().includes(search);
        // : item.first_name.toLowerCase().includes(search);
    }).filter((item) => {
        return to.toLowerCase() === ''
            ? item
            : item.to.toLowerCase().includes(to);
        // : item.first_name.toLowerCase().includes(search);
    })

    // <input className="" onChange={(e) => setTo(e.target.value)}
    //                 placeholder='Destination' type="search" />

    return (
        <div>
        
            <div className=" flex justify-center items-center mb-28 lg:-mt-56 -mt-20 rounded-lg">
            
                <div className="bg-white p-10 items-center flex flex-col lg:flex-row gap-5 rounded-lg">
                    <div>
                        <h2 className="flex items-center text-lg font-semibold bg-blue-600 rounded-lg px-8 py-4 text-white"><FaPlaneDeparture></FaPlaneDeparture> Flights</h2>
                    </div>
                    <div>
                        <h2 className="py-2">From</h2>
                        <input className="w-[300px] py-2 px-4 rounded-lg border-2" onChange={(e) => setSearch(e.target.value)}
                            placeholder='Form' type="search" />
                    </div>
                    <h2 className="text-4xl text-blue-600 flex items-center"><CgArrowsExchange></CgArrowsExchange></h2>
                    <div>
                        <h2 className="pb-2">Destination </h2>
                        <input className="w-[300px]  py-2 px-4 rounded-lg border-2" onChange={(e) => setTo(e.target.value)}
                            placeholder='Destination' type="to" />
                    </div>

                </div>

            </div>
            <div className="w-4/5 mx-auto py-8">
                <Swiper

                    // ======
                    slidesPerView={4}
                    spaceBetween={30}

                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,

                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            },
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,

                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            },

                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            },
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                            autoplay: {
                                delay: 3500,
                                disableOnInteraction: false,
                            },
                        },
                    }}



                    navigation={true}


                    modules={[Autoplay, Pagination, Navigation]} className="mySwiper p-5">
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" className='grid grid-cols-1'>
                        {
                            searchPlan.map(item => <SwiperSlide><PlanCard item={item}></PlanCard> </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>

        </div>
    )
}

export default SearchPlan