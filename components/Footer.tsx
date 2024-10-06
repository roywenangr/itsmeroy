import Link from "next/link";
import React from "react";
import { RiGithubFill, RiLinkedinFill, RiInstagramFill, RiWhatsappFill, RiTelegramFill   } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="px-10 flex items-center justify-center ">
      <ul className="flex text-center ">
        {/* <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://github.com/roywenangr">
            <a target="_blank" rel="noreferrer noopener" aria-label="github">
              <RiGithubFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </li>
        <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://www.linkedin.com/in/roywr">
            <a target="_blank" rel="noreferrer noopener" aria-label="linkedin">
              <RiLinkedinFill size={20} className="hover:text-third" />
            </a>
          </Link>
          </li>
          <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://instagram.com/swallow4jnck">
            <a target="_blank" rel="noreferrer noopener" aria-label="instagram">
              <RiInstagramFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </li>
        <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="mailto:roywenangr@gmail.com">
            <a target="_blank" rel="noreferrer noopener" aria-label="email">
              <MdEmail size={20} className="hover:text-third" />
            </a>
          </Link>
        </li> */}
        <li className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://t.me/samsheart">
            <a target="_blank" rel="noreferrer noopener" aria-label="telegram">
              <RiTelegramFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
