/*
* Request from the "register user" page to create new user
*
* Verify that username is not taken
* password and repeat_password should match
*
* If failure, return the message? Not sure how to display that...
* Else, go ahead and create the user. Then send a confirmation bubble.
*/

function createUser(req, res) {
  const username = req.body.username;
  const pw = req.body.password;
  const pw_repeat = req.body.repeat_password;

}

module.exports = createUser;
