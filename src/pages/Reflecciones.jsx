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
      
      <h3>Mi viaje de aprendizaje</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum 
        a arcu cursus vitae congue mauris rhoncus. Aenean imperdiet. Etiam ultricies 
        nisi vel augue. Curabitur ullamcorper ultricies nisi.
      </p>
      
      <div className="reflection-grid">
        <div className="reflection-card">
          <h4>Lo que he aprendido</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        
        <div className="reflection-card">
          <h4>Desafíos superados</h4>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias 
            excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Reflecciones;
