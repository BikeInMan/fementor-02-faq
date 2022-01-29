// Adding event listeners to all the questions
const questions = document.querySelectorAll('.question');
console.log(questions);
questions.forEach(question => {

    var answer = question.nextElementSibling;
    answer.style.setProperty('display', 'none');

    question.addEventListener('click', () => {
        question.classList.toggle("active");
        var curState = answer.style.getPropertyValue("display");
        if (curState === 'none') {
            answer.style.setProperty('display', 'block');
        } else {
            answer.style.setProperty('display', 'none');
        }
    })
});