import React, { useState, useMemo, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { QueryViewer } from './components/QueryViewer';
import { queryCategories } from './constants';
import { QueryItem, DbConfig } from './types';
import { SparklesIcon } from './components/icons/SparklesIcon';
import { CogIcon } from './components/icons/CogIcon';
import { ConnectionModal } from './components/ConnectionModal';
import { AIAssistantModal } from './components/AIAssistantModal';

const App: React.FC = () => {
  const [selectedQueryId, setSelectedQueryId] = useState<string | null>('db_all_tables_list');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [dbConfig, setDbConfig] = useState<DbConfig | null>(null);

  useEffect(() => {
    const storedConfig = localStorage.getItem('dbConfig');
    if (storedConfig) {
      setDbConfig(JSON.parse(storedConfig));
    }
  }, []);

  const handleConnect = (config: DbConfig) => {
    localStorage.setItem('dbConfig', JSON.stringify(config));
    setDbConfig(config);
    setIsModalOpen(false);
  };
  
  const handleDisconnect = () => {
    localStorage.removeItem('dbConfig');
    setDbConfig(null);
  }

  const selectedQuery = useMemo((): QueryItem | null => {
    if (!selectedQueryId) return null;
    for (const category of queryCategories) {
      const foundItem = category.items.find(item => item.id === selectedQueryId);
      if (foundItem) return foundItem;
    }
    return null;
  }, [selectedQueryId]);

  return (
    <div 
      className="flex h-screen bg-gray-900 font-sans bg-cover bg-center" 
      style={{backgroundImage: "url('https://picsum.photos/seed/wowlegion/1920/1080')"}}
    >
      <div className="flex h-full w-full bg-black bg-opacity-70 backdrop-blur-sm">
        <Sidebar 
          categories={queryCategories}
          selectedQueryId={selectedQueryId}
          onSelectQuery={setSelectedQueryId}
        />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto flex flex-col">
          <header className="flex justify-between items-center mb-6 flex-shrink-0">
            <h1 className="text-3xl font-bold text-green-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              WoW 7.3.5 SPP Admin Helper
            </h1>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 text-sm">
                {dbConfig ? (
                  <>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-300">已连接</span>
                    <button onClick={handleDisconnect} className="text-gray-400 hover:text-white text-xs">(断开)</button>
                  </>
                ) : (
                  <>
                    <span className="relative flex h-3 w-3">
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span className="text-red-400">未连接</span>
                  </>
                )}
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Database Settings"
              >
                <CogIcon className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setIsAiModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg">
                <SparklesIcon className="w-5 h-5" />
                <span>AI Assistant</span>
              </button>
            </div>
          </header>
          <div className="flex-grow min-h-0">
            {selectedQuery ? (
              <QueryViewer query={selectedQuery} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-10 bg-gray-800 bg-opacity-80 rounded-xl shadow-2xl">
                  <h2 className="text-2xl font-semibold text-green-300 mb-2">Welcome!</h2>
                  <p className="text-gray-400">Select a query from the menu to get started.</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      <ConnectionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnect={handleConnect}
        currentConfig={dbConfig}
      />
      <AIAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
};

export default App;