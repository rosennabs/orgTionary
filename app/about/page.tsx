"use client";

function About() {


  return (
    <div className="bg-white font-medium text-gray-600 p-20">
    
      <div className='flex items-center justify-around'>
        <img className="w-[500px]" src="/about.png" alt="image of books" />

        <div className='w-2/5'>
          <h1>About us</h1>
          <p>Duis feugiat venenatis maximus. Curabitur arcu enim, imperdiet nec nisi nec, sagittis congue ligula. Maecenas egestas pulvinar diam vel egestas. Praesent aliquam egestas ullamcorper. Mauris luctus viverra tellus a maximus. Nullam et molestie nibh. Vestibulum eget laoreet lectus. </p>
        </div>

      </div>
      
      <div className=''>
        <h1 className='mb-4'>How it works</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna orci. Ut laoreet, tortor pulvinar dapibus suscipit, turpis nisl interdum libero, non commodo elit ex vitae magna. Cras et bibendum justo. Integer faucibus eros quam, vel egestas erat lobortis congue. Sed accumsan odio enim, sit amet vehicula ante elementum et. Morbi ullamcorper pharetra convallis. Mauris ac ultricies nisl, vitae fermentum lacus. Pellentesque scelerisque nibh quis turpis rutrum dapibus. Duis ut finibus nibh. Maecenas mattis, massa eu ultrices tincidunt, orci magna eleifend justo, malesuada imperdiet enim elit vehicula ante. Nam et urna viverra, mollis odio sed, maximus leo. Praesent accumsan ipsum elit, fringilla interdum nunc rhoncus et.</p>
      </div>
      

      <div className='flex items-center justify-around'>
        

        <div className='w-2/5'>
          <h1>Build with us</h1>
          <p>Duis feugiat venenatis maximus. Curabitur arcu enim, imperdiet nec nisi nec, sagittis congue ligula. Maecenas egestas pulvinar diam vel egestas. Praesent aliquam egestas ullamcorper. Mauris luctus viverra tellus a maximus. Nullam et molestie nibh. Vestibulum eget laoreet lectus. </p>
        </div>

        <img className="w-[500px]" src="/about_us.png" alt="" />

      </div>
    </div>
  );
}

export default About;