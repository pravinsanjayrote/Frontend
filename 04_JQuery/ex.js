$(document).ready(function(){
    // $('#name,#email,#city').focus(function(){
    //     $(this).css("background-color","yellow");
    // })

    // $('#name,#email,#city').blur(function(){
    //     $(this).css("background-color","");
    // })

    // $('#city').change(function(){
    //     var x = $(this).val();
    //     $('#show').html(x);
    // })

    // $('#name,#email').select(function(){
    //     $(this).css("background-color","yellow");
    // })

    //  $('#myform').submit(function(){
    //     alert("form submitted...");
    // })

    // var a = $('h2').text();
    // alert(a);

    $('#myform').submit(function(){
        var name=$('#name').val();
        var email=$('#email').val();
        var city=$('#city').val();
        alert("your name is:"+name+" your email id is:"+email+" you stay in:"+city);
    })
})