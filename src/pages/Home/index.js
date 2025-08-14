import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      try {
        const response = await api.get("/movie/now_playing", {
          params: {
            api_key: "12e38d88bca145dd2a6b17cbb951c5f3",
            language: "pt-BR",
            page: 1,
          }
        });

        setFilmes(response.data.results.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar filmes:", error);
        setLoading(false);
      }
    }
    loadFilmes();
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center'>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl text-white font-bold animate-pulse">
            🎬 Carregando Filmes...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-8'>
      <div className='container mx-auto px-4'>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
          🎭 Filmes em Cartaz
        </h1>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {filmes.map((filme) => {
            return (
              <article 
                key={filme.id} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-700/50"
              >
                <div className="relative group">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} 
                    alt={filme.title}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <Link 
                      to={`/filme/${filme.id}`}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-center block hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                      🎬 Ver Detalhes
                    </Link>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 hover:text-yellow-400 transition-colors duration-300">
                    {filme.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 font-semibold flex items-center">
                      ⭐ {filme.vote_average.toFixed(1)}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(filme.release_date).getFullYear()}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;

