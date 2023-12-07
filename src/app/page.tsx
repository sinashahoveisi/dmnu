import Image from 'next/image';
import LinkButton from 'components/button/LinkButton';
import information from 'config/information';
import ProductSection from './ProductSection';

function Home() {
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
          <LinkButton title="اطلاعات بیشتر" variant="ghost" href="/about-us" />
        </div>
        <h1 className="text-xl">{information.name}</h1>
        <p className="text-sm font-light">{information.description}</p>
      </div>
      <ProductSection />
    </main>
  );
}

export default Home;
