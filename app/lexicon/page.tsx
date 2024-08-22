import Link from 'next/link';

function Lexicon() {

  const data = [
    {
      word: "Patient",
      definition: "A sick individual who needs care.",
      example: "Individuals in long term care homes."
    },
    {
      word: "Caregiver",
      definition: "A individual who takes care of a patient.",
      example: "A wife can be a caregiver to her sick husband."
    },
    {
      word: "Innovation",
      definition: "A novel idea to improve the healthcare system of an institution.",
      example: "Improvement projects tailored towards implementing virtual care."
    }
  ]
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