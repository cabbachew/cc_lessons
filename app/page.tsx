import { apercu, apercuMono, inter } from "./fonts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1
        className={`${apercu.className} text-[34px] leading-[40px] font-bold tracking-[-0.04em] text-[#111827]`}
      >
        Morning, Daniel (Apercu Bold)
      </h1>
      <p
        className={`${apercuMono.className} mt-4 text-[16px] leading-[24px] text-[#4B5563]`}
      >
        Your custom monospace font is working too. (Apercu Mono)
      </p>
      <p
        className={`${inter.className} mt-4 text-[16px] leading-[24px] text-[#4B5563]`}
      >
        This text is using Inter font. (Inter)
      </p>
    </div>
  );
}
