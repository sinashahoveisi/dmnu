import Image from 'next/image';
import TextInput from 'components/input/Input';
import LinkButton from 'components/button/LinkButton';
import Button from 'components/button/Button';
import ProductCard from 'components/card/ProductCard';
import times from 'lodash/times';
import ScrollSpy from 'components/scroll/ScrollSpy';
import clsx from 'clsx';

const categories = ['میوه', 'پر‌طرفدارها', 'آبمیوه', 'اسپشیال', 'آبمیوه ترکیبی', 'شیک'];

function Home() {
  return (
    <main>
      <header>
        <div className="header">
          <div className="container relative flex justify-end">
            <Button title="ورود" />
          </div>
        </div>
      </header>
      <div className="container">
        <div className="relative flex flex-row justify-between items-end mb-6">
          <Image
            src="/images/tochal.png"
            height={80}
            width={100}
            className="rounded bg-white border shadow-lg p-1 object-contain -mt-12"
            alt="Picture of the tochal"
          />
          <LinkButton title="اطلاعات بیشتر" variant="ghost" href="/" />
        </div>
        <h1 className="text-xl">آبمیوه و بستنی توچال (شریعتی)</h1>
        <LinkButton title="0921212121" variant="ghost" className="font-light text-indigo-800" href="tel:0921212121" />
      </div>
      <div className="container sticky top-0 bg-white py-4">
        <div className="flex flex-col space-y-6">
          <ScrollSpy sections={categories} />
          <TextInput
            type="text"
            name="postal_code"
            placeholder="جستجوی غذا"
            // leftElement={<LocalPostOffice size={18} className="text-gray-400" />}
          />
        </div>
      </div>
      <section id="categories" className="container my-4">
        {categories?.map((category: string) => (
          <section key={category} id={category}>
            <h2 className="text-sm font-normal divide-text">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-4 my-4">
              {times(4, (index: number) => (
                <ProductCard key={index} />
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

export default Home;
