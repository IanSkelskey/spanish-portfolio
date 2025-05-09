import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Objetivos.css';

// Add image resolver for /assets support
function resolveImageSrc(src) {
  if (src && src.startsWith('/assets')) {
    return `${import.meta.env.BASE_URL}assets/${src.replace(/^\/assets\//, '')}`;
  }
  return src;
}

function Goals() {
  const { data, loading, error } = useDataFetching('goals');

  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="My Goals / Vision Board">
      {/* Prior Knowledge Section - Required */}
      <div className="prior-knowledge card">
        <h3>{data.priorKnowledge.title}</h3>
        <p>{data.priorKnowledge.content}</p>
      </div>
      
      {/* Enhanced Vision Board Section */}
      <div className="vision-board">
        <h3>{data.visionBoard.title}</h3>
        <div className="vision-container">
          <img 
            src={resolveImageSrc(data.visionBoard.image)} 
            alt="Vision Board" 
            className="vision-image" 
          />
          
          {/* Vision Board Themes */}
          <div className="vision-themes">
            {data.visionBoard.themes && data.visionBoard.themes.map((theme, index) => (
              <div key={index} className="vision-theme">
                <h4>{theme.title}</h4>
                <ul className="theme-points">
                  {theme.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Goals Display */}
      <div className="goals-container">
        <div className="goals-column">
          <div className="goals-card short-term">
            <div className="goals-header">
              <span className="goal-icon">🎯</span>
              <h3>Short-term Goals</h3>
            </div>
            <ul className="goals-list">
              {data.shortTermGoals.goals.map((goal, index) => (
                <li key={index}>
                  <div className="goal-category">{goal.category}</div>
                  <div className="goal-description">{goal.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="goals-column">
          <div className="goals-card long-term">
            <div className="goals-header">
              <span className="goal-icon">🔭</span>
              <h3>Long-term Goals</h3>
            </div>
            <ul className="goals-list">
              {data.longTermGoals.goals.map((goal, index) => (
                <li key={index}>
                  <div className="goal-category">{goal.category}</div>
                  <div className="goal-description">{goal.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="inspiration card">
        <div className="inspiration-header">
          <span className="inspiration-icon">💭</span>
          <h3>{data.inspiration.title}</h3>
        </div>
        <p>{data.inspiration.content}</p>
      </div>
    </PageWrapper>
  );
}

export default Goals;
