// FORM VALIDATION
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // stop form from refreshing the page

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert("Please fill all the fields!");
    return;
  }

  // Simple email format check
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById('contactForm').reset();
});

// TO-DO LIST
document.getElementById('addTask').addEventListener('click', function() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();

  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement('li');
  li.textContent = taskText;

  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = "";
});
