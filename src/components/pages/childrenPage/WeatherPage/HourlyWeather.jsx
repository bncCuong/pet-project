import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const HourlyWeather = ({ data, unit }) => {
    return (
        <div className="absolute bottom-[150px] h-40  w-[95%] px-10">
            <p className="font-bold text-white border-b-2 ">Hoursly forecast (24h)</p>
            <Swiper slidesPerView={6}>
                {data.map((item, i) => (
                    <SwiperSlide
                        key={i}
                        className="w-[60px] h-[80px]  flex flex-col gap-1 items-center justify-center text-black font-semibold"
                    >
                        <p className="pl-2">{item.time.slice(10, 16)}</p>
                        <img alt="icon" src={item.condition.icon} />
                        <p className="pl-3">{unit ? item.temp_c : item.temp_f}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HourlyWeather;
