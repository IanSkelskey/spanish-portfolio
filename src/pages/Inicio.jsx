import PageWrapper from '../components/PageWrapper';
import '../pages/Pages.css';

function Inicio() {
  return (
    <PageWrapper title="Bienvenidos a mi ePortfolio de Español">
      <div className="hero-section">
        <img 
          src="https://placehold.co/600x300?text=Portfolio+Hero+Image" 
          alt="Portfolio Hero" 
          className="hero-image" 
        />
      </div>
      <h2>¡Hola y bienvenidos!</h2>
      <p>
        Este portafolio documenta mi viaje aprendiendo español y explorando
        las culturas del mundo hispanohablante.
      </p>
      <div className="card">
        <h3>¿Qué encontrarás aquí?</h3>
        <ul>
          <li>Mi introducción y motivación para aprender español</li>
          <li>Mis objetivos de aprendizaje</li>
          <li>Proyectos y asignaciones completados</li>
          <li>Exploración de la cultura hispanohablante</li>
          <li>Mis reflexiones sobre este viaje</li>
          <li>Plan de acción para continuar mi aprendizaje</li>
        </ul>
      </div>
    </PageWrapper>
  );
}

export default Inicio;
