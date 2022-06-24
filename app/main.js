let page = 1

function showItems(page) {
  let items = Array.from(document.querySelectorAll('ul li'))
  items.forEach((item, i) => {
    if (i >= (page * 21)) {
      item.style.display = 'none'
    } else {
      item.style.display = 'inherit'
    }
  })
}

window.addEventListener('load', () => {
  // show only a few items
  showItems(page)
})

window.addEventListener('scroll', (e) => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-100) {
      // show more items
      console.log('load more')
      page += 1
      showItems(page)
    }
})
