
import MessageListItem from '../components/MessageListItem';

// import MyVideo from "../../src/pages/video1.mp4"


import {useEffect, useRef, useState} from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent, IonGrid,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent, IonRow,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import Swiper1 from "../components/Swiper1";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";


import "swiper/swiper-bundle.css";



const Home: React.FC = () => {

  const blur=0

  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 5000);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if(navigationNextRef) {
        navigationNextRef?.current?.swiper?.slideNext();
      }

    },2*1000);
    return () => clearInterval(interval);
  }, []);


  const data = [
    {
      title1:'tel. 2999888',
      title2:'RIMI blakus',
      title3:'atlaide 30%',
      video: "https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_615435000f6eb2.81789495_preview.mp4",

    },
    {
      title1:'www.win.lv',
      title2:'ZIEMAS RIEPAS',
      title3:'ŠODIEN -25%',
      video: "https://joy1.videvo.net/videvo_files/video/free/2013-09/large_watermarked/DiscoLights2Videvo_preview.mp4"

    },
    {
      title1:'blakus 500 m',
      title2:'SPA / PIRTS',
      title3:'-30% no 18:00 ',
      video: "https://joy1.videvo.net/videvo_files/video/free/2022-01/large_watermarked/211212_02_Jakarta_4k_018_preview.mp4"

    },
    // {
    //   title1:'title111111',
    //   title2:'title222222',
    //   title3:'title333333',
    //   video: "https://joy1.videvo.net/videvo_files/video/free/2013-12/large_watermarked/CROWD_JUMPS_LIGHTS_PULSE_preview.mp4"
    // },
  ]

  const navigationNextRef = useRef() as any


  return (

      <div>
        <Swiper
            ref={navigationNextRef}
            style={{marginTop:'1px', height:'300px'}}

            // onInit={(core: SwiperCore) => {
            //   navigationNextRef.current = core.el
            // }}

            spaceBetween={30}
            // centeredSlides={true}
            autoplay={{
              delay: 1000,
              // disableOnInteraction: false,
            }}

            loop

            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
        >
          {data.map((card,index)=>{
            return(
                <SwiperSlide key={`slide${index} `}>
                  {/*<video width="250" height="200" controls >*/}
                  {/*  <source src={MyVideo} type="video/mp4"/>*/}
                  {/*</video>*/}



                  <div
                      key={`div_${index}`}
                      style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',

                        height:'100%',
                        // height:'140px',
                        // width:'140px',
                        width:'100%',
                        backgroundColor:'darkblue'

                      }}
                  >
                    <video
                        className='flex_video_stream'
                        style={{ zIndex:1,
                          height:'100%',
                          // height:'200px',
                          width:'100%',
                          // width:'200px',

                          objectFit: 'cover',
                          position: 'absolute',
                          top: '0',
                          left: '0',

                          filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                        autoPlay
                        loop
                        muted
                        // ref={video}
                        id="video-id"
                        // {/*works!!!*/}
                        src={card.video}

                    >
                      {/* TODO make it accept multiple media types */}
                      <source src={card.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>


                    <div
                        style={{
                            // height:'40px', width:'100px',
                            backgroundColor:'yellow',
                            // 111

                            // alignSelf:'start',
                            top:'60px',
                            right:'20%',
                            padding:'5px',
                            color:'red',
                            fontSize:'25px',
                            fontWeight:'bold',


                            zIndex:2,
                            position:'absolute',

                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                      {card.title1}
                    </div>

                          <div
                            style={{
                                //  height:'40px', width:'100px',
                                backgroundColor:'yellow',
                            // 222
                            marginTop:'-10%',
                            left:'15%',
                                padding:'10px',
                                color:'red',
                                fontSize:'30px',
                                fontWeight:'bold',

                              position:'absolute',
                              zIndex:2,

                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                            }}
                          >
                            {card.title2}
                          </div>

                                  <div
                                      style={{
                                          // height:'40px', width:'100px',
                                          backgroundColor:'yellow',
                                        marginTop:'100px',
                                        left:'20%',

                                          padding:'5px',
                                          color:'red',
                                          fontSize:'25px',

                                          position:'absolute',
                                          zIndex:2,

                                          display:'flex',
                                          flexDirection:'row',
                                          justifyContent:'center',
                                          alignItems:'center',

                                      }}
                                  >
                                    {card.title3}
                                  </div>
                  </div>
                </SwiperSlide>
            )
          })}
          {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 4</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 5</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 6</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 7</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 8</SwiperSlide>*/}
          {/*<SwiperSlide>Slide 9</SwiperSlide>*/}
        </Swiper>

        <div>
          <button onClick={()=>{
            if(navigationNextRef) {
              navigationNextRef?.current?.swiper?.slideNext();
            }
          }}>PRESS</button>
        </div>

      </div>

  );
};

export default Home;
