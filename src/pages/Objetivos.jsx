import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader'; 
import CustomList from '../components/CustomList';
import ImageModal from '../components/ImageModal';
import { resolveImagePath } from '../utils/imageUtils';
import './Pages.css';
import './Objetivos.css';

function Goals() {
  const { data, loading, error } = useDataFetching('goals');

  return (
    <PageLoader loading={loading} error={error} title="My Goals / Vision Board">
      {data && (
        <>
          {/* Prior Knowledge Section - Required */}
          <ContentCard className="prior-knowledge card">
            <h3>{data.priorKnowledge.title}</h3>
            <p>{data.priorKnowledge.content}</p>
          </ContentCard>
          
          {/* Enhanced Vision Board Section */}
          <SectionHeader title={data.visionBoard.title} />
          <div className="vision-container">
            {/* Replace the standard image with our ImageModal component */}
            <div className="vision-image-container">
              <ImageModal 
                src={resolveImagePath(data.visionBoard.image)} 
                alt="Vision Board - Click to enlarge" 
              />
              <p className="zoom-instruction">Click on the image to zoom in and view details</p>
            </div>
            
            {/* Vision Board Themes */}
            <div className="vision-themes">
              {data.visionBoard.themes && data.visionBoard.themes.map((theme, index) => (
                <ContentCard 
                  key={index}
                  title={theme.title}
                  className="vision-theme"
                  accentPosition="left"
                >
                  <CustomList
                    items={theme.points}
                    className="theme-points"
                  />
                </ContentCard>
              ))}
            </div>
          </div>
          
          {/* Enhanced Goals Display */}
          <div className="goals-container">
            <div className="goals-column">
              <ContentCard 
                className="goals-card short-term"
                icon="🎯"
                title="Short-term Goals"
                accentPosition="top"
                accentColor="#4CAF50"
              >
                <ul className="goals-list">
                  {data.shortTermGoals.goals.map((goal, index) => (
                    <li key={index}>
                      <div className="goal-category">{goal.category}</div>
                      <div className="goal-description">{goal.description}</div>
                    </li>
                  ))}
                </ul>
              </ContentCard>
            </div>
            
            <div className="goals-column">
              <ContentCard 
                className="goals-card long-term"
                icon="🔭"
                title="Long-term Goals"
                accentPosition="top"
                accentColor="#2196F3"
              >
                <ul className="goals-list">
                  {data.longTermGoals.goals.map((goal, index) => (
                    <li key={index}>
                      <div className="goal-category">{goal.category}</div>
                      <div className="goal-description">{goal.description}</div>
                    </li>
                  ))}
                </ul>
              </ContentCard>
            </div>
          </div>
          
          <ContentCard 
            className="inspiration card"
            icon="💭"
            title={data.inspiration.title}
          >
            <p>{data.inspiration.content}</p>
          </ContentCard>
        </>
      )}
    </PageLoader>
  );
}

export default Goals;
