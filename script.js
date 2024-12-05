const usernameInput = document.getElementById("username");
const submitButton = document.getElementById("submitButton");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const displayName = document.getElementById("displayName");
const startButton = document.getElementById("startButton");

// Event listener for submit button
submitButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  
  if (username === "") {
    alert("Please enter a username.");
    return;
  }

  // Display the second page with a welcome message
  displayName.textContent = username;
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
});

// Event listener for "Let's Start" button
startButton.addEventListener("click", () => {
  alert("Let's start the application!");
});
