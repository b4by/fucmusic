"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { faqLinks } from "@/constants/faqLinks";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="relative mx-auto h-full max-w-7xl items-center border  border-y-0 border-b bg-black px-8 py-8 text-black lg:px-24 lg:py-16">
      <h2 className="mb-6 text-4xl font-bold uppercase text-white">FAQ</h2>
      <div className="mb-8 flex flex-col gap-y-8">
        <div>
          <h3 className="upeprcase text-2xl font-semibold text-white">
            Вся информация по аренде!
          </h3>
          <h4 className="font-light italic text-white">
            Ознакомление занимает 7 минут
          </h4>
        </div>
        <div className="flex flex-col gap-y-4 text-white">
          <ul className="flex flex-col gap-y-3 border-b pb-4">
            <li>
              За НАРКОТИКИ и/или АЛКОГОЛЬ вызываем ПОЛИЦИЮ, ГБР не уведомляя
              вас)
            </li>
            <li>Если больше 4х человек доплата за каждого 1000р</li>
            <li>
              Обращаться к администрации только после прочтения руководства!
            </li>
          </ul>
        </div>
      </div>
      <ul className="mb-8 flex flex-col gap-2 text-white">
        {faqLinks.map((link) => (
          <li key={link.id} className="w-fit text-lg">
            <Link
              href={link.path}
              className={cn(
                "relative text-blue-500",
                pathname === link.path && "underline underline-offset-8",
              )}
            >
              <div className="pl-2">
                <span className="relative pl-3 after:absolute after:left-0 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-blue-500">
                  {link.title}
                </span>
                {/* <span
                  className={cn(
                    "block h-[2px] w-full bg-gradient-to-r from-[#F18336] to-[#D12B2D] opacity-0",
                    pathname === link.path && "opacity-100",
                  )}
                /> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mb-8">{children}</div>
    </div>
  );
}
