import { Link } from 'react-router-dom';

function Erro() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center px-4'>
            <div className="text-center">
                <div className="text-9xl md:text-[200px] font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-8">
                    404
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Oops! Página não encontrada
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Parece que você se perdeu no mundo do cinema. A página que você está procurando não existe.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        to="/"
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        🎬 Voltar ao Início
                    </Link>
                    
                    <Link 
                        to="/favoritos"
                        className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        ⭐ Meus Favoritos
                    </Link>
                </div>
                
                <div className="mt-12 text-6xl animate-bounce">
                    🎭
                </div>
            </div>
        </div>
    );
}

export default Erro;