"use strict";

// Menu Dropdown hover
$('nav li.list-inline-item').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0);},
        function() { $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(0);}
);

// Filtra fotos de Obras
function filtraObras() {
    
    // init Isotope
    var $grid = $('.wrap-obras').isotope({
        filter: '.mar-18',
        transitionDuration: 0
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    // bind filter on select change
    $('.filtro-obras').on( 'change', function() {
      // get filter value from option value
      var filterValue = this.value;
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    
}

var url = window.location;

// Filtro do menu de Empreendimentos
function filtraEmpreendimentos() {
    
    // store filter for each group
    var filters = {};

    // flatten object by concatting values
    function concatValues( obj ) {
      var value = '';
      for ( var prop in obj ) {
        value += obj[ prop ];
      }
      return value;
    }
    
    $('.filtro-obras').on('click', 'a', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.menu-filtro');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[ filterGroup ] = $this.attr('data-filter');
        
        // combine filters
        var filterValue = concatValues( filters );
        
        $('.filtro-emp').isotope({ filter: filterValue });
        
        url.hash = "filtro=" + filterValue;
        
        return filterValue
    });
    
    $('.filtro-bairros').on('click', 'a', function() {
        var $this = $(this);
        
        var filterSelected = $this.attr('data-filter');
        
        $('.filtro-emp').isotope({ filter: filterSelected });
        
        url.hash = "filtro=" + filterSelected;
    });
    
    var getUrlFiltro = location.hash.match(/\.[^\]]+/g);
    
    if (getUrlFiltro != null) {
        
        $('.filtro-emp').isotope({ filter: getUrlFiltro[0] });
    }
    
}

$('.menu-filtro').each( function(i, buttonGroup) {
    
    var $buttonGroup = $(buttonGroup);
    
    $buttonGroup.on('click', 'a', function() {
        
        $buttonGroup.find('.filtro-selecionado').removeClass('filtro-selecionado');
        
        $(this).addClass('filtro-selecionado');
        
    });
    
});

$(document).ready(function() {
    
    $('.slider-home').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    $('.glry-obras').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        preloader: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,2]
        },
        removalDelay: 500
    });
    
    $('.glry-img').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        preloader: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,2]
        },
        removalDelay: 500
    });
    
    $('.glry-plantas').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        preloader: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,2]
        },
        removalDelay: 500
    });
    
    filtraObras();
    
    filtraEmpreendimentos();
    
});
