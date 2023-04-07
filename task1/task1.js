let container = document.getElementById('container');
let div = document.createElement('div')
div.innerHTML = "<div id='myDiv' class='message'>Привет, уведомление закроется через пару секунд!<button id='buttonCheck'>Закрыть</button></div>"
function removeOnClick() {
    document.getElementById('myDiv').remove()
}
function onPlusClick() {
    container.appendChild(div)
    setTimeout(function(){document.getElementById('myDiv').remove()}, 5000);
}
container.addEventListener('click', onPlusClick);
div.addEventListener('click', removeOnClick);
