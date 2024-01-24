import dynamic from 'next/dynamic';

const DynamicHerosection = dynamic(() => import('@/app/components/Herosection'), {
  loading: () => <p>Loading Herosection...</p>,
});

const Page = () => {
  return (
    <>
      <DynamicHerosection imageUrl={"/img/logo.png"} />
    </>
  );
};

export default Page;
