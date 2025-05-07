import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function Reflecciones() {
  return (
    <PageWrapper title="Reflecciones finales">
      <div className="reflection-quote">
        <blockquote>
          "El aprendizaje de un nuevo idioma abre puertas a nuevos mundos"
        </blockquote>
      </div>
      
      {/* Goals Achieved Section - Required */}
      <div className="reflection-section">
        <h3>Objetivos cumplidos</h3>
        <p className="reflection-instruction">Revisit your Vision Board from the first week and reflect on which goals you've achieved and which ones you're still working towards.</p>
        <div className="reflection-card">
          <p>
            [Write your reflection here about your achieved goals and progress - minimum 100 words]
          </p>
        </div>
      </div>
      
      {/* Practical Use of Spanish - Required */}
      <div className="reflection-section">
        <h3>Uso del Español</h3>
        <p className="reflection-instruction">Reflect on your experiences using Spanish in real life and how you plan to use it in the future.</p>
        <div className="reflection-card">
          <p>
            [Write about your practical experiences using Spanish and future plans - minimum 100 words]
          </p>
        </div>
      </div>
      
      {/* Learning Process Reflection - Required */}
      <div className="reflection-section">
        <h3>Mi proceso de aprendizaje</h3>
        <p className="reflection-instruction">Compare your Spanish knowledge/skills from the beginning to the end of the course, and reflect on the learning process.</p>
        <div className="reflection-card">
          <p>
            [Write about your learning process, what worked, what didn't, favorite assignments, etc. - minimum 100 words]
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Reflecciones;
