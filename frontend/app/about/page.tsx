"use client";

function About() {


  return (
    <div className="relative font-medium text-gray-600 p-20">
    
      {/* About Us */}
      <div className='flex flex-col md:flex-row  items-center justify-around gap-4'>
        <img className="max-md:hidden max-lg:h-[30vh] lg:h-[50vh]" src="/about.png" alt="image of books" />

        <img className="md:hidden absolute inset-0 h-[50vh] w-full object-scale-down -z-10 sm:flex items-center opacity-10" src="/about.png" alt="image of books" />

        <div className='lg:w-3/4 text-center'>
          <h1>About us</h1>
          <p>Duis feugiat venenatis maximus. Curabitur arcu enim, imperdiet nec nisi nec, sagittis congue ligula. Maecenas egestas pulvinar diam vel egestas. Praesent aliquam egestas ullamcorper. Mauris luctus viverra tellus a maximus. Nullam et molestie nibh. Vestibulum eget laoreet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna orci. Ut laoreet, tortor pulvinar dapibus suscipit, turpis nisl interdum libero, non commodo elit ex vitae magna. Cras et bibendum justo. Integer faucibus eros quam, vel egestas erat lobortis congue. Sed accumsan odio enim, sit amet vehicula ante elementum et. </p>
        </div>

      </div>
      
      {/* How it works */}
      <div className='mt-12 text-center'>
        <h1 className='mb-4'>How it works</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a urna orci. Ut laoreet, tortor pulvinar dapibus suscipit, turpis nisl interdum libero, non commodo elit ex vitae magna. Cras et bibendum justo. Integer faucibus eros quam, vel egestas erat lobortis congue. Sed accumsan odio enim, sit amet vehicula ante elementum et. Morbi ullamcorper pharetra convallis. Mauris ac ultricies nisl, vitae fermentum lacus. Pellentesque scelerisque nibh quis turpis rutrum dapibus. Duis ut finibus nibh. Maecenas mattis, massa eu ultrices tincidunt, orci magna eleifend justo, malesuada imperdiet enim elit vehicula ante. Nam et urna viverra, mollis odio sed, maximus leo. Praesent accumsan ipsum elit, fringilla interdum nunc rhoncus et.</p>
      </div>
      

      {/* Build with us */}
      <div className='flex flex-col md:flex-row items-center justify-around gap-4 mt-12'>
        
        <img className="max-md:hidden max-lg:h-[30vh] lg:h-[50vh]" src="/about_us.png" alt="" />
        
        <img className="md:hidden absolute bottom-0 h-[50vh] w-full object-scale-down -z-10 sm:flex items-center opacity-10" src="/about_us.png" alt="" />

        <div className='lg:w-3/4 text-center'>
          <h1>Build with us</h1>
          <p>Duis feugiat venenatis maximus. Curabitur arcu enim, imperdiet nec nisi nec, sagittis congue ligula. Maecenas egestas pulvinar diam vel egestas. Praesent aliquam egestas ullamcorper. Mauris luctus viverra tellus a maximus. Nullam et molestie nibh. Vestibulum eget laoreet lectus. Maecenas mattis, massa eu ultrices tincidunt, orci magna eleifend justo, malesuada imperdiet enim elit vehicula ante. Nam et urna viverra, mollis odio sed, maximus leo. Praesent accumsan ipsum elit, fringilla interdum nunc rhoncus et.</p>
        </div>

       

      </div>
    </div>
  );
}

export default About;