//Mảng sản phẩm
var sppts = [
    ["anhcuoi.png", "./images/anhcuoi.png"],
    ["menu.png", "./images/menu.png"]
];
var spweb = [
    ["logistico.png", "https://phucbinh2001.github.io/logistico/"],
    ["tinhocngoisao.jpeg", "https://phucbinh2001.github.io/tinhocngoisao/"],
    ["coco.png", "https://phucbinh2001.github.io/coco/"],
];
var spall = new Array();
spall = sppts.concat(spweb);

//Hiện sản phẩm
function show(index) {
    var kq = "";
    for (let i = 0; i < index.length; i++) {
        kq+="<div class = 'card'><a target='_blank' href='"+index[i][1]+"'>"
        + "<img src=images/" + index[i][0]+"></div></a>";
    }
    document.getElementById('sanpham').innerHTML = kq;
}

//Check form
$(document).ready(function () {
    $("#submit").click(function (e) {
        alert('Phiền bạn vui lòng liên hệ qua Facebook, email hoặc số điện thoại. Xin cảm ơn!')
    });
});



//Scoll to stop
function totop() {
    document.documentElement.scrollTop = 0;
}



//Hiện job
var job = ['Front-end Developer', 'UI Designer', 'Web Developer', 'App Developer'];
var i = 1;
function jobne() {
setInterval(function () {
    myjob = job[i];
    document.getElementById("jobs").innerHTML = myjob;
    i++;
    if (i == job.length)
        i = 0;
}, 1500);
}

//Hiện menu
function showmenu() {
    document.getElementById('smenu').style.display = 'block';
    document.getElementById('close').style.display = 'block';
}

function hidemenu() {
    document.getElementById('smenu').style.display = 'none';
    document.getElementById('close').style.display = 'none';
}
