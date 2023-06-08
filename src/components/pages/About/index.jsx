export const About = () => {
  return (
    <section className="h-screen px-20 md:flex bg-[#09644E]  md:px-20 py-2 items-center">
        <div className="md:w-1/2 px-10  py-10 items-start   ">
            <h1 className="text-left text-4xl font-semibold text-white mb-6"> Uniting ASEAN's Youth for a Better Tomorrow</h1>
            <p className="text-left text-white font-normal mb-6"> The ASEAN Youth Forum (AYF) is a platform for young people across the ASEAN region to connect, engage, 
                and collaborate towards a brighter future. Our mission is to empower the youth of ASEAN to take an active role in shaping their 
                communities and countries, and to work together towards sustainable development, peace, and prosperity for all.
            </p>
            <button className="w-[300px] rounded-xl bg-green-600 p-2 text-gray-200 hover:bg-blue-500 hover:text-gray-100">Login</button>

            
        </div>
        <div className="mx-auto justify-center"><img src="/WhatsApp Image 2023-03-21 at 00.43.42 (1).jpg" className="relative w-[350px] h-[350px] overflow-hidden md:flex w-1/2 i justify-around items-center hidden rounded"/></div>
      </section>
  );
};
