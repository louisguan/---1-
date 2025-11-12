import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#c1316f] text-white py-3">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-end items-center gap-y-2 gap-x-2 sm:gap-x-4 text-xs sm:text-sm">
        <span>...</span>
        <button className="hover:underline">(English)</button>
        <button className="border border-white rounded-full px-3 py-1 hover:bg-white/20 transition-colors">隱私權聲明</button>
        <button className="border border-white rounded-full px-3 py-1 hover:bg-white/20 transition-colors">個人資料保護法告知義務內容</button>
        <a 
          href="https://www.gov.tw/accessibility.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="無障礙網站A+等級認證標章"
        >
            <img 
              src="https://10000-fisc.cdn.hinet.net/Content/img/AA.png" 
              alt="無障礙網站A+等級認證標章" 
              className="h-8"
            />
        </a>
      </div>
    </footer>
  );
};

export default Footer;