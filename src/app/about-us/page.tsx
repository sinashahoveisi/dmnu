import Image from 'next/image';
import dynamic from 'next/dynamic';
import LinkButton from 'components/button/LinkButton';
import information from 'config/information';
import type {ShiftWorkInterface} from 'types/resturant';

const LocationMap = dynamic(() => import('components/map/LocationMap'), {
  ssr: false
});

function AboutUs() {
  return (
    <main>
      <header>
        <div className="header" />
      </header>
      <div className="container">
        <div className="relative flex flex-row justify-between items-end mb-6">
          <Image
            src="/images/logo.png"
            height={80}
            width={100}
            className="rounded bg-white border shadow-lg p-1 object-contain -mt-12"
            alt="Picture of the tochal"
          />
          <LinkButton title="نمایش منو" variant="ghost" href="/" />
        </div>
        <h1 className="text-xl">{information.name}</h1>
        <p className="text-sm font-light">{information.location.address}</p>
        <LinkButton
          title={information.phone}
          variant="ghost"
          className="font-light !text-indigo-400 underline"
          href={`tel:${information.phone}`}
        />
      </div>
      <section id="map" className="container my-4">
        <LocationMap latitude={information.location.latitude} longitude={information.location.longitude} />
        <div className="mt-2 flex flex-col sm:flex-row justify-between items-center sm:space-x-3 sm:space-x-reverse">
          <LinkButton
            title="مسیریابی با waze"
            className="flex-1"
            width="w-full"
            href={`https://www.waze.com/ul?ll=${information.location.latitude},${information.location.longitude}&navigate=yes`}
          />
          <LinkButton
            title="مسیریابی با googleMap"
            className="flex-1"
            width="w-full"
            href={`https://www.google.com/maps/dir/?api=1&destination=${information.location.latitude},${information.location.longitude}`}
          />
        </div>
      </section>
      <section id="shiftsWork" className="container my-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400 text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  روز کاری
                </th>
                <th scope="col" className="px-6 py-3">
                  ساعت کاری
                </th>
              </tr>
            </thead>
            <tbody>
              {information.shiftsWork.map((shiftWork: ShiftWorkInterface) => (
                <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600 text-center">
                  <th scope="row" className="px-6 py-4 font-medium text-pen whitespace-nowrap">
                    {shiftWork.day}
                  </th>
                  <td className="px-6 py-4">{`${shiftWork.time.start} - ${shiftWork.time.end}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
