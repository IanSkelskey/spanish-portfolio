import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import '../pages/Pages.css';

function Inicio() {
  const { data, loading, error } = useDataFetching('home');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Bienvenidos a mi ePortfolio de Español">
      <div className="hero-section">
        <img 
          src={data.heroImage.src} 
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
        <ul>
          {data.sections.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
}

export default Inicio;
