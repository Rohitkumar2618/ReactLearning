import React from 'react';

const Card = () => {
  const data = [
    { image: "https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Google", description: "lorem1" },
    { image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Google", description: "lorem1" },
    { image: "https://images.unsplash.com/photo-1654573817889-296cad084c97?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Google", description: "lorem1" },
  ];

  return (

    // !  Hamne  data  me jo informations hai  usko map kiya  or  elem.____ me jo likha tha uske hisab se show kiya page pe
    <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-100'>


      {/* !! Mapping start kro  */}
      {data.map((elem, index) => (
        <div key={index} className='w-52 bg-zinc-300 rounded-md overflow-hidden'>

          <div className='w-full h-32 bg-zinc-300'>
            {/* yaha se usko pass kiys image ko */}
            <img src={elem.image} alt="Product" className="w-full h-full object-cover" />
          </div>
          <div className='font-semibold w-full px-3 py-4'>
            {/* Name ko */}
            <h2 className='font-semibold'>{elem.name}</h2>

            {/* Description ko  */}
            <p className='text-sm mt-3'>{elem.description}</p>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Card;
