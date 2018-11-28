const TIME_UPDATE = 1000;

class SecondsLeft {
  constructor( data ) {
    this.timeElement = data.timeElement;
    this.id = null;
  }

  start( dateOfBirth, expectedMaxYears ) {
    if( this.id !== null ) this._stop();
    const millisecondsToDeath = (new Date(dateOfBirth)).setFullYear(dateOfBirth.getFullYear() + expectedMaxYears);
    let secondsToLive = Math.floor((millisecondsToDeath - Date.now())/1000);
    this._updateSecond( `${(--secondsToLive).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}` );
    this.id = setInterval(() => {
      this._updateSecond( `${(--secondsToLive).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}` );
    }, TIME_UPDATE);
  }

  _updateSecond( value ) {
      this.timeElement.innerHTML = value;
  }

  _stop() {
    this.timeElement.innerHTML = '';
    clearInterval( this.id );
  }
}

module.exports = SecondsLeft;