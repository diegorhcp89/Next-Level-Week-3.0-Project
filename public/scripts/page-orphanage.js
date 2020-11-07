const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map("mapid", options).setView([-23.687977, -46.6802013], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});



L.marker([-23.687977, -46.6802013], { icon }).addTo(map)

function selectImage(event){
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".imagens button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecinar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem
    imageContainer.src = image.src

    // adicionar a classe .active para este botao
    button.classList.add('active')
}
