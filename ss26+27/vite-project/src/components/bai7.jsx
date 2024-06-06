const Header = () => {
    return (
        <header>
            <h1>Bài 7</h1>
            {/* Nội dung của Header */}
            <h1>Admin Dashboard</h1>
        </header>
    );
};

// Component Menu
const Menu = () => {
    return (
        <nav>
            {/* Nội dung của Menu */}
            <ul>
                <li>Dashboard</li>
                <li>Users</li>
                <li>Products</li>
                {/* Các mục khác */}
            </ul>
        </nav>
    );
};

// Component Main
const Main = () => {
    return (
        <main>
            {/* Nội dung của Main */}
            <h2>Welcome to the Admin Dashboard</h2>
            {/* Các phần nội dung khác */}
        </main>
    );
};

// Component Footer
const Footer = () => {
    return (
        <footer>
            {/* Nội dung của Footer */}
            <p>&copy; 2024 Admin Dashboard</p>
        </footer>
    );
};

// Component cha AdminIndex chứa tất cả các component con
const AdminIndex = () => {
    return (
        <div>
            {/* Sử dụng các component con */}
            <Header />
            <Menu />
            <Main />
            <Footer />
        </div>
    );
};

export default AdminIndex;