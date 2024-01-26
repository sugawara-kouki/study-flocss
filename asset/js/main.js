import gsap from "gsap";

gsap.to(".p-target__box", {background: "#0000ff", duration: 1 });

// class Person {

//   constructor() {
//     this.addInputEvent();
//   }
  
//   addInputEvent() {
//     const inputElms = document.querySelectorAll('#text');
//     inputElms.forEach(function(inputElm) {
//       inputElm.addEventListener('change', function() {
//         const elmContent = inputElm.value;
//         const errorArea = document.querySelector('#js-errorBox');

//         if(elmContent.length <= 10) {
//           errorArea.innerHTML = '';
//           errorArea.classList.remove('is-active');
//           return;
//         }
//         errorArea.innerHTML = `10文字以内で入力してください。`;
//         errorArea.classList.add('is-active');
//       });
//     })
//   }
// }



// 画面がロードされたらクラスを生成
window.addEventListener('load', function() {
  const person = new Person();
});