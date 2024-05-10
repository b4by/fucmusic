import Link from "next/link";
import { Logo } from "./logo";
import { navLinks } from "@/constants/navLinks";

export const Footer = () => {
  return (
    <section className="bg-pattern bg-contain bg-center" id="contacts">
      <footer>
        <div className="mx-auto max-w-7xl divide-y divide-white border-white lg:border-x ">
          <div className="flex flex-col items-start justify-between gap-y-12 px-8 py-16 pt-16 lg:flex-row lg:items-center lg:px-24">
            <div className="lg:mx-auto lg:text-center">
              <div className="flex flex-col gap-y-3 lg:items-center">
                <div className="flex items-center text-white">
                  <Link
                    href="/"
                    className="group block flex-shrink-0 lg:mx-auto lg:text-left"
                  >
                    <div className="flex items-center">
                      <Logo className="transition ease-in group-hover:opacity-75" />
                      <div className="ml-3 flex flex-col gap-y-[1px]">
                        <span className="font-bold uppercase leading-none text-white transition ease-in group-hover:text-gray-300">
                          FUC MUSIC
                        </span>
                        <span className="text-[10px] transition ease-in group-hover:text-gray-300">
                          студия звукозаписи
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-col gap-y-6 lg:items-center lg:gap-y-3">
                  <a
                    href="https://yandex.ru/maps/-/C2uJNrr"
                    className="group flex items-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="h-4 w-4 group-hover:stroke-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      ></path>
                    </svg>
                    <span className="text-sm font-normal leading-none text-white group-hover:text-gray-300">
                      ул. Большие Каменщики 21/8
                    </span>
                  </a>
                  <Link
                    href="tel:+79255868593"
                    className="group flex items-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="h-4 w-4 group-hover:stroke-gray-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      ></path>
                    </svg>
                    <span className="text-sm font-normal leading-none text-white group-hover:text-gray-300">
                      +7 (925) 586-85-93
                    </span>
                  </Link>
                </div>
                <ul className="flex items-center gap-4">
                  <li>
                    <a href="https://vk.com/fucstudio" className="group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="h-[40px] w-[40px] group-hover:hidden"
                      >
                        <g clipPath="url(#clip0_186_6683)">
                          <path
                            fill="#000"
                            d="M0 11.52c0-5.43 0-8.146 1.687-9.833C3.374 0 6.09 0 11.52 0h.96c5.43 0 8.146 0 9.833 1.687C24 3.374 24 6.09 24 11.52v.96c0 5.43 0 8.146-1.687 9.833C20.626 24 17.911 24 12.48 24h-.96c-5.43 0-8.146 0-9.833-1.687C0 20.626 0 17.911 0 12.48v-.96z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58c-.43 2.44-2.23 4.24-3.51 4.98 1.28.6 3.33 2.17 4.11 5.01h-2.84c-.61-1.9-2.13-3.37-4.14-3.57v3.57h-.31z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_186_6683">
                            <path fill="#fff" d="M0 0H24V24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="hidden h-[40px] w-[40px] group-hover:block"
                      >
                        <g clipPath="url(#clip0_196_3839)">
                          <path
                            fill="#07F"
                            d="M0 11.52c0-5.43 0-8.146 1.687-9.833C3.374 0 6.09 0 11.52 0h.96c5.43 0 8.146 0 9.833 1.687C24 3.374 24 6.09 24 11.52v.96c0 5.43 0 8.146-1.687 9.833C20.626 24 17.911 24 12.48 24h-.96c-5.43 0-8.146 0-9.833-1.687C0 20.626 0 17.911 0 12.48v-.96z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58c-.43 2.44-2.23 4.24-3.51 4.98 1.28.6 3.33 2.17 4.11 5.01h-2.84c-.61-1.9-2.13-3.37-4.14-3.57v3.57h-.31z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_196_3839">
                            <path fill="#fff" d="M0 0H24V24H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/FUCMUSICSTUDIO" className="group">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        className="h-[40px] w-[40px] group-hover:fill-[#29b6f6]"
                      >
                        <path
                          fill="currentColor"
                          d="M24 4a20 20 0 100 40 20 20 0 100-40z"
                          className="group-hover:fill-[#29b6f6]"
                        ></path>
                        <path
                          fill="#fff"
                          d="M33.95 15l-3.746 19.126s-.161.874-1.245.874c-.576 0-.873-.274-.873-.274l-8.114-6.733-3.97-2.001-5.095-1.355S10 24.375 10 23.625c0-.625.933-.923.933-.923l21.316-8.468c-.001-.001.651-.235 1.126-.234.292 0 .625.125.625.5 0 .25-.05.5-.05.5z"
                        ></path>
                        <path
                          fill="#b0bec5"
                          d="M23 30.505l-3.426 3.374s-.149.115-.348.12a.494.494 0 01-.219-.043l.964-5.965L23 30.505z"
                        ></path>
                        <path
                          fill="#cfd8dc"
                          d="M29.897 18.196a.5.5 0 00-.701-.093L16 26s2.106 5.892 2.427 6.912c.322 1.021.58 1.045.58 1.045l.964-5.965 9.832-9.096a.499.499 0 00.094-.7z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send/?phone=79255868593&text&type=phone_number&app_absent=0"
                      className="group"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="800"
                        fill="#fff"
                        height="800"
                        viewBox="0 0 30.667 30.667"
                        className="h-[25px] w-[25px] group-hover:fill-[#25D366]"
                      >
                        <path d="M30.667 14.939c0 8.25-6.74 14.938-15.056 14.938a15.1 15.1 0 01-7.276-1.857L0 30.667l2.717-8.017a14.787 14.787 0 01-2.159-7.712C.559 6.688 7.297 0 15.613 0c8.315.002 15.054 6.689 15.054 14.939zM15.61 2.382c-6.979 0-12.656 5.634-12.656 12.56 0 2.748.896 5.292 2.411 7.362l-1.58 4.663 4.862-1.545c2 1.312 4.393 2.076 6.963 2.076 6.979 0 12.658-5.633 12.658-12.559C28.27 8.016 22.59 2.382 15.61 2.382zm7.604 15.998c-.094-.151-.34-.243-.708-.427-.367-.184-2.184-1.069-2.521-1.189-.34-.123-.586-.185-.832.182-.243.367-.951 1.191-1.168 1.437-.215.245-.43.276-.799.095-.369-.186-1.559-.57-2.969-1.817-1.097-.972-1.838-2.169-2.052-2.536-.217-.366-.022-.564.161-.746.165-.165.369-.428.554-.643.185-.213.246-.364.369-.609.121-.245.06-.458-.031-.643-.092-.184-.829-1.984-1.138-2.717-.307-.732-.614-.611-.83-.611-.215 0-.461-.03-.707-.03s-.646.089-.983.456-1.291 1.252-1.291 3.054c0 1.804 1.321 3.543 1.506 3.787.186.243 2.554 4.062 6.305 5.528 3.753 1.465 3.753.976 4.429.914.678-.062 2.184-.885 2.49-1.739.308-.858.308-1.593.215-1.746z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <nav className="mt-11 flex flex-col gap-8 lg:flex-row">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    className="500 relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-white transition-colors delay-150 hover:text-white"
                    href={link.href}
                  >
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-col px-8 pb-12 pt-8 md:pt-6 lg:mx-auto lg:px-24 lg:text-center">
            <p className="mt-6 text-sm uppercase text-zinc-500 md:mt-0">
              © Fuc Music
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
