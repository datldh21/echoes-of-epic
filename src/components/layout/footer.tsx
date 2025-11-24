import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-12 text-center">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <div className="max-w-xl text-sm text-muted-foreground">
            <p>Dự án văn học số môn Ngữ văn lớp 10 thuộc chương trình GDPT 2018, bộ sách Kết nối tri thức với cuộc sống</p>
            <p>Trích đoạn “Héc-to từ biệt Ăng-đrô-mác” (Iliad - Homer)</p>
          </div>
        </div>

        <Button asChild size="lg" className="group bg-primary hover:bg-primary/90">
            <Link href="/podcast">
              KHÁM PHÁ PODCAST
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>

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
