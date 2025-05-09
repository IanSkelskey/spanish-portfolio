import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './PlanAccion.css';

function ActionPlan() {
  const { data, loading, error } = useDataFetching('actionPlan');

  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  const getTimelineIcon = (title) => {
    if (title.includes("Corto") || title.includes("Short")) return "🔜";
    if (title.includes("Mediano") || title.includes("Medium")) return "📆";
    if (title.includes("Largo") || title.includes("Long")) return "🔮";
    return "📝";
  };

  const translateTitle = (title) => {
    if (title === "Corto plazo (3 meses)") return "Short-term (3 months)";
    if (title === "Mediano plazo (1 año)") return "Medium-term (1 year)";
    if (title === "Largo plazo (2+ años)") return "Long-term (2+ years)";
    return title;
  };

  return (
    <PageWrapper title="Action Plan / Plan de Acción">
      <div className="plan-intro">
        <img 
          src={data.intro.image} 
          alt={data.intro.alt} 
          className="plan-banner" 
        />
        <p className="plan-intro-text">{data.intro.content}</p>
      </div>
      
      {/* Action Plan Reflection - Required */}
      <div className="plan-reflection card">
        <h3>Reflection on My Future Goals</h3>
        <p>{data.reflection.content}</p>
      </div>
      
      {/* Visual Timeline Implementation */}
      <h3 className="timeline-title">
        <span className="timeline-icon">📋</span>
        Next Steps / Próximos Pasos
      </h3>
      
      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {data.timeline.periods.map((period, index) => (
          <div className={`timeline-item period-${index}`} key={index}>
            <div className="timeline-marker">
              <span className="timeline-period-icon">{getTimelineIcon(period.title)}</span>
            </div>
            
            <div className="timeline-content">
              <h4>
                <span className="timeline-period-title">{translateTitle(period.title)}</span>
                <span className="timeline-period-original">{period.title}</span>
              </h4>
              
              <ul className="timeline-list">
                {period.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="timeline-task">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      {/* Language Learning Resources Section */}
      <div className="resources-section">
        <h3>Helpful Resources</h3>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon">🎧</div>
            <h4>Listening Practice</h4>
            <ul>
              <li>Spanish podcasts (Radio Ambulante, Coffee Break Spanish)</li>
              <li>Argentine TV series with subtitles</li>
              <li>YouTube channels for Spanish learners</li>
            </ul>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">📱</div>
            <h4>Learning Apps</h4>
            <ul>
              <li>Duolingo for daily practice</li>
              <li>Anki for vocabulary flashcards</li>
              <li>HelloTalk for language exchange</li>
            </ul>
          </div>
          
          <div className="resource-card">
            <div className="resource-icon">📚</div>
            <h4>Reading Materials</h4>
            <ul>
              <li>Graded readers for beginners and intermediates</li>
              <li>Spanish news websites (simplified)</li>
              <li>Argentine authors (short stories)</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default ActionPlan;
