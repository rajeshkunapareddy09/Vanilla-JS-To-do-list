document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    
    // Add task function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create new task item
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.addEventListener('change', toggleTaskComplete);
        
        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.className = 'task-text';
        taskSpan.textContent = taskText;
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);
        
        // Append elements to task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);
        
        // Add task to list
        taskList.appendChild(taskItem);
        
        // Clear input
        taskInput.value = '';
    }
    
    // Toggle task completion
    function toggleTaskComplete(event) {
        const taskItem = event.target.parentElement;
        const taskText = taskItem.querySelector('.task-text');
        taskText.classList.toggle('completed');
    }
    
    // Delete task
    function deleteTask(event) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
    
    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    
    // Allow adding task with Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});