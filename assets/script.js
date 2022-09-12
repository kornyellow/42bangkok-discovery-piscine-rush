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
  } else if (cookie === "korn") {
    changeCookie("barw");
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
  $("html,body").animate({ scrollTop: 0 }, "slow");
  return false;
});
