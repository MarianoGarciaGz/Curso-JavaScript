window.addEventListener('load', () => {
  function intervalo() {
    var tiempo = setInterval(() => {
      console.log('Set interval ejecutando')
      var header1 = document.querySelector('h1')
      if (header1.style.color == 'red') {
        header1.style.color = 'blue'
      } else {
        header1.style.color = 'red'
      }
    }, 1000)
    return tiempo
  }

  var tiempo = intervalo()
  var stop = document.querySelector('#Stop')
  var start = document.querySelector('#Start')

  stop.addEventListener('click', () => {
    alert('has parado el intervalo')
    clearInterval(tiempo)
  })

  start.addEventListener('click', () => {
    alert('has parado el intervalo')
    clearInterval(tiempo)
  })
})
