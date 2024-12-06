import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from "../../Context/user";
import './Header.css';

const Header = () => {
    const { user } = useContext(UserContext); // Contexto del usuario
    const [activeMenu, setActiveMenu] = useState(null); // Control de los menús desplegables

    /* const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }; */

    const loadMethods = () => {
        // Si el usuario está logueado, carga las opciones del menú
        if (user) {
            return (
                <ul className="menu">
                    {/* Categoría Tradicional */}
                    <li
                        className={`menu-category ${activeMenu === "tradicional" ? "active" : ""}`}
                        onMouseEnter={() => setActiveMenu("tradicional")}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <span className="category-title">Tradicional</span>
                        {activeMenu === "tradicional" && (
                            <ul className="dropdown">
                                <li><Link to="/publications/1">Ilustración</Link></li>
                                <li><Link to="">Diseño Gráfico</Link></li>
                                <li><Link to="">Escultura</Link></li>
                                <li><Link to="">Modelado 3D</Link></li>
                                <li><Link to="">Animación</Link></li>
                            </ul>
                        )}
                    </li>
                    {/* Categoría Digital */}
                    <li
                        className={`menu-category ${activeMenu === "digital" ? "active" : ""}`}
                        onMouseEnter={() => setActiveMenu("digital")}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <span className="category-title">Digital</span>
                        {activeMenu === "digital" && (
                            <ul className="dropdown">
                                <li><Link to="/publications/6">Ilustración</Link></li>
                                <li><Link to="">Diseño Gráfico</Link></li>
                                <li><Link to="">Escultura</Link></li>
                                <li><Link to="">Modelado 3D</Link></li>
                                <li><Link to="">Animación</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            );
        }
    };

    const loadAuth = () => {
        // Si no hay un usuario logueado, muestra los botones de autenticación
        if (!user) {
            return (
                <>
                    <Link to="auth/login"><button className="btn-outline">Inicia sesión</button></Link>
                    <Link to="auth/login/auth/signup"><button className="btn-primary">Regístrate</button></Link>
                </>
            );
        } else {
            return (
                // Mostrar avatar y nombre del usuario cuando esté logueado
                <div className="user-avatar">
                    <img src="/AVATAR.png" alt="Avatar" className="avatar-icon" />
                    {/* <h3>{user}</h3> */}
                </div>
            );
        }
    };

    return (
        <>
            <header className="navbar">
                {/* Logo */}
                {/* Logo */}
                <div className="logo">
                    <Link to={user ? "/homeLogin" : "/"}>
                        <img src="/Logo3.svg" alt="Huella Creativa" />
                    </Link>
                </div>
                

                {/* Menú (solo si hay usuario activo) */}
                <nav className="menu">
                    {loadMethods()}
                </nav>

                    {/* Modo oscuro */}
                    <div className="modo">
                        <Link to="/dark">
                        <img src="/modos-28.svg" alt="Modo oscuro" />
                        </Link>
                    </div>

                {/* Controles del usuario */}
                <div className="user-controls">
                    {/* Botones o avatar del usuario */}
                    <div className="login-register">
                        {loadAuth()}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
