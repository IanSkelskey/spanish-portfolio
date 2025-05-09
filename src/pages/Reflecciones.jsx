import PageWrapper from '../components/PageWrapper';
import BlockQuote from '../components/BlockQuote';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Reflecciones.css';

function Reflections() {
  const { data, loading, error } = useDataFetching('reflections');

  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  // Function to count words in a text
  const countWords = (text) => {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  };

  return (
    <PageWrapper title="Final Reflections / Reflexiones Finales">
      <BlockQuote text={data.quote.text} />
      
      {/* Reflection Summary */}
      <div className="reflection-summary">
        <div className="summary-card">
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
        {data.sections.map((section, index) => (
          <div className="reflection-section" key={index}>
            <div className="reflection-header">
              <div className="reflection-icon">
                {section.title === "Goals Achieved" || section.title === "Objetivos cumplidos" ? "🎯" :
                 section.title === "Using Spanish" || section.title === "Uso del Español" ? "🗣️" :
                 section.title === "My Learning Process" || section.title === "Mi proceso de aprendizaje" ? "🧠" : 
                 "📝"}
              </div>
              <h3>{section.title === "Goals Achieved" ? "Goals Achieved / Objetivos cumplidos" : 
                  section.title === "Using Spanish" ? "Using Spanish / Uso del Español" :
                  section.title === "My Learning Process" ? "My Learning Process / Mi proceso de aprendizaje" : 
                  section.title}</h3>
            </div>
            
            <div className="reflection-instruction">
              <div className="instruction-label">Prompt:</div>
              {section.instruction}
            </div>
            
            <div className="reflection-card">
              <div className="reflection-content">
                <p>{section.content}</p>
              </div>
              
              <div className="reflection-footer">
                <div className={`word-count ${countWords(section.content) >= 100 ? 'sufficient' : 'insufficient'}`}>
                  {countWords(section.content)} words
                  {countWords(section.content) < 100 && 
                    <span className="warning"> (Minimum 100 words required)</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Learning Journey Visualization */}
      <div className="journey-visualization">
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
    </PageWrapper>
  );
}

export default Reflections;
