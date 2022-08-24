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
  [key: string]: any;
  students: any;
  subjects: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const AddTask: FC<Props> = ({
  task,
  students,
  subjects,
  handleChange,
  handleSubmit,
}) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <form onSubmit={handleSubmit}>
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="student"
                        className="block text-xs font-medium"
                      >
                        Student
                      </label>
                      <select
                        id="student"
                        name="student"
                        value={task.student}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      >
                        <option>Select</option>
                        {students.map((student: any) => (
                          <option key={student.id} value={student.name}>
                            {student.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="subject"
                        className="block text-xs font-medium"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={task.subject}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      >
                        <option>Select</option>
                        {subjects.map((subject: any) => (
                          <option key={subject.id} value={subject.name}>
                            {subject.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block text-xs font-medium"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="description"
                        className="block text-xs font-medium"
                      >
                        Description
                      </label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="deadline_date"
                        className="block text-xs font-medium"
                      >
                        Deadline Date
                      </label>
                      <input
                        type="datetime-local"
                        id="deadline_date"
                        name="deadline_date"
                        value={task.deadline_date}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="submission_date"
                        className="block text-xs font-medium"
                      >
                        Submission Date
                      </label>
                      <input
                        type="datetime-local"
                        id="submission_date"
                        name="submission_date"
                        value={task.submission_date}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="submission_place"
                        className="block text-xs font-medium"
                      >
                        Submission Place
                      </label>
                      <input
                        type="text"
                        id="submission_place"
                        name="submission_place"
                        value={task.submission_place}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="status"
                        className="block text-xs font-medium"
                      >
                        Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={task.status}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
                      >
                        <option>Select</option>
                        <option value="Unfinished">Unfinished</option>
                        <option value="Finished">Finished</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-md border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
