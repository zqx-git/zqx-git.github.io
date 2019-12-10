// 动态更改根目录字体大小
function fontSize() {
  var view_width = document
    .getElementsByTagName("html")[0]
    .getBoundingClientRect().width
  var _html = document.getElementsByTagName("html")[0]
  view_width > 3000
    ? (_html.style.fontSize = (100 * 3000) / 375 + "px")
    : (_html.style.fontSize = (view_width * 100) / 375 + "px")
}
fontSize()
// 监听屏幕宽度变化
window.onresize = function() {
  fontSize()
}
