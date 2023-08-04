import DownloadButton from '@/components/Buttons/DownloadButton/DownloadButton';
import FormComponent from '@/components/Forms/form';
import UploadButton from '@/components/Buttons/UploadButton/UploadButton';
import TradeLotCard from '@/components/LotCard/lot-card';
import Navbar from '@/components/NavBars/Navbar/Navbar';

export default function Test() {
  return (
    <main>
      <TradeLotCard
        number={12345}
        description="Торговый лот описания"
        performer="Имя исполнителя"
        price={100}
        conditions="Условия торгового лота"
      />
      <FormComponent />
      <UploadButton />
      <DownloadButton />
      <Navbar balance={50} name={'Ivan'} isTrackerPage={false} />
      <h1>Test</h1>
    </main>
  );
}
