import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import rightArrow from "/right-arrow.svg";
import quotePng from "/quote-png.svg";

const Testimonies = [
    {
        title: "Best Company",
        content: "I am registered with 1 line and pay 10,000. My fiancee is also registered with 1 number and pay 10k as well. We registered by September 2023 and have been making calls nearly everyday since then. We plan to renew our registration by Sept 2024.",
        user: "Terence"
    },
    {
        title: "Right Choice",
        content: "I have 4 AIRTEL Numbers. 1 is with my parents in the village, 1 is with a son in his school. 1 with my manager in my office and the 4th line is with me. ALL of us can call each other 24/7 all year round with just a token of 10k per annum per number. I renew my subscription once a year and we don't need to buy credit to call each other at all.",
        user: "Chuks."
    },
    {
        title: "Affordable",
        content: "I stay in touch with my family all day long and we don't have to worry about call credit. I have to 2 Innjoy Telcom CALL BONANZA numbers. One with me and the 2nd at my home.",
        user: "Timothy"
    },
    {
        title: "Thank You for This",
        content: "It was a surprise for me that my siblings will call me while I was away in University and talk as if they don't buy credit with money. I had to ask my dad his secret and was amazed that ur company provided us that platform.",
        user: "Faithful"
    }
];

const TestimonialItem = ({ title, content, user }) => {
    return (
        <div className="p-4 pt-12 flex flex-col bg-white max-w-[450px] rounded-xl shadow-sm border-t-[7.5px] border-r-[7.5px] border-[#3a40d4] relative ml-auto">
            <img className="absolute top-4 right-4" loading="lazy" src={quotePng} alt="quote" />
            <h4 className="text-[18px] font-semibold mb-4">{title}</h4>
            <p className="text-[12px] text-[#666666] mb-4">{content}</p>
            <p className="text-[15px] font-semibold">{user}</p>
        </div>
    );
};

const Testimonials = () => {
    return (
        <div className="bg-white">
            <div className='max-w-[1440px] mx-auto px-8 py-[56px] flex flex-col sm:items-start sm:flex-row justify-between gap-8'>
                <div className="w-[375px]">
                    <h2 className="text-[33px] font-semibold mb-[18px]">Feedback About Their Experience With Us</h2>
                    <p className="text-[12px] text-[#666666] mb-[27px]">Read testimonials from our satisfied clients. See how our services have made a difference in their lives.</p>
                    <div className="flex items-center gap-[9px]">
                        <button id="prev-slide" className="border border-[#36B864] hover:bg-[#36B864] rounded-[4.5px] p-[12px] text-[#111d15] flex items-center justify-center">
                            <img loading="lazy" className="rotate-180" src={rightArrow} alt="previous" />
                        </button>
                        <button id="next-slide" className="bg-[#36B864] hover:bg-[#40c26b] rounded-[4.5px] p-[12px] flex items-center justify-center">
                            <img loading="lazy" src={rightArrow} alt="next" />
                        </button>
                    </div>
                </div>
                <div className="testimonial-slider w-full sm:w-[calc(80%-375px)]">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '#prev-slide',
                            nextEl: '#next-slide',
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                    >
                        {Testimonies.map((testimony, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialItem
                                    title={testimony.title}
                                    content={testimony.content}
                                    user={testimony.user}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
