$(document).ready(function () {
  $(".design").click(function () {
    $(".design-hidden").toggle();
  });


  $(".development").click(function () {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  })
  

  $(".product").click(function () {
    $(".product-showing").toggle();
    $(".product-hidden").toggle();
  });
  
$("#sbmt").click(function(event)
  {
    event.preventDefault();

    var email=$("#contact-email").val();

    if($("#user-name").val()==""){
      alert("Please input name")
    }
    else if($("#contact-email").val()==""){
      alert("Please input email")
    }
    else if($("#message").val()==""){
      alert("Please input your message")
    }
  
    else{
    alert("Hello "+ email + "," + "welcome to delani your messege has been received and is being acted on. Thank you for reaching out to us.");}
  });
  
});