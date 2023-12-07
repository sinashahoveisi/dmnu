import Image from 'next/image';
import LinkButton from 'components/button/LinkButton';
import LocationMap from 'components/map/LocationMap';
import information from 'config/information';
import type {ShiftWorkInterface} from 'types/resturant';

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
          className="font-light !text-indigo-800 underline"
          href={`tel:${information.phone}`}
        />
      </div>
      <section id="map" className="container my-4">
        <LocationMap latitude={information.location.latitude} longitude={information.location.longitude} />
        <div className="flex flex-row justify-between items-center space-x-3 space-x-reverse">
          <LinkButton
            title="مسیریابی با waze"
            className="flex-1"
            href={`https://www.waze.com/ul?ll=${information.location.latitude},${information.location.longitude}&navigate=yes`}
          />
          <LinkButton
            title="مسیریابی با googleMap"
            className="flex-1"
            href={`https://www.google.com/maps/dir/?api=1&destination=${information.location.latitude},${information.location.longitude}`}
          />
        </div>
      </section>
      <section id="shiftsWork" className="container my-4">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
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
                <tr className="bg-white border-b hover:bg-gray-50 text-center">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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
