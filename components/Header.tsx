
import React from 'react';

const NavButton: React.FC<{ children: React.ReactNode; active?: boolean }> = ({ children, active }) => {
  const baseClasses = 'px-4 py-2 rounded-full text-sm md:text-base transition-colors duration-200';
  const activeClasses = 'bg-white text-[#c1316f] shadow-inner';
  const inactiveClasses = 'bg-white text-[#c1316f] hover:bg-gray-100';
  return (
    <button className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}>
      {children}
    </button>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-[#c1316f] text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="p-1 w-12 h-12 flex items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/ROC_Ministry_of_Finance_Seal.svg/2000px-ROC_Ministry_of_Finance_Seal.svg.png" alt="Ministry of Finance Seal" className="w-full h-full" />
          </div>
          <div className="hidden md:flex items-center space-x-1 md:space-x-2">
             <NavButton>誰能領</NavButton>
             <NavButton>如何領</NavButton>
             <NavButton active={true}>直接入帳</NavButton>
             <NavButton>常見問題</NavButton>
             <NavButton>防詐專區</NavButton>
             <NavButton>最新消息</NavButton>
          </div>
        </div>
        <div className="text-sm md:text-base whitespace-nowrap mt-2 md:mt-0">
          領取期間:114年11月5日~115年4月30日
        </div>
         <div className="flex md:hidden items-center space-x-1 mt-2 w-full justify-center flex-wrap">
             <NavButton>誰能領</NavButton>
             <NavButton>如何領</NavButton>
             <NavButton active={true}>直接入帳</NavButton>
             <NavButton>常見問題</NavButton>
         </div>
      </div>
    </header>
  );
};

export default Header;