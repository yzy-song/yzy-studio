import React from "react";

export default function NailsalonArchitecture() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">
        <div className="flex justify-center">
          <svg width="1100" height="800" xmlns="http://www.w3.org/2000/svg" fontFamily="Arial, sans-serif">
            {/* Background and Title */}
            <rect width="100%" height="100%" fill="#f9fafb"/>
            <text x="550" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#111827">
              Nail Salon - Architecture &amp; Technical Workflow
            </text>
            <text x="550" y="65" fontSize="14" textAnchor="middle" fill="#4b5563">
              A Monorepo Architecture with Turborepo &amp; pnpm
            </text>
            {/* Define zones */}
            <rect x="20" y="80" width="200" height="700" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1"/>
            <text x="120" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#0369a1">
              User Client
            </text>
            <rect x="240" y="80" width="280" height="700" rx="10" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1"/>
            <text x="380" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#3730a3">
              Frontend (Next.js / Vercel)
            </text>
            <rect x="540" y="80" width="280" height="700" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1"/>
            <text x="680" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#15803d">
              Backend (NestJS / Render)
            </text>
            <rect x="840" y="80" width="240" height="700" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
            <text x="960" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#b45309">
              Third-Party Services
            </text>
            {/* Define Arrow Marker */}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4b5563" />
              </marker>
            </defs>
            {/* Components */}
            {/* User Client */}
            <rect x="70" y="380" width="100" height="60" rx="5" fill="#ffffff" stroke="#9ca3af"/>
            <text x="120" y="415" textAnchor="middle" fill="#111827">
              User's Browser
            </text>
            {/* Frontend */}
            <rect x="290" y="140" width="180" height="50" rx="5" fill="#c7d2fe" stroke="#4f46e5"/>
            <text x="380" y="170" textAnchor="middle" fill="#312e81">
              Next.js App
            </text>
            <rect x="290" y="220" width="180" height="70" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="380" y="245" textAnchor="middle" fill="#111827">
              BookingForm.tsx
            </text>
            <text x="380" y="265" textAnchor="middle" fontSize="12" fill="#4338ca">
              (React Query &amp; Zustand)
            </text>
            <rect x="290" y="320" width="180" height="50" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="380" y="350" textAnchor="middle" fill="#111827">
              CheckoutForm.tsx
            </text>
            <rect x="290" y="400" width="180" height="50" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="380" y="430" textAnchor="middle" fill="#111827">
              Admin Dashboard
            </text>
            <text x="380" y="480" textAnchor="middle" fontSize="11" fill="#4338ca">
              (UI: Tailwind, Shadcn/ui, Framer Motion)
            </text>
            {/* Backend */}
            <rect x="590" y="140" width="180" height="50" rx="5" fill="#bbf7d0" stroke="#22c55e"/>
            <text x="680" y="170" textAnchor="middle" fill="#14532d">
              NestJS API
            </text>
            <rect x="590" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="250" textAnchor="middle" fill="#111827">
              Auth Service (JWT)
            </text>
            <rect x="590" y="300" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="330" textAnchor="middle" fill="#111827">
              Appointments Service
            </text>
            <rect x="590" y="380" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="410" textAnchor="middle" fill="#111827">
              Payments Service
            </text>
            <rect x="590" y="460" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="490" textAnchor="middle" fill="#111827">
              Media Service
            </text>
            <rect x="590" y="540" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="570" textAnchor="middle" fill="#111827">
              Email Service
            </text>
            <rect x="590" y="620" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="645" textAnchor="middle" fill="#111827">
              Task Service (Cron)
            </text>
            <text x="680" y="660" fontSize="10" textAnchor="middle" fill="#111827">
              (Email Sync)
            </text>
            <text x="680" y="710" textAnchor="middle" fontSize="11" fill="#15803d">
              (Tooling: Helmet, Winston, Swagger)
            </text>
            {/* 3rd Party */}
            <rect x="870" y="140" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="170" textAnchor="middle" fill="#111827">
              Firebase Auth
            </text>
            <rect x="870" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="250" textAnchor="middle" fill="#111827">
              Cloudinary
            </text>
            <rect x="870" y="300" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="330" textAnchor="middle" fill="#111827">
              PostgreSQL DB (Prisma)
            </text>
            <rect x="870" y="380" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="410" textAnchor="middle" fill="#111827">
              Stripe API
            </text>
            <rect x="870" y="460" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="490" textAnchor="middle" fill="#111827">
              Resend API
            </text>
            <rect x="870" y="540" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="570" textAnchor="middle" fill="#111827">
              Google Maps API
            </text>
            <rect x="870" y="620" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="650" textAnchor="middle" fill="#111827">
              Gmail API (IMAP)
            </text>
            {/* Main Workflow Arrows */}
            <path d="M175 410 H285" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="230" y="400" fontSize="10" fill="#4b5563">
              1. Visits Booking Page
            </text>
            <path d="M475 255 H585" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="500" y="245" fontSize="10" fill="#4b5563">
              2. Request API Data
            </text>
            <path d="M475 350 H585" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="500" y="370" fontSize="10" fill="#4b5563">
              4. Request Payment Intent
            </text>
            <path d="M585 350 H475" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
            <text x="500" y="340" fontSize="10" fill="#4b5563">
              5. Return Client Secret
            </text>
            <path d="M380 375 L380 500 C380 520, 865 520, 865 410" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="450" y="500" fontSize="10" fill="#4b5563">
              6. User Pays via Stripe Elements
            </text>
            <path d="M865 410 C820 410, 820 165, 585 165" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" fill="none" markerEnd="url(#arrow)"/>
            <text x="750" y="150" fontSize="10" fill="#4b5563">
              7. Stripe Webhook Confirms Payment
            </text>
            <path d="M585 165 H475" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
            <text x="500" y="190" fontSize="10" fill="#4b5563">
              8. Return final status to page
            </text>
            <path d="M285 165 H175" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
            <text x="200" y="190" fontSize="10" fill="#4b5563">
              9. Display confirmation
            </text>
            {/* Other Connections */}
            <path d="M775 245 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M775 325 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M775 405 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M775 485 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M775 565 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M775 645 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M475 165 L520 165 C530 165, 530 565, 585 565" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none"/>
            <text x="400" y="580" fontSize="10" fill="#6b7280">
              Requests Map Data
            </text>
            <path d="M865 565 L525 565 C515 565, 515 165, 475 165" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="5,5" markerEnd="url(#arrow)" fill="none"/>
            <text x="750" y="580" fontSize="10" fill="#6b7280">
              Returns Map Tiles
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}