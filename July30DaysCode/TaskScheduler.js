/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  var taskMap = {};
  var tasklastExecAt = {};
  var totalTaskExecuted = 0;
  var queue = [];
  var executeOrder = [];
  var timeUnits = 0;
  tasks.forEach((task) => {
    if (!taskMap[task]) {
      taskMap[task] = [];
      queue.push(task);
    }
    taskMap[task].push(task);
  });

  while (tasks.length > totalTaskExecuted) {
    const element = queue.shift();
    tasklastExecAt[element] = timeUnits;
    executeOrder.push(element);
    totalTaskExecuted++;
    timeUnits++;

    Object.keys(tasklastExecAt).forEach((task) => {
      const lastExecAt = tasklastExecAt[task];
      if (lastExecAt + n < timeUnits) {
        queue.push(task);
      }
    });
    if (queue.length === 0 && totalTaskExecuted < tasks.length) {
      executeOrder.push('ideal');
      timeUnits++;
      Object.keys(tasklastExecAt).forEach((task) => {
        const lastExecAt = tasklastExecAt[task];
        if (lastExecAt + n < timeUnits) {
          queue.push(task);
        }
      });
    }
  }
  console.log(executeOrder, timeUnits);
};

leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2);
