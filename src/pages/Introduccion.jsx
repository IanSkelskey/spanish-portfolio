import BlockQuote from '../components/BlockQuote';
import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader';
import { resolveImagePath } from '../utils/imageUtils';
import './Pages.css';
import './Introduccion.css';

function Introduccion() {
    const { data, loading, error } = useDataFetching('introduction');

    return (
        <PageLoader loading={loading} error={error} title="Introduction / About Me">
            {data && (
                <>
                    {/* Academic Info Card */}
                    <div className="academic-info-card">
                        <h2>Academic Information</h2>
                        <div className="academic-details">
                            <div className="academic-item">
                                <span className="academic-label">Course:</span>
                                <span className="academic-value">{data.academicInfo.course}</span>
                            </div>
                            <div className="academic-item">
                                <span className="academic-label">Institution:</span>
                                <span className="academic-value">{data.academicInfo.institution}</span>
                            </div>
                            <div className="academic-item">
                                <span className="academic-label">Semester:</span>
                                <span className="academic-value">{data.academicInfo.semester}</span>
                            </div>
                        </div>
                    </div>
    
                    {/* Quote Section - Required */}
                    <BlockQuote
                        text={data.quote.text}
                        author={data.quote.author}
                    />
    
                    <div className="profile-section">
                        <img
                            src={resolveImagePath(data.profile.image)}
                            alt="Profile photo"
                            className="profile-image"
                        />
                        <div>
                            <SectionHeader title="Who am I?" />
                            <div className="introduction-text">
                                {data.profile.introduction.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
    
                                <div className="social-links">
                                    {data.profile.socialLinks.map((link, index) => (
                                        <p key={index}>
                                            {index === 0 ? 'Si te gusta el código también, puedes encontrarme en ' : 'Si estás en '}
                                            {link.platform} here: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>.
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <SectionHeader title="My history with Spanish" />
                    <p>{data.spanishHistory}</p>
    
                    <SectionHeader title="Why do I study Spanish?" />
                    <p>{data.whyLearnSpanish}</p>
    
                    {/* Video Introduction Section - Optional but mentioned in requirements */}
                    <SectionHeader title="Introduction Video" />
                    <ContentCard>
                        <p className="video-placeholder">
                            [The introduction video will be added soon]
                        </p>
                        {/* Uncomment when you have a video
                        <iframe 
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/embed/your-video-id" 
                            title="Introduction Video" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                        */}
                    </ContentCard>
                </>
            )}
        </PageLoader>
    );
}

export default Introduccion;
