"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  title: string;
  context: string;
}

export default function Header({ title, context }: HeaderProps) {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDateStr(today.toLocaleDateString('id-ID', options));
  }, []);

  return (
    <div className="header-top">
      <div className="header-left">
        <h1 id="view-title">{title}</h1>
        <div className="step-indicator-label" id="step-indicator">
          <i className="fas fa-sitemap"></i>
          <span id="step-context-text">{context}</span>
        </div>
      </div>
      <div className="header-meta">
        <div className="meta-badge">
          <i className="fas fa-map-marker-alt"></i> Posyandu Mawar &mdash; Desa Girimulyo
        </div>
        <div className="meta-badge">
          <i className="fas fa-calendar"></i> <span id="header-date">{dateStr}</span>
        </div>
        <button className="btn-notif" title="Notifikasi">
          <i className="fas fa-bell"></i>
          <span className="notif-dot" id="notif-dot" style={{ display: 'none' }}></span>
        </button>
      </div>
    </div>
  );
}
