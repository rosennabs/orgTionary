
function WordDetailsPage({ params }) {
  //console.log(params); //This outputs {word : "Patient"} depending on which word is clicked on. With the params feature from next.js, we can fetch data related to params.word i.e patient from the database to display information related to the word on this page.
  
  return (
    <div>
      <h1>{params.word}</h1> 
    </div>
  );
}

export default WordDetailsPage;