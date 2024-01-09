import Image from 'next/image'

import blogImage from '@/assets/blogimage.svg'

export default function Home() {
  return (
    <div className="grid place-content-center content-center h-screen px-4">
      <div className="max-w-[328px] bg-white flex flex-col gap-6 p-6 rounded-[20px] border border-black shadow-3xl md:max-w-[384px]">
        <header>
          <Image src={blogImage} alt="Blog Image" />
        </header>

        <main className="flex flex-col justify-center gap-3">
          <div className="py-1 px-3 bg-yellow rounded self-start">
            <strong className="text-xs font-extrabold md:text-sm">
              learning
            </strong>
          </div>

          <span className="text-xs md:text-sm">Published 21 Dec 2023</span>

          <h1 className="text-xl font-extrabold md:text-2xl hover:text-yellow cursor-pointer">
            HTML & CSS foundations
          </h1>

          <p className="text-sm text-grey md:text-base">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </main>
        <footer className="flex items-center gap-3">
          <Image
            src={'https://github.com/ymillerr.png'}
            width={32}
            height={32}
            alt="User picture"
            className="rounded-full"
          />

          <span className="font-extrabold text-sm">Thomas Miller</span>
        </footer>
      </div>
    </div>
  )
}
