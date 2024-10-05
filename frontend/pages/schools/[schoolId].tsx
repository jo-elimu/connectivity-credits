import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import Logos from "@/public/logos.png"

export default function School() {
  const router: NextRouter = useRouter()
  const schoolId: string = String(router.query.schoolId)
  console.log('schoolId:', schoolId)
  return (
    <div>
      <header className="p-8 border-b-2 border-teal-800">
        header
      </header>
      <main className="p-8">
        schoolId: {schoolId}
      </main>
      <footer className="p-8 border-t-2 border-teal-800">
        <Image
            src={Logos}
            alt="Logos"
            width={240}
            height={0}
          />
      </footer>
    </div>
  );
}
