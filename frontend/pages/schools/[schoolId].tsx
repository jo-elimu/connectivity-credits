import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import Logos from "@/public/logos.png"
import Map from "@/components/Map";
import SkeletonLoader from "@/components/SkeletonLoader";
import ConnectivityStatus from "@/components/ConnectivityStatus";

export default function School({school}: any) {
  console.log('School')
  console.log('school:', school)

  const router: NextRouter = useRouter()
  console.log('router.isFallback:', router.isFallback)

  return (
    <div>
      <header className="p-8 border-b-2 border-slate-800 text-xl">
        <a
          className="rounded-full bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] px-8 py-2 float-right"
          href="#"
          rel="noopener noreferrer"
        >
          Connect Wallet
        </a>
        <div className="py-2">
          CONNΞCTIVITY CRΞDITS
        </div>
        <div className="clear-right"></div>
      </header>
      <main className="p-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full">
            <div className="border-2 border-r-4 border-b-4 border-slate-800 shadow rounded-xl min-h-64">
              {router.isFallback ? (
                <div className="animate-pulse p-4 bg-slate-900">
                  Map loading...
                </div>
              ) : (
                <Map school={school} />
              )}
            </div>
        </div>
        <div className="w-full">
          {router.isFallback ? (
            <SkeletonLoader />
          ): (
            <>
              <p>
                <label className="font-bold">School ID</label><br />
                {school.giga_id_school}
              </p>
              <p className="mt-4">
                <label className="font-bold">School name</label><br />
                {school.school_name}
              </p>
              <p className="mt-4">
                <label className="font-bold">Connectivity status</label><br />
                <ConnectivityStatus />
              </p>
              <p className="mt-4">
                <label className="font-bold">Country</label><br />
                {school.country_iso3_code}
              </p>
              <p className="mt-4">
                <label className="font-bold">Education level</label><br />
                {school.education_level}
              </p>
            </>
          )}
        </div>
      </main>
      <footer className="p-8 border-t-2 border-slate-800 flex justify-center">
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context: any) {
  const schoolId: string = context.params.schoolId
  const response = await fetch(`https://uni-ooi-giga-maps-service.azurewebsites.net/api/v1/schools_location/giga_id/${schoolId}`, {
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY_GIGA}`
    }
  })
  const json = await response.json()
  const school = json.data[0]
  return {
    props: {
      school: school
    }
  }
}
