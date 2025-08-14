import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function excluirFilme(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id);
        });

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme excluído com sucesso!");
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-8'>
            <div className='container mx-auto px-4'>
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    ⭐ Meus Filmes Favoritos
                </h1>

                {filmes.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-8xl mb-6">😢</div>
                        <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">
                            Nenhum filme salvo ainda
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Que tal explorar alguns filmes e adicionar aos seus favoritos?
                        </p>
                        <Link 
                            to="/"
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 inline-block"
                        >
                            🎬 Descobrir Filmes
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filmes.map((filme) => {
                            return (
                                <div 
                                    key={filme.id}
                                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 hover:shadow-yellow-400/20 transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row">
                                        {/* Poster */}
                                        <div className="md:w-48 flex-shrink-0">
                                            <img 
                                                src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} 
                                                alt={filme.title}
                                                className="w-full h-64 md:h-full object-cover"
                                            />
                                        </div>

                                        {/* Conteúdo */}
                                        <div className="flex-1 p-6">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between h-full">
                                                <div className="flex-1 mb-4 md:mb-0">
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 hover:text-yellow-400 transition-colors duration-300">
                                                        {filme.title}
                                                    </h3>
                                                    
                                                    {filme.overview && (
                                                        <p className="text-gray-300 text-sm md:text-base line-clamp-3 mb-4">
                                                            {filme.overview}
                                                        </p>
                                                    )}

                                                    <div className="flex flex-wrap items-center gap-4">
                                                        {filme.vote_average && (
                                                            <div className="flex items-center bg-yellow-400/20 px-3 py-1 rounded-full">
                                                                <span className="text-yellow-400 font-semibold text-sm">
                                                                    ⭐ {filme.vote_average.toFixed(1)}
                                                                </span>
                                                            </div>
                                                        )}
                                                        
                                                        {filme.release_date && (
                                                            <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                                                                <span className="text-blue-400 font-semibold text-sm">
                                                                    📅 {new Date(filme.release_date).getFullYear()}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Botões */}
                                                <div className="flex flex-col sm:flex-row gap-3 md:ml-6">
                                                    <Link 
                                                        to={`/filme/${filme.id}`}
                                                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center gap-2"
                                                    >
                                                        👁️ Ver Detalhes
                                                    </Link>
                                                    
                                                    <button 
                                                        onClick={() => excluirFilme(filme.id)}
                                                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                                    >
                                                        🗑️ Excluir
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Favoritos;

