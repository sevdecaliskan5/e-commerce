import { LogIn } from 'lucide-react';

const InnerHeader = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-[1322px] mx-auto flex justify-between items-center px-6 py-4 text-sm text-[#292929]">
        <div className="text-xl font-bold">Bandage</div>
        <nav className="flex gap-4 items-center text-gray-700">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
        <div className="flex gap-4 items-center">
          <a href="#" className="text-blue-600 font-semibold flex items-center gap-1">
            <LogIn size={16} />
            Login
          </a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
            Become a member →
          </button>
        </div>
      </div>
    </header>
  );
};

export default InnerHeader;
