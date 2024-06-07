import { useForm } from "react-hook-form"
import usePlans from "../../Hooks/usePlans"
import PlanCard from "./PlanCard"
import { useState } from "react"
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css'

import 'swiper/css/pagination';

const SearchPlan = () => {
    const [plans] = usePlans()
    const [search, setSearch] = useState('');
    const [to, setTo] = useState('');

    const searchPlan = plans.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.name.toLowerCase().includes(search);
        // : item.first_name.toLowerCase().includes(search);
    }).filter((item) => {
        return to.toLowerCase() === ''
            ? item
            : item.to.toLowerCase().includes(to);
        // : item.first_name.toLowerCase().includes(search);
    })

    return (
        <div>
            <div className="bg-white w-2/3 mx-auto flex mb-16 -mt-20 rounded-lg">
                <input className=" p-3 border-2 rounded-md mx-auto w-[400px] max-w-3xl" onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search contacts' type="search" />
                <input className=" p-3 border-2 rounded-md mx-auto w-[400px] max-w-3xl" onChange={(e) => setTo(e.target.value)}
                    placeholder='Destination' type="search" />


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