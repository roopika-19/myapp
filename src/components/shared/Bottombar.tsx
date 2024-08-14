import { Link, To, useLocation } from "react-router-dom";

import { bottombarLinks } from "@/constants";
import { ReactElement, JSXElementConstructor, ReactNode } from "react";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link: { route: To; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; imgURL: string | undefined; }) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`${
              isActive && "rounded-[10px] bg-primary-500 "
            } flex-center flex-col gap-1 p-2 transition`}>
            <img
              src={link.imgURL}
              alt={link.label}
              width={16}
              height={16}
              className={`${isActive && "invert-white"}`}
            />

            <p className="tiny-medium text-light-2">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;