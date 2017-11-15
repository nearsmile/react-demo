class LikeButton {
  render () {
    return `
    <button id='like-btn'>
      <span class='like-text'>赞</span>
      <span>👍</span>
    </button>
    `
  }
}

const root = document.querySelector('#root')
const likeBtn1 = new LikeButton()
root.innerHTML = likeBtn1.render()

const likeBtn2 = new LikeButton()
root.innerHTML += likeBtn2.render()
