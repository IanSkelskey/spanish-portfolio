import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function Objetivos() {
  return (
    <PageWrapper title="Mis objetivos / Vision Board">
      {/* Prior Knowledge Section - Required */}
      <div className="prior-knowledge card">
        <h3>Mi conocimiento de español antes de la clase</h3>
        <p>
          [This section should describe your knowledge of Spanish language and culture before or at the beginning of this class. Write this in English as specified in the requirements.]
        </p>
      </div>
      
      <div className="vision-board">
        <h3>Mi Vision Board</h3>
        <img 
          src="https://placehold.co/800x400?text=Vision+Board" 
          alt="Vision Board" 
          className="vision-image" 
        />
      </div>
      
      <h3>Objetivos a corto plazo</h3>
      <ul className="goals-list">
        <li>
          <strong>Vocabulario:</strong> Aprender 500 nuevas palabras este semestre
        </li>
        <li>
          <strong>Gramática:</strong> Dominar el presente del subjuntivo
        </li>
        <li>
          <strong>Conversación:</strong> Mantener una conversación básica de 5 minutos
        </li>
      </ul>
      
      <h3>Objetivos a largo plazo</h3>
      <ul className="goals-list">
        <li>
          <strong>Fluidez:</strong> Alcanzar el nivel B2 según el Marco Común Europeo
        </li>
        <li>
          <strong>Cultural:</strong> Visitar un país de habla hispana
        </li>
        <li>
          <strong>Profesional:</strong> Usar español en un entorno laboral
        </li>
      </ul>
      
      <div className="card">
        <h3>Mi inspiración</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum 
          a arcu cursus vitae congue mauris rhoncus.
        </p>
      </div>
    </PageWrapper>
  );
}

export default Objetivos;
