import { SearchIcon } from 'lucide-react'
import Header from './_components/Header'
import { Button } from './_components/ui/button'
import { Input } from './_components/ui/input'
import Image from 'next/image'

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />

      {/*  */}
      <div className="p-5">
        <h2 className="text-xl font-bold">Ola, Victor!</h2>
        <p>Terça-feira, 06 de agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com Barber Shop"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
