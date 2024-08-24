import Link from 'next/link';
import { data } from '@/helpers/data';

function Lexicon() {

  
  return (
    <div className='bg-amber-700'>
      <h1>Lexicon</h1>
      {data.map((data) => (
        <p>
          <Link href={`/lexicon/${data.word}`}> {data.word} </Link>
        </p>
      ))}
        
    
    </div>
  );
}

export default Lexicon;