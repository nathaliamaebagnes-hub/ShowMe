const pageHistory = [];

function goToPage(pageId){

  const currentPage = document.querySelector(".page.active");
  const nextPage = document.getElementById(pageId);

  if(!nextPage){
    console.error("Page not found:", pageId);
    return;
  }

  if(currentPage){
    if(currentPage.id !== pageId){
      pageHistory.push(currentPage.id);
    }
    currentPage.classList.remove("active");
  }

  nextPage.classList.add("active");
}

function goBack(){

  if(pageHistory.length === 0) return;

  const currentPage = document.querySelector(".page.active");
  currentPage.classList.remove("active");

  const previousPage = document.getElementById(pageHistory.pop());
  previousPage.classList.add("active");
}

function loginUser(){

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if(!email || !password){
    alert("Please enter email and password");
    return;
  }

  goToPage("dashboardPage");
}

function signupUser(){

  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if(!email || !password){
    alert("Please enter email and password");
    return;
  }

  alert("Account created successfully!");
  goToPage("dashboardPage");
}

// =========================
// REMINDER TIMER
// =========================

let timer;
let totalSeconds = 25 * 60;
let selectedMinutes = 25;

// SET PRESET TIME

function setTime(minutes){

  selectedMinutes = minutes;
  totalSeconds = minutes * 60;

  updateDisplay();
}

// CUSTOM TIME

function customTime(){

  const userMinutes =
    prompt("Enter custom time in minutes");

  if(userMinutes && !isNaN(userMinutes)){

    selectedMinutes = parseInt(userMinutes);

    totalSeconds = selectedMinutes * 60;

    updateDisplay();
  }
}

// UPDATE DISPLAY

function updateDisplay(){

  const minutes =
    Math.floor(totalSeconds / 60);

  const seconds =
    totalSeconds % 60;

  document.getElementById("timerDisplay").innerText =
  ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};
}

// START TIMER

function startTimer(){

  clearInterval(timer);

  timer = setInterval(() => {

    if(totalSeconds <= 0){

      clearInterval(timer);

      alert("Time's up! Take a break.");

      return;
    }

    totalSeconds--;

    updateDisplay();

  }, 1000);
}

// STOP TIMER

function stopTimer(){

  clearInterval(timer);
}

// RESET TIMER

function resetTimer(){

  clearInterval(timer);

  totalSeconds = selectedMinutes * 60;

  updateDisplay();
}

// INITIAL DISPLAY

updateDisplay();