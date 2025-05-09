import PageWrapper from '../components/PageWrapper';
import BlockQuote from '../components/BlockQuote';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Reflecciones.css';

function Reflections() {
  const { data, loading, error } = useDataFetching('reflections');

  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Final Reflections">
      <BlockQuote text={data.quote.text} />
      
      {/* Map through reflection sections */}
      {data.sections.map((section, index) => (
        <div className="reflection-section" key={index}>
          <h3>{section.title === "Objetivos cumplidos" ? "Goals Achieved" : 
               section.title === "Uso del Español" ? "Using Spanish" :
               section.title === "Mi proceso de aprendizaje" ? "My Learning Process" : 
               section.title}</h3>
          <p className="reflection-instruction">{section.instruction}</p>
          <div className="reflection-card">
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </PageWrapper>
  );
}

export default Reflections;
