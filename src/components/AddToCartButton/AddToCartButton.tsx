import styles from "./AddToCartButton.module.css";
import { useModal } from "@/context/ModalContext";
import { useAdditemToCart } from "@/hooks/cart";
import { products } from "@wix/stores";

interface AddToCartButtonProps {
  product: products.Product;
  selectedOptions: Record<string, string>;
  quantity: number;
}

export default function AddToCartButton({
  product,
  selectedOptions,
  quantity,
  ...props
}: AddToCartButtonProps) {
  const mutation = useAdditemToCart();
  const { setModalOpen } = useModal(); // Access modal state

  return (
    <button
      onClick={() => {
        mutation.mutate({
          product,
          selectedOptions,
          quantity,
        });
        setModalOpen(true); // Open modal
      }}
      {...props}
      className={styles.btn}
    >
      <span className={styles.pulse}></span> Add To Cart
    </button>
  );
}
