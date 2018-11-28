const storage = require('./storage');
storage.init();
const SecondsLeft = require('./SecondsLeft');
const formAddUserInfo = document.querySelector('.container_form form');
const wrapperFormAddUserInfo = document.querySelector('.wrapper');
const buttonUpdateDate = document.querySelector('.updateDate');
const buttonCancel = document.querySelector('.cancel');

const secondsLeft = new SecondsLeft({
  timeElement : document.querySelector('.time')
});

const user = (storage.getUserData()).user;
if( user.dateOfBirth ) {
  secondsLeft.start( new Date(user.dateOfBirth), +user.expectedMaxYears );
  wrapperFormAddUserInfo.style.display = 'none';
}

formAddUserInfo.addEventListener('submit', ( event ) => {
  event.preventDefault();
  const inputs = [...event.target.querySelectorAll('input')];
  const userData = inputs.reduce((combine, item) => {
    combine[item.name] = item.value;
    item.value = '';
    return combine;
  },{});
  storage.setUserData( userData );
  secondsLeft.start( new Date(userData.dateOfBirth), +userData.expectedMaxYears );
  wrapperFormAddUserInfo.style.display = 'none';
});

buttonUpdateDate.addEventListener('click', () => {
  wrapperFormAddUserInfo.style.display = 'flex';
});

buttonCancel.addEventListener('click', () => {
  wrapperFormAddUserInfo.style.display = 'none';
});

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
  .then( response => {
    response.update();
  })
  .catch(error => console.error(error) );
}