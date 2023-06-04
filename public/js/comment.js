// comment js file

// if user login get postid from hiddeninput field
const postId = document.querySelector('input[name="post-id"]').value;
const commentFormHandler = async (event) => {
  event.preventDefault();
  const commentData = document.querySelector(
    'textarea[name="comment-body"]'
  ).value;
  // post data
  if (commentData) {
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        postId,
        commentData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};
// Eventlistner for new-comment-form
document
  .querySelector("#new-comment-form")
  .addEventListener("submit", commentFormHandler);
