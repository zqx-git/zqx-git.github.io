// 轮播图
window.onload = function() {
  var mySwiper = new Swiper(".swiper-container", {
    // direction: "vertical", // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true, //可选选项，自动滑动

    // 如果需要分页器
    pagination: {
      el: ".swiper-pagination"
    }

    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // }

    // 如果需要滚动条
    // scrollbar: {
    //   el: ".swiper-scrollbar"
    // }
  })
}

var text
var arr

let i = 0
// 声明打字机方法
function daziji(i) {
  let ps = $(".signature").children("p")
  if (i == ps.length) return false
  let index = 0
  let dazi = setInterval(function() {
    ps[i].childNodes[1].innerText = "I"
    $(ps[i].childNodes[1])
      .fadeOut(300)
      .fadeIn(300)
    ps[i].childNodes[0].innerText = arr[i].substring(0, index++)
    if (index > arr[i].length) {
      $(ps[i].childNodes[1]).remove()
      clearInterval(dazi)
      daziji(++i)
    }
  }, 400)
}

// 通过天行接口调用毒鸡汤
function getOne() {
  $.ajax({
    type: "get",
    url:
      "http://api.tianapi.com/txapi/dujitang/index?key=62e4d5c2404d3b1e6f6e33b78c9d9b29",
    // "http://api.tianapi.com/txapi/one/index?key=62e4d5c2404d3b1e6f6e33b78c9d9b29", one的每日一句
    success: function(success) {
      console.log(success)
      if (success.code == 200) {
        text = success.newslist[0].content
        var reg = /[,；|，；|;；| ；|；；|:；|：；|。;|.;]/g
        arr = text.split(reg)
        for (var j = 0; j < arr.length; j++) {
          let pp = "<p><span></span><span></span></p>"
          $(".signature").append(pp)
        }
        daziji(i)
      } else {
        text = `黑夜给了我黑色的眼睛 我却用它寻找光明`
        daziji(i)
      }
    },
    error: function(error) {
      console.error("获取数据错误" + error)
      text = `黑夜给了我黑色的眼睛 ,我却用它寻找光明`
      daziji(i)
    }
  })
}
getOne()
