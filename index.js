function getFirstSelector(selector) {
  const ans = document.querySelector(selector);
  return ans;
}
function nestedTarget() {
  const a = getFirstSelector("div.target");
  // a.innerText = 2;
  return a;
  // document.querySelector("div.target").innerText = 5;
}
// nestedTarget();
// function deepestChild(selector) {
//     return "boo";
// }
function deepestChild() {
var answer
var children = {}
var counter = 0
var list = document.querySelectorAll('#grand-node > div')
for (var i = 0; i < list.length; i++) {
var current_child = list[i]
while (current_child.querySelector(':first-child') != null) {
counter += 1
current_child = current_child.querySelector(':first-child')
deepestChild = current_child

}
if (children[i] === undefined || children[i] < counter) {
  children[i] = counter
  answer = deepestChild
}
counter = 0
}
return answer
}
function increaseRankBy(n){
  const as = document.querySelectorAll("ul.ranked-list li");
  for(let i = 0 ; i < as.length ; i++){
    as[i].innerHTML = parseInt(as[i].innerHTML,10)+n;

  }
}
