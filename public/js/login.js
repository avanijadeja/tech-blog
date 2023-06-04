// login js file

const loginFormHandler = async function (event) {
  event.preventDefault();
  // get userName and password from login form.
  const userNameEl = document.querySelector("#userName-input-login");
  const passwordEl = document.querySelector("#passwordLogininput");

  const response = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      userName: userNameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  //if response is ok then redirect page to /dashboard - user dashboard
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to login");
  }
};
// eventlistner for loginform on submit
document
  .querySelector(".loginForm")
  .addEventListener("submit", loginFormHandler);
