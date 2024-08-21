function ProductCart(props) {
  return (
    <div className="cart">
      <img src={props.image} alt="" />
      <p> {props.title} </p>
      <p>{props.price}</p>
    </div>
  );
}
export default ProductCart;
