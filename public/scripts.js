const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const videoId = card.getAttribute('id') 
        window.location.href = `/video?id=${videoId}`
      })
}



 // const videoId = card.getAttribute('id') 
 //  modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`