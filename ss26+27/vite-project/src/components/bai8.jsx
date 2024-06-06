const Header = () => {
    return (
        <header>
            <h1>Bài 8</h1>
            <h1>Shop</h1>
            {/* Nội dung khác của Header */}
        </header>
    );
};

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About Us</a></li>
                {/* Các mục khác */}
            </ul>
        </nav>
    );
};

const Navbar = () => {
    return (
        <div>
            <input type="text" placeholder="Search..." />
            <a href="/login">Login</a>
            {/* Các chức năng khác của Navbar */}
        </div>
    );
};

const Main = () => {
    return (
        <main>
            <h2>Welcome to our Shop!</h2>
            {/* Nội dung chính của trang */}
        </main>
    );
};

const Cart = () => {
    return (
        <div>
            <h3>Cart</h3>
            {/* Thông tin về giỏ hàng và các chức năng liên quan */}
        </div>
    );
};

const UserLayout = () => {
    return (
        <div>
            {/* Sử dụng các component con */}
            <Header />
            <Menu />
            <Navbar />
            <Main />
            <Cart />
        </div>
    );
};

export default UserLayout;