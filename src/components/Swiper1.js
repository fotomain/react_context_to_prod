
// import './Comp3.css';

// https://swiperjs.com/react#usage

import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Swiper as SwiperInterface } from 'swiper';
import {IonCard, IonicSlides, IonPage, IonText} from '@ionic/react';

import {IonContent} from "@ionic/react";
import '../pages/Home.css';
// import { Navigation } from “swiper”


import {useState} from "react";


// import 'swiper/modules/autoplay/autoplay.min.css';
// import 'swiper/modules/keyboard/keyboard.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
// import 'swiper/modules/scrollbar/scrollbar.min.css';
// import 'swiper/modules/zoom/zoom.min.css';

//  import "swiper/css";
// //
//  import "swiper/css/navigation";
// //
//  import "swiper/css/pagination";
// //
//  import "swiper/css/scrollbar";

const Swiper1 = (props) => {

    const SwiperModules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides];
    const [swiperInstance, setSwiperInstance] = useState(new SwiperInterface);

    const options = {
        // autoplay: { delay: 1000 },
        // keyboard: true,
        // pagination: false,
        // scrollbar: false,
        // zoom: true,
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 1.5,
        //         spaceBetween: 10
        //     },
        //     // when window width is >= 480px
        //     480: {
        //         slidesPerView: 2.5,
        //         spaceBetween: 20
        //     },
        //     // when window width is >= 640px
        //     640: {
        //         slidesPerView: 4.5,
        //         spaceBetween: 30
        //     }
        // },
        // watchSlidesProgress: false,
    }


    const data = [
        {   title1:'title1',
            title2:'title2',
            title3:'title3'
        },
        {   title1:'title111',
            title2:'title222',
            title3:'title333'
        },
        {   title1:'title111111',
            title2:'title222222',
            title3:'title333333'
        },
    ]

    return (
        <div>
            <p>Swiper1</p>
            <IonContent scrollX>
            <Swiper>
                {data.map((card,index)=>{
                    return(
                    <SwiperSlide key={`slide${index} `}>
                        <div    key={`div_${index}`} style={{height:'140px', width:'140px', backgroundColor:'red' }}>SSSSSSSS {`slide${index} `}</div>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
            </IonContent>
        </div>
    );
};

export default Swiper1;
