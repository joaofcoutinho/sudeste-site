import * as React from "react";

const PATHS: Record<string, React.ReactNode> = {
  camera: (
    <>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H7l1.2-1.8A1 1 0 0 1 9 4h6a1 1 0 0 1 .8.4L17 6h1.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z" />
      <circle cx="12" cy="12.5" r="3.4" />
    </>
  ),
  bullet: (
    <>
      <rect x="2.5" y="8" width="13" height="7" rx="3.5" />
      <circle cx="6" cy="11.5" r="2.2" />
      <path d="M15.5 10.5h2.2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2.2M18 8.4V6.2M9.5 17.5v2" />
    </>
  ),
  recorder: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <circle cx="7" cy="12" r="1.3" />
      <path d="M11 10.5h6M11 13.5h6" />
    </>
  ),
  dome: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M3.5 13h17v1.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  reader: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2.5" />
      <circle cx="12" cy="9" r="1.4" />
      <path d="M9.5 13h5M9.5 15.5h5M9.5 18h3" />
    </>
  ),
  smartlock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2.5" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
      <circle cx="12" cy="15" r="1.6" />
      <path d="M12 16.6v2" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="9" width="13" height="12" rx="2" />
      <path d="M7 9V6.5A3.5 3.5 0 0 1 14 6.5V9" />
      <circle cx="10.5" cy="15" r="1.4" />
      <path d="M19 12.5h2.5M19 15.5h2.5" />
    </>
  ),
  keypad: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <circle cx="9" cy="8" r="1" />
      <circle cx="12" cy="8" r="1" />
      <circle cx="15" cy="8" r="1" />
      <circle cx="9" cy="11.5" r="1" />
      <circle cx="12" cy="11.5" r="1" />
      <circle cx="15" cy="11.5" r="1" />
      <path d="M9 16.5h6" />
    </>
  ),
  router: (
    <>
      <rect x="3" y="13" width="18" height="6" rx="2" />
      <circle cx="7" cy="16" r="1" />
      <path d="M11 16h7" />
      <path d="M8 10.5a5 5 0 0 1 8 0M10.5 8.2a2 2 0 0 1 3 0" />
      <path d="M12 13v-1.5" />
    </>
  ),
  switch: (
    <>
      <rect x="2.5" y="8.5" width="19" height="7" rx="1.5" />
      <path d="M5 12h.01M8 12h.01M11 12h.01M14 12h.01M17 12h.01M19 12h.01" />
    </>
  ),
  cable: (
    <>
      <path d="M6 3v3a3 3 0 0 0 3 3h0M10 3v3M6 3h4" />
      <path d="M9 9v4a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V9" />
      <path d="M18 21v-3a3 3 0 0 0-3-3M14 21v-3M18 21h-4" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2H4.5z" />
      <path d="M10 19.5a2 2 0 0 0 4 0" />
    </>
  ),
  sensor: (
    <>
      <path d="M5 11a7 7 0 0 1 14 0" />
      <path d="M7.5 11a4.5 4.5 0 0 1 9 0" />
      <rect x="9.5" y="11" width="5" height="9" rx="1.5" />
      <path d="M12 14v3" />
    </>
  ),
  intercom: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2.5" />
      <rect x="8" y="6" width="8" height="6" rx="1" />
      <path d="M9 15h6M9 17.5h4" />
    </>
  ),
  battery: (
    <>
      <rect x="3" y="8" width="16" height="9" rx="2" />
      <path d="M21 11v3" />
      <path d="M7 12.5h3M11.5 12.5h3" />
      <path d="M7 4.5h4M9 4.5V8" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v4M15 3v4" />
      <path d="M6 7h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 16v2.5a2.5 2.5 0 0 0 2.5 2.5H17" />
    </>
  ),
  nobreak: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7l-2.2 4h2.2l-2 4.5" />
      <path d="M7 6.2h2.2" />
    </>
  ),
};

export default function CategoryIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.camera}
    </svg>
  );
}
