$(document).ready(function() {
	
	
	
	if($(window).width() <= '800'){
		$("iframe").attr("width","300");
		$("iframe").attr("height","170");
			
		if($(window).width() > '370'){
				
		$("iframe").attr("width","345");
		$("iframe").attr("height","170");
		$(".location").css("height","60");
		$(".location").css("width","345");
 
		}

	$("#exampleFormControlTextarea1").hide();
	$("#exampleFormControlTextarea2").hide();
	$("#exampleFormControlTextarea3").hide();
	$(".icons__item .fa-phone").text("");

    }
    
    
	$('#fullpage').fullpage({
        anchors: ['block1', 'block2', 'block3', 'block4', 'block5', 'block6', 'block7'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

            if(nextIndex == 1){
                $("#menu a").removeClass('blackbga');
                 }
            else {
                $("#menu a").addClass('blackbga');

            }

           /* if(nextIndex==2){
                $(".beer_list").animateCss('fadeInRight');
                $(".board1").animateCss('fadeInLeft');
            }else if(nextIndex == 3){
                $(".napitki").animateCss("fadeInRight");
            }else if(nextIndex == 4){
                $(".raki").animateCss('fadeInRight');
                $(".board1").animateCss('fadeInLeft');
            }else if(nextIndex == 5){
                $(".zakus").animateCss('fadeInRight');
            }else if(nextIndex == 6){
                $(".maps").animateCss('fadeInLeft');
                $(".location").animateCss('fadeInRight');
                $(".dilivery").animateCss('fadeInLeft');
            }else if(nextIndex == 7){
                $(".contact").animateCss('fadeInRight');
                $(".icons").animateCss('fadeInLeft');

            }*/

        }
    });
		
	
    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = (function(el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };

                for (var t in animations) {
                    if (el.style[t] !== undefined) {
                        return animations[t];
                    }
                }
            })(document.createElement('div'));

            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);

                if (typeof callback === 'function') callback();
            });

            return this;
        },
    });

    $("#board").animateCss('fadeInRight');


   

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            if(this.classList.contains("is-active") === true)
            {
                this.classList.remove("is-active");
				$("#menu").animateCss('fadeInLeft');
                $("#menu").css("display","none");
                $(".blackline").css("display","none");


            } else{
                this.classList.add("is-active") ;
                $("#menu").css("display","block") ;
                $(".blackline").css("display","block");
            }

        });
    }

    $("#menu").on("click", function(e) {
        if(toggle.classList.contains("is-active") === true){
            toggle.classList.remove("is-active");
			$("#menu").animateCss('fadeInLeft');
            $("#menu").css("display","none");
            $(".blackline").css("display","none");
			
        }
    });

$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        if($('#btnSubmit').hasClass("disabled")){
            return false;
        }
        $("#btnSubmit").addClass('disabled');
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "../send.php", //путь до php фаила отправителя
            data: form_data,
            success: function(){    
               alert("Вам скоро позвонят!");
            }});
        return false;    
   
    });

    $("#phone").mask("+7(999) 999-99-99");

   


});