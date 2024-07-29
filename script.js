const tasks = ['hi','by','goo','sleep'];

function loadformdb()
{
    const tasks =JSON.parse(localStorage.getItem("alltask"));

    if(tasks){
        tasks.push(...tasks)
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

