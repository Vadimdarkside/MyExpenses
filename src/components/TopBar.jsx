export default function TopBar({ onThemeChange }) {
  return (
    <div className="flex flex-row justify-between p-3">
      {/* Logo */}
      <h1>MyExpenses</h1>
      {/* Button */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onClick={onThemeChange}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-300"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          A little Christmasa?
        </span>
      </label>
    </div>
  );
}
