"use client"
import { useEffect } from 'react';


function WordDetailsPage({ params }) {
  //console.log(params); //This outputs {word : "Patient"} depending on which word is clicked on. With the params feature from next.js, we can fetch data related to params.word i.e patient from the database to display information related to the word on this page.
  const { word } = params;

  useEffect(() => {
    // Prevent scrolling on the underlying page when component mounts
    document.body.style.overflow = 'hidden';
    
    // Add dark overlay to the homepage
    const overlay = document.createElement('div');
    overlay.id = 'dark-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    overlay.style.zIndex = '40';
    document.body.appendChild(overlay);

  

    // Clean up to re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
      document.body.removeChild(overlay);
    };
  }, []);
  
  return (
    <div className="fixed top-32 left-32 right-0 bottom-0 rounded-tl-xl bg-white z-50 overflow-y-auto">
      <div className='sticky top-0 bg-white py-4 px-20 border-b'>
        <h1>{word}</h1> 
      </div>
      
      <div className='px-20 py-8'>
  
      <p className='text-xl mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna orci. Ut laoreet, tortor pulvinar dapibus suscipit, turpis nisl interdum libero, non commodo elit ex vitae magna. Cras et bibendum justo. Integer faucibus eros quam, vel egestas erat lobortis congue. Sed accumsan odio enim, sit amet vehicula ante elementum et. Morbi ullamcorper pharetra convallis. Mauris ac ultricies nisl, vitae fermentum lacus. Pellentesque scelerisque nibh quis turpis rutrum dapibus. Duis ut finibus nibh. Maecenas mattis, massa eu ultrices tincidunt, orci magna eleifend justo, malesuada imperdiet enim elit vehicula ante. Nam et urna viverra, mollis odio sed, maximus leo. Praesent accumsan ipsum elit, fringilla interdum nunc rhoncus et.
      </p>
      <p className='text-xl mb-8'>
        Duis feugiat venenatis maximus. Curabitur arcu enim, imperdiet nec nisi nec, sagittis congue ligula. Maecenas egestas pulvinar diam vel egestas. Praesent aliquam egestas ullamcorper. Mauris luctus viverra tellus a maximus. Nullam et molestie nibh. Vestibulum eget laoreet lectus. Sed ut velit ex. Vestibulum velit nisl, pellentesque facilisis augue sit amet, sagittis dignissim sapien. Mauris diam urna, euismod vitae massa non, malesuada congue ex. In a quam quis sapien malesuada eleifend. Maecenas et lacus auctor, tincidunt odio sit amet, maximus quam.

        Integer suscipit dolor mauris, et tempus massa bibendum sit amet. Morbi ac neque nec leo eleifend accumsan. Cras molestie ante nisl, ac finibus libero sollicitudin consequat. Integer cursus consequat nisl ac porta. Vestibulum porttitor urna et volutpat semper. Mauris ultrices tincidunt dolor, ac lacinia libero. Duis et elit neque. Aenean eu augue rutrum, semper erat id, congue sem. Donec urna diam, dignissim id felis ac, egestas porttitor ex. Phasellus laoreet sem eget massa egestas hendrerit. Fusce sit amet posuere turpis, non aliquet neque. Nunc accumsan id leo ac molestie. Nulla facilisi. Suspendisse vel diam ut leo fermentum varius.
      </p>
      <p className='text-xl'>
        Phasellus tristique nisl lorem, id luctus sem blandit a. Nulla magna orci, interdum eu pellentesque a, tincidunt eget massa. Ut eu est ex. Sed et lorem lectus. Duis varius nunc vitae pellentesque gravida. Morbi lacus lectus, lacinia in ante a, consequat elementum mauris. Donec non sollicitudin diam, id efficitur sapien.

        Sed quis aliquam ex, accumsan sagittis neque. Nam a molestie lorem. Etiam id urna laoreet, vulputate lectus vitae, porta tellus. Ut finibus justo odio, eu porttitor risus fringilla vel. Vivamus laoreet enim tellus, non ullamcorper tellus semper in. Donec tempor lacus laoreet, condimentum ligula sit amet, tristique neque. Vestibulum eu fringilla quam. Sed tincidunt, justo nec vulputate finibus, lacus quam faucibus orci, eget lacinia nisi ligula eu turpis. Curabitur varius tellus aliquam urna pharetra, in aliquet mauris accumsan. Nulla porttitor ante congue ligula vehicula posuere. Vivamus ut lorem commodo nunc tempor consequat a sed lacus. Donec vel mollis enim, nec elementum nisi.

        </p>
      </div>
    </div>
  );
}

export default WordDetailsPage;