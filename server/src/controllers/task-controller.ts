import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();

const index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.task.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req: Request, res: Response) => {
  const {
    student,
    subject,
    title,
    description,
    deadline_date,
    submission_date,
    submission_place,
    status,
  } = req.body;

  try {
    const data = await prisma.task.create({
      data: {
        student: String(student),
        subject: String(subject),
        title: String(title),
        description: String(description),
        deadline_date: String(deadline_date),
        submission_date: String(submission_date),
        submission_place: String(submission_place),
        status: String(status),
      },
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const show = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.task.findUnique({
      where: {
        id: String(id),
      },
    });
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    student,
    subject,
    title,
    description,
    deadline_date,
    submission_date,
    submission_place,
    status,
  } = req.body;

  try {
    const data = await prisma.task.update({
      where: {
        id: String(id),
      },
      data: {
        student: String(student),
        subject: String(subject),
        title: String(title),
        description: String(description),
        deadline_date: String(deadline_date),
        submission_date: String(submission_date),
        submission_place: String(submission_place),
        status: String(status),
      },
    });
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await prisma.task.delete({
      where: {
        id: String(id),
      },
    });
    res.status(204).json(data);
  } catch (err) {
    console.error(err);
  }
};

export { index, create, show, update, destroy };
