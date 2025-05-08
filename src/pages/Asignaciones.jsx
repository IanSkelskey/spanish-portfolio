import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import { extractYouTubeId, createYouTubeEmbedUrl, isYouTubeUrl } from '../utils/videoUtils';
import './Pages.css';
import './Asignaciones.css';

function Asignaciones() {
  const { data, loading, error } = useDataFetching('assignments');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

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
      return <img src={project.image} alt={project.title} />;
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
    <PageWrapper title="Asignaciones / Proyectos">
      <div className="assignments-intro">
        <h2>{data.intro.title}</h2>
        <p>{data.intro.description}</p>
      </div>
      
      {/* Map through each skill category */}
      {data.skills.map((skill, index) => (
        <div className="skill-section" key={index}>
          <h3>{skill.name}</h3>
          <div className="projects-grid">
            {skill.projects.map((project, projectIndex) => (
              <div className="project-card" key={projectIndex}>
                <h4>{project.title}</h4>
                
                {renderMediaContent(project)}
                
                <div className="reflection-box">
                  <h5>Reflection</h5>
                  <p>{project.reflection}</p>
                </div>
                
                {project.link && !project.isVideo && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Ver proyecto
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Additional Projects - To meet 5-7 requirement */}
      {data.additionalProjects && data.additionalProjects.length > 0 && (
        <div className="skill-section">
          <h3>Proyectos adicionales</h3>
          <div className="projects-grid">
            {data.additionalProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <h4>{project.title}</h4>
                
                {renderMediaContent(project)}
                
                <div className="reflection-box">
                  <h5>Reflection</h5>
                  <p>{project.reflection}</p>
                </div>
                
                {project.link && !project.isVideo && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    Ver proyecto
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

export default Asignaciones;
