console.log("反応");

$(function(){
    // 画像が自動で切り替わる
    $(".slick").slick({
        infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    // dots: false,
    // cssEase: 'linear',
    pauseOnHover: false,
    // arrows: falseで横の余白をなくす余白にarrowsのボタンがあるため空白が開く
    arrows: false
    })

    //  押したらtopへ戻る
    $(".fa-arrow-circle-up").click(function(){
        console.log("clicked");
        let name = $(".name").offset().top;
        $("html,body").animate({scrollTop:name},1000);
    })


    $(".btn").on("click",function(){
        console.log("clicked");
        $(".btn")
        .siblings(".res-li")
        .slideToggle();
    })



    let window_h = $(window).height();
    $(window).on("scroll", function () {
        let scroll_top = $(window).scrollTop(); //スクロールの位置の指定
        console.log(scroll_top);
        $(".vox").each(function(){
            let elem =$(this).offset().top; //各box要素のtopの位置を取得する
            console.log(elem);

            if(scroll_top >= elem - window_h +300){ //どのタイミングでフェードインさせるか
                $(this).addClass("fadein");
            }else{
                $(this).removeClass("fadein");
            }
        })
        $(".box").each(function(){
            let erem =$(this).offset().top;

            if(scroll_top >= erem - window_h +300){
                $(this).addClass("fadein");
            }else{
                $(this).removeClass("fadein");
            }
        })
    })

});


