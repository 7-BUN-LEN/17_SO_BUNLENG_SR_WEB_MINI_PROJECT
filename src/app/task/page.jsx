import { getAllTaskService } from "@/service/task.service";

const TaskPage = async () => {
  const taskData = await getAllTaskService();
  return (
    <main>
      <h1>Task Page</h1>
      {taskData?.payload?.map((task) => (
        <div>
          <div>{task.taskName}</div>
          <div>{task.description}</div>
        </div>
      ))}
    </main>
  );
};

export default TaskPage;
