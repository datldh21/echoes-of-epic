import Link from 'next/link';
import Logo from '@/components/icons/logo';
import { FOOTER_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 text-center sm:items-start">
          <Logo />
          <p className="max-w-md text-sm text-muted-foreground">
            Dự án văn học số về trích đoạn Héctơ từ biệt Ăngđrômác (Iliad – Homer)
          </p>
        </div>
        <div className="flex items-center gap-2">
          {FOOTER_LINKS.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              aria-label={link.label}
            >
              <Link href={link.href} target="_blank">
                <link.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-4">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Echoes of Epic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
