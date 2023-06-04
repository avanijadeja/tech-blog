// logout js file

const logout = async function () {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  // If user press logout button redirect "/" home page
  if (response.ok) {
    document.location.replace("/");
    alert("logged out!");
  } else {
    alert("Failed to log out");
  }
};

// Eventlistner for logout
document.querySelector("#logout-link").addEventListener("click", logout);
