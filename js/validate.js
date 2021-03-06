// Validation
$(document).ready(function(){
    $("#loginform").validate({
       rules:{
            login:{
                required: true,
                minlength: 2,
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
        showErrors: function(errorMap, errorList) {
            this.defaultShowErrors(errorMap, errorList);
            if(errorList.length) {
                $('#send').prop( "disabled", true );
            } else {
                var errorCheck = 0;

                $('.error.active').each(function(index) {
                    if($(this).css('display') != 'none') {
                        errorCheck++;
                    }                    
                });

                if(!errorCheck) {
                    $('#send').prop( "disabled", false );
                }
            }
        },
       messages:{
            login:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен состоять минимум из 2 символов",
                maxlength: "Максимальное число символо - 16",
            },
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Ведите email в формате xxx@yyy.zz"
                
            },
            number:{
                required: "Это поле обязательно для заполнения",
                minlength: "Номер телефона должен состоять минимум из 10 символов",
                maxlength: "Номер телефона должен быть максимум из 13 символов",
            },
       }
    });
});

