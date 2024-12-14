/* eslint-disable react-hooks/rules-of-hooks */
import styles from "./ProductMedia.module.css";
import WixImage from "@/components/WixImage";
import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
// import Arrow from "../../../../../public/icons/leftArrow.svg";

interface ProductMediaProps {
  media: products.MediaItem[] | undefined;
}

export default function ProductMedia({ media }: ProductMediaProps) {
  const [selectedMedia, setSelectedMedia] = useState<
    products.MediaItem | undefined
  >(media?.[0]);

  // Reset selected media when the `media` prop changes
  useEffect(() => {
    if (media?.length) {
      setSelectedMedia(media[0]);
    }
  }, [media]);

  if (!media?.length) return null;

  const handleNext = () => {
    if (!selectedMedia || !media?.length) return;
    const currentIndex = media.findIndex(
      (item) => item._id === selectedMedia._id
    );
    const nextIndex = (currentIndex + 1) % media.length;
    setSelectedMedia(media[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedMedia || !media?.length) return;
    const currentIndex = media.findIndex(
      (item) => item._id === selectedMedia._id
    );
    const previousIndex = (currentIndex - 1 + media.length) % media.length;
    setSelectedMedia(media[previousIndex]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  console.log(media);

  return (
    <div {...swipeHandlers} className={styles.mediaContainer}>
      <div className={styles.gridContainer}>
        {media.map((item) => {
          const image = item.image;
          const video = item.video?.files?.[0];

          return (
            <div key={item._id} className={styles.gridItem}>
              {image?.url ? (
                <div className={styles.imgContainer}>
                  <WixImage
                    mediaIdentifier={image.url}
                    alt={image.altText || "Product Image"}
                    scaleToFill={false}
                    className={styles.img}
                  />
                </div>
              ) : video?.url ? (
                <div className={styles.videoContainer}>
                  <video autoPlay loop controls className={styles.video}>
                    <source src={video.url} type={`video/${video.format}`} />
                  </video>
                </div>
              ) : null}
              
            </div>
          );
        })}
      </div>
    </div>
  );
}
