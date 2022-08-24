import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  [tasks: string]: any;
  deleteTask: (id: any) => void;
}

const TableTask: FC<Props> = ({ tasks, deleteTask }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <table className="min-w-full divide-y">
                {tasks.length > 0 ? (
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Student
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Deadline Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Submission Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Action</span>
                      </th>
                    </tr>
                  </thead>
                ) : (
                  <></>
                )}
                <tbody className="divide-y">
                  {tasks.length > 0 ? (
                    tasks.map((task: any) => (
                      <tr key={task.id}>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {task.student}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {task.subject}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {task.deadline_date}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {task.submission_date}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          <span
                            className={`inline-flex rounded px-2 font-medium text-xs leading-5 ${
                              task.status === 'Finished'
                                ? 'border text-sky-600 border-sky-600'
                                : 'border'
                            }`}
                          >
                            {task.status === 'Finished'
                              ? 'Finished'
                              : 'Unfinished'}
                          </span>
                        </td>
                        <td className="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-xs sm:pr-6">
                          <Link
                            to={`/task/info/${task.id}`}
                            className="ml-1 px-2 py-1 rounded border text-xs font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent"
                          >
                            Info
                          </Link>
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="ml-1 px-2 py-1 rounded border text-xs font-medium hover:text-rose-600 hover:border-rose-600 focus:outline-none focus:ring-transparent"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-700">
                        Empty tasks data
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableTask;
