import BlockQuote from '../components/BlockQuote';
import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import './Pages.css';
import './Reflecciones.css';

function Reflections() {
  const { data, loading, error } = useDataFetching('reflections');

  // Function to count words in a text
  const countWords = (text) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <PageLoader loading={loading} error={error} title="Final Reflections / Reflexiones Finales">
      {data && (
        <>
          <BlockQuote text={data.quote.text} />
          
          {/* Reflection Summary */}
          <div className="reflection-summary">
            <div className="summary-card card-blue-gradient">
              <div className="summary-icon">📝</div>
              <div className="summary-content">
                <h4>Your Reflection Journey</h4>
                <p>Across your portfolio, you've written {data.sections.length} major reflections 
                totaling approximately {data.sections.reduce((total, section) => 
                  total + countWords(section.content), 0)} words of thoughtful analysis.</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced reflection sections */}
          <div className="reflections-container">
            {data.sections.map((section, index) => {
              const wordCount = countWords(section.content);
              const isEnough = wordCount >= 100;
              
              let icon = "📝";
              if (section.title === "Goals Achieved" || section.title === "Objetivos cumplidos") icon = "🎯";
              else if (section.title === "Using Spanish" || section.title === "Uso del Español") icon = "🗣️";
              else if (section.title === "My Learning Process" || section.title === "Mi proceso de aprendizaje") icon = "🧠";
              
              let title = section.title;
              if (title === "Goals Achieved") title = "Goals Achieved / Objetivos cumplidos";
              else if (title === "Using Spanish") title = "Using Spanish / Uso del Español";
              else if (title === "My Learning Process") title = "My Learning Process / Mi proceso de aprendizaje";
              
              return (
                <div className="reflection-section" key={index}>
                  <SectionHeader
                    icon={icon}
                    title={title}
                  />
                  
                  <div className="reflection-instruction">
                    <div className="instruction-label">Prompt:</div>
                    {section.instruction}
                  </div>
                  
                  <div className="reflection-card card-base card-accent-top">
                    <div className="reflection-content">
                      <p>{section.content}</p>
                    </div>
                    
                    <div className="reflection-footer">
                      <StatusBadge 
                        status={isEnough ? 'complete' : 'warning'} 
                        label={`${wordCount} words${!isEnough ? ' (Minimum 100 words required)' : ''}`}
                        className={`word-count ${isEnough ? 'sufficient' : 'insufficient'}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Learning Journey Visualization */}
          <div className="journey-visualization card-base">
            <h3>Your Spanish Language Journey</h3>
            <div className="journey-timeline">
              <div className="journey-point start">
                <div className="journey-marker"></div>
                <div className="journey-label">Beginning of Course</div>
              </div>
              <div className="journey-progress"></div>
              <div className="journey-point current">
                <div className="journey-marker"></div>
                <div className="journey-label">Current Level</div>
              </div>
              <div className="journey-progress future"></div>
              <div className="journey-point goal">
                <div className="journey-marker"></div>
                <div className="journey-label">B2 Goal</div>
              </div>
            </div>
            <div className="journey-description">
              <p>This visualization represents your Spanish learning journey from when you started the course to your current level, with your B2 fluency goal on the horizon. The solid line shows your completed progress, while the dotted line represents your path forward.</p>
            </div>
          </div>
        </>
      )}
    </PageLoader>
  );
}

export default Reflections;
