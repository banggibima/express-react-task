import { FC } from 'react';

const SearchLecturer: FC = () => {
  return (
    <>
      <div className="mt-4">
        <label htmlFor="search" className="block text-xs font-medium">
          Search Lecturer Data
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="mt-1 block w-full text-sm border-gray-200 focus:ring-transparent focus:border-gray-200 rounded"
        />
      </div>
    </>
  );
};

export default SearchLecturer;
