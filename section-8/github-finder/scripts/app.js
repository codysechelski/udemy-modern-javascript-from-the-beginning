const github = new GitHub();
const ui = new UI();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('No user by that handle', 'danger');
          ui.clearProfile();
        }
        else {
          try {
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
          } catch (error) {
            
          }
        }
      })
  }
  else {
    ui.clearProfile();
  }
});