$(document).ready (function () {  
    $('#myform').submit (function (e) {  
       e.preventDefault();   
       var email = $('#email').val(); 
       var pswrd = $('#pass').val(); 
       $('.error').css("display","none");  
       
        if (email.length < 1) {  
            $('.error').css("display","block");
            $(".links1").css("display","none");
            $(".links2").css("display","block");
        } 
            else {  
                var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/ ; 
                var regEx1 = /^[0-9]{10}$/;                       
                var validEmail = regEx.test(email)||regEx1.test(email);}  
                if (!validEmail) {  
                    $('.error').css("display","block");
                    $(".links1").css("display","none");
                    $(".links2").css("display","block");
                }  
       
        if (pswrd.length < 1) {            
            $('.error').css("display","block"); 
            $(".links1").css("display","none");
            $(".links2").css("display","block");
        }
            else{
                var passv=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
                var passvalidatio=passv.test(pswrd)  
            }                              
                if(!passvalidatio){               
                    $('.error').css("display","block");
                    $(".links1").css("display","none"); 
                    $(".links2").css("display","block");
                }
     }); 
});
   