import React from "react";

export default function CloudloomArchitecture() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">
        <div className="flex justify-center">
          <svg width="1100" height="720" xmlns="http://www.w3.org/2000/svg" fontFamily="Arial, sans-serif">
            <rect width="100%" height="100%" fill="#f9fafb"/>
            <text x="550" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#111827">
              Cloudloom Project Architecture & Technical Workflow
            </text>
            {/* Main containers for layers */}
            <rect x="20" y="80" width="200" height="620" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1"/>
            <text x="120" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#0369a1">
              User Client
            </text>
            <rect x="240" y="80" width="280" height="620" rx="10" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1"/>
            <text x="380" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#3730a3">
              Frontend (Vue 3)
            </text>
            <rect x="540" y="80" width="280" height="620" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1"/>
            <text x="680" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#15803d">
              Backend (NestJS)
            </text>
            <rect x="840" y="80" width="240" height="620" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
            <text x="960" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#b45309">
              Services & Infrastructure
            </text>
            {/* Arrow definitions */}
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4b5563" />
              </marker>
            </defs>
            {/* User Client components */}
            <rect x="70" y="340" width="100" height="60" rx="5" fill="#ffffff" stroke="#9ca3af"/>
            <text x="120" y="375" textAnchor="middle" fill="#111827">
              Browser
            </text>
            {/* Frontend components */}
            <rect x="290" y="140" width="180" height="50" rx="5" fill="#c7d2fe" stroke="#4f46e5"/>
            <text x="380" y="170" textAnchor="middle" fill="#312e81">
              Vue.js App
            </text>
            <rect x="290" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="380" y="250" textAnchor="middle" fill="#111827">
              Pinia State
            </text>
            <rect x="290" y="300" width="180" height="50" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="380" y="330" textAnchor="middle" fill="#111827">
              API Calls
            </text>
            {/* Backend components */}
            <rect x="590" y="140" width="180" height="50" rx="5" fill="#bbf7d0" stroke="#22c55e"/>
            <text x="680" y="170" textAnchor="middle" fill="#14532d">
              NestJS API
            </text>
            <rect x="590" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="250" textAnchor="middle" fill="#111827">
              Auth Guard/JWT
            </text>
            <rect x="590" y="300" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="330" textAnchor="middle" fill="#111827">
              Product/Booking
            </text>
            <text x="680" y="345" fontSize="12" textAnchor="middle" fill="#4b5563">
              Services
            </text>
            <rect x="590" y="380" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="410" textAnchor="middle" fill="#111827">
              Stripe Webhook
            </text>
            <rect x="590" y="460" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="490" textAnchor="middle" fill="#111827">
              Image Upload
            </text>
            {/* Third-party services */}
            <rect x="870" y="140" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="170" textAnchor="middle" fill="#111827">
              PostgreSQL DB
            </text>
            <rect x="870" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="250" textAnchor="middle" fill="#111827">
              Stripe API
            </text>
            <rect x="870" y="300" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="330" textAnchor="middle" fill="#111827">
              OSS (e.g. S3)
            </text>
            <rect x="870" y="380" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="410" textAnchor="middle" fill="#111827">
              PM2/Nginx
            </text>
            {/* Arrows and labels for data flow */}
            <path d="M175 370 H285" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="230" y="365" fontSize="10" fill="#4b5563">
              Browse Website
            </text>
            <path d="M475 330 H585" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="530" y="325" fontSize="10" fill="#4b5563">
              API Request
            </text>
            <path d="M775 165 H865" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="820" y="160" fontSize="10" fill="#4b5563">
              Query DB
            </text>
            <path d="M775 250 C820 250, 820 235, 865 235" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="820" y="245" fontSize="10" fill="#4b5563">
              Initiate Payment
            </text>
            <path d="M775 330 C820 330, 820 315, 865 315" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="820" y="325" fontSize="10" fill="#4b5563">
              Upload Image
            </text>
            <path d="M865 250 C820 250, 820 395, 775 395" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="820" y="355" fontSize="10" fill="#4b5563">
              Payment Webhook
            </text>
            <path d="M585 330 H475" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
            <text x="530" y="350" fontSize="10" fill="#4b5563">
              API Response
            </text>
            <path d="M775 410 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M865 410 H775" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <text x="820" y="420" fontSize="10" fill="#6b7280">
              Manage Deployment
            </text>

            <path d="M285 165 H175" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
            <text x="200" y="190" fontSize="10" fill="#4b5563">
              Display Result
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}