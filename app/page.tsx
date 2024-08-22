
import { FaSearch } from 'react-icons/fa';


export default function Home() {
  return (
    <main className='flex flex-col my-32'>
      
      <div className='flex-grow flex flex-col items-center justify-center'>
        <h1 className='mb-8 text-white'>What would you like to find?</h1>
        <div className='relative flex items-center justify-center'>
          <input className='bg-white px-4 py-3 rounded-3xl w-[800px]' type='text' placeholder='Search here' />
          <FaSearch className='absolute right-4 ' />
        </div>

      </div>
      
      
    </main>
  );
}