function Places({ name, propertyCount }) {
  return (
    <>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-600">
          {propertyCount.toLocaleString()} properties
        </p>
      </div>
    </>
  );
}

export default Places;
