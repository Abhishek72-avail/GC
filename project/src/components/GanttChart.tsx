import React from 'react';
import { Calendar } from 'lucide-react';

interface Task {
  name: string;
  dates: { [key: string]: boolean };
  color: string;
}

const tasks: Task[] = [
  {
    name: "Research and planning",
    dates: {
      "2025-01-03": true,
      "2025-01-08": true,
    },
    // i want text add text inside the box
    color: "from-purple-500 to-purple-600  ", 
  },
  {
    name: "Docker installation (Local)",
    dates: {
      "2025-01-10": true,
    },
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Docker installation (EC2)",
    dates: {
      "2025-01-11": true,
    },
    color: "from-cyan-500 to-cyan-600"

  },
  {
    name: "MariaDB container setup",
    dates: {
      "2025-01-12": true,
    },
    color: "from-teal-500 to-teal-600"
  },
  {
    name: "WordPress container setup",
    dates: {
      "2025-01-13": true,
    },
    color: "from-green-500 to-green-600"
  },
  {
    name: "Testing (Local)",
    dates: {
      "2025-01-17": true,
    },
    color: "from-amber-500 to-amber-600"
  },
  {
    name: "Testing (EC2)",
    dates: {
      "2025-01-20": true,
      "2025-01-24": true,
    },
    color: "from-orange-500 to-orange-600"
  },
  
  {
    name: "Finalizing the project",
    dates: {
      "2025-01-30": true,
    },
    color: "from-rose-500 to-rose-600"
  },
];

const dates = [
  '2025-01-03',
  '2025-01-10',
  '2025-01-11',
  '2025-01-12',
  '2025-01-13',
  '2025-01-17',
  '2025-01-20',
  '2025-01-24',
  '2025-01-30',
];

export function GanttChart() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-white" />
          <h2 className="text-2xl font-bold text-white">Project Timeline</h2>
        </div>
        <p className="mt-2 text-indigo-100"> Cloud Based Project - January 2025</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className="grid grid-cols-[250px_repeat(9,100px)]">
            {/* Header */}
            <div className="bg-gray-50 p-4 font-semibold text-gray-600 border-b border-r border-gray-200">
              Task
            </div>
            {dates.map((date) => (
              <div
                key={date}
                className="bg-gray-50 p-4 font-semibold text-gray-600 border-b border-r border-gray-200 text-center"
              >
                {new Date(date).toLocaleDateString('en-US', { 
                  month: 'short',
                  day: 'numeric'
                })}
              </div>
            ))}

            {/* Tasks */}
            {tasks.map((task, taskIndex) => (
              <React.Fragment key={task.name}>
                <div className={`p-4 border-b border-r border-gray-200 ${
                  taskIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}>
                  <span className="font-medium text-gray-700">{task.name}</span>
                </div>
                {dates.map((date) => (
                  <div
                    key={date}
                    className={`border-b border-r border-gray-200 ${
                      taskIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    {task.dates[date] && (
                      <div className="h-full flex items-center justify-center p-2">
                        <div className={`w-full h-8 bg-gradient-to-r ${task.color} rounded-md shadow-sm flex items-center justify-center group transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                          <div className="w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}