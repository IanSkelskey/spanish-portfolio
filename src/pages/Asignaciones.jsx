import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader';
import { extractYouTubeId, createYouTubeEmbedUrl, isYouTubeUrl } from '../utils/videoUtils';
import { resolveImagePath } from '../utils/imageUtils';
import './Pages.css';
import './Asignaciones.css';

function Assignments() {
  const { data, loading, error } = useDataFetching('assignments');

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
      return <img src={resolveImagePath(project.image)} alt={project.title} className="project-image" />;
    }
    
    // Fallback for no media
    return null;
  };

  return (
    <PageLoader loading={loading} error={error} title="Assignments / Projects">
      {data && (
        <>
          <div className="assignments-intro">
            <h2>{data.intro.title}</h2>
            <p>{data.intro.description}</p>
          </div>
          
          {/* Map through each skill category */}
          {data.skills.map((skill, index) => (
            <div className="skill-section" key={index}>
              <SectionHeader title={skill.name} />
              
              <div className="projects-list">
                {skill.projects.map((project, projectIndex) => (
                  <ContentCard 
                    key={projectIndex}
                    className="project-card"
                  >
                    <div className="project-content">
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        {project.type && (
                          <span className="project-type">{project.type}</span>
                        )}
                        <div className="project-media">
                          {renderMediaContent(project)}
                        </div>
                        
                        {project.link && !project.isVideo && (
                          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>
                        )}
                      </div>
                      
                      <div className="reflection-container">
                        <h4 className="reflection-title">Reflection</h4>
                        <div className="reflection-content">
                          <p>{project.reflection}</p>
                        </div>
                      </div>
                    </div>
                  </ContentCard>
                ))}
              </div>
            </div>
          ))}
          
          {/* Additional Projects Section */}
          {data.additionalProjects && data.additionalProjects.length > 0 && (
            <div className="skill-section">
              <SectionHeader title="Additional Projects" />
              <div className="projects-list">
                {data.additionalProjects.map((project, index) => (
                  <ContentCard
                    key={index}
                    className="project-card"
                  >
                    <div className="project-content">
                      <div className="project-info">
                        <h3 className="project-title">{project.title}</h3>
                        {project.type && (
                          <span className="project-type">{project.type}</span>
                        )}
                        <div className="project-media">
                          {renderMediaContent(project)}
                        </div>
                        
                        {project.link && project.link !== "#" && (
                          <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>
                        )}
                      </div>
                      
                      <div className="reflection-container">
                        <h4 className="reflection-title">Reflection</h4>
                        <div className="reflection-content">
                          <p>{project.reflection}</p>
                        </div>
                      </div>
                    </div>
                  </ContentCard>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </PageLoader>
  );
}

export default Assignments;
