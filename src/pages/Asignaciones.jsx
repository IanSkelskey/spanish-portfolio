import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Asignaciones.css';

function Asignaciones() {
  const { data, loading, error } = useDataFetching('assignments');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

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
                {project.isVideo ? (
                  <div className="video-placeholder">
                    [Video will be embedded here]
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                  />
                )}
                <div className="reflection-box">
                  <h5>Reflection</h5>
                  <p>{project.reflection}</p>
                </div>
                <a href={project.link} className="project-link">Ver proyecto</a>
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
                <img 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className="reflection-box">
                  <h5>Reflection</h5>
                  <p>{project.reflection}</p>
                </div>
                <a href={project.link} className="project-link">Ver proyecto</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

export default Asignaciones;
