import React from 'react';

// 请替换为你的真实信息
const CONTACT_INFO = {
  email: "yanziyi290@gmail.com",
  github: "https://github.com/yzy-song",
  linkedin: "https://www.linkedin.com/in/yzy-yzy-0b9a262a3/", 
};

// SVG 图标（已优化为简洁版本）
const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.864 8.164 6.83 9.498.5.092.682-.217.682-.483 0-.237-.008-.87-.013-1.724-2.782.603-3.369-1.34-3.369-1.34-.454-1.15-.186-1.458-.186-1.458-.934-.636.07-.624.07-.624 1.03.07 1.574 1.056 1.574 1.724.966 1.57 2.53 1.116 3.13.854.099-.663.385-1.116.7-1.373-2.404-.26-4.935-1.202-4.935-4.49 0-.99.35-1.795.922-2.428-.093-.24-.403-1.148.087-2.39c0 0 .754-.243 2.47 1.026.716-.197 1.472-.296 2.228-.299.756.003 1.512.102 2.228.299 1.716-1.27 2.47-1.026 2.47-1.026.49 1.242.18 2.15.087 2.39.572.633.922 1.438.922 2.428 0 3.297-2.535 4.225-4.945 4.484.39.336.745.996.745 2.006 0 1.374-.012 2.484-.012 2.812 0 .267.18.58.688.483C19.136 20.18 22 16.434 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd" /></svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9h4v12H4zM6 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" /></svg>
);

const EmailIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.003 5.884L10 9.882l-7.997 3.998A2 2 0 012 12.017V5.884zM22 12.017a2 2 0 01-2.003 2.002L14 9.882l7.997-3.998A2 2 0 0122 12.017zM20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zM4.75 6.417L12 10.01l7.25-3.593A1 1 0 0120 7v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 01 .75-.983z" /></svg>
);


export default function Footer() {
  return (
    <footer className="z-10 py-10 w-full text-center border-t border-gray-700/50">
      <div className="flex justify-center space-x-6 mb-6">
        {/* Email Link */}
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-gray-400 hover:text-pink-400 transition flex items-center gap-2"
          aria-label="Email me"
        >
          <EmailIcon />
          <span className="hidden sm:inline">{CONTACT_INFO.email}</span>
        </a>

        {/* GitHub Link */}
        <a
          href={CONTACT_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-400 transition"
          aria-label="My GitHub Profile"
        >
          <GitHubIcon />
        </a>

        {/* LinkedIn Link */}
        <a
          href={CONTACT_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition"
          aria-label="My LinkedIn Profile"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YzY Studio. Built with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
}