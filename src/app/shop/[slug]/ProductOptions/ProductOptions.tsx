import styles from "./ProductOptions.module.css";
import { checkInStock } from "@/lib/utils";
import { products } from "@wix/stores";

interface ProductOptionsProps {
  product: products.Product;
  selectedOptions: Record<string, string>;
  setSelectedOptions: (options: Record<string, string>) => void;
}

export default function ProductOptions({
  product,
  selectedOptions,
  setSelectedOptions,
}: ProductOptionsProps) {
  
  return (
    <div className={styles.container}>
      {product.productOptions?.map((option) => (
        <fieldset key={option.name} className={styles.fieldset}>
          <legend className={styles.optionName}>
            {option.name} :{" "}
            {option.name && selectedOptions[option.name]
              ? selectedOptions[option.name]
              : "None"}
          </legend>

          <div className={styles.optionContainer}>
            {option.choices?.map((choice) => (
              <div key={choice.description} className={styles.choiceContainer}>
                <input
                  type='radio'
                  id={choice.description}
                  name={option.name}
                  value={choice.description}
                  onChange={() =>
                    setSelectedOptions({
                      ...selectedOptions,
                      [option.name || ""]: choice.description || "",
                    })
                  }
                  checked={
                    selectedOptions[option.name || ""] === choice.description
                  }
                  className={styles.radioInput}
                  disabled={
                    !checkInStock(product, {
                      ...selectedOptions,
                      [option.name || ""]: choice.description || "",
                    })
                  }
                />
                <label
                  htmlFor={choice.description}
                  className={`${styles.radioLabel}`}
                >
                  {choice.description}
                  {/* If the choice is a color option, display a swatch */}
                  {option.optionType === products.OptionType.color && (
                    <span
                      style={{
                        backgroundColor: choice.value,
                      }}
                      className={styles.colorSwatch}
                    />
                  )}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
