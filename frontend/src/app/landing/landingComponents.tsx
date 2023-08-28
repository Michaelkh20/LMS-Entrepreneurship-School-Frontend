import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { useState } from 'react';

export function Block(props) {
  return (
    <div className={styles.componentBlock}>
      <div className={styles.name}>
        <span className={styles.number}>{props.number}</span>
        <span className={styles.about}>{props.about}</span>
      </div>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
}

export function AnnaText(props) {
  return (
    <div>
      <Image width={25} height={25} src="./landing/PinkCircle.svg" alt="" />
      <span>{props.text}</span>
    </div>
  );
}

export function ContestText(props) {
  if (props.color === 'blue') {
    return <span className={styles.blue}>{props.text}</span>;
  } else if (props.color === 'pink') {
    return <span className={styles.pink}>{props.text}</span>;
  } else {
    return <span className={styles.grey}>{props.text}</span>;
  }
}

const Carousel: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = Math.max(currentSlideIndex - 1, 0);
    setCurrentSlideIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(currentSlideIndex + 1, carouselItems.length - 1);
    setCurrentSlideIndex(newIndex);
  };

  const updateCarouselPosition = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current?.children[0].clientWidth || 0;
      const newPosition = -currentSlideIndex * slideWidth;
      carouselRef.current.style.transform = `translateX(${newPosition}px)`;
    }
  };

  const carouselItems = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
  ];

  const carouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    updateCarouselPosition();
  }, [currentSlideIndex]);

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.carousel_block}>
          <div>
            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert1.svg"
                alt=""
              />
              <HoverTextComponent name="Ступин Роман" hoverText="Описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert2.svg"
                alt=""
              />
              <HoverTextComponent name="Соболев Евгений" hoverText="Описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert3.svg"
                alt=""
              />
              <HoverTextComponent
                name="Коровин Евгений"
                hoverText="Описание"
              />
            </div>
          </div>

          <div>
            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert4.svg"
                alt=""
              />

              <HoverTextComponent name="Якушев Евгений" hoverText="описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert5.svg"
                alt=""
              />
              <HoverTextComponent
                name="Соколова Екатерина"
                hoverText="Описание"
              />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert6.svg"
                alt=""
              />
              <HoverTextComponent name="Саакян Марат" hoverText="Описание" />
            </div>
          </div>
          <div className={styles.magnifier}></div>
        </div>

        <div className={styles.carousel_block}>
          <div>
            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert1.svg"
                alt=""
              />

              <HoverTextComponent name="Ступин Роман" hoverText="Описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert2.svg"
                alt=""
              />

              <HoverTextComponent name="Соболев Евгений" hoverText="Описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert3.svg"
                alt=""
              />
              <HoverTextComponent
                name="Коровин Евгений"
                hoverText="Описание"
              />
            </div>
          </div>

          <div>
            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert4.svg"
                alt=""
              />

              <HoverTextComponent name="Якушев Евгений" hoverText="Описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert5.svg"
                alt=""
              />
              <HoverTextComponent
                name="Соколова Екатерина"
                hoverText="Описание"
              />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert6.svg"
                alt=""
              />
              <HoverTextComponent name="Саакян Марат" hoverText="Описание" />
            </div>
          </div>
          <div className={styles.magnifier}></div>
        </div>

        <div className={styles.carousel_block}>
          <div>
            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert1.svg"
                alt=""
              />

              <HoverTextComponent name="Ступин Роман" hoverText="описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert2.svg"
                alt=""
              />

              <HoverTextComponent name="Соболев Евгений" hoverText="Описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert3.svg"
                alt=""
              />
              <HoverTextComponent
                name="Коровин Евгений"
                hoverText="Победитель вавыаМеждународная олимпиада по экономике IEOx Winter Challenge (золото и бронза)Международная олимпиада по экономике IEOx Winter Challenge (золото и бронза)Международная олимпиада по экономике IEOx Winter Challenge (золото и бронза)"
              />
            </div>
          </div>

          <div>
            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert4.svg"
                alt=""
              />

              <HoverTextComponent name="Якушев Евгений" hoverText="Описание" />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert5.svg"
                alt=""
              />
              <HoverTextComponent
                name="Соколова Екатерина"
                hoverText="Описаниеjdkfsdjlfdsf\ sdfjldsfjlkdsf sdkfjsldfs sdl fjlkdsfj kdsj flksdfjldsfjdsfjlkdsfj sld fjksldfj"
              />
            </div>

            <div>
              <Image
                width={270}
                height={362}
                src="./landing/experts/expert6.svg"
                alt=""
              />
              <HoverTextComponent name="Саакян Марат" hoverText="sdfdsfds sdfdsfds s fddsfsdfsd dsfdsf sdfdsfsdds fsdfdf sdfsdfsfs sdf Описаниеj dkfsdjlfdsf\ sdfjldsfjlkdsf sdkfjsldfs sdl fjlkdsfj kdsj flksdfjldsfjdsfjlkdsfj sld fjksldfj" />
            </div>
          </div>
          <div className={styles.magnifier}></div>
        </div>
      </div>

      <div className={styles.cb}>
        <button className={styles.carousel_button} onClick={handlePrevClick}>
          <Image
            width={79}
            height={77}
            src="./landing/experts/leftArrow.svg"
            alt=""
          />
        </button>
        <button className={styles.carousel_button} onClick={handleNextClick}>
          <Image
            width={80}
            height={77}
            src="./landing/experts/rightArrow.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

const HoverTextComponent = ({ name, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.hover_container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.hover_trigger}>
        <span>{name}</span>
        <Image
          width={36}
          height={44}
          src="./landing/experts/loupe.svg"
          alt=""
        />
      </div>
      {isHovered && <div className={styles.hover_text}>{hoverText}</div>}
    </div>
  );
};
