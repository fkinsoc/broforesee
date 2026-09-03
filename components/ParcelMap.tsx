'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Parcel } from '@/lib/data';

// Fix Leaflet's default icon path issues in Next.js
const customMarkerIcon = (color: string) => L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7]
});

export default function ParcelMap({ parcel, allParcels }: { parcel?: Parcel, allParcels?: Parcel[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Single parcel mode
  if (parcel) {
    const color = parcel.riskLevel === 'High' ? '#ef4444' : parcel.riskLevel === 'Medium' ? '#f59e0b' : '#10b981';
    
    return (
      <MapContainer 
        center={[parcel.lat, parcel.lng]} 
        zoom={14} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[parcel.lat, parcel.lng]} icon={customMarkerIcon(color)}>
          <Popup>
            <div className="text-zinc-900">
              <strong>{parcel.id}</strong><br/>
              Risk: {parcel.riskLevel}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }

  // Multi-parcel mode
  if (allParcels && allParcels.length > 0) {
    const centerLat = allParcels.reduce((sum, p) => sum + p.lat, 0) / allParcels.length;
    const centerLng = allParcels.reduce((sum, p) => sum + p.lng, 0) / allParcels.length;

    return (
      <MapContainer 
        center={[centerLat, centerLng]} 
        zoom={11} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {allParcels.map(p => (
          <Marker 
            key={p.id} 
            position={[p.lat, p.lng]} 
            icon={customMarkerIcon(p.riskLevel === 'High' ? '#ef4444' : p.riskLevel === 'Medium' ? '#f59e0b' : '#10b981')}
          >
            <Popup>
              <div className="p-1 min-w-[200px]">
                <h4 className="font-bold text-sm mb-1">{p.id}</h4>
                <div className="text-xs mb-2">{p.village}, {p.district}</div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Risk:</span>
                  <span className={p.riskLevel === 'High' ? 'text-red-600 font-bold' : p.riskLevel === 'Medium' ? 'text-amber-600 font-bold' : 'text-emerald-600 font-bold'}>
                    {p.riskLevel} ({p.riskScore})
                  </span>
                </div>
                <div className="flex justify-between text-xs mb-2">
                  <span>Delay:</span>
                  <span>{p.predictedDelayDays} days</span>
                </div>
                <a href={`/parcels/${p.id}`} className="text-blue-600 text-xs hover:underline">View Details &rarr;</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }

  return null;
}
