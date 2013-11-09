module.exports = function getShortMessages(messages) {
  return messages.filter(function (item) { return item.message.length < 50; }).map(function (m) { return m.message; })
}