import { Router, request, response, Request, Response} from 'express'
import { getTasks, saveTask, getTask, updateTask, deleteTask, finishedTask } from './controller/TaskController';
import { getProblems, getProblem, saveProblem, updateProblem, deleteProblem } from './controller/ProblemController';

const routes = Router()
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello Turma 007!' })
})
routes.get('/tasks', getTasks)
routes.post('/tasks', saveTask)
routes.get('/tasks/:id', getTask)
routes.put('/tasks/:id', updateTask)
routes.delete('/tasks/:id', deleteTask)
routes.patch('/tasks/:id', finishedTask)

routes.get('/problems', getProblems)
routes.post('/problems', saveProblem)
routes.get('/problems/:id', getProblem)
routes.put('/problems/:id', updateProblem)
routes.delete('/problems/:id', deleteProblem)

export default routes