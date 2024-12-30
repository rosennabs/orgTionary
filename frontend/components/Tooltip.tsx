import React, {ReactNode} from 'react';

const Tooltip = ({ children }: { children: ReactNode; }) => {
  return (
    <div className='absolute bg-black text-white text-xs left-1/2 mt-2 top-full rounded transform -translate-x-1/2 py-1 px-2 hidden group-hover:block'>
      {children}
    </div>
  );
};

export default Tooltip;