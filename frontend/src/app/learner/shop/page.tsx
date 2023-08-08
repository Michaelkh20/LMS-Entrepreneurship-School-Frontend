import styles from './page.module.css';
import { Jura } from 'next/font/google';
import TradeLotCard from '@/components/LotCard/lot-card';
import LotApplication from '@/components/LotClaimLearner/LotClaimLearner';

const jura = Jura({
  subsets: ['cyrillic'],
});

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.page_label} ${jura.className}`}>МАГАЗИН</h1>
      <div className={styles.lots_container}>
        <TradeLotCard
          number={12345}
          description="Торговый лот описания"
          performer="Имя исполнителя"
          price={200}
          conditions="Условия торгового лота"
        />
        <TradeLotCard
          number={12345}
          description="Торговый лот описания"
          performer="Имя исполнителя"
          price={200}
          conditions="Условия торгового лота"
        />
        <TradeLotCard
          number={12345}
          description="Торговый лот описания"
          performer="Имя исполнителя"
          price={200}
          conditions="Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота "
        />
        <TradeLotCard
          number={12345}
          description="Торговый лот описания"
          performer="Имя исполнителя"
          price={200}
          conditions="Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота Условия торгового лота "
        />
      </div>
      <LotApplication />
    </div>
  );
}
