import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './PlanAccion.css';

function ActionPlan() {
  const { data, loading, error } = useDataFetching('actionPlan');

  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Action Plan">
      <div className="plan-intro">
        <img 
          src={data.intro.image} 
          alt="Action Plan" 
          className="plan-banner" 
        />
        <p>My strategy for continuing to develop my Spanish skills after completing this course.</p>
      </div>
      
      {/* Action Plan Reflection - Required */}
      <div className="plan-reflection card">
        <h3>Reflection on My Future Goals</h3>
        <p>{data.reflection.content}</p>
      </div>
      
      <h3>Next Steps</h3>
      <div className="timeline">
        {data.timeline.periods.map((period, index) => (
          <div className="timeline-item" key={index}>
            <h4>{period.title === "Corto plazo (3 meses)" ? "Short-term (3 months)" : 
                 period.title === "Mediano plazo (1 año)" ? "Medium-term (1 year)" :
                 period.title === "Largo plazo (2+ años)" ? "Long-term (2+ years)" : 
                 period.title}</h4>
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

export default ActionPlan;
