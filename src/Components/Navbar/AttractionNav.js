const AttractionNav = ({ tabs, activeTab, onTabChange }) => {
  return (
    <nav className="flex overflow-x-auto pb-4 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-sm  mr-2 transition-colors duration-200 ${
            activeTab === tab
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default AttractionNav;
