import styles from './card.module.css';
import { Mulish, Jura } from 'next/font/google'

interface TradeLotCardProps {
  number: number;
  description: string;
  performer: string;
  price: number;
  conditions: string;
}

const jura = Jura({
    subsets: ['latin']
})

const TradeLotCard: React.FC<TradeLotCardProps> = ({
  number,
  description,
  performer,
  price,
  conditions,
}) => {
    return (
        <div className={styles.lot}>
            <div className={jura.className}>
                <h1 className={styles.lot_name}>Лот №{number}</h1>
            </div>
            <p className={styles.lot_content}>{description}</p>
            <p className={styles.lot_holder}>Исполнитель лота:</p>
            <p className={styles.lot_holder_name}>{performer}</p>
            <div className={styles.lot_price_container}>
                <p className={styles.lot_price}>Стоимость (ШПрот):</p>
                <p className={styles.lot_price_count}>{price}</p>
            </div>
            <p className={styles.lot_condition_value}><span className={styles.lot_condition}>Условия:</span> {conditions}</p>
            <button className={styles.application_lot_button}>Подать заявку</button>
        </div>
    );
};

export default TradeLotCard;
