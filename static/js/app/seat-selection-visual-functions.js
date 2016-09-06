$(window).ready(function() {

  $(".onoffswitch-checkbox").click(function() {
    if ($('#socialTravelersSwitch').is(':checked'))
    {
      $(".social-travelers").addClass("is-active");
    } else {
      $(".social-travelers").removeClass("is-active");
    }
  });
});