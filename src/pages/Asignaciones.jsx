import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function Asignaciones() {
  return (
    <PageWrapper title="Asignaciones / Proyectos">
      <div className="assignments-intro">
        <h2>Mi progreso en las cuatro habilidades</h2>
        <p>Esta sección contiene ejemplos de mi trabajo que demuestran mi crecimiento en las cuatro habilidades del idioma español.</p>
      </div>
      
      {/* Listening Section - Required */}
      <div className="skill-section">
        <h3>Comprensión auditiva (Listening)</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>Proyecto de comprensión auditiva</h4>
            <img 
              src="https://placehold.co/300x200?text=Listening" 
              alt="Listening Assignment" 
            />
            <div className="reflection-box">
              <h5>Reflection</h5>
              <p>[Write your reflection here in English - min 100 words]</p>
            </div>
            <a href="#" className="project-link">Ver proyecto</a>
          </div>
        </div>
      </div>

      {/* Reading Section - Required */}
      <div className="skill-section">
        <h3>Comprensión de lectura (Reading)</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>Proyecto de lectura</h4>
            <img 
              src="https://placehold.co/300x200?text=Reading" 
              alt="Reading Assignment" 
            />
            <div className="reflection-box">
              <h5>Reflection</h5>
              <p>[Write your reflection here in English - min 100 words]</p>
            </div>
            <a href="#" className="project-link">Ver proyecto</a>
          </div>
        </div>
      </div>

      {/* Speaking Section - Required (at least 2 with one video) */}
      <div className="skill-section">
        <h3>Expresión oral (Speaking)</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>Presentación oral 1</h4>
            <div className="video-placeholder">
              [Video will be embedded here]
            </div>
            <div className="reflection-box">
              <h5>Reflection</h5>
              <p>[Write your reflection here in English - min 100 words]</p>
            </div>
            <a href="#" className="project-link">Ver proyecto</a>
          </div>
          
          <div className="project-card">
            <h4>Presentación oral 2</h4>
            <img 
              src="https://placehold.co/300x200?text=Speaking+Assignment" 
              alt="Speaking Assignment" 
            />
            <div className="reflection-box">
              <h5>Reflection</h5>
              <p>[Write your reflection here in English - min 100 words]</p>
            </div>
            <a href="#" className="project-link">Ver proyecto</a>
          </div>
        </div>
      </div>

      {/* Writing Section - Required */}
      <div className="skill-section">
        <h3>Expresión escrita (Writing)</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>Proyecto de escritura</h4>
            <img 
              src="https://placehold.co/300x200?text=Writing" 
              alt="Writing Assignment" 
            />
            <div className="reflection-box">
              <h5>Reflection</h5>
              <p>[Write your reflection here in English - min 100 words]</p>
            </div>
            <a href="#" className="project-link">Ver proyecto</a>
          </div>
        </div>
      </div>

      {/* Additional Projects - To meet 5-7 requirement */}
      <div className="skill-section">
        <h3>Proyectos adicionales</h3>
        <div className="projects-grid">
          {/* Add more projects as needed to meet 5-7 requirement */}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Asignaciones;
