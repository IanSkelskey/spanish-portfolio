import PageWrapper from '../components/PageWrapper';
import BlockQuote from '../components/BlockQuote';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Reflecciones.css';

function Reflecciones() {
  const { data, loading, error } = useDataFetching('reflections');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Reflecciones finales">
      <BlockQuote text={data.quote.text} />
      
      {/* Map through reflection sections */}
      {data.sections.map((section, index) => (
        <div className="reflection-section" key={index}>
          <h3>{section.title}</h3>
          <p className="reflection-instruction">{section.instruction}</p>
          <div className="reflection-card">
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </PageWrapper>
  );
}

export default Reflecciones;
