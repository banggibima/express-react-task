import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();

const index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.subject.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req: Request, res: Response) => {
  const { code, name, sks, lecturer } = req.body;

  try {
    const data = await prisma.subject.create({
      data: {
        code: String(code),
        name: String(name),
        sks: String(sks),
        lecturer: String(lecturer),
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
    const data = await prisma.subject.findUnique({
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
  const { code, name, sks, lecturer } = req.body;

  try {
    const data = await prisma.subject.update({
      where: {
        id: String(id),
      },
      data: {
        code: String(code),
        name: String(name),
        sks: String(sks),
        lecturer: String(lecturer),
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
    const data = await prisma.subject.delete({
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
