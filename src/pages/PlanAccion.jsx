import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function PlanAccion() {
  return (
    <PageWrapper title="Plan de acción">
      <div className="plan-intro">
        <img 
          src="https://placehold.co/800x200?text=Plan+de+Acción" 
          alt="Plan de acción" 
          className="plan-banner" 
        />
        <p>
          Mi estrategia para continuar desarrollando mis habilidades en español.
        </p>
      </div>
      
      <h3>Próximos pasos</h3>
      <div className="timeline">
        <div className="timeline-item">
          <h4>Corto plazo (3 meses)</h4>
          <ul>
            <li>Practicar español 30 minutos diarios</li>
            <li>Completar un curso en línea de gramática avanzada</li>
            <li>Leer un libro en español</li>
          </ul>
        </div>
        
        <div className="timeline-item">
          <h4>Mediano plazo (1 año)</h4>
          <ul>
            <li>Participar en un intercambio lingüístico semanal</li>
            <li>Ver una serie completa en español sin subtítulos</li>
            <li>Escribir un blog semanal en español</li>
          </ul>
        </div>
        
        <div className="timeline-item">
          <h4>Largo plazo (2+ años)</h4>
          <ul>
            <li>Viajar a un país hispanohablante</li>
            <li>Obtener una certificación oficial de nivel B2/C1</li>
            <li>Usar el español en un contexto profesional</li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}

export default PlanAccion;
