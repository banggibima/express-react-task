import { FC } from 'react';

interface Props {
  subject: {
    code: string;
    name: string;
    sks: string;
    lecturer: string;
  };
  [lecturers: string]: any;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
}

const AddSubject: FC<Props> = ({
  subject,
  lecturers,
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
                        htmlFor="code"
                        className="block text-xs font-medium"
                      >
                        Code
                      </label>
                      <input
                        type="text"
                        id="code"
                        name="code"
                        value={subject.code}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-100 focus:ring-transparent focus:border-gray-100 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={subject.name}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-100 focus:ring-transparent focus:border-gray-100 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="sks"
                        className="block text-xs font-medium"
                      >
                        SKS
                      </label>
                      <input
                        type="text"
                        id="sks"
                        name="sks"
                        value={subject.sks}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-100 focus:ring-transparent focus:border-gray-100 rounded"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lecturer"
                        className="block text-xs font-medium"
                      >
                        Lecturer
                      </label>
                      <select
                        id="lecturer"
                        name="lecturer"
                        value={subject.lecturer}
                        onChange={handleChange}
                        className="mt-1 block w-full text-sm border-gray-100 focus:ring-transparent focus:border-gray-100 rounded"
                      >
                        <option>Select</option>
                        {lecturers.map((lecturer: any) => (
                          <option key={lecturer.id} value={lecturer.name}>
                            {lecturer.name}
                          </option>
                        ))}
                        <option value={'Other'}>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-md border text-sm font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
                  >
                    Save Changes
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

export default AddSubject;
