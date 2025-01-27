// src/components/Modal/CartModal/CartModal.jsx
import { useEffect } from "react";
import ModalPortal from "../ModalPortal";
import "./CartModal.css";

const CartModal = ({ isOpen, onClose, cartItems = [] }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <ModalPortal isOpen={isOpen}>
      <div className="cart-modal">
        <div className="cart-modal__header">
          <h2>Кошик</h2>
          <button className="cart-modal__close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        <div className="cart-modal__content">
          {cartItems.length === 0 ? (
            <p className="cart-modal__empty">Кошик порожній</p>
          ) : (
            <ul className="cart-modal__items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-modal__item">
                  {/* Здесь будет компонент CartItem */}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="cart-modal__footer">
          <div className="cart-modal__total">
            <span>Всього:</span>
            <span>0 ₴</span>
          </div>
          <button
            className="cart-modal__checkout"
            disabled={cartItems.length === 0}
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </ModalPortal>
  );
};

export default CartModal;
