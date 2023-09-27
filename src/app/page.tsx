import Image from 'next/image';
import TextInput from 'components/input/Input';
import LinkButton from 'components/button/LinkButton';

export default function Home() {
  return (
    <main className="container">
      <h1>آبمیوه و بستنی توچال (شریعتی)</h1>
      <TextInput
        type="text"
        name="postal_code"
        // leftElement={<LocalPostOffice size={18} className="text-gray-400" />}
      />
      <LinkButton title="اطلاعات بیشتر" variant="ghost" href="/" />
    </main>
  );
}
