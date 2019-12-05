const handleClientLoad = () => gapi.load('client:auth2', initClient);
const initButton = () => {
  const GoogleAuth = gapi.auth2.getAuthInstance();
  GoogleAuth.currentUser.listen(updateSigninStatus);
  document.querySelector('#signin').addEventListener('click', _ => GoogleAuth.signIn());
  function updateSigninStatus() {
    const user = GoogleAuth.currentUser.get();
    const div = document.createElement('div');
    div.innerHTML = JSON.stringify(user);
    document.querySelector('body').appendChild(div);
  }
};
const initClient = () => {
  return gapi.client.init({
    'apiKey': 'AIzaSyBTu6tTTGuUUgh-pMG57zfqBwdK01hvb9E',
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    'clientId': '687359526253-r1clq7stvf8mgg03cgeno3gnj59tpi87.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly'
  }).then(initButton);
};