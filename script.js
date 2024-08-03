const tasks = [];

function loadformdb()
{
    const alltask =JSON.parse(localStorage.getItem("alltask"));

    if(tasks){
        tasks.push(...alltask)
    }

    loadtask();
}

loadformdb()


function loadtask()
{
    localStorage.setItem('alltask',JSON.stringify(tasks));
     
    const taskHolder = document.getElementById('task-holder');
    taskHolder.innerHTML=" "
    for(const task of tasks)
    {
        // console.log(task)
        taskHolder.innerHTML +=`
        <div class="task-div">
            ${task}
            <button class="btn" onclick="deletetask('${task}')">Completed</button>
        </div>
        `
    }
}

function deletetask(task)
{
    const workIndex = tasks.indexOf(task);
    tasks.splice(workIndex,1);

    loadtask();
}

function addTask()
{
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value;
    if(!task){
        alert("Enter Task First");
        return
    }

    tasks.push(task);
    taskInput.value=" ";
    loadtask()
}

