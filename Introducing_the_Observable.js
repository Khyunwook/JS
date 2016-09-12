var Observable = Rx.Observable;

var button = document.getElementById('button');
/*
var handler = function(e){
  alert('clicked');
  button.removeEventListener('click',handler);
};

button.addEventListener('click',handler);
*/

var clicks = Observable.fromEvent(button,'click');

//subscription : observable 객체. unsubscibe을 위해 사용.
var subscription = 
  clicks.forEach(
  function onNext(e){
    alert('clicked');
    subscription.dispose();
  },
  function onError(error){
    console.log("ERROR!");
  },
  function onCompleted(){
    console.log("done");
  }); 
 //async이기 때문에 observable 객체의 3개의callback을 이용해 try-catch 사용
/*
try{
  [1,2,3].forEach(function(i){
    console.log(i);
  });
  console.log("done");
}
catch(e){
  console.log("ERROR!");
}
*/
