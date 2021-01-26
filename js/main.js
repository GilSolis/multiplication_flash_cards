
// generates random # 1-12
// alert((Math.floor(Math.random() * (13 - 1) + 1)))
//     (Math.floor(Math.random() * (13 - 1) + 1))

document.getElementById('showAnswer').addEventListener('click', showAnswer)
document.getElementById('next').addEventListener('click', showNext)
// document.getElementById('again').addEventListener('click', searchAgain);

function showAnswer() {
    alert("Answer working")
    console.log('working')
}

function showNext() {
    alert('Show next working')
}