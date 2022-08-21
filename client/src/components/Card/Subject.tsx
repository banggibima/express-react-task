import { FC } from 'react';

interface Props {
  subject: {
    code: string;
    name: string;
    sks: string;
    lecturer: string;
  };
}

const CardSubject: FC<Props> = ({ subject }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <div className="px-4 py-4 sm:px-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Code</p>
                    <p className="mt-1 text-sm">{subject.code}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Subject</p>
                    <p className="mt-1 text-sm">{subject.name}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">SKS</p>
                    <p className="mt-1 text-sm">{subject.sks}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Lecturer</p>
                    <p className="mt-1 text-sm">{subject.lecturer}</p>
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

export default CardSubject;
