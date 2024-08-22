import Link from 'next/link';

function Lexicon() {

  const data = ['patients', 'leaders', 'sustainability', 'innovations', 'partners', 'relationships'];

  return (
    <div className='bg-amber-700'>
      <h1>Lexicon</h1>
      {data.map((word) => (
        <p>
          <Link href={`/lexicon/${word}`}> {word} </Link>
        </p>
      ))}
        
    
    </div>
  );
}

export default Lexicon;