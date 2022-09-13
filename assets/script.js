let cookie = "";

const changeCookie = (name) => {
  cookie = name;
  document.cookie = `name=${cookie}`;
};

if (document.cookie > 0) {
  cookie = document.cookie.split(";")[0].split("=")[1];
} else {
  changeCookie("barw");
}

$("#github").click(() => {
  window.open("https://github.com/BarwSirati");
});

$("#ig").click(() => {
  window.open("https://www.instagram.com/l3al2w/");
});

$("#fb").click(() => {
  window.open("https://www.facebook.com/profile.php?id=100003566034104");
});

$("#mail").click(() => {
  window.open("mailto:64010899@kmitl.ac.th");
});

$("#kgithub").click(() => {
  window.open("https://github.com/kornyellow");
});

$("#kig").click(() => {
  window.open("https://www.instagram.com/korn.yellow/");
});

$("#kmail").click(() => {
  window.open("mailto:64010009@kmitl.ac.th");
});

$(".nav-menu").click(() => {
  let name = $("#hamburger").attr("name");
  if (name === "close") {
    $("#hamburger").attr("name", "menu");
    $("#menu").removeClass("top-[80px]");
    $("#menu").removeClass("opacity-100");
  }
});

$("#swap").click(() => {
  if (cookie === "barw") {
    changeCookie("korn");
    $("#pan").css({
      "-webkit-transform": "translateX(-100vw)",
      "-moz-transform": "translateX(-100vw)",
      "-ms-transform": "translateX(-100vw)",
      "-o-transform": "translateX(-100vw)",
      "transform": "translateX(-100vw)",
    });
  } else if (cookie === "korn") {
    changeCookie("barw");
    $("#pan").css({
      "-webkit-transform": "translateX(0)",
      "-moz-transform": "translateX(0)",
      "-ms-transform": "translateX(0)",
      "-o-transform": "translateX(0)",
      "transform": "translateX(0)",
    });
  }
});

$("#hamburger").click(() => {
  let name = $("#hamburger").attr("name");
  if (name === "menu") {
    $("#hamburger").attr("name", "close");
    $("#menu").addClass("top-[80px]");
    $("#menu").addClass("opacity-100");
  } else if (name === "close") {
    $("#hamburger").attr("name", "menu");
    $("#menu").removeClass("top-[80px]");
    $("#menu").removeClass("opacity-100");
  }
});
const offset = 80;

$("#profile_btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#profile").offset().top - offset,
    },
    "slow"
  );
});

$("#profileB").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#profile").offset().top - offset,
    },
    "slow"
  );
});

$("#experience_btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#experience").offset().top - offset,
    },
    "slow"
  );
});
$("#contact_btn").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top - offset,
    },
    "slow"
  );
});

$("#logo").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
