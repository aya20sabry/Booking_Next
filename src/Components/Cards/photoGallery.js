"use client";

import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

function PhotoGallery({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex mb-2">
        <div className="flex flex-col mr-2">
          <Image
            src={images[0]}
            alt="Bedroom with ocean view"
            className="h-44 object-cover mb-2 cursor-pointer w-full"
            width={275}
            height={175}
            quality={100}
            priority
            onClick={() => openModal(0)}
          />
          <Image
            src={images[1]}
            alt="Bathroom"
            className="h-44 object-cover cursor-pointer"
            width={275}
            height={170}
            quality={100}
            onClick={() => openModal(1)}
          />
        </div>
        <div>
          <Image
            src={images[2]}
            alt="Marina view"
            className="big-photoGallery object-cover cursor-pointer"
            width={535}
            height={344}
            quality={100}
            priority
            onClick={() => openModal(2)}
          />
        </div>
      </div>

      <div className="flex">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="mr-2">
            <Image
              src={images[index + 3]}
              alt={`Room view ${index + 1}`}
              className="h-28 object-cover cursor-pointer"
              width={144}
              height={110}
              quality={100}
              onClick={() => openModal(index + 3)}
            />
          </div>
        ))}
        <div className="relative cursor-pointer" onClick={() => openModal(7)}>
          <Image
            src={images[7]}
            alt="Additional photos"
            className="h-28 object-cover w-full"
            width={210}
            height={110}
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold">
            <span>+{images.length - 8} more</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          images={images}
          selectedIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default PhotoGallery;
