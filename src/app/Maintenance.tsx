import { Icons } from "@🧱/icons/icons";

export default function Maintenance() {
  return (
    <div className="relative snap-mandatory min-h-dvh bg-AAprimary w-full flex justify-center items-center">
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <Icons.maintenance className="w-24 h-24 mx-auto mb-6 text-AAsecondary" />
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">
            Under Maintenance
          </h1>
          <p className="font-light md:text-lg xl:text-xl text">
            Sorry! the administrator is performing scheduled maintenance.
          </p>
        </div>
      </section>
    </div>
  );
}
