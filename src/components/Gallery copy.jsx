import photo01 from "../assets/image/photo-02.jpeg";
import photo03 from "../assets/image/photo-03.jpeg";
import photo04 from "../assets/image/photo-04.jpeg";

import photo05 from "../assets/image/photo-05.jpeg";
import photo06 from "../assets/image/photo-011.jpeg";
import photo07 from "../assets/image/photo-07.jpeg";
import photo08 from "../assets/image/photo-08.jpeg";
import photo09 from "../assets/image/photo-09.jpeg";
import photo010 from "../assets/image/photo-012.jpeg";


const Gallery = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">My Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo01}
              alt="Ahmed megahed"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white"> </h3>
                <p className="text-white"> </p>
              </div>
            </div>
          </div>
          {/* Two small items */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo03}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo04}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
          {/* Three medium items */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo05}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo06}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
          {/* bottom cards */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo07}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo08}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo09}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={photo010}
              alt="Ahmed megahed"
              className="w-full h-full  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 topacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">Project 001</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
     