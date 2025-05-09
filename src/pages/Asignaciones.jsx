import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader';
import StatusBadge from '../components/StatusBadge';
import { extractYouTubeId, createYouTubeEmbedUrl, isYouTubeUrl } from '../utils/videoUtils';
import { resolveImagePath } from '../utils/imageUtils';
import './Pages.css';
import './Asignaciones.css';

function Assignments() {
  const { data, loading, error } = useDataFetching('assignments');

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
      return <img src={resolveImagePath(project.image)} alt={project.title} />;
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
    <PageLoader loading={loading} error={error} title="Assignments / Projects">
      {data && (
        <>
          <div className="assignments-intro">
            <h2>{data.intro.title}</h2>
            <p>{data.intro.description}</p>
            
            {/* Language Skills Progress Summary */}
            <ContentCard className="skills-summary">
              <SectionHeader title="Language Skills Progress" />
              <div className="skill-progress-container">
                {data.skills.map((skill, index) => {
                  const hasCompleteProjects = skill.projects.some(p => !isPlaceholder(p.reflection));
                  const skillIcon = {
                    "Listening Comprehension": "🎧",
                    "Reading Comprehension": "📖",
                    "Speaking": "🗣️",
                    "Writing": "✍️"
                  }[skill.name];
                  
                  return (
                    <div 
                      key={index} 
                      className={`skill-progress ${hasCompleteProjects ? 'complete' : 'incomplete'}`}
                    >
                      <div className="skill-icon">
                        <span className="skill-icon-inner">
                          {skillIcon}
                        </span>
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <StatusBadge 
                          status={hasCompleteProjects ? 'complete' : 'incomplete'} 
                          label={hasCompleteProjects ? 'Complete' : 'In Progress'} 
                          className="status-badge"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </ContentCard>
          </div>
          
          {/* Map through each skill category */}
          {data.skills.map((skill, index) => {
            const hasMissingContent = skill.projects.some(p => isPlaceholder(p.reflection));
            
            return (
              <div className="skill-section" key={index}>
                <SectionHeader
                  title={skill.name}
                  badge={hasMissingContent && 
                    <StatusBadge 
                      status="incomplete" 
                      label="Missing Content"
                      className="missing-badge"
                    />
                  }
                />
                
                <div className="projects-grid">
                  {skill.projects.map((project, projectIndex) => {
                    const isComplete = !isPlaceholder(project.reflection);
                    
                    return (
                      <ContentCard 
                        key={projectIndex}
                        className={`project-card ${!isComplete ? 'incomplete' : ''}`}
                        title={project.title}
                        accentPosition="top"
                        accentColor={isComplete ? undefined : '#FFC107'}
                      >
                        <div className="project-header">
                          <StatusBadge
                            status={isComplete ? 'complete' : 'incomplete'}
                            label={isComplete ? 'Complete' : 'Needs Reflection'}
                            className="status-indicator"
                          />
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
                      </ContentCard>
                    );
                  })}
                </div>
              </div>
            );
          })}
          
          {/* Additional Projects Section */}
          {data.additionalProjects && data.additionalProjects.length > 0 && (
            <div className="skill-section">
              <SectionHeader title="Additional Projects" />
              <div className="projects-grid">
                {data.additionalProjects.map((project, index) => (
                  <ContentCard
                    key={index}
                    className={`project-card ${isPlaceholder(project.reflection) ? 'incomplete' : ''}`}
                    title={project.title}
                  >
                    <div className="project-header">
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
                  </ContentCard>
                ))}
              </div>
            </div>
          )}
          
          {/* Portfolio Status Summary */}
          <ContentCard className="portfolio-status">
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
          </ContentCard>
        </>
      )}
    </PageLoader>
  );
}

export default Assignments;
