function TableRow({ icon: Icon, title, description }) {
  return (
    <>
      <div className="grid grid-cols-4 p-4 border-b border-[#E0E0E0]">
        <div className="col-span-1 flex justify-start items-center  ">
          <Icon className="mr-4 text-2xl " />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="col-span-3">
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </>
  );
}

export default TableRow;
