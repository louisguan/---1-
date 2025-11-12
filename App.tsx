
import React from 'react';
import Header from './components/Header';
import PromoCard from './components/PromoCard';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#f9f7f2] min-h-screen font-sans">
      <Header />
      <main className="px-4 py-8 md:py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-1">
            <PromoCard />
          </div>
          <div className="lg:col-span-2">
            <RegistrationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
