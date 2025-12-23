import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <div className="text-preset-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          adipisci? Nihil molestias in magnam, tempore voluptatem autem cum
          optio dicta, quas, ex omnis qui minus animi dolorem obcaecati
          explicabo? Ea!
        </div>
        <div className="text-preset-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius et
          neque ea reprehenderit, provident deserunt in optio ex dolorem quo
          doloremque error voluptas, ullam amet officia iure voluptatem
          voluptatum iusto!
        </div>
        <div className="text-preset-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, cum
          aspernatur dolore aliquam omnis delectus eius ea esse quas fugit, amet
          quibusdam. Corrupti nesciunt neque alias eos ipsa quos debitis.
        </div>
        <div className="text-preset-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          aspernatur fugiat architecto tempora cumque, perspiciatis ut nemo
          obcaecati est dicta, necessitatibus odit quidem expedita laboriosam
          ratione ex libero saepe quo.
        </div>
        <div className="text-preset-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          adipisci? Nihil molestias in magnam, tempore voluptatem autem cum
          optio dicta, quas, ex omnis qui minus animi dolorem obcaecati
          explicabo? Ea!
        </div>
        <div className="text-preset-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          aspernatur fugiat architecto tempora cumque, perspiciatis ut nemo
          obcaecati est dicta, necessitatibus odit quidem expedita laboriosam
          ratione ex libero saepe quo.
        </div>
      </div>
      <div className="container mx-auto my-8 flex flex-col gap-4 px-4 sm:px-6 lg:px-8">
        {/* spacing */}
        <div className="flex flex-col gap-2">
          <div className="w-[var(--spacing-0)] bg-pink-400">0</div>
          <div className="w-[var(--spacing-100)] bg-pink-400">100</div>
          <div className="w-[var(--spacing-200)] bg-pink-400">200</div>
          <div className="w-[var(--spacing-300)] bg-pink-400">300</div>
          <div className="w-[var(--spacing-500)] bg-pink-400">500</div>
          <div className="w-[var(--spacing-700)] bg-pink-400">700</div>
          <div className="w-[var(--spacing-800)] bg-pink-400">800</div>
        </div>
      </div>
      <div className="flex min-h-svh items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-preset-1 font-family-heading text-gray-100">
            Hello World
          </h1>
          <div className="gradient-3-stops h-64 w-full bg-gradient-to-r text-2xl">
            Test
          </div>
          <Button size="sm">Button</Button>
        </div>
      </div>
    </>
  );
}
