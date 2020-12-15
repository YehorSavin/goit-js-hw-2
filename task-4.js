const formatString = function (string) {
  console.log(string.length);
  if (string <= 40) {
    return string
  } else {
    return string = string.slice(0, 40) + '...'

  }
