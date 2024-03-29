const messagesWrapper = document.querySelector('.chat__wrapper');
const messages = document.querySelector('.chat__messages');

function getRandomNumber(min, max, toFixed) {
  if (toFixed) return parseFloat((Math.random() * (max - min + 1) + min).toFixed(toFixed));
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function appendMessage() {
  const message = document.getElementsByClassName('message')[getRandomNumber(1, 3)];
  const newMessage = message.cloneNode(true);
  messages.appendChild(newMessage);
}

function scrollToBottom() {
  messagesWrapper.scrollTo({ top: messagesWrapper.scrollHeight, behavior: 'smooth' });
}

function getMessages() {
  appendMessage();
}

setInterval(() => {
  getMessages();
  scrollToBottom();
}, 10000);
