const inputs = {
  cima: document.querySelector('input[name="cima"]'),
  baixo: document.querySelector('input[name="baixo"]'),
  tenis: document.querySelector('input[name="tenis"]'),
}
const label = {
  cima: document.querySelector('label[for="cima"'),
  baixo: document.querySelector('label[for="baixo"'),
  tenis: document.querySelector('label[for="tenis"'),
}

const pecas = {
  cima: document.querySelector('div.pecaCima'),
  baixo: document.querySelector('div.pecaBaixo'),
  tenis: document.querySelector('div.pecaTenis'),
}


inputs.cima.addEventListener('change', e => {
  pecas.cima.style.backgroundColor = e.target.value
})

inputs.baixo.addEventListener('change', e => {
  pecas.baixo.style.backgroundColor = e.target.value
})

inputs.tenis.addEventListener('change', e => {
  pecas.tenis.style.backgroundColor = e.target.value
})


const btn = document.querySelector('span')
const dialog = document.querySelector('dialog')
btn.addEventListener('click', () => {
  dialog.showModal()
})

dialog.addEventListener('click', e => {
  dialog.close()
})