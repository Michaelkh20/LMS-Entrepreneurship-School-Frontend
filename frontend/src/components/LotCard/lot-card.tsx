import styles from './card.module.css';
interface TradeLotCardProps {
    number: number;
    description: string;
    performer: string;
    price: number;
    conditions: string;
}

const TradeLotCard: React.FC<TradeLotCardProps> = ({
    number,
    description,
    performer,
    price,
    conditions,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.number}>Лот №{number}</h3>
            </div>
            <div className={styles.body}>
                <p className={styles.description}>Описание: {description}</p>
                <p className={styles.performer}>
                    <h1 className={styles.pink}> Исполнитель лота: </h1>
                    {performer}
                </p>
                <p className={styles.price}>
                    Стоимость лота: <span className={styles.bigBlue}>{price}</span>
                </p>
                <p className={styles.conditions}><span className={styles.smallBlue} >Условия:</span> {conditions}</p>
            </div>
            <div className={styles.footer}>
                <button className={styles.button}>Подать заявку</button>
            </div>
        </div>
    );
};

export default TradeLotCard;

