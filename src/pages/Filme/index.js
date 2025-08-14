import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      try {
        const response = await api.get(`/movie/${id}`, {
          params: {
            api_key: "12e38d88bca145dd2a6b17cbb951c5f3",
            language: "pt-BR",
          }
        });
        setFilme(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar o filme:", error);
        navigate("/", { replace: true });
        return;
      }
    }

    loadFilme();
  }, [id, navigate]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);
    if (hasFilme) {
      toast.warn("Esse filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center'>
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl text-white font-bold animate-pulse">
            🎬 Carregando detalhes do filme...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900'>
      {/* Hero Section com Backdrop */}
      <div className="relative">
        <div 
          className="h-96 md:h-[500px] bg-cover bg-center relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${filme.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/80"></div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <img 
                src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} 
                alt={filme.title}
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Informações do Filme */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {filme.title}
              </h1>
              
              {filme.tagline && (
                <p className="text-xl text-gray-300 italic mb-6">
                  "{filme.tagline}"
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center bg-yellow-400/20 px-4 py-2 rounded-full">
                  <span className="text-yellow-400 font-bold text-lg">
                    ⭐ {filme.vote_average?.toFixed(1)} / 10
                  </span>
                </div>
                
                {filme.release_date && (
                  <div className="bg-blue-500/20 px-4 py-2 rounded-full">
                    <span className="text-blue-400 font-semibold">
                      📅 {new Date(filme.release_date).getFullYear()}
                    </span>
                  </div>
                )}

                {filme.runtime && (
                  <div className="bg-green-500/20 px-4 py-2 rounded-full">
                    <span className="text-green-400 font-semibold">
                      ⏱️ {filme.runtime} min
                    </span>
                  </div>
                )}
              </div>

              {filme.genres && filme.genres.length > 0 && (
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {filme.genres.map((genre) => (
                      <span 
                        key={genre.id}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sinopse */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                📖 Sinopse
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {filme.overview || "Sinopse não disponível."}
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={salvarFilme}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                💾 Salvar nos Favoritos
              </button>
              
              <a
                href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
                target='_blank' 
                rel='noopener noreferrer'
                className="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-center"
              >
                🎥 Assistir Trailer
              </a>
            </div>

            {/* Informações Adicionais */}
            {(filme.production_companies?.length > 0 || filme.production_countries?.length > 0) && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">ℹ️ Informações Adicionais</h3>
                
                {filme.production_companies?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-gray-400 font-semibold mb-2">Produtoras:</h4>
                    <div className="flex flex-wrap gap-2">
                      {filme.production_companies.map((company) => (
                        <span 
                          key={company.id}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {company.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {filme.production_countries?.length > 0 && (
                  <div>
                    <h4 className="text-gray-400 font-semibold mb-2">Países:</h4>
                    <div className="flex flex-wrap gap-2">
                      {filme.production_countries.map((country) => (
                        <span 
                          key={country.iso_3166_1}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {country.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filme;

