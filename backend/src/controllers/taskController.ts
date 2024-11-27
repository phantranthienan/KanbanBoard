import { Request, Response } from "express";
import * as taskService from "../services/taskService";

/**
 * Create a new task in a specific section.
 * @route POST /boards/:boardId/sections/:sectionId/tasks
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 */
export const createTask = async (req: Request, res: Response) => {
    const { sectionId } = req.params; 
    const taskData = req.body; 
    const newTask = await taskService.createNewTask({ ...taskData, section: sectionId });
    res.status(201).json(newTask);
};

/**
 * Get a specific task by its ID.
 * @route GET /boards/:boardId/sections/:sectionId/tasks/:taskId
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 */
export const getTaskById = async (req: Request, res: Response) => {
    const { taskId } = req.params; 
    const task = await taskService.getTask(taskId);
    res.status(200).json(task);
};

/**
 * Update a task by its ID.
 * @route PUT /boards/:boardId/sections/:sectionId/tasks/:taskId
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 */
export const updateTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    const updatedTask = await taskService.updateTask(taskId, req.body); 
    res.status(200).json(updatedTask);
};

/**
 * Delete a task by its ID.
 * @route DELETE /boards/:boardId/sections/:sectionId/tasks/:taskId
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 */
export const deleteTask = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    await taskService.deleteTask(taskId); 
    res.status(204).send(); 
};
