function Heading({ title, description }) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-1">{title}</h1>
      <p className="text-base text-gray-500">{description}</p>
    </>
  );
}

export default Heading;
