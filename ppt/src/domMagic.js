import $ from 'jquery'

export default function domMagic () {
  // 点击列表条目变大
  $('.ppt').delegate('li', 'click', function () {
    const $el = $(this)
    const highlightClass = 'hightlight-list-item'

    if ($el.hasClass(highlightClass)) {
      $el.removeClass(highlightClass)
      return
    }

    $(`.${highlightClass}`).removeClass(highlightClass)

    $el.addClass('transition')
    $el.addClass(highlightClass)
  })

    // 点击其他元素列表条目恢复
  $('.ppt').delegate('.page', 'click', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'li') {
      return
    }

    $('.hightlight-list-item').removeClass('hightlight-list-item')
  })
}
