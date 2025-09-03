// src: src/components/ProductCard.jsx

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}
