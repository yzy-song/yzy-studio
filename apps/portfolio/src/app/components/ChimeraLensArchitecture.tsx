import React from "react";

export default function ChimeraLensArchitecture() {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">
        <div className="flex justify-center">
          <svg width="1100" height="720" xmlns="http://www.w3.org/2000/svg" fontFamily="Arial, sans-serif">
            <rect width="100%" height="100%" fill="#f9fafb"/>
            <text x="550" y="40" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#111827">
              ChimeraLens Project Architecture & Technical Workflow
            </text>

            <rect x="20" y="80" width="200" height="620" rx="10" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1"/>
            <text x="120" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#0369a1">
              User Client
            </text>

            <rect x="240" y="80" width="280" height="620" rx="10" fill="#e0e7ff" stroke="#4338ca" strokeWidth="1"/>
            <text x="380" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#3730a3">
              Frontend (Vercel)
            </text>

            <rect x="540" y="80" width="280" height="620" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1"/>
            <text x="680" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#15803d">
              Backend (NestJS / Render)
            </text>

            <rect x="840" y="80" width="240" height="620" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1"/>
            <text x="960" y="110" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#b45309">
              Third-Party Services
            </text>

            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4b5563" />
              </marker>
            </defs>

            <rect x="70" y="150" width="100" height="60" rx="5" fill="#ffffff" stroke="#9ca3af"/>
            <text x="120" y="185" textAnchor="middle" fill="#111827">
              Browser 1
            </text>

            <rect x="70" y="280" width="100" height="60" rx="5" fill="#ffffff" stroke="#9ca3af"/>
            <text x="120" y="315" textAnchor="middle" fill="#111827">
              Browser 2
            </text>

            <rect x="70" y="410" width="100" height="60" rx="5" fill="#ffffff" stroke="#9ca3af"/>
            <text x="120" y="445" textAnchor="middle" fill="#111827">
              Browser 3 
            </text>

            <rect x="70" y="540" width="100" height="60" rx="5" fill="#ffffff" stroke="#9ca3af"/>
            <text x="120" y="575" textAnchor="middle" fill="#111827">
              Browser ... 
            </text>

            <rect x="290" y="140" width="180" height="50" rx="5" fill="#c7d2fe" stroke="#4f46e5"/>
            <text x="380" y="170" textAnchor="middle" fill="#312e81">
              Next.js App
            </text>
            <rect x="290" y="220" width="180" height="70" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="380" y="250" textAnchor="middle" fill="#111827">
              ImageUploader.tsx
            </text>
            <text x="380" y="270" textAnchor="middle" fontSize="12" fill="#4338ca">
              (Face Detection)
            </text>
            <rect x="290" y="320" width="180" height="50" rx="5" fill="#ffffff" stroke="#6366f1"/>
            <text x="380" y="350" textAnchor="middle" fill="#111827">
              MediaPipe.js
            </text>

            <rect x="590" y="140" width="180" height="50" rx="5" fill="#bbf7d0" stroke="#22c55e"/>
            <text x="680" y="170" textAnchor="middle" fill="#14532d">
              NestJS API
            </text>
            <rect x="590" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="250" textAnchor="middle" fill="#111827">
              Guest Middleware
            </text>
            <rect x="590" y="300" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="330" textAnchor="middle" fill="#111827">
              Generation Service
            </text>
            <rect x="590" y="380" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="410" textAnchor="middle" fill="#111827">
              Auth Service
            </text>
            <rect x="590" y="460" width="180" height="50" rx="5" fill="#ffffff" stroke="#16a34a"/>
            <text x="680" y="490" textAnchor="middle" fill="#111827">
              Billing Service
            </text>

            <rect x="870" y="140" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="170" textAnchor="middle" fill="#111827">
              Replicate API
            </text>
            <rect x="870" y="220" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="250" textAnchor="middle" fill="#111827">
              Cloudinary
            </text>
            <rect x="870" y="300" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="330" textAnchor="middle" fill="#111827">
              PostgreSQL DB
            </text>
            <rect x="870" y="380" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="410" textAnchor="middle" fill="#111827">
              Firebase Auth
            </text>
            <rect x="870" y="460" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="500" textAnchor="middle" fill="#111827">
              Stripe API
            </text>
            <rect x="870" y="540" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="570" textAnchor="middle" fill="#111827">
              Upstash (Redis)
            </text>
            <rect x="870" y="620" width="180" height="50" rx="5" fill="#ffffff" stroke="#d97706"/>
            <text x="960" y="650" textAnchor="middle" fill="#111827">
              Resend API
            </text>

            <path d="M175 370 H285" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="230" y="365" fontSize="10" fill="#4b5563">
              1. Upload Image
            </text>

            <path d="M380 295 V315" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="390" y="310" fontSize="10" fill="#4b5563">
              2. Face Detect
            </text>

            <path d="M475 255 H585" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="500" y="250" fontSize="10" fill="#4b5563">
              3. API Request
            </text>

            <path d="M775 325 H865" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)"/>
            <text x="790" y="320" fontSize="10" fill="#4b5563">
              4. Upload to Cloudinary
            </text>

            <path d="M775 325 C820 325, 820 165, 865 165" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="790" y="240" fontSize="10" fill="#4b5563">
              5. Call Replicate
            </text>

            <path d="M865 165 C820 165, 820 245, 775 245" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="790" y="210" fontSize="10" fill="#4b5563">
              6. Get Result
            </text>

            <path d="M775 325 C820 325, 820 245, 865 245" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="790" y="280" fontSize="10" fill="#4b5563">
              7. Save Result
            </text>

            <path d="M775 325 C820 325, 820 325, 865 325" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" fill="none"/>
            <text x="790" y="350" fontSize="10" fill="#4b5563">
              8. Save to DB
            </text>

            <path d="M585 165 H475" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
            <text x="500" y="190" fontSize="10" fill="#4b5563">
              9. Return URL
            </text>

            <path d="M285 165 H175" stroke="#4b5563" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow)"/>
            <text x="200" y="190" fontSize="10" fill="#4b5563">
              10. Display Result
            </text>

            <path d="M775 405 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M775 485 H865" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            <path d="M775 165 C775 565, 865 565, 865 565" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none"/>
            <path d="M775 165 C775 645, 865 645, 865 645" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#arrow)" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  );
}