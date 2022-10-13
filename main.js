setInterval(() => {
  if(document.getElementsByTagName('text')[6] !== undefined && document.getElementsByTagName('text')[6].innerHTML === "8:00 - 9:45")
    document.getElementsByTagName('text')[6].innerHTML = "8:00 - 8:45";
}, 0);