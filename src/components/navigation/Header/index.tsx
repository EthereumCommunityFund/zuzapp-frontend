import Image from "next/image";

import Button from "@/components/commons/buttons/Button";

// Create header of the dashboard, with a search form and a Connect Wallet button.
export default function DashboardHeader() {
  return (
    <header className="w-full py-3 px-8 space-x-10 flex justify-end bg-[#2F3232E5]">
      <div>
        <input type="text" placeholder="Search" className="w-96 h-10 rounded-3xl px-5 bg-transparent" />
      </div>
      <div>
        <Button variant="dark" className="">
          <Image src="/images/zaluza blackandwhite.png" width={20} height={20} alt="Passport" className="mr-2" />
          Connect Passport
        </Button>
      </div>
    </header>
  )
}