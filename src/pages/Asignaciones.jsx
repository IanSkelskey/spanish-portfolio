import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import { extractYouTubeId, createYouTubeEmbedUrl, isYouTubeUrl } from '../utils/videoUtils';
import './Pages.css';
import './Asignaciones.css';

// Add image resolver for /assets support
function resolveImageSrc(src) {
  if (src && src.startsWith('/assets')) {
    return `${import.meta.env.BASE_URL}assets/${src.replace(/^\/assets\//, '')}`;
  }
  return src;
}

function Assignments() {
  const { data, loading, error } = useDataFetching('assignments');

  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  /**
   * Checks if content is a placeholder
   */
  const isPlaceholder = (text) => {
    return text && (text.startsWith('[') && text.endsWith(']'));
  };

  /**
   * Renders media content (image, video, or placeholder)
   */
  const renderMediaContent = (project) => {
    // Case 1: Project is a YouTube video
    if (project.isVideo && project.link && isYouTubeUrl(project.link)) {
      const videoId = extractYouTubeId(project.link);
      if (videoId) {
        return (
          <div className="video-container">
            <iframe
              width="100%"
              height="200"
              src={createYouTubeEmbedUrl(videoId)}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
    }
    
    // Case 2: Project has an image
    if (project.image) {
      return <img src={resolveImageSrc(project.image)} alt={project.title} />;
    }
    
    // Case 3: Project is marked as video but not YouTube or no valid link
    if (project.isVideo) {
      return (
        <div className="video-placeholder">
          [Video will be embedded here]
        </div>
      );
    }
    
    // Fallback
    return null;
  };

  return (
    <PageWrapper title="Assignments / Projects">
      <div className="assignments-intro">
        <h2>{data.intro.title}</h2>
        <p>{data.intro.description}</p>
        
        {/* Language Skills Progress Summary */}
        <div className="skills-summary">
          <h3>Language Skills Progress</h3>
          <div className="skill-progress-container">
            {data.skills.map((skill, index) => {
              const hasCompleteProjects = skill.projects.some(p => !isPlaceholder(p.reflection));
              return (
                <div 
                  key={index} 
                  className={`skill-progress ${hasCompleteProjects ? 'complete' : 'incomplete'}`}
                >
                  <div className="skill-icon">
                    <span className="skill-icon-inner">
                      {skill.name === "Listening Comprehension" && "🎧"}
                      {skill.name === "Reading Comprehension" && "📖"}
                      {skill.name === "Speaking" && "🗣️"}
                      {skill.name === "Writing" && "✍️"}
                    </span>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="status-badge">
                      {hasCompleteProjects ? 'Complete' : 'In Progress'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Map through each skill category */}
      {data.skills.map((skill, index) => (
        <div className="skill-section" key={index}>
          <h3>
            {skill.name} 
            {skill.projects.some(p => isPlaceholder(p.reflection)) && 
              <span className="missing-badge">Missing Content</span>
            }
          </h3>
          <div className="projects-grid">
            {skill.projects.map((project, projectIndex) => (
              <div 
                className={`project-card ${isPlaceholder(project.reflection) ? 'incomplete' : ''}`} 
                key={projectIndex}
              >
                <div className="project-header">
                  <h4>{project.title}</h4>
                  {isPlaceholder(project.reflection) ? (
                    <span className="status-indicator incomplete">Needs Reflection</span>
                  ) : (
                    <span className="status-indicator complete">Complete</span>
                  )}
                </div>
                
                {renderMediaContent(project)}
                
                <div className="reflection-box">
                  <h5>Reflection</h5>
                  {isPlaceholder(project.reflection) ? (
                    <div className="placeholder-notice">
                      <p>⚠️ You need to add a reflection here (min. 100 words)</p>
                      <p className="placeholder-text">{project.reflection}</p>
                    </div>
                  ) : (
                    <p>{project.reflection}</p>
                  )}
                </div>
                
                {project.link && !project.isVideo && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Additional Projects Section */}
      {data.additionalProjects && data.additionalProjects.length > 0 && (
        <div className="skill-section">
          <h3>Additional Projects</h3>
          <div className="projects-grid">
            {data.additionalProjects.map((project, index) => (
              <div 
                className={`project-card ${isPlaceholder(project.reflection) ? 'incomplete' : ''}`}
                key={index}
              >
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <span className="project-type">{project.type}</span>
                </div>
                
                {renderMediaContent(project)}
                
                <div className="reflection-box">
                  <h5>Reflection</h5>
                  <p>{project.reflection}</p>
                </div>
                
                {project.link && project.link !== "#" && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Portfolio Status Summary */}
      <div className="portfolio-status">
        <h3>Portfolio Completion Status</h3>
        <div className="status-grid">
          <div className="status-item">
            <div className="status-label">Language Skills Covered</div>
            <div className="status-value">
              {data.skills.filter(skill => skill.projects.some(p => !isPlaceholder(p.reflection))).length}/4
            </div>
          </div>
          <div className="status-item">
            <div className="status-label">Speaking Projects (Min. 2 Required)</div>
            <div className="status-value">
              {data.skills.find(s => s.name === "Speaking")?.projects.filter(p => !isPlaceholder(p.reflection)).length || 0}/2
            </div>
          </div>
          <div className="status-item">
            <div className="status-label">Total Reflections</div>
            <div className="status-value">
              {data.skills.reduce((count, skill) => 
                count + skill.projects.filter(p => !isPlaceholder(p.reflection)).length, 0) + 
                data.additionalProjects.filter(p => !isPlaceholder(p.reflection)).length}/9
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Assignments;
