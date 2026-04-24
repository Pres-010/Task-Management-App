function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');

      const textSpan = document.createElement('span');
      textSpan.textContent = taskText;

      taskDiv.onclick = function() {
        this.classList.toggle('completed');
        Taskcheckbox.checked = this.classList.contains('completed');
      };

      deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.type = 'button';

      deleteButton.onclick = function(e) {
        e.stopPropagation();
        this.parentElement.remove();
      };

      Taskcheckbox = document.createElement('input');
      Taskcheckbox.type = 'checkbox';

      Taskcheckbox.onclick = function(e) {
        e.stopPropagation();
        taskDiv.classList.toggle('completed');
        this.checked = taskDiv.classList.contains('completed');
      };

      taskDiv.appendChild(Taskcheckbox);
      taskDiv.appendChild(textSpan);
      taskDiv.appendChild(deleteButton);

      document.getElementById('taskdiv').appendChild(taskDiv);

      taskInput.value = '';
      taskInput.focus();
    }