// string => document
const createDOMFromString = (domString) => {
  const div = document.createElement('div')
  div.innerHTML = domString
  return div
}
class LikeButton {
  render () {
    this.el = createDOMFromString(`
      <button class='like-button'>
        <span class='like-text'>赞</span>
        <span>👍</span>
      </button>
    `)
    this.el.addEventListener('click', () => console.log('click'), false)
    return this.el
  }
}

const root = document.getElementById('root')
const likeBtn1 = new LikeButton()
root.appendChild(likeBtn1.render())

const likeBtn2 = new LikeButton()
root.appendChild(likeBtn2.render())

export {
  createDOMFromString
}