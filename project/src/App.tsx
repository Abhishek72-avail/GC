import React from 'react';
import { GanttChart } from './components/GanttChart';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <GanttChart />
      </div>
    </div>
  );
}

export default App;