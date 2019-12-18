// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [51.544248, 46.049506],
    zoom: 11
  });
}