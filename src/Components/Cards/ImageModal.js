import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function ImageModal({ images, onClose }) {
  const locale = useLocale();
  unstable_setRequestLocale(locale);
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-8 rounded-lg max-w-6xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        <button
          className="absolute top-4 right-4 text-white text-lg bg-red-600 rounded-md py-1 px-4 hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              width={150}
              height={200}
              className="object-cover w-full h-full"
              quality={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
