import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-left w-full px-10 py-4 border-t border-gray-300">
      {/* Left Side: Logo & Copyright */}
      <div className="flex items-center gap-4">
        <p className="text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © CodeSpherre. All Rights Reserved.
        </p>
      </div>

      {/* Right Side: Social Icons */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* GitHub */}
        <a href="https://github.com/CodeSpherreDev" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
            width={24}
            height={24}
            alt="GitHub"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://whatsapp.com/channel/0029Vb38UEGKbYMGjVkaDg2l"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios/50/whatsapp--v1.png"
            width={24}
            height={24}
            alt="WhatsApp"
          />
        </a>

        {/* Discord */}
        <a href="https://discord.gg/WdwAVw8fvX" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000"
            width={24}
            height={24}
            alt="Discord"
          />
        </a>

        {/* Telegram */}
        <a href="https://t.me/+fBlS6f4iN700MzJl" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=000000"
            width={24}
            height={24}
            alt="Telegram"
          />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/code_spherre" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
            width={24}
            height={24}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
