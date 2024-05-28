import Image from 'next/image';
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <div>
      Home Page
      {/* <Image src={homeImg} alt='home image' fill style={{ objectFit: 'cover' }} /> */}
      <Image src={homeImg} alt='image' width={800} height={600} />
      <div>Buy our product</div>
    </div>
  );
}
