import React, { useState, useEffect } from 'react';

interface Product {
    id: number; // Thêm dòng này
    imageUrl: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
}

const ProductComponent: React.FC<{ product: Product, onAddToCart: (product: Product, quantity: number) => void }> = ({ product, onAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handlePriceClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.preventDefault(); 
        onAddToCart(product, quantity);
    };
  
    return (
        <div className="media product">
            <div className="media-left">
                <a href="#">
                    <img className="media-object" src={product.imageUrl} alt={product.name} />
                </a>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{product.name}</h4>
                <p>{product.description}</p>
                <input
                    name={`quantity-${product.name}`}
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <span className="price" onClick={handlePriceClick}>{product.price} USD</span>
            </div>
        </div>
    );
};


const ShoppingCart: React.FC = () => {
    // Tải giỏ hàng từ bộ nhớ cục bộ
    const getSavedCart = () => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    const [cartItems, setCartItems] = useState<Product[]>(getSavedCart());
    const [notification, setNotification] = useState<string>('');
    const [cartUpdated, setCartUpdated] = useState<boolean>(false); // State để theo dõi sự thay đổi trong giỏ hàng
    const [priceClickNotification, setPriceClickNotification] = useState<string>('');

    const addToCart = (product: Product, quantity: number) => {
        const updatedCartItems = [...cartItems];
        const existingItemIndex = updatedCartItems.findIndex(item => item.name === product.name);

        if (existingItemIndex !== -1) {
            updatedCartItems[existingItemIndex].quantity += quantity;
        } else {
            updatedCartItems.push({ ...product, quantity });
        }

        setCartItems(updatedCartItems);
        localStorage.setItem('cart', JSON.stringify(updatedCartItems)); // Lưu giỏ hàng vào bộ nhớ cục bộ
        setNotification('Thêm vào giỏ hàng thành công');
        setTimeout(() => {
            setNotification('');
        }, 3000); // Ẩn thông báo sau 3 giây
        setCartUpdated(true); // Đặt trạng thái này thành true để làm mới trang
    };

    useEffect(() => {
        if (cartUpdated) {
            // Làm mới trang bằng cách cập nhật state của cartUpdated
            setCartUpdated(false);
        }
    }, [cartUpdated]);

    // Định nghĩa các sản phẩm
    const products: Product[] = [
        {
            id:1,
            imageUrl: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/pizza.jpg?raw=true",
            name: "Pizza",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            quantity: 0,
            price: 30
        },
        {
            id:2,
            imageUrl: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Hamburger.jpg?raw=true",
            name: "Hamburger",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            quantity: 4,
            price: 15
        },
        {
            id:3,
            imageUrl: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/bread.jpg?raw=true",
            name: "Bread",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            quantity: 0,
            price: 20
        },
        {
            id:4,
            imageUrl: "https://github.com/ngoquy12/template_shopping_cart/blob/master/images/Cake.jpg?raw=true",
            name: "Cake",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
            quantity: 1,
            price: 10
        }
    ];

    return (
        <div className="container">
            <div className="page-header">
                <h1>Giỏ hàng</h1>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h1 className="panel-title">Danh sách sản phẩm</h1>
                        </div>
                        <div className="panel-body" id="list-product">
                            {products.map((product, index) => (
                                <ProductComponent key={index} product={product} onAddToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {notification && (
                <div className="alert alert-success" role="alert">
                    {notification}
                </div>
            )}
            {priceClickNotification && (
                <div className="alert alert-info" role="alert">
                    {priceClickNotification}
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
