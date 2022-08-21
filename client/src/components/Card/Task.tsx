import { FC } from 'react';

interface Props {
  task: {
    student: string;
    subject: string;
    title: string;
    description: string;
    deadline_date: string;
    submission_date: string;
    submission_place: string;
    status: string;
  };
}

const CardTask: FC<Props> = ({ task }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <div className="px-4 py-4 sm:px-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Student</p>
                    <p className="mt-1 text-sm">{task.student}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Subject</p>
                    <p className="mt-1 text-sm">{task.subject}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Title</p>
                    <p className="mt-1 text-sm">{task.title}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Description</p>
                    <p className="mt-1 text-sm">{task.description}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Deadline Date</p>
                    <p className="mt-1 text-sm">{task.deadline_date}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Submission Date</p>
                    <p className="mt-1 text-sm">{task.submission_date}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Submission Place</p>
                    <p className="mt-1 text-sm">{task.submission_place}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Status</p>
                    <p className="mt-1 text-sm">
                      <span
                        className={`inline-flex rounded px-2 font-medium text-xs leading-5 ${
                          task.status === 'Finished'
                            ? 'border text-sky-600 border-sky-600'
                            : 'border'
                        }`}
                      >
                        {task.status === 'Finished' ? 'Finished' : 'Unfinished'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTask;
