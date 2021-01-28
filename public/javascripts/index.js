window.addEventListener("load", (event) => {
  const deleteButtons = document.getElementsByClassName("delete-button");
  console.log(deleteButtons);
  for (button of deleteButtons) {
    button.addEventListener("click", async (event) => {
      const id = event.target.id;
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log(data);

      button.parentElement.remove();
    });
  }
});
