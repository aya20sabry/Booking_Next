import Image from "next/image";

function Browse({ src, title, date, description }) {
  return (
    <>
      <div className="flex-none   relative">
        <Image
          className="object-cover w-72 h-52 rounded-lg"
          src={src}
          alt={title}
          width={270}
          height={210}
        />
        <div className="mt-2">
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Browse;
