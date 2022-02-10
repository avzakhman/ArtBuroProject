console.log('script initialized');
(function ($) {
    $(".contact-form").submit(function (event) {
      event.preventDefault();
   
      // Сообщения формы
      let successSendText = "Сообщение успешно отправлено";
      let errorSendText = "Сообщение не отправлено. Попробуйте еще раз!";
      let requiredFieldsText = "Заполните поле с телефоном";
   
      // Сохраняем в переменную класс с параграфом для вывода сообщений об отправке
      let message = $(this).find(".contact-form__message");
   
      let form = $("#form")[0];
      let fd = new FormData(form);
      $.ajax({
        url: "/form.php",
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        beforeSend: () => {
          $(".preloader").addClass("preloader_active");
        },
        success: function success(res) {
          $(".preloader").removeClass("preloader_active");
   
          // Посмотреть на статус ответа, если ошибка
          // console.log(res);
          let respond = $.parseJSON(res);
   
          if (respond === "SUCCESS") {
            message.text(successSendText).css("color", "#AEAEAE");
            setTimeout(() => {
              message.text("");
            }, 4000);
          } else if (respond === "NOTVALID") {
            message.text(requiredFieldsText).css("color", "#AEAEAE");
            setTimeout(() => {
              message.text("");
            }, 3000);
          } else if (respond === "ERROR") {
            message.text(errorSendText).css("color", "#AEAEAE");
            setTimeout(() => {
              message.text("");
            }, 4000);
          }
        }
      });
    });
  })(jQuery);

  