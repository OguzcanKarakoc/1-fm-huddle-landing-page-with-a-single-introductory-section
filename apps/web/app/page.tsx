import { Button } from '@workspace/ui/components/button'
import Image from 'next/image'

export const BG_IMAGES = {
  desktop: '/bg-desktop.svg',
  tablet: '/bg-tablet.svg',
  mobile: '/bg-mobile.svg',
} as const

export default function Page() {
  return (
    <div className={`
      grid min-h-screen grid-rows-[1fr_auto] bg-[url('/bg-mobile.svg')] bg-cover
      px-9 py-10
      md:gap-500 md:px-20
      lg:gap-300 lg:bg-[url('/bg-mobile.svg')] lg:px-21 lg:py-16
    `}
    >
      <div className="flex flex-col gap-800">
        <header>
          <Image src="/logo.svg" alt="Logo" width={120} height={20} />
        </header>
        <div className={`
          flex flex-col gap-700
          md:gap-500
          lg:flex-row lg:gap-700
        `}
        >
          <Image
            src="/illustration-mockups.svg"
            alt="Illustration"
            className="w-full"
            width={400}
            height={300}
          />
          <div className={`
            flex flex-col gap-400
            md:gap-500
          `}
          >
            <div className="flex flex-col gap-300 text-center text-white">
              <h1 className="text-preset-2">
                Build The Community Your Fans Will Love
              </h1>
              <p className="text-preset-5">
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>
            </div>
            <div className="flex justify-center">
              <Button variant="default">Register</Button>
            </div>
            {/* <footer className="hidden bg-gray-200 p-4 text-center md:block lg:hidden">
              <Button variant="default">Footer btn icon</Button>
            </footer> */}
          </div>
        </div>
      </div>

      <footer className="flex justify-end">
        <Button variant="outline">icon</Button>
      </footer>
    </div>
  )
}
