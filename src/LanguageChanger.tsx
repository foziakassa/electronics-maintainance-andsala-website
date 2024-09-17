'use client';

import { useRouter, usePathname } from '@/navigation' 

interface LanguageChangerProps {
  locale: string;
}

export default function LanguageChanger({ locale }: LanguageChangerProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, {locale:e.target.value  });
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="am">Amharic</option>
      <option value="so">somali</option>
      <option value="om">tigray</option>
    </select>
  );
}