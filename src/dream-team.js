const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members))
  return false
  let buff = members.filter(i => typeof i == 'string').map(item => item.toUpperCase().split('').filter(letter => letter !== ' ').join('')[0]).sort().join('');// фильтруем строку
  return buff;
};
