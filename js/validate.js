// Validation
$(document).ready(function(){
    $("#loginform").validate({
       rules:{
            login:{
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            email:{
                required: true,
                email: true,

            },
            number:{
                required: true,
                minlength: 10,
                maxlength: 13,
            },
       },
       messages:{
            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 16",
            },
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Ведите email в формате xxx@yyy.zz"
                
            },
            number:{
                required: "Это поле обязательно для заполнения",
                minlength: "Номер телефона должен быть минимум 10 символов",
                maxlength: "Номер телефона должен быть максимум 13 символов",
            },
       }
    });
});

