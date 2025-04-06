'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import wescodeLogo from 'public/logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Revalidation', href: '/revalidation' },
    { linkText: 'Image CDN', href: '/image-cdn' },
    { linkText: 'Edge Function', href: '/edge' },
    { linkText: 'Blobs', href: '/blobs' },
    { linkText: 'Classics', href: '/classics' }
];

export function Header() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-12 sm:pt-12 md:pb-24" role="navigation" aria-label="Main navigation">
            <Link href="/" aria-label="Go to homepage">
                <Image src={wescodeLogo} alt="WesCode logo" width={100} height={40} priority />
            </Link>
            <div className="flex items-center gap-4">
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-1" role="menubar">
                        {navItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={index} role="none">
                                    <Link 
                                        href={item.href} 
                                        className={`inline-flex px-1.5 py-1 sm:px-3 sm:py-2 transition-colors ${isActive ? 'text-primary font-medium' : 'hover:text-primary'}`}
                                        role="menuitem"
                                        aria-current={isActive ? 'page' : undefined}
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
                <Link
                    href="https://github.com/johnwesleyquintero/wescode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex hover:opacity-80 transition-opacity"
                    aria-label="View source code on GitHub"
                >
                    <Image src={githubLogo} alt="" className="w-7" aria-hidden="true" />
                </Link>
            </div>
        </nav>
    );
}
