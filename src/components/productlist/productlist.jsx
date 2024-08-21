import ProductCart from "../ProductCard/productcart";

const product = [
{
    
    image:"https://dkstatics-public.digikala.com/digikala-products/111cc6ee905e968d1b4a950872c7d51321e0eb97_1698754713.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "p1",
    price:199.6,


},
{
    
    image:"https://dkstatics-public.digikala.com/digikala-products/111cc6ee905e968d1b4a950872c7d51321e0eb97_1698754713.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "p1",
    price:199.9,


},
{
    
    image:"https://dkstatics-public.digikala.com/digikala-products/111cc6ee905e968d1b4a950872c7d51321e0eb97_1698754713.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "p1",
    price:399.9,


},
{
    
    image:"https://dkstatics-public.digikala.com/digikala-products/111cc6ee905e968d1b4a950872c7d51321e0eb97_1698754713.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    title: "p1",
    price:129.9,


},
    

];
function Productlist() {
    return (
        <div className="product-list" >
            {product.map((item)=> (
        <ProductCart image={item.image} title={item.title} price={item.price} />
            ))}
        </div>
    )
};