$(document).ready(function () {  //문서준비이벤트 시작


    //depth2
    $('.depth2, .depth2_bg').hide();

    $('.gnb>li').mouseenter(function () {
        $(this).find('.depth2').stop().slideDown();
        $('.depth2_bg').stop().slideDown();
    });

    $('.gnb>li').mouseleave(function () {
        $(this).find('.depth2').stop().slideUp();
        $('.depth2_bg').stop().slideUp();
    });


    //mgnb
    $('#wrap:after').hide();

    $('.mb_ham').click(function(){
        $('body').css({'overflow':'hidden'});
        $('.mgnb_wrap').animate({
            right:'0',
        }) //3초동안 애니메이션
        $('wrap:after').fadeIn();
    });

    $('.mgnb_close').click(function(){
        $('body').css({'overflow':'auto'});
        $('.mgnb_wrap').animate({
            right: '-100%'
        })
        $('wrap:after').fadeOut();
    });


    $('.mgnb_list li ul').hide();

    $('.mgnb_list li').click(function(){
        $(this).children().stop().slideToggle();
        $(this).siblings().children().stop().slideUp();
        $('.mgnb_wrap').css({'overflow-y':'auto'});
        $('.mgnb').css({'height':'100%'})
    });





    //mv 인원슬라이드
    $('.mv_human ul').hide();

    $('.mv_human').click(function () {
        $('.mv_human ul').stop().slideToggle();
        $('.down').toggleClass('active');
    });







    //추천숙소 슬라이드
    const rcm_hotel = new Swiper('.rcm_hotel', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },

        spaceBetween: 40,  // 슬라이드 사이 여백
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초



    });

    //펜션
    const rcm_pension = new Swiper('.rcm_pension', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },

        spaceBetween: 40,  // 슬라이드 사이 여백
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초



    });

    $('.rcm_pension').hide();

    $('.rcm_text ul li:nth-child(2)').click(function () {
        $('.rcm_hotel').hide();
        $('.rcm_pension').show();
    });

    $('.rcm_text ul li:nth-child(1)').click(function () {
        $('.rcm_pension').hide();
        $('.rcm_hotel').show();
    });


    //추천슬라이드 찜 아이콘
    $(".rcm_hotel > ul > li > :nth-child(3)").hide();

    $(".rcm_hotel > ul > li > :nth-child(2)").click(function () {
        $(this).next().toggle();

    });

    $(".rcm_pension > ul > li > :nth-child(3)").hide();

    $(".rcm_pension > ul > li > :nth-child(2)").click(function () {
        $(this).next().toggle();

    });


    $('.rcm_text ul li:first-child').addClass('active');
    $('.rcm_text ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });




    //베너 슬라이드
    const event = new Swiper('.event', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },

        slidesPerView: '1',  // 한 슬라이드에 보여줄 갯수


        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });


    //여행지 탭 슬라이드
    const spot_tab = new Swiper('.spot_tab', {


        slidesPerView: '4.4',  // 한 슬라이드에 보여줄 갯수

        breakpoints: {

            786: {
                slidesPerView: 4.4,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
        },


        spaceBetween: 40,
        loop: false, //슬라이드 반복 여부


    });

    
    $('.spot_tab li:first-child').addClass('active');
    
    $('.spot_tab li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    $('.spot_all div:nth-child(1)').addClass('active');

    $('.spot_tab li:nth-child(1)').click(function () {
        $('.spot_all div:nth-child(1)').addClass('active').siblings().removeClass('active');

    });

    $('.spot_tab li:nth-child(2)').click(function () {
        $('.spot_all div:nth-child(2)').addClass('active').siblings().removeClass('active');

    });

    $('.spot_tab li:nth-child(3)').click(function () {
        $('.spot_all div:nth-child(3)').addClass('active').siblings().removeClass('active');

    });

    $('.spot_tab li:nth-child(4)').click(function () {
        $('.spot_all div:nth-child(4)').addClass('active').siblings().removeClass('active');

    });

    $('.spot_tab li:nth-child(5)').click(function () {
        $('.spot_all div:nth-child(5)').addClass('active').siblings().removeClass('active');

    });




    //국내 여행지 슬라이드
    const spot_slide = new Swiper('.spot_slide', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수
        centeredSlides: true,

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        spaceBetween: 10,
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });

    //아시아탭
    const spot_asia = new Swiper('.spot_asia', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수
        centeredSlides: true,

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        spaceBetween: 10,
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });


    //유럽탭
    const spot_europe = new Swiper('.spot_europe', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수
        centeredSlides: true,

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        spaceBetween: 10,
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });


    //아메리카탭
    const spot_america = new Swiper('.spot_america', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수
        centeredSlides: true,

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        spaceBetween: 10,
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });

    //중동탭
    const spot_mideast = new Swiper('.spot_mideast', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수
        centeredSlides: true,

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 10,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },

        spaceBetween: 10,
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });


    //아고다홈즈 슬라이드
    const homes_slide = new Swiper('.homes_slide', {
        autoplay: {
            delay: 3000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        pagination: {
            el: '.swiper-pagination',  // 버튼 태그 설정
            type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true,  // 버튼 클릭 여부
        },


        slidesPerView: '1',  // 한 슬라이드에 보여줄 갯수



        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });



    //sub

    //trvel_act
    const act_slide = new Swiper('.act_slide', {
        autoplay: {
            delay: 1,
            reverseDirection: true
            
          },

        centeredSlides: true,

        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },

        spaceBetween: 40,
        loop: true, //슬라이드 반복 여부
        speed: 3000 //슬라이드 동작 속도 1초

    });


    //travel_hotel_slide
    const hotel_slide = new Swiper('.hotel_slide', {
        autoplay: {
            delay: 1,
            reverseDirection: true
          },

        

        slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수

        breakpoints: {

            768: {
                slidesPerView: 1.5,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },

        spaceBetween: 40,  // 슬라이드 사이 여백
        loop: true, //슬라이드 반복 여부
        speed: 3000 //슬라이드 동작 속도 1초



    });


    //travel_hotel 찜
    $(".hotel_slide > ul > li > :nth-child(3)").hide();

    $(".hotel_slide > ul > li > :nth-child(2)").click(function () {
        $(this).next().toggle();

    });





    //hotel_top 찜 아이콘
    $(".btn > li:nth-child(3)").hide();

    $(".btn > li:nth-child(2)").click(function () {
        $(this).next().toggle();

    });


    //hotel_room
    const room_img = new Swiper('.room_img', {
        
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        slidesPerView: '1',  // 한 슬라이드에 보여줄 갯수
        centeredSlides: true,

        

    });


    //hotel_top_mb
    const top_mb = new Swiper('.top_mb', {
        
        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },


        slidesPerView: '1',  // 한 슬라이드에 보여줄 갯수
        centeredSlides: true,
        
    });


    //location_slide
    const location_slide = new Swiper('.location_slide', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },


        slidesPerView: '3',  // 한 슬라이드에 보여줄 갯수

        breakpoints: {
            1400: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },

        spaceBetween: 20,
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });

    //추천호텔 찜버튼
    $(".location_hotel > ul > li > :nth-child(3)").hide();

    $(".location_hotel > ul > li > :nth-child(2)").click(function(){
        $(this).next().toggle();
    });



    //호텔 탭
    $('.hotelt_tab ul li:nth-child(1)').addClass('active');
    
    $('.hotel_tab li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    $('.tab_desc ul:nth-child(1)').addClass('active');

    $('.hotel_tab li:nth-child(1)').click(function () {
        $('.tab_desc ul:nth-child(1)').addClass('active').siblings().removeClass('active');

    });

    $('.hotel_tab li:nth-child(2)').click(function () {
        $('.tab_desc ul:nth-child(2)').addClass('active').siblings().removeClass('active');

    });

    $('.hotel_tab li:nth-child(3)').click(function () {
        $('.tab_desc ul:nth-child(3)').addClass('active').siblings().removeClass('active');

    });

    $('.hotel_tab li:nth-child(4)').click(function () {
        $('.tab_desc ul:nth-child(4)').addClass('active').siblings().removeClass('active');

    });

    $('.hotel_tab li:nth-child(5)').click(function () {
        $('.tab_desc ul:nth-child(5)').addClass('active').siblings().removeClass('active');

    });


    //근처 호텔 추천
    const location_hotel = new Swiper('.location_hotel', {
        autoplay: {
            delay: 4000,  // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
            prevEl: '.swiper-button-prev',  // 이전 버튼
        },

        slidesPerView: '1',  // 한 슬라이드에 보여줄 갯수

        breakpoints: {

            768: {
                slidesPerView: 1,  //브라우저가 768보다 클 때
                spaceBetween: 40,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },

        spaceBetween: 40,  // 슬라이드 사이 여백
        loop: true, //슬라이드 반복 여부
        speed: 1000 //슬라이드 동작 속도 1초

    });


    //city_hotel 낮은순 높은순
    $('.stand ul').hide();

    $('.stand').click(function () {
        $('.stand ul').stop().slideToggle();
        $('.down').toggleClass('active');
    });


    //city_hotel 찜버튼
    $(".bottom_hotel li > div > img:nth-of-type(3)").hide();

    $(".bottom_hotel li > div > img:nth-of-type(2)").click(function () {
        $(this).next().toggle();

    });


    //city_hotel 탭
    //호텔 탭
    $('.city_tab li:nth-child(1)').addClass('active');
    
    $('.city_tab li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    $('.bottom_tab ul:nth-child(1)').addClass('active');

    $('.city_tab li:nth-child(1)').click(function () {
        $('.bottom_tab ul:nth-child(1)').addClass('active').siblings().removeClass('active');

    });

    $('.city_tab li:nth-child(2)').click(function () {
        $('.bottom_tab ul:nth-child(2)').addClass('active').siblings().removeClass('active');

    });

    $('.city_tab li:nth-child(3)').click(function () {
        $('.bottom_tab ul:nth-child(3)').addClass('active').siblings().removeClass('active');

    });

    $('.city_tab li:nth-child(4)').click(function () {
        $('.bottom_tab ul:nth-child(4)').addClass('active').siblings().removeClass('active');

    });

   
   

}); //문서준비이벤트 종료