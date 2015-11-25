function readTask() {
    var newTaskInput = document.querySelector('#newTask');
    
    return {
        taskName: newTaskInput.value
    }
};
