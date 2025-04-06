import Image from 'next/image';
import Link from 'next/link';
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
    return (
        <nav className="flex flex-wrap items-center justify-between gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={wescodeLogo} alt="WesCode logo" width={100} height={40} />
            </Link>
            <div className="flex items-center gap-4">
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2">
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <Link
                    href="https://github.com/johnwesleyquintero/wescode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
