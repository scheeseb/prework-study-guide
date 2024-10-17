document.addEventListener("click", (element) => {
    console.log(element.target)
})

const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    topics.forEach(string => {
        console.log(string)
    });
}

listTopics()
selectTopic()

function selectTopic () {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}
