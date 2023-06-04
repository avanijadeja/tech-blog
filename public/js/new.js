// javascript file for new post
const newFormHandler = async function (event) {
  event.preventDefault();
  // using queryselector method get values of posttiltle and textarea stored in postTitle and postContent
  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector(
    'textarea[name="post-body"]'
  ).value;
  // using api/post routes created new post
  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: { "Content-Type": "application/json" },
  });
  alert("New Data is created");
  // after creating new post redirect page to user /dashboard
  document.location.replace("/dashboard");
};
// Eventlistner for newPost-form
document
  .querySelector("#newPost-form")
  .addEventListener("submit", newFormHandler);
