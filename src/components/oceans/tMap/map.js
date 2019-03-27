// export function TMap(key) {
//   return new Promise(function (resolve, reject) {
//     window.init = function () {
//       resolve(qq)
//     }
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = "https://map.qq.com/api/js?v=2.exp&callback=init&key=" + key;
//     script.onerror = reject;
//     document.head.appendChild(script);
//   })
// }

class map {
  test() {
    console.log(321321321321321)
  }
}

let mapjs = new map()

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(mapjs)
}

export default mapjs