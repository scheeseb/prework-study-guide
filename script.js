document.addEventListener("click", (element) => {
    console.log(element.target)
})

const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

topics.forEach(string => {
    console.log(string)
});



// if (topic === 'HTML') {
//  console.log("Let's study HTML!");
// } else if (topic === 'CSS') {
//  console.log("Let's study CSS!");
// } else if (topic === 'Git') {
//  console.log("Let's study Git!");
// } else if (topic === 'JavaScript') {
//  console.log("Let's study JavaScript!");
// } else {
//  console.log('Please try again!');
// }