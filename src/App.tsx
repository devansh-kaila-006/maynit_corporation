import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServiceNowTab from './components/ServiceNowTab';
import StaffingTab from './components/StaffingTab';
import LeadershipTab from './components/LeadershipTab';
import AdvisorTab from './components/AdvisorTab';
import ContactTab from './components/ContactTab';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900" id="app-container">
      {/* Master Corporate Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Corporate Workspace */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12 md:px-8" id="main-content-area">
        {activeTab === 'home' && (
          <Hero setActiveTab={setActiveTab} />
        )}

        {activeTab === 'servicenow' && (
          <ServiceNowTab onPlanStrategy={() => setActiveTab('advisor')} />
        )}

        {activeTab === 'staffing' && (
          <StaffingTab onPlanSourcing={() => setActiveTab('contact')} />
        )}

        {activeTab === 'leadership' && (
          <LeadershipTab setActiveTab={setActiveTab} />
        )}

        {activeTab === 'advisor' && (
          <AdvisorTab />
        )}

        {activeTab === 'contact' && (
          <ContactTab />
        )}
      </main>

      {/* Master Corporate Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
