import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function Cultura() {
  return (
    <PageWrapper title="Cultura">
      <div className="culture-header">
        <img 
          src="https://placehold.co/800x300?text=Cultural+Exploration" 
          alt="Exploración cultural" 
          className="culture-banner" 
        />
      </div>
      
      {/* Reflexión sobre la conciencia cultural - Requerido */}
      <div className="culture-reflection card">
        <h3>Mi desarrollo de conciencia cultural</h3>
        <p>
          [Escribe aquí tu reflexión sobre lo que aprendiste acerca de la cultura hispana y cómo desarrollaste tu conciencia cultural durante esta clase. Esto debe estar en inglés y tener al menos 100 palabras.]
        </p>
      </div>
      
      <h3>Aspectos culturales explorados</h3>
      <div className="culture-grid">
        <div className="culture-card">
          <h4>Gastronomía</h4>
          <img 
            src="https://placehold.co/300x200?text=Gastronomía" 
            alt="Gastronomía hispana" 
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum 
            a arcu cursus vitae congue mauris rhoncus.
          </p>
        </div>
        
        <div className="culture-card">
          <h4>Música y baile</h4>
          <img 
            src="https://placehold.co/300x200?text=Música+y+Baile" 
            alt="Música y baile" 
          />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        
        <div className="culture-card">
          <h4>Festividades</h4>
          <img 
            src="https://placehold.co/300x200?text=Festividades" 
            alt="Festividades hispanas" 
          />
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
            praesentium voluptatum deleniti atque.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Cultura;
