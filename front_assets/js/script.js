$(".-carousel").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    nextArrow: $("#arrowNext"),
    prevArrow: $("#arrowPrev"),
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 998,
            settings: {
                dots:true,
                slidesToShow: 1,
                arrows: false,
            },
        }
    ]
});


$(document).ready(()=>{
    $('.gapro-slideshow').slick({
        prevArrow: $('.gapro-btn-left'),
        nextArrow: $('.gapro-btn-right'),
    });
})

let gamproCarousel = ()=>{
    const gaproButtonLeft = $('.gapro-btn-left');
    const gaproButtonRight = $('.gapro-btn-right');
    const gaproWarp = $('.gapro-warp');
    let dataProduct = [{
        nameImg : `emile-guillemot-ci7gkM_29wA-unsplash.jpg`,
        descProduct : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu cursus.`,
    },{
        nameImg : `towfiqu-barbhuiya-5m5418Ng6t8-unsplash.jpg`,
        descProduct : `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
    },{
        nameImg : `zulfahmi-khani-9gvFjMVS9A0-unsplash.jpg`,
        descProduct : `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
    },{
        nameImg : `zulfahmi-khani-VLGa7BAz0Qk-unsplash.jpg`,
        descProduct : `sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. B`,
    },{
        nameImg : `clement-m-Ng3xrviPrhk-unsplash.jpg`,
        descProduct : `Bibendum neque egestas congue quisque egestas diam in arcu cursus. `,
    }];

    let index = 0;
    let maxIndex = dataProduct.length-1;
    let templateGaproImg = (srcImg,descGapro)=>{
        return `
            <img src="${srcImg}" class="gapro-img position-absolute fixed-top">
            <div class="gapro-subtitle position-absolute fixed-bottom color-white">${descGapro}</div>
            `;
    }

    gaproButtonLeft.on('click',()=>{
        gaproWarp.find('.gapro-img').remove();
        gaproWarp.find('.gapro-subtitle').remove();
        gaproWarp.append(templateGaproImg(
            `../front_assets/img/${dataProduct[index].nameImg}`,
            dataProduct[index].descProduct));
        index--;
        if(index <= -1){
            index = maxIndex;
        }
    })

    gaproButtonRight.on('click',()=>{
        gaproWarp.find('.gapro-img').remove();
        gaproWarp.find('.gapro-subtitle').remove();
        gaproWarp.append(templateGaproImg(
            `../front_assets/img/${dataProduct[index].nameImg}`,
            dataProduct[index].descProduct));
        index++;
        if(index >= maxIndex){
            index = 0;
        }        
    })

    setInterval(()=>{
        gaproWarp.find('.gapro-img').remove();
        gaproWarp.find('.gapro-subtitle').remove();
        gaproWarp.append(templateGaproImg(
            `../front_assets/img/${dataProduct[index].nameImg}`,
            dataProduct[index].descProduct));
        index++;
        if(index >= maxIndex){
            index = 0;
        } 
    },5000)
}

let daproEventClick = ()=>{
    $('.dapro-list').find('.dapro-item').on('mouseenter',(e)=>{
        let targetClick = $(e)[0].currentTarget;
        // target mencari .dapro-desc lalu mencari lagi .dapro-detail-desc
        targetClick.children[1].children[1].classList.toggle('d-none');
           
    })

     $('.dapro-list').find('.dapro-item').on('mouseleave',(e)=>{
        let targetClick = $(e)[0].currentTarget;
        targetClick.children[1].children[1].classList.add('d-none');
           
    })
}
gamproCarousel();

daproEventClick()