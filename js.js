//Mảng sản phẩm
var sppts = [
  ["anhcuoi.png", "./images/anhcuoi.png"],
  ["menu.png", "./images/menu.png"],
];
var spweb = [
  ["tinhocngoisao.jpeg", "https://phucbinh2001.github.io/tinhocngoisao/"],
  ["bstore.jpg", "https://phucbinh2001.github.io/Bstore/"],
  ["logistico.png", "https://phucbinh2001.github.io/logistico/"],
  ["coco.png", "https://phucbinh2001.github.io/coco/"],
];
var spall = new Array();
spall = spweb.concat(sppts);

//Hiện sản phẩm
function show(index) {
  var kq = "";
  for (let i = 0; i < index.length; i++) {
    kq +=
      "<div class = 'card'><a target='_blank' href='" +
      index[i][1] +
      "'>" +
      "<img src=images/" +
      index[i][0] +
      "></div></a>";
  }
  document.getElementById("sanpham").innerHTML = kq;
}

//Check form
$(document).ready(function () {
  $("#submit").click(function (e) {
    alert(
      "Phiền bạn vui lòng liên hệ qua Facebook, email hoặc số điện thoại. Xin cảm ơn!"
    );
  });
});

//Scoll to stop
function totop() {
  document.documentElement.scrollTop = 0;
}

//Hiện job
var job = [
  "Học Sinh",
  "Sinh Viên",
  "Web Developer",
  
];
var i = 1;
function jobne() {
  setInterval(function () {
    myjob = job[i];
    document.getElementById("jobs").innerHTML = myjob;
    i++;
    if (i == job.length) i = 0;
  }, 1500);
}

//Hiện menu
function showmenu() {
  document.getElementById("smenu").style.display = "block";
  document.getElementById("close").style.display = "block";
}

function hidemenu() {
  document.getElementById("smenu").style.display = "none";
  document.getElementById("close").style.display = "none";
}
