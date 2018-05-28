
module.exports = function() {
  console.log(_.range(10));   // look ma, it's lodash
  document.querySelector('body').insertAdjacentHTML("afterbegin", '<div class="first">some first crap</div>')
}

