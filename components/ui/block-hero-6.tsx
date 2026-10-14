import { BookOpen, Home, ListChecks, Plus, Users } from "lucide-react";

const blobClip =
  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

const bills = [
  { who: "Al-Noor Traders", what: "Bill · aaj", amt: "Rs 48,500", tag: "Read" },
  { who: "Kashif & Sons", what: "Quote · kal", amt: "Rs 1,25,000", tag: "Check", flag: true },
  { who: "K-Electric", what: "Bill · 2 din", amt: "Rs 18,240", tag: "Read" },
  { who: "Hamza Packaging", what: "Parchi · 3 din", amt: "Rs 62,300", tag: "Read" },
];

/** Hisaab Desk screen laid over the phone in the stock photo. Sizes use cqw so it scales with the image. */
function PhoneScreen() {
  return (
    <div
      aria-hidden
      className="absolute flex flex-col overflow-hidden rounded-b-[2.6cqw] bg-cream font-sans text-ink-2"
      style={{ left: "36.8%", width: "26.9%", top: "5.6%", height: "64.2%" }}
    >
      <div className="flex items-center justify-between px-[1.4cqw] pt-[1.2cqw]">
        <span className="font-display text-[1.9cqw] font-extrabold leading-none">To check</span>
        <span className="rounded-full bg-pink px-[0.8cqw] py-[0.3cqw] text-[1.1cqw] font-bold leading-none text-white">4</span>
      </div>

      <div className="mx-[1.4cqw] mt-[1.2cqw] rounded-[1cqw] bg-ink-2 p-[1.1cqw]">
        <p className="text-[0.9cqw] font-medium leading-none text-body-dark">Is mahine kharcha</p>
        <p className="mt-[0.5cqw] text-[1.9cqw] font-bold leading-none text-lime">Rs 4,85,000</p>
      </div>

      <div className="mt-[1.2cqw] flex flex-col gap-[0.9cqw] px-[1.4cqw]">
        {bills.map((b) => (
          <div
            key={b.who}
            className={`rounded-[0.9cqw] border p-[0.9cqw] ${b.flag ? "border-berry/30 bg-blush" : "border-line-light bg-white"}`}
          >
            <div className="flex items-center justify-between gap-[0.5cqw]">
              <span className="truncate text-[1.1cqw] font-bold leading-tight">{b.who}</span>
              <span
                className={`shrink-0 rounded-full px-[0.6cqw] py-[0.2cqw] text-[0.8cqw] font-bold leading-none ${
                  b.flag ? "bg-berry text-white" : "bg-lime text-ink-2"
                }`}
              >
                {b.tag}
              </span>
            </div>
            <div className="mt-[0.4cqw] flex items-center justify-between text-[0.95cqw] leading-none">
              <span className="text-caption">{b.what}</span>
              <span className="font-bold">{b.amt}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-[1.4cqw] mt-[1.4cqw] flex gap-[0.6cqw]">
        <span className="flex-1 rounded-full bg-lime py-[0.7cqw] text-center text-[1cqw] font-bold leading-none">Confirm</span>
        <span className="flex-1 rounded-full border border-ink-2 py-[0.7cqw] text-center text-[1cqw] font-bold leading-none">Edit</span>
      </div>

      <div className="mt-auto flex items-center justify-around border-t border-line-light bg-white px-[0.8cqw] pb-[1.6cqw] pt-[0.9cqw]">
        <Home className="size-[1.6cqw]" strokeWidth={2} />
        <ListChecks className="size-[1.6cqw] text-berry" strokeWidth={2} />
        <span className="flex size-[2.6cqw] items-center justify-center rounded-full bg-lime">
          <Plus className="size-[1.6cqw]" strokeWidth={2.5} />
        </span>
        <BookOpen className="size-[1.6cqw]" strokeWidth={2} />
        <Users className="size-[1.6cqw]" strokeWidth={2} />
      </div>
    </div>
  );
}

//  ------------------------------ | HERO 6 | ------------------------------  //

export default function Hero6() {
  return (
    <section className="relative overflow-hidden bg-ink pt-20 sm:pt-28">
      <div className="absolute inset-0 z-10 bg-linear-to-t from-ink/50 to-lime opacity-25"></div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-50"
      >
        <div
          style={{ clipPath: blobClip }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-lime from-10% via-pink via-30% to-berry to-90% opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
      >
        <div
          style={{ clipPath: blobClip }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-berry from-10% via-pink via-30% to-lime to-90% opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
      <div className="relative z-30 container mx-auto px-6 lg:px-8">
        <div className="grid w-full grid-cols-12 gap-y-8 md:gap-8">
          <div className="col-span-12 flex flex-col items-center text-center md:col-span-8 md:col-start-3">
            <div className="flex flex-col items-center gap-2 text-center sm:gap-5">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-transparent to-lime sm:w-25"></div>
                <span className="text-md font-semibold text-lime sm:text-lg">Hisaab Desk app</span>
                <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-lime to-transparent sm:w-25"></div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <h2 className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-5xl">
                  Aap ka munshi, aap ki jeb mein.
                </h2>
                <p className="font-display text-2xl font-extrabold tracking-tight text-paper sm:text-5xl">
                  iPhone <span className="text-lime">&amp;</span> Android
                </p>
              </div>

              <p className="max-w-100 text-body-dark">
                Bill ki photo lo, AI ka kaam check karo, approve karo. Dukaan se, ghar se, kahin se bhi.
              </p>
            </div>
            <div className="mt-5 mb-8 flex flex-wrap justify-center gap-4">
              <a href="/waitlist" className="hover:shadow-2xl" aria-label="Coming soon on the App Store. Join the waitlist">
                <div className="flex w-44 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-paper/50 bg-ink-2 px-4 py-2 text-paper transition hover:border-lime">
                  <div className="-ml-2 shrink-0">
                    <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                  </div>
                  <div className="grow">
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-xs">Coming soon on</span>
                      <span className="text-md">App Store</span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="/waitlist" className="hover:shadow-2xl" aria-label="Coming soon on Google Play. Join the waitlist">
                <div className="flex w-44 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-paper/50 bg-ink-2 px-4 py-2 text-paper transition hover:border-lime">
                  <div className="-ml-2 shrink-0">
                    <svg className="size-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_87_8320" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26">
                        <path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4" />
                      </mask>
                      <g mask="url(#mask0_87_8320)">
                        <path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)" />
                        <path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)" />
                        <path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)" />
                        <path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)" />
                      </g>
                      <defs>
                        <linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00C3FF" />
                          <stop offset="1" stopColor="#1BE2FA" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FFCE00" />
                          <stop offset="1" stopColor="#FFEA00" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#DE2453" />
                          <stop offset="1" stopColor="#FE3944" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#11D574" />
                          <stop offset="1" stopColor="#01F176" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="grow">
                    <div className="flex flex-col items-start gap-0.5">
                      <span className="text-xs uppercase">Coming soon on</span>
                      <span className="text-md">Google Play</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="relative col-span-12 flex items-center justify-center">
            <div className="absolute inset-x-0 flex justify-center px-6 text-center lg:px-8">
              <span className="mask-t-from-5% mask-t-to-95% mask-exclude mask-match font-display text-[7.5cqw] leading-none font-extrabold tracking-tight whitespace-nowrap text-paper">
                hisaab desk
              </span>
            </div>
            <div className="@container relative mx-auto w-160 max-w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/app-in-hand.webp"
                alt="Hisaab Desk app on a phone"
                width={1400}
                height={1224}
                loading="lazy"
                className="h-auto w-full object-contain drop-shadow-2xl"
              />
              <PhoneScreen />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
