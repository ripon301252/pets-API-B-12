
function startCountdown(e) {
  const btn = e.currentTarget; // <-- button element কে ধরে রাখছে

  let num = 3;
  const modal = document.getElementById("countdownModal");
  const content = document.getElementById("modalContent");
  const overlay = document.getElementById('overlay');

  // overlay + modal show
  overlay.classList.remove('hidden');
  modal.classList.remove("hidden");
  content.innerText = num;

  let time = setInterval(() => {
    num--;
    if (num >= 0) {
      content.innerText = num;
    } 
    else {
      clearInterval(time);

      // modal hide
      setTimeout(() => {
        modal.classList.add("hidden");
        overlay.classList.add('hidden');

        // modal hide হওয়ার পর button disable
        btn.disabled = true;
        btn.innerText = "Adopted";
      }, 0);
    }
  }, 1000);
}









