import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    next();
  });

type Task = {
    id: number;
    title: string;
    description: string;
}

let tasks: Array<Task> = [{
    id: 1,
    title: 'Learn React',
    description: 'Learn how to use React in building web app.'
  },
  {
    id: 2,
    title: 'Learn Array Manipulation',
    description: 'Learn how to manipulate arrays in Javascript.'
  },
  {
    id: 3,
    title: 'Learn Node.js',
    description: 'Learn how to use Node in building server.'
  }]

  
// Create a new task
app.post('/tasks', (req: Request, res: Response) => {
  const { title, description } = req.body;
  const id = tasks.length + 1;
  tasks.push({ id, title, description });
  res.status(201).json({ id, title, description });
});

// Read all tasks
app.get('/tasks', (req: Request, res: Response) => {
  res.json(tasks);
});

// Search for a task with a key
app.get('/tasks/:key', (req: Request, res: Response)=>{
    const key = req.params.key.toLowerCase()
    const filteredTasks = tasks.filter(task=> {
        return(task.description.toLowerCase().includes(key) || task.title.toLowerCase().includes(key))
        }
    )
    res.json(filteredTasks)
})

// Update a specific task by ID
app.put('/tasks/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks[index] = { id, title, description };
    res.json(tasks[index]);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Delete a specific task by ID
app.delete('/tasks/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1)[0];
    res.json(deletedTask);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
