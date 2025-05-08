import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Cultura.css';

function Cultura() {
  const { data, loading, error } = useDataFetching('culture');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Cultura">
      <div className="culture-header">
        <img 
          src={data.banner.image} 
          alt={data.banner.alt} 
          className="culture-banner" 
        />
      </div>
      
      {/* Reflexión sobre la conciencia cultural - Requerido */}
      <div className="culture-reflection card">
        <h3>{data.reflection.title}</h3>
        <p>{data.reflection.content}</p>
      </div>
      
      <h3>{data.aspects.title}</h3>
      <div className="culture-grid">
        {data.aspects.items.map((aspect, index) => (
          <div className="culture-card" key={index}>
            <h4>{aspect.title}</h4>
            <img 
              src={aspect.image} 
              alt={aspect.title} 
            />
            <p>{aspect.description}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Cultura;
