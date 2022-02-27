const jokes = [
    'What does a nosy pepper do? Gets jalapeño business!',
    'How does Moses make tea? He brews.',
    'Why can\'t you explain puns to kleptomaniacs? Why can\'t you explain puns to kleptomaniacs?',
    'A man tells his doctor, “Doc, help me. I\'m addicted to Twitter!” The doctor replies, “Sorry, I don\’t follow you …”',
    'What kind of exercise do lazy people do? Diddly-squats.',
    'Why don\'t Calculus majors throw house parties? Because you should never drink and derive.',
    'What do you call a parade of rabbits hopping backwards? A receding hare-line.',
    'What does Charles Dickens keep in his spice rack? The best of thymes, the worst of thymes.',
    'Why should the number 288 never be mentioned? It\'s two gross.',
    'What did the Tin Man say when he got run over by a steamroller? “Curses! Foil again!”'
];

const jokeButton = document.getElementById('joke-button')
const jokeButtonDefaultString = jokeButton.innerHTML

jokeButton.onclick = generateJoke

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length)
    
    jokeButton.innerHTML = jokes[randomIndex]
    var timer = setTimeout(resetButton, 3000);
}

function timeOut() {
    const startTime = Date.now()
}

function resetButton() {
    jokeButton.innerHTML = jokeButtonDefaultString
}