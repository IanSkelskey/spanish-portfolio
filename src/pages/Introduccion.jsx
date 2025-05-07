import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function Introduccion() {
  return (
    <PageWrapper title="Introducción / Acerca de mí">
      <div className="profile-section">
        <img 
          src="https://placehold.co/300x300?text=Profile+Photo" 
          alt="Foto de perfil" 
          className="profile-image" 
        />
        <div>
          <h2>¿Quién soy?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam 
            vehicula ipsum a arcu cursus vitae congue mauris rhoncus. 
            Quisque vel dapibus felis. Aenean at dolor non lectus malesuada faucibus.
          </p>
        </div>
      </div>
      
      <h3>Mi historia con el español</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum 
        a arcu cursus vitae congue mauris rhoncus. Aenean imperdiet. Etiam ultricies 
        nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. 
        Maecenas tempus, tellus eget condimentum rhoncus.
      </p>
      
      <h3>¿Por qué estudio español?</h3>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
        architecto beatae vitae dicta sunt explicabo.
      </p>
    </PageWrapper>
  );
}

export default Introduccion;
