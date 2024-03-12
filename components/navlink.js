import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavLink = ({ href, text }) => {
    const router = useRouter()

    let childClassName = (router.pathname === href) ? 'text-white' : 'text-gray-400';

    return (
        <Link href={href}>
            <span className={childClassName}>{text}</span>
        </Link>
    );
}

export default NavLink
