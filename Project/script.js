const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");


formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click",(e)=>{
  e.preventDefault( );
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click",(e)=>{
  e.preventDefault( );
  formContainer.classList.remove("active");
});

(function() {
  $(".skills-prog li")
    .find(".skills-bar")
    .each(function(i) {
      $(this)
        .find(".bar")
        .delay(i * 150)
        .animate(
          {
            width:
              $(this)
                .parents()
                .attr("data-percent") + "%"
          },
          1000,
          "linear",
          function() {
            return $(this).css({
              "transition-duration": ".5s"
            });
          }
        );
    });

  $(".skills-soft li")
    .find("svg")
    .each(function(i) {
      var c, cbar, circle, percent, r;
      circle = $(this).children(".cbar");
      r = circle.attr("r");
      c = Math.PI * (r * 2);
      percent = $(this)
        .parent()
        .data("percent");
      cbar = (100 - percent) / 100 * c;
      circle.css({
        "stroke-dashoffset": c,
        "stroke-dasharray": c
      });
      circle.delay(i * 150).animate(
        {
          strokeDashoffset: cbar
        },
        1000,
        "linear",
        function() {
          return circle.css({
            "transition-duration": ".3s"
          });
        }
      );
      $(this)
        .siblings("small")
        .prop("Counter", 0)
        .delay(i * 150)
        .animate(
          {
            Counter: percent
          },
          {
            duration: 1000,
            step: function(now) {
              return $(this).text(Math.ceil(now) + "%");
            }
          }
        );
    });
}.call(this));
