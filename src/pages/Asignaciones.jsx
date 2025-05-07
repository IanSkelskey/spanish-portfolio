import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function Asignaciones() {
  return (
    <PageWrapper title="Asignaciones / Proyectos">
      <div className="projects-grid">
        <div className="project-card">
          <h3>Proyecto 1: Presentación personal</h3>
          <img 
            src="https://placehold.co/300x200?text=Proyecto+1" 
            alt="Proyecto 1" 
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum 
            a arcu cursus vitae congue mauris rhoncus.
          </p>
          <a href="#" className="project-link">Ver proyecto</a>
        </div>
        
        <div className="project-card">
          <h3>Proyecto 2: Investigación cultural</h3>
          <img 
            src="https://placehold.co/300x200?text=Proyecto+2" 
            alt="Proyecto 2" 
          />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam.
          </p>
          <a href="#" className="project-link">Ver proyecto</a>
        </div>
        
        <div className="project-card">
          <h3>Proyecto 3: Narración</h3>
          <img 
            src="https://placehold.co/300x200?text=Proyecto+3" 
            alt="Proyecto 3" 
          />
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
            praesentium voluptatum deleniti atque.
          </p>
          <a href="#" className="project-link">Ver proyecto</a>
        </div>
      </div>
      
      <h3>Otras asignaciones</h3>
      <ul className="assignment-list">
        <li>
          <strong>Composición 1:</strong> Descripción de mi familia
          <a href="#" className="assignment-link">Leer</a>
        </li>
        <li>
          <strong>Ejercicio de gramática:</strong> Pretérito vs. Imperfecto
          <a href="#" className="assignment-link">Ver</a>
        </li>
        <li>
          <strong>Presentación oral:</strong> Mi lugar favorito
          <a href="#" className="assignment-link">Ver grabación</a>
        </li>
      </ul>
    </PageWrapper>
  );
}

export default Asignaciones;
