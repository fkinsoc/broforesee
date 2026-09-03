'use client';

import React from 'react';
import AppLayout from '@/components/Layout';

export default function SettingsPage() {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-light tracking-tight text-white">Settings</h1>
          <p className="text-sm text-zinc-400 mt-1">Manage system preferences and model configurations.</p>
        </div>
        
        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6 shadow-sm mb-6">
           <h2 className="text-lg font-semibold text-white mb-4">ML Model Configuration</h2>
           <div className="space-y-4 max-w-md">
             <div>
               <label className="block text-sm font-medium text-zinc-300 mb-1">Active Model</label>
               <select className="block w-full pl-3 pr-10 py-2 text-sm border border-zinc-700 rounded-md bg-zinc-800/50 text-zinc-300 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500">
                 <option>XGBoost (Default)</option>
                 <option>Random Forest Classifier</option>
                 <option>LightGBM</option>
               </select>
             </div>
             <div>
               <label className="block text-sm font-medium text-zinc-300 mb-1">Prediction Confidence Threshold</label>
               <input type="range" min="50" max="95" defaultValue="80" className="w-full accent-amber-500" />
               <div className="flex justify-between text-xs text-zinc-500 mt-1">
                 <span>Conservative (50%)</span>
                 <span>Strict (95%)</span>
               </div>
             </div>
           </div>
        </div>
        
        <div className="bg-[#111111] border border-zinc-800 rounded-xl p-6 shadow-sm">
           <h2 className="text-lg font-semibold text-white mb-4">Notifications & Alerts</h2>
           <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                <div>
                  <div className="text-sm font-medium text-zinc-200">High Risk Alerts</div>
                  <div className="text-xs text-zinc-500">Notify when a parcel crosses the high-risk threshold.</div>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-700 appearance-none cursor-pointer" defaultChecked/>
                    <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-amber-500 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                <div>
                  <div className="text-sm font-medium text-zinc-200">Legal Dispute Updates</div>
                  <div className="text-xs text-zinc-500">Notify when a parcel is marked with an active legal case.</div>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-700 appearance-none cursor-pointer" defaultChecked/>
                    <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-5 rounded-full bg-amber-500 cursor-pointer"></label>
                </div>
              </div>
           </div>
        </div>
      </div>
    </AppLayout>
  );
}
