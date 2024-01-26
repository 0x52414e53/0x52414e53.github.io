const typingTxt = document.getElementById('typing-txts');
const currentTimeElement = document.getElementById('current-time');

const audioControl = document.getElementById('audio-control');
const audio = document.getElementById('audio');
const words = ['Freelancer', 'Student', 'Web Developer','Programmer'];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

function typeText() {
    const currentWord = words[currentWordIndex];
    typingTxt.textContent = currentWord.substring(0, currentLetterIndex);

    if (isDeleting) {
        currentLetterIndex--;
    } else {
        currentLetterIndex++;
    }

    if (currentLetterIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(() => {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }, 1000);
    }

    setTimeout(typeText, isDeleting ? 50 : 150);
}
function updatePhilippinesTime() {
    const philippinesOffset = 8;
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


    // GMT+8 (Philippines Time)
    const now = new Date();
    const localTime = now.getTime();
    const localOffset = now.getTimezoneOffset() / 60;
    const utc = localTime + (localOffset * 60 * 60 * 1000);
    const philippinesTime = new Date(utc + (philippinesOffset * 60 * 60 * 1000));

    const dayOfWeek = philippinesTime.getDay();
    const monthIndex = philippinesTime.getMonth();
    const dayOfMonth = philippinesTime.getDate();
    const year = philippinesTime.getFullYear();
    const hours24 = philippinesTime.getHours();
    const ampm = hours24 >= 12 ? 'PM' : 'AM';
    const hours12 = hours24 % 12 || 12;
    const minutes = philippinesTime.getMinutes().toString().padStart(2, '0');
    const seconds = philippinesTime.getSeconds().toString().padStart(2, '0');

    currentTimeElement.textContent = `${hours12}:${minutes}:${seconds} ${ampm} ${daysOfWeek[dayOfWeek]} ${months[monthIndex]} ${dayOfMonth} ${year}`;
}

audioControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

typeText();
updatePhilippinesTime();
setInterval(updatePhilippinesTime, 1000);
