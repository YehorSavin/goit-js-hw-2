const checkForSpam = function (message) {
  message = message.toLowerCase();
  console.log(message.incindexOf(`spam`));
  1вариант
  if (message.includes(`spam`) || message.includes(`sale`))
    return true
