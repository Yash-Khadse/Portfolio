import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Yash Khadse",
    subText: "yash-khadse",
    icon: Linkedin,
    url: "https://linkedin.com/in/yash-khadse-4yk",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    // Removed: isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@_._yasssh",
    icon: Instagram,
    url: "https://www.instagram.com/_._yasssh/?hl=en",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@Yash-Khadse",
    icon: Github,
    url: "https://github.com/Yash-Khadse",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "X",
    displayName: "X (Twitter)",
    subText: "@_yasssh",
    icon: ({ className, ...props }) => (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...props}
      >
        <path
          d="M17.53 3H21.5L14.36 10.87L22.74 21H16.16L10.97 14.47L4.97 21H1L8.57 12.61L0.5 3H7.24L12 9.01L17.53 3ZM16.34 19H18.34L6.7 5H4.54L16.34 19Z"
          fill="currentColor"
        />
      </svg>
    ),
    url: "https://x.com/_yasssh",
    color: "#000000",
    gradient: "from-[#000000] to-[#1DA1F2]",
  },
];

const SocialLinks = () => {
  // Removed: const linkedIn = socialLinks.find(link => link.isPrimary);
  // Removed: const otherLinks = socialLinks.filter(link => !link.isPrimary);
  // Removed: const [instagram, github, x] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 p-4 rounded-xl 
                       bg-white/5 border border-white/10 overflow-hidden
                       hover:border-white/20 transition-all duration-500"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                           bg-gradient-to-r ${link.gradient}`} />
            
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                             group-hover:scale-125 group-hover:opacity-30"
                   style={{ backgroundColor: link.color }} />
              <div className="relative p-2 rounded-lg">
                <link.icon
                  className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                  style={{ color: link.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                {link.displayName}
              </span>
              <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                {link.subText}
              </span>
            </div>
            
            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                   opacity-0 group-hover:opacity-100 transition-all duration-300
                                   transform group-hover:translate-x-0 -translate-x-2" />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;