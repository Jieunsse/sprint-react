import { useState } from 'react';
import { Dropdown } from '@src/components/dropdown/base/Dropdown';
import SearchBar from '@src/components/input/searchBar/SearchBar';

const options = [
  { label: '최신순', value: '1' },
  { label: '좋아요순', value: '2' },
];

export default function Test() {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-6">
        <SearchBar />
        <Dropdown
          options={options}
          value={selected}
          placeholder="최신순"
          onSelect={(value) => setSelected(value)}
        />
      </div>
    </div>
  );
}
