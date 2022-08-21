import { FC } from 'react';

interface Props {
  lecturer: {
    nidn: string;
    name: string;
  };
}

const CardLecturer: FC<Props> = ({ lecturer }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded">
              <div className="px-4 py-4 sm:px-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">NIDN</p>
                    <p className="mt-1 text-sm">{lecturer.nidn}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Lecturer</p>
                    <p className="mt-1 text-sm">{lecturer.name}</p>
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

export default CardLecturer;
