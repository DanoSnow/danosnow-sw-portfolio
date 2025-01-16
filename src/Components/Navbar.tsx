import { useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { RouteContext } from "../App"

const Navbar = () => {
    const routeContext = useContext(RouteContext);
    const location = useLocation();

    useEffect(() => {
        routeContext?.setCurrentRoute(location.pathname);
    }, [location.pathname, routeContext?.currentRoute]);

    return (
        <div className="navbar bg-slate-800 bg-opacity-70 fixed z-10">
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <div className='flex md:space-x-16 space-x-8 text-lg main-font'>
                    <Link to="/danosnow-sw-portfolio/" className={routeContext?.currentRoute === '/danosnow-sw-portfolio/' ? 'text-red-500' : 'text-white'}>Home</Link>
                    <Link to="/danosnow-sw-portfolio/about" className={routeContext?.currentRoute === '/danosnow-sw-portfolio/about' ? 'text-red-500' : 'text-white'}>About</Link>
                    <Link to="/danosnow-sw-portfolio/skills" className={routeContext?.currentRoute === '/danosnow-sw-portfolio/skills' ? 'text-red-500' : 'text-white'}>Skills</Link>
                    <Link to="/danosnow-sw-portfolio/resume" className={routeContext?.currentRoute === '/danosnow-sw-portfolio/resume' ? 'text-red-500' : 'text-white'}>Resume</Link>
                </div>
            </div>
            <div className="navbar-end"></div>
        </div>
    )
}

export default Navbar
