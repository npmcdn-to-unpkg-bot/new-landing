$(window).ready(function() {


  // Show document untill is completely loaded but I used wow to active body tag
  //document.getElementsByTagName("html")[0].style.visibility = "visible";

  // Toogle search bar
  $(document).bind('click', function(e) {
    if (!$(e.target).parents().is(".search-bar.is-active")&&(!$(e.target).is(".search-bar.is-active")))
    {
      $(".change-search-btn,.search-bar,.result-header").removeClass("is-active");
    }
  });

  $('.change-search-btn').click(function (e) {
      e.stopPropagation()
  });

  $(".change-search-btn").click(function() {
    $(".change-search-btn,.search-bar,.result-header").addClass("is-active");
  });




  // Animation hide warning message
  $(".result-warning-container .close-icon").click(function() {
    $(".result-warning").fadeOut( 300, "swing");
    $(".result-warning-container").fadeOut( 300, "swing");
    $(".result-warning-container").css({"height": 0, "margin-bottom": 0, "border": 0});
  });

  $(".clear-filters-btn").click(function() {
    $(".clear-filters-btn").fadeOut( 200, "swing");
  });




  // Animation activation social travelers info
  $(".onoffswitch-checkbox").click(function() {
    if ($('#socialSwitchResults').is(':checked'))
    {
      $(".social-travel-section").addClass("is-active");
    } else {
      $(".social-travel-section").removeClass("is-active");
    }
  });



  // Animation mobile show info result and social travelers info
  $(".more-details-mobile-btn").click(function() {
    $(".show-details").removeClass("show-mobile");
    $(".hide-details").removeClass("hidden-mobile");
    $(".show-details").addClass("hidden-mobile");
    $(".hide-details").addClass("show-mobile");
  });

  $(".more-details-mobile-btn").click(function() {
    $(".trip-features-section").addClass("is-active");
    $(".social-travel-section").addClass("is-active");
  });

  // Datepicker
  $('#search-bar-departure').datepicker({
    format: "dd/mm/yyyy",
    startDate: "0d",
    endDate: "+90d",
    maxViewMode: 1,
    todayBtn: "linked",
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
  });

  $('#search-bar-return').datepicker({
    format: "dd/mm/yyyy",
    startDate: "0d",
    endDate: "+90d",
    maxViewMode: 1,
    clearBtn: true,
    autoclose: true,
    toggleActive: true,
  });



  
  // input recognice is-dirty when select datepicker day
  $("#search-bar-departure").click(function() {
    if (document.contains($('.datepicker')[0]))
    {
      $('.day').not(".disabled").click(function () {
        $('#search-bar-departure').parent().addClass('is-dirty');
      });
      $('.today').not(".disabled").click(function () {
        $('#search-bar-departure').parent().addClass('is-dirty');
      });
    }
  });

  $("#search-bar-return").click(function() {
    if (document.contains($('.datepicker')[0]))
    {
      $('.day').not(".disabled").click(function () {
        $('#search-bar-return').parent().addClass('is-dirty');
      });
      $('.clear').click(function () {
        $('#search-bar-return').parent().removeClass('is-dirty');
      });
    }
  });




  // Allow tabs inside filter dropdown
  $('.filter-dropdown .mdl-tabs.mdl-js-tabs').click(function (e) {
    e.stopPropagation()
  });




  // Refresh filter content when click on tabs
  /*$( ".filter-dropdown .mdl-tabs__tab" ).click(function() {
    $( ".filter-by" ).trigger( "click" );
    $( ".filter-by" ).trigger( "click" );
  });*/

  // This is for document ready 
  setTimeout(filterTrigger,1000)

  function filterTrigger () {
    $( ".filter-dropdown .mdl-tabs__tab" ).click(function() {
      $( ".filter-by" ).trigger( "click" );
      $( ".filter-by" ).trigger( "click" );
    });
  };

});