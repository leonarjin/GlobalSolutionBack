import { AppDataSource } from "../data-source";
import { Problems } from '../entity/Problems';
import { Request, Response } from "express";
const repository = AppDataSource.getRepository(Problems);

export const getProblems = async (request: Request, response: Response) => {
    const problems = await repository.find();

    return response.json(problems);
};

export const saveProblem = async (request: Request, response: Response) => {
    const problem = await repository.save(request.body);

    return response.json(problem);
};

export const getProblem = async (request: Request, response: Response) => {
    const { id } = request.params
    const problem = await repository.findOneBy({ id: parseInt(id) });
    return response.json(problem);
};

export const updateProblem = async (request: Request, response: Response) => {
    const { id } = request.params
    const problem = await repository.update(id, request.body);

    if (problem.affected == 1) {
        const problemUpdated = await repository.findOneBy({ id: parseInt(id) });
        return response.json(problemUpdated);
    }
    else {
        return response.status(404).json({ message: 'Problema não encontrado!' })
    }
};

export const deleteProblem = async (request: Request, response: Response) => {
    const { id } = request.params
    const problem = await repository.delete(id);


    if (problem.affected == 1) {
        return response.status(200).json({ message: "Problema excluído com sucesso!" });
    }
    else {
        return response.status(404).json({ message: 'Problema não encontrado!' })
    }
};
export const finishedProblem = async(request: Request, response: Response) => {
    const {id} = request.params
 const problem = await repository.update(id, {
finished: true,
});

    if (problem.affected == 1){
 const problemFinished = await repository.findOneBy({ id: parseInt(id) });
        return response.json(problemFinished);
    }
    else{
        return response.status(404).json( {message: 'Problema não encontrado!'} )
    }
};