// comment js file

// if user login get postid from hiddeninput field
const postId = document.querySelector('input[name="postId"]').value;
const commentFormHandler = async (event) => {
  event.preventDefault();
  const commentData = document.querySelector(
    'textarea[name="commentBody"]'
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
// Eventlistner for newCommentForm
document
  .querySelector("#newCommentForm")
  .addEventListener("submit", commentFormHandler);
