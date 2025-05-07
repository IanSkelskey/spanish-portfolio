import PageWrapper from '../components/PageWrapper';
import './Introduccion.css';

function Introduccion() {
    return (
        <PageWrapper title="Introducción / Acerca de mí">
            {/* Academic Info Card */}
            <div className="academic-info-card">
                <h2>Información Académica</h2>
                <div className="academic-details">
                    <div className="academic-item">
                        <span className="academic-label">Curso:</span> 
                        <span className="academic-value">Español 2011</span>
                    </div>
                    <div className="academic-item">
                        <span className="academic-label">Institución:</span> 
                        <span className="academic-value">CT State: Three Rivers</span>
                    </div>
                    <div className="academic-item">
                        <span className="academic-label">Semestre:</span> 
                        <span className="academic-value">Primavera 2025</span>
                    </div>
                </div>
            </div>
            
            {/* Quote Section - Required */}
            <div className="quote-section">
                <blockquote>
                    "El límite del idioma significa el límite de mi mundo."
                    <cite>— Adaptado de Ludwig Wittgenstein</cite>
                </blockquote>
            </div>

            <div className="profile-section">
                <img
                    src="https://placehold.co/300x300?text=Profile+Photo"
                    alt="Foto de perfil"
                    className="profile-image"
                />
                <div>
                    <h2>¿Quién soy?</h2>
                    <div className="introduction-text">
                        <p>
                            Buenas noches. Soy Ian Skelskey. Soy Americano. Soy de Bristol, Connecticut, Estados Unidos.
                            Ahora vivo en Southington. Soy ingeniero de software. Puedo tocar el piano y la guitarra.
                            Mi esposa es de Argentina.
                        </p>
                        <p>
                            Trabajo más de 40 horas por semana y tengo dos trabajos. Jugué al fútbol cuando era niño,
                            pero ahora solo voy al gimnasio. Me gustan muchos tipos de música, pero mi favorita de España
                            es el flamenco pop. Mi restaurante favorito es Thai Avenue en Bristol. Mi color favorito es el púrpura.
                        </p>
                        <p>
                            Me gustan los videojuegos, escribir código, ver películas, comer y dormir. Tengo treinta y un años.
                            Muchas gracias. Hasta mañana.
                        </p>

                        <div className="social-links">
                            <p>
                                Si te gusta el código también, puedes encontrarme en GitHub aquí: <a href="https://github.com/ianskelskey" target="_blank" rel="noopener noreferrer">GitHub</a>.
                            </p>
                            <p>
                                Si estás en LinkedIn, puedes encontrarme aquí: <a href="https://www.linkedin.com/in/ianskelskey/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                            </p>
                        </div>
                    </div>
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

            {/* Video Introduction Section - Optional but mentioned in requirements */}
            <div className="video-intro">
                <h3>Video de introducción</h3>
                <p className="video-placeholder">
                    [El video de introducción se agregará pronto]
                </p>
                {/* Uncomment when you have a video
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/your-video-id" 
                    title="Video de introducción" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                */}
            </div>
        </PageWrapper>
    );
}

export default Introduccion;
