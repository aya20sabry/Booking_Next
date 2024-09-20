const Dropdown = ({ options, selected, onSelect, isOpen, onToggle }) => {
    const handleItemClick = (item) => {
      onSelect(item); // Update the selected option
      onToggle(); // Close the dropdown after selection
    };
  
    return (
      <div className="relative inline-block text-left pl-50">
        <button
          onClick={onToggle}
          className="px-4 py-2 rounded-lg focus:outline-none flex justify-between items-center"
        >
          {selected} <i className="fa-solid fa-angle-down"></i>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 border border-gray-200 rounded-lg shadow-lg z-50">
            <ul className="z-50">
              {options.map((option, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleItemClick(option)}
                    className={`block px-4 py-2 text-dark hover:bg-gray-100 w-full text-left ${
                      option === selected ? 'bg-gray-200 font-semibold' : ''
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default Dropdown;