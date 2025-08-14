import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link 
                    className="text-3xl md:text-4xl font-bold text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent" 
                    to='/'
                >
                    🎬 Prime Flix
                </Link>
                <Link 
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base" 
                    to='/favoritos'
                >
                    ⭐ Meus Filmes
                </Link>
            </div>
        </header>
    );
}

export default Header;

