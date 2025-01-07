// Select DOM elements
const blogForm = document.getElementById("blog-form");
const blogTitleInput = document.getElementById("blog-title");
const blogContentInput = document.getElementById("blog-content");
const blogsContainer = document.getElementById("blogs");

let blogs = [];

// Render blogs to the DOM
function renderBlogs() {
  blogsContainer.innerHTML = "";
  blogs.forEach((blog, index) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");

    blogCard.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
            <div class="actions">
                <button class="edit" onclick="editBlog(${index})">Edit</button>
                <button class="delete" onclick="deleteBlog(${index})">Delete</button>
            </div>
        `;

    blogsContainer.appendChild(blogCard);
  });
}

// Add a new blog
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = blogTitleInput.value.trim();
  const content = blogContentInput.value.trim();

  if (title && content) {
    blogs.push({ title, content });
    blogTitleInput.value = "";
    blogContentInput.value = "";
    renderBlogs();
  } else {
    alert("Both title and content are required!");
  }
});

// Edit a blog
function editBlog(index) {
  const newTitle = prompt("Edit Blog Title:", blogs[index].title);
  const newContent = prompt("Edit Blog Content:", blogs[index].content);

  if (newTitle !== null && newContent !== null) {
    blogs[index].title = newTitle;
    blogs[index].content = newContent;
    renderBlogs();
  }
}

// Delete a blog
function deleteBlog(index) {
  if (confirm("Are you sure you want to delete this blog?")) {
    blogs.splice(index, 1);
    renderBlogs();
  }
}

// Initial render
renderBlogs();
