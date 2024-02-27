import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "~/components/ui/button"
const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main className="mx-auto max-w-screen-sm p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
        <div className="flex justify-center">
            <Button className="w-full text-xl">Создать</Button>
        </div>

    </main>
  );
}
