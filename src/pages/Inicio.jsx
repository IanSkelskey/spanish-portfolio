import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Inicio.css';

function resolveImageSrc(src) {
  // If src starts with '/assets', use BASE_URL + 'assets/...'
  if (src && src.startsWith('/assets')) {
    return `${import.meta.env.BASE_URL}assets/${src.replace(/^\/assets\//, '')}`;
  }
  // Otherwise, return as is (for absolute URLs or other cases)
  return src;
}

function Inicio() {
  const { data, loading, error } = useDataFetching('home');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Bienvenidos a mi ePortfolio de Español">
      <div className="hero-section">
        <img 
          src={resolveImageSrc(data.heroImage.src)} 
          alt={data.heroImage.alt} 
          className="hero-image" 
        />
      </div>
      <h2>{data.welcome.title}</h2>
      <p>
        {data.welcome.content}
      </p>
      <div className="card">
        <h3>{data.sections.title}</h3>
        <ul className="sections-list">
          {data.sections.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}

export default Inicio;
