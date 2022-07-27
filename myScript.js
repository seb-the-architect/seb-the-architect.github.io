$( document ).ready(function() 
{
    var pos = 0,
    slides = $('.slide'),
    numOfSlides = slides.length;
    console.log("222");
    
    function nextSlide(){
        console.log("1");
        slides.eq(pos).animate({left:'-200%'},500);
        pos = pos >= numOfSlides-1 ? 0 : ++pos;
        slides.eq(pos).css({left:'200%'}).animate({left:0},500);
        fadeText();
    }

    function previousSlide(){
        console.log("2");
        slides.eq(pos).animate({left:'200%'},500);
        pos = pos == 0 ? numOfSlides-1 : --pos;
        slides.eq(pos).css({left:'-200%'}).animate({left:0},500);
        fadeText();
    }

    function fadeText()
    {
        switch(pos)
        {
            case 0:
                $('.first-info').fadeTo(500, 0, ()=>{$('.first-info').text(text1);});
                $('.first-info').fadeTo(500, 1);
                break;
            case 1:
                $('.first-info').fadeTo(500, 0, ()=>{$('.first-info').text(text2);});
                $('.first-info').fadeTo(500, 1);
                break;
            case 2:
                $('.first-info').fadeTo(500, 0, ()=>{$('.first-info').text(text3);});
                $('.first-info').fadeTo(500, 1);
                break;
            case 3:
                $('.first-info').fadeTo(500, 0, ()=>{$('.first-info').text(text4);});
                $('.first-info').fadeTo(500, 1);
                break;
            
            default:
                break;
        }
    }

    const text1 = "\nSFX Re-design using game clips from \nBlack Myth Wukong and Monster Hunter:World.";
    const text2 = "Dynamic Audio Reel\nWwise States,\nInteractive Music Hierarchy,\nComposition";
    const text3 = "First-Person Footsteps Blueprint, field recording\n(Wwise - Unreal Integration)";
    const text4 = "Sound Design &amp; Composition\n(FMOD, Logic Pro)";

    const prevArrow = $('.button.prev')[0];
    const nextArrow = $('.button.next')[0];

    prevArrow.addEventListener("click", previousSlide);
    nextArrow.addEventListener("click", nextSlide);
});
