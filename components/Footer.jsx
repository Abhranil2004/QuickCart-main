import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-567-890</p>
              <p>codespherre.official@gmail.com</p>
            </div>

            {/* Social Media Icons below the email */}
            <div className="flex gap-6 py-4">
              {/* GitHub */}
              <a href="https://github.com/CodeSpherreDev" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
                  width={28}
                  height={28}
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
                  width={28}
                  height={28}
                  alt="WhatsApp"
                />
              </a>

              {/* Discord */}
              <a href="https://discord.gg/WdwAVw8fvX" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000"
                  width={28}
                  height={28}
                  alt="Discord"
                />
              </a>

              {/* Telegram */}
              <a href="https://t.me/+fBlS6f4iN700MzJl" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=000000"
                  width={28}
                  height={28}
                  alt="Telegram"
                />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/code_spherre" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
                  width={28}
                  height={28}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © CodeSpherre All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
