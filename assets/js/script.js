$(document).ready(function(){
    tamanhoVideo()
    tamanhoMapa()
})

$(window).resize(function(){
    tamanhoVideo()
    tamanhoMapa()
})

$(window).scroll(function(){
    if($(window).scrollTop() > 180){
        $('#backToTop').show();
    }else{
        $('#backToTop').hide();
    }
})

$('#backToTop').on('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

function tamanhoVideo(){
    var largura = $('.campo-1 > .duplo > .colunas').width();
    var altura = $('.campo-1 > .duplo > .colunas.texto').height();
    $('.campo-1 > .duplo > .colunas > .video').css('width', largura)
    if($(window).width() < 992){
        $('.campo-1 > .duplo > .colunas > .video').css('height', 350)
    }else{
        $('.campo-1 > .duplo > .colunas > .video').css('height', altura)
    }
}

function tamanhoMapa(){
    var largura = $('.campo-4 > .conteudo > .triplo > .colunas').width();
    $('.campo-4 > .conteudo > .triplo > .colunas > .mapa').css('width', largura)
}

$('.galeria').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });