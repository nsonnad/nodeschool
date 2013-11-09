module.exports = function checkUsersValid(goodUsers) {
  return function checkUsers(toCheck) {
    return toCheck.every(function (submitted) { 
      return goodUsers.some(function(user) { 
        return submitted.id == user.id;
      });
    });
  }
}