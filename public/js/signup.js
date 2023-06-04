// signup js file.

const signupFormHandler = async function (event) {
  event.preventDefault();
  // get userName and password from signup form.
  const userName = document.querySelector("#userNameSignup").value.trim();
  const password = document.querySelector("#passwordSignup").value.trim();
  if (userName && password) {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({
        userName,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //if response is ok then redirect page to /dashboard - user dashboard
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to signup!");
    }
  }
};
// eventlistner for loginform on submit
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
