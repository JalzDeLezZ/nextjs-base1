"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  label: string;
}

export const ActiveLink = (inn: Props) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${style.link} ${pathName === `/${inn.path}` && style['active-link']}`}
      href={`/${inn.path}`}
    >
      {inn.label}
    </Link>
  );
};
