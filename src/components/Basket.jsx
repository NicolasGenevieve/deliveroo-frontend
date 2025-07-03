import "./Basket.css";

const Basket = ({ basket, setBasket }) => {
  const isEmpty = basket.every((item) => item.qty === 0);
  const subTotal = basket.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = 2.5;
  const total = subTotal + delivery;

  return (
    <div className="basketWrap">
      <div className="basket">
        <button
          className={isEmpty ? "addBasketDisable" : "addBasketActive"}
          disabled={isEmpty}
        >
          Valider mon panier
        </button>
        {!isEmpty ? (
          basket.map((item) =>
            item.qty === 0 ? (
              <></>
            ) : (
              <>
                <div key={item.id} className="basketItem">
                  {/* {console.log(item)} */}
                  <div className="counter">
                    <button
                      className="addQty"
                      onClick={() => {
                        const newBasket = basket.map((product) => {
                          if (product.id === item.id) {
                            return {
                              ...product,
                              qty: product.qty - 1,
                            };
                          } else {
                            return product;
                          }
                        });
                        setBasket(newBasket);
                      }}
                    >
                      -
                    </button>
                    <div className="itemNum">{item.qty}</div>
                    <button
                      className="addQty"
                      onClick={() => {
                        const newBasket = basket.map((product) => {
                          if (product.id === item.id) {
                            return {
                              ...product,
                              qty: product.qty + 1,
                            };
                          } else {
                            return product;
                          }
                        });
                        setBasket(newBasket);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="itemName">{item.title}</div>
                  <div className="itemPrice">
                    {(item.price * item.qty).toFixed(2)} €
                  </div>
                </div>
              </>
            )
          )
        ) : (
          <div className="emptyBasket">
            <span>Votre panier est vide</span>
          </div>
        )}
        {!isEmpty ? (
          <>
            <div className="trait"></div>
            <div className="subTotalDelivery">
              <div className="subTotal">
                <span>Sous Total</span> {subTotal.toFixed(2)} €
              </div>
              <div className="subTotal">
                <span>Livraison</span> {delivery.toFixed(2)} €
              </div>
            </div>
            <div className="trait"></div>
            <div className="total">
              <span>Total</span> {total.toFixed(2)} €
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Basket;
