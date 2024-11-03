import Image from "next/image";

function ExploreCard({ src, title, description, onClick }) {
  return (
    <>
      <div className="flex-none w-48 relative cursor-pointer" onClick={onClick}>
        <Image
          className="object-cover  h-32 rounded-lg"
          src={src}
          alt={title}
          width={170}
          height={136}
        />
        <div className="mt-2">
          <h3 className="font-semibold text-base">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ExploreCard;
