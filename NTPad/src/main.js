const { appWindow } = window.__TAURI__.window;
//const { fs } = window.__TAURI__.fs;
const textarea = document.getElementById('editor');
const numbers = document.getElementById("numbers");
document.getElementById('minimize').addEventListener('click', () => appWindow.minimize());
document.getElementById('maximize').addEventListener('click', () => appWindow.toggleMaximize());
document.getElementById('quit').addEventListener('click', () => closeFun());
document.getElementById('close').addEventListener('click', () => closeFun());

document.getElementById('copy').addEventListener('click', function() {
  navigator.clipboard.writeText(textarea.value);
});

textarea.addEventListener("keyup", (e) => {
  const num = e.target.value.split("\n").length;
  numbers.innerHTML = Array(num).fill("<span></span>").join("");
  
});

function closeFun() {
  if (textarea.value != '') {
    alert("Are you sure you wan to close?");
  }
  else appWindow.close();
}

textarea.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value =
      textarea.value.substring(0, start) +
      "\t" +
      textarea.value.substring(end);
    event.preventDefault();
  }
});