window.addEventListener('DOMcontentLoaded', function() {
    
    var todos = [];
    
    var todosList = document.querySelector('#todosList');
    var todosSummary = document.querySelector('#todosSummary');
    var newTaskInput = document.querySelector('#newTask');
    var addTaskButton = document.querySelector('#addTask');
    
    newTaskInput.addEventListener('keydown', function(event) {
        var key = event.which || event.keyCode;
        if (key === 13) {
            newTaskButton.click();
        }
    });
    
    newTaskButton.addEventListener('click', function() {
        var newTask = readTask();
        var template = getTodosTemplate(newTask);
        var todosDomElement = document.createElement('li');
        
        todos.push(newTask);
        todosDomElement.innerHTML = template;
        todosList.appendChild(todosDomElement);
    });
});
