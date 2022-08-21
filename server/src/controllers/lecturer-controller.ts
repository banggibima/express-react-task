import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

prisma = new PrismaClient();

const index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.lecturer.findMany();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
};

const create = async (req: Request, res: Response) => {
  const { nidn, name } = req.body;

  try {
    const data = await prisma.lecturer.create({
      data: {
        nidn: String(nidn),
        name: String(name),
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
    const data = await prisma.lecturer.findUnique({
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
  const { nidn, name } = req.body;

  try {
    const data = await prisma.lecturer.update({
      where: {
        id: String(id),
      },
      data: {
        nidn: String(nidn),
        name: String(name),
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
    const data = await prisma.lecturer.delete({
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
