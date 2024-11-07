function TableRow({ icon: Icon, title, description }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 p-4 border-b border-[#E0E0E0]">
        <div className="col-span-1 flex justify-start items-center mb-2 md:mb-0">
          <Icon className="mx-2 md:mx-4 text-xl md:text-2xl" />
          <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        </div>
        <div className="col-span-1 md:col-span-3">
          <p className="text-xs md:text-sm">{description}</p>
        </div>
      </div>
    </>
  );
}

export default TableRow;
