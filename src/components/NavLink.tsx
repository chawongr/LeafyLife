import React, { ReactNode, MouseEvent} from "react";
import { Link } from 'react-scroll'

interface NavLinkProps {
    children: ReactNode;
    to?: string
    offset?: number;
    mobileMenu?: boolean;
    onClick?: (event: MouseEvent) => void;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
    children,
    to,
    offset = -50,
    mobileMenu = false,
    onClick,
    className

}) => {

    const ClassName = mobileMenu
        ? "text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center"
        : "text-black lg:text-xl cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent";

    const OnClick = ["a","b"]

    if (to) {
        return (
            <Link
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={1000}
                className={ClassName}
            >
                {children}
            </Link>
        );
    }
    else {
        return (
            <div
                className={ClassName}
                onClick={onClick}
            >
                {children}
            </div>
        );
    }


};

export default NavLink;
