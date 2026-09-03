'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Map as MapIcon, 
  AlertTriangle, 
  FileText, 
  UploadCloud, 
  Settings, 
  Search, 
  Bell, 
  User,
  Menu
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Land Parcels', href: '/parcels', icon: FileText },
    { name: 'GIS Map', href: '/map', icon: MapIcon },
    { name: 'Early Warnings', href: '/alerts', icon: AlertTriangle },
    { name: 'Data Upload', href: '/upload', icon: UploadCloud },
    { name: 'Reports', href: '/reports', icon: FileText },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] flex overflow-hidden font-sans">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#0A0A0A] border-r border-zinc-800 flex flex-col transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:block transition-transform duration-300 ease-in-out`}>
        <div className="p-6 border-b border-zinc-800 flex flex-col justify-center h-24">
          <div className="text-white font-bold text-xl tracking-tight">BRO FORESEE</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-1">By Brown's Squad</div>
        </div>
        <nav className="flex-1 py-4 flex flex-col">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-3 text-sm flex items-center gap-3 transition-colors ${
                  isActive 
                    ? 'text-white bg-zinc-900 border-r-2 border-white font-medium' 
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {isActive ? <span className="w-1.5 h-1.5 rounded-full bg-white mr-1 flex-shrink-0" /> : <item.icon className="w-4 h-4 mr-1 opacity-70 flex-shrink-0" />}
                {item.name}
              </Link>
            )
          })}
        </nav>
        <div className="p-6 mt-auto border-t border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">JD</div>
            <div>
              <div className="text-xs font-medium text-white">John Doe</div>
              <div className="text-[10px] text-zinc-500">Admin Authority</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-b border-zinc-800 z-40">
          <div className="flex items-center gap-4 lg:gap-8">
            <button
              className="lg:hidden text-zinc-400 hover:text-white mr-2"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-sm font-medium tracking-wide uppercase text-zinc-400 hidden sm:block">Predictive Risk Command</h1>
            <div className="h-4 w-px bg-zinc-800 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-[11px] font-bold text-red-500 tracking-wider uppercase">Critical Priority</span>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-end gap-4 lg:gap-6">
            <div className="relative max-w-sm w-full hidden md:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-3.5 w-3.5 text-zinc-500" />
              </div>
              <input
                type="text"
                placeholder="Search parcels, projects, owners..."
                className="block w-full pl-9 pr-3 py-1.5 border border-zinc-800 rounded bg-[#111111] text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 sm:text-xs"
              />
            </div>
            
            <div className="text-[11px] text-zinc-500 uppercase hidden lg:block">Sync Status: 2m ago</div>
            <button className="relative p-1.5 text-zinc-400 hover:text-white transition-colors">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 block h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-[#0A0A0A]" />
            </button>
            <button className="px-4 py-1.5 bg-white text-black text-[11px] font-bold rounded uppercase tracking-wider hover:bg-zinc-200 transition-colors hidden sm:block">
              Export PDF
            </button>
          </div>
        </header>

        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto bg-[#0A0A0A] p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
