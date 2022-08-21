import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  [lecturers: string]: any;
  deleteLecturer: (id: any) => void;
}

const TableLecturer: FC<Props> = ({ lecturers, deleteLecturer }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <table className="min-w-full divide-y">
                {lecturers.length > 0 ? (
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        NIDN
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-medium"
                      >
                        Lecturer
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
                  {lecturers.length > 0 ? (
                    lecturers.map((lecturer: any) => (
                      <tr key={lecturer.id}>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {lecturer.nidn}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm">
                          {lecturer.name}
                        </td>
                        <td className="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-xs sm:pr-6">
                          <Link
                            to={`/lecturer/info/${lecturer.id}`}
                            className="ml-1 px-2 py-1 rounded border text-xs font-medium hover:text-sky-600 hover:border-sky-600 focus:outline-none focus:ring-transparent"
                          >
                            Info
                          </Link>
                          <button
                            onClick={() => deleteLecturer(lecturer.id)}
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
                        Empty lecturers data
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

export default TableLecturer;
