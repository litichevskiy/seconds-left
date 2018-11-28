const STORAGE_NAME = 'STORAGE';

module.exports = {
  getUserData() {
    return JSON.parse( localStorage.getItem(STORAGE_NAME) );
  },

  setUserData( obj ) {
    let data = this.getUserData();
    for( let  key in obj ) {
      data.user[key] = obj[key];
    }
    this._setItem( data );
  },

  _setItem( obj ) {
    localStorage.setItem( STORAGE_NAME, JSON.stringify( obj ) );
  },

  init() {
    if( !localStorage.getItem( STORAGE_NAME ) ) this._setItem( {user:{}} );
  }
};