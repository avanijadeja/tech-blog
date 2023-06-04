// edit and delete post javascript file
// for particular post get first postid from hidden input field.
const postId = document.querySelector('input[name="post-id"]').value;
const editFormHandler = async (event) => {
  event.preventDefault();
  // using queryselector get post-title and content
  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector(
    'textarea[name="post-body"]'
  ).value;

  // fetch particular post using postid
  const response = await fetch(`/api/post/${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      postTitle,
      postContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    // if response ok then redirect to user dashboard page.
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update your post");
  }
  // if response ok then redirect to user dashboard page.
  document.location.replace("/dashboard");
};

// fetch postid and delete method delete particular post
const deleteClickHandler = async () => {
  await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });
  // after delete post redirect to user dashboard page /dashboard.
  document.location.replace("/dashboard");
};
// Eventlistner fot editPostForm.
document
  .querySelector("#editPost-form")
  .addEventListener("submit", editFormHandler);
// Eventlistner for delete button.
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteClickHandler);
