'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import Logo from '@/components/icons/logo';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setMobileMenuOpen(false)}
      className={cn(
        'rounded-md px-3 py-2 text-sm font-medium transition-colors',
        pathname === href
          ? 'bg-primary/10 text-primary'
          : 'text-muted-foreground hover:bg-primary/5 hover:text-primary'
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex flex-col">
          <Logo />
          <p className="hidden text-xs text-muted-foreground sm:block">
            Iliad – Homer
          </p>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                   <Link
                   key={link.href}
                   href={link.href}
                   onClick={() => setMobileMenuOpen(false)}
                   className={cn(
                     "flex items-center gap-3 rounded-lg px-3 py-2 text-lg font-semibold",
                     pathname === link.href
                       ? "bg-primary/10 text-primary"
                       : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                   )}
                 >
                   <link.icon className="h-5 w-5" />
                   {link.label}
                 </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
