import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import '../pages/Pages.css';

function PlanAccion() {
  const { data, loading, error } = useDataFetching('actionPlan');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Plan de acción">
      <div className="plan-intro">
        <img 
          src={data.intro.image} 
          alt={data.intro.alt} 
          className="plan-banner" 
        />
        <p>{data.intro.content}</p>
      </div>
      
      {/* Action Plan Reflection - Required */}
      <div className="plan-reflection card">
        <h3>{data.reflection.title}</h3>
        <p>{data.reflection.content}</p>
      </div>
      
      <h3>{data.timeline.title}</h3>
      <div className="timeline">
        {data.timeline.periods.map((period, index) => (
          <div className="timeline-item" key={index}>
            <h4>{period.title}</h4>
            <ul>
              {period.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default PlanAccion;
