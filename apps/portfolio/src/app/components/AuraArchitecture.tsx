import React from "react";

export default function AuraArchitecture() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">
        <div className="flex justify-center">
          <svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg" fontFamily="Arial, sans-serif">
            {/* Background and Title */}
            <rect width="100%" height="100%" fill="#f9fafb"/>
            <text x="600" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#111827">
              Aura - AI Wellness PWA Architecture
            </text>
            <text x="600" y="65" fontSize="14" textAnchor="middle" fill="#4b5563">
              A pnpm Monorepo with End-to-End Type Safety
            </text>

            {/* Define zones */}
            <rect x="20" y="80" width="220" height="700" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1"/>
            <text x="130" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#0369a1">
              User Client (PWA)
            </text>

            <rect x="260" y="80" width="300" height="700" rx="10" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1"/>
            <text x="410" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#3730a3">
              Frontend (Vue 3 / Vercel)
            </text>

            <rect x="580" y="80" width="300" height="700" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1"/>
            <text x="730" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#15803d">
              Backend (NestJS / Render)
            </text>

            <rect x="900" y="80" width="280" height="700" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
            <text x="1040" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#b45309">
              Data Layer &amp; 3rd-Party
            </text>

            {/* Define Arrow Marker */}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4b5563" />
              </marker>
            </defs>

            {/* Components */}
            {/* User Client */}
            <rect x="80" y="380" width="100" height="60" rx="5" fill="#ffffff" stroke="#9ca3af"/>
            <text x="130" y="415" textAnchor="middle" fill="#111827">
              User's Device
            </text>
            <text x="130" y="430" fontSize="12" textAnchor="middle" fill="#0369a1">
              (Browser / Installed PWA)
            </text>

            {/* Frontend */}
            <rect x="320" y="140" width="180" height="50" rx="5" fill="#c7d2fe" stroke="#4f46e5"/>
            <text x="410" y="170" textAnchor="middle" fill="#312e81">
              Vue 3 PWA
            </text>
            <rect x="320" y="220" width="180" height="70" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="410" y="245" textAnchor="middle" fill="#111827">
              Views &amp; Components
            </text>
            <text x="410" y="265" textAnchor="middle" fontSize="12" fill="#4338ca">
              (Tailwind CSS, Chart.js)
            </text>
            <rect x="320" y="320" width="180" height="50" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="410" y="350" textAnchor="middle" fill="#111827">
              State (Pinia)
            </text>
            <rect x="320" y="400" width="180" height="50" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="410" y="430" textAnchor="middle" fill="#111827">
              API Layer (useApi)
            </text>

            {/* Backend */}
            <rect x="640" y="140" width="180" height="50" rx="5" fill="#bbf7d0" stroke="#22c55e"/>
            <text x="730" y="170" textAnchor="middle" fill="#14532d">
              NestJS API
            </text>
            <rect x="640" y="220" width="180" height="70" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="730" y="245" textAnchor="middle" fill="#111827">
              Auth Service
            </text>
            <text x="730" y="265" textAnchor="middle" fontSize="12" fill="#15803d">
              (Anonymous &amp; JWT)
            </text>
            <rect x="640" y="320" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="730" y="350" textAnchor="middle" fill="#111827">
              Mood Entry Service
            </text>
            <rect x="640" y="400" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="730" y="430" textAnchor="middle" fill="#111827">
              Insights Service (AI)
            </text>

            {/* Data Layer & 3rd Party */}
            <rect x="950" y="140" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="1040" y="170" textAnchor="middle" fill="#111827">
              Firebase Auth
            </text>
            <rect x="950" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="1040" y="250" textAnchor="middle" fill="#111827">
              DeepSeek LLM API
            </text>
            <rect x="950" y="300" width="180" height="70" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="1040" y="325" textAnchor="middle" fill="#111827">
              PostgreSQL DB
            </text>
            <text x="1040" y="345" textAnchor="middle" fontSize="12" fill="#b45309">
              (Prisma / Railway)
            </text>

            {/* Main Workflow: AI Summary Generation */}
            <path d="M245 410 H315" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="280" y="400" fontSize="10" fill="#4b5563">
              1. User Interaction
            </text>

            <path d="M505 425 H635" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="540" y="415" fontSize="10" fill="#4b5563">
              2. Request AI Summary
            </text>

            <path d="M825 425 H945" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="860" y="415" fontSize="10" fill="#4b5563">
              3. Check Cache
            </text>

            <path d="M825 425 C880 425, 880 245, 945 245" stroke="#e11d48" strokeWidth="2" markerEnd="url(#arrow)" fill="none" strokeDasharray="4,4"/>
            <text x="880" y="300" fontSize="10" fill="#e11d48">
              4a. Cache Miss: Call AI
            </text>

            <path d="M945 245 C880 245, 880 380, 825 380" stroke="#e11d48" strokeWidth="2" markerEnd="url(#arrow)" fill="none" strokeDasharray="4,4"/>
            <text x="880" y="330" fontSize="10" fill="#e11d48">
              4b. Get AI Response
            </text>

            <path d="M825 380 L825 365 H945" stroke="#e11d48" strokeWidth="2" markerEnd="url(#arrow)" fill="none" strokeDasharray="4,4"/>
            <text x="880" y="360" fontSize="10" fill="#e11d48">
              4c. Save to Cache
            </text>

            <path d="M945 335 C920 335, 920 425, 825 425" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="870" y="385" fontSize="10" fill="#16a34a">
              5. Cache Hit
            </text>
            
            <path d="M635 425 H505" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5,5"/>
            <text x="540" y="445" fontSize="10" fill="#4b5563">
              6. Return Summary
            </text>
            
            <path d="M315 165 H245" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="5,5"/>
            <text x="250" y="190" fontSize="10" fill="#4b5563">
              7. Display Result
            </text>

            {/* Other Connections */}
            {/* Auth Flow */}
            <path d="M825 255 H945" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text x="850" y="225" fontSize="10" fill="#6b7280">
              Verify ID Token
            </text>
            <path d="M945 165 C920 165, 920 255, 825 255" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none" strokeDasharray="5,5"/>
            <text x="860" y="195" fontSize="10" fill="#6b7280">
              Return User Info
            </text>

            {/* General DB access */}
            <path d="M825 255 C850 255, 850 335, 945 335" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none"/>
            <text x="840" y="295" fontSize="10" fill="#6b7280">
              User/Profile CRUD
            </text>

            <path d="M825 345 H945" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text x="850" y="335" fontSize="10" fill="#6b7280">
              Mood Entry CRUD
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}