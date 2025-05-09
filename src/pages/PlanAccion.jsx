import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import PageBanner from '../components/PageBanner';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader';
import CustomList from '../components/CustomList';
import './Pages.css';
import './PlanAccion.css';

function ActionPlan() {
  const { data, loading, error } = useDataFetching('actionPlan');

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
    <PageLoader loading={loading} error={error} title="Action Plan / Plan de Acción">
      {data && (
        <>
          <PageBanner 
            src={data.intro.image} 
            alt={data.intro.alt}
          />
          <p className="plan-intro-text">{data.intro.content}</p>
          
          {/* Action Plan Reflection - Required */}
          <ContentCard className="plan-reflection card">
            <h3>Reflection on My Future Goals</h3>
            <p>{data.reflection.content}</p>
          </ContentCard>
          
          {/* Visual Timeline Implementation */}
          <SectionHeader 
            icon="📋" 
            title="Next Steps / Próximos Pasos"
          />
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {data.timeline.periods.map((period, index) => (
              <div className={`timeline-item period-${index}`} key={index}>
                <div className="timeline-marker">
                  <span className="timeline-period-icon">{getTimelineIcon(period.title)}</span>
                </div>
                
                <div className="timeline-content card-base">
                  <h4>
                    <span className="timeline-period-title">{translateTitle(period.title)}</span>
                    <span className="timeline-period-original">{period.title}</span>
                  </h4>
                  
                  <CustomList 
                    items={period.items.map(item => (
                      <span className="timeline-task">{item}</span>
                    ))} 
                    className="timeline-list"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Language Learning Resources Section */}
          <SectionHeader title="Helpful Resources" />
          <div className="resources-grid">
            <ContentCard 
              icon="🎧"
              title="Listening Practice" 
              className="resource-card"
            >
              <CustomList 
                items={[
                  "Spanish podcasts (Radio Ambulante, Coffee Break Spanish)",
                  "Argentine TV series with subtitles",
                  "YouTube channels for Spanish learners"
                ]}
              />
            </ContentCard>
            
            <ContentCard
              icon="📱"
              title="Learning Apps"
              className="resource-card"
            >
              <CustomList
                items={[
                  "Duolingo for daily practice",
                  "Anki for vocabulary flashcards",
                  "HelloTalk for language exchange"
                ]}
              />
            </ContentCard>
            
            <ContentCard
              icon="📚"
              title="Reading Materials"
              className="resource-card"
            >
              <CustomList
                items={[
                  "Graded readers for beginners and intermediates",
                  "Spanish news websites (simplified)",
                  "Argentine authors (short stories)"
                ]}
              />
            </ContentCard>
          </div>
        </>
      )}
    </PageLoader>
  );
}

export default ActionPlan;
