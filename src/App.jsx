
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';

function App() {
    const [showNav, setShowNav] = useState(false);

    return (
        <Router>
            <div>
                {showNav && (
                    <nav style={{ padding: '20px', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                        <Link to="/terms" style={{ marginRight: '20px', textDecoration: 'none', color: '#007bff' }}>
                            Terms of Service
                        </Link>
                        <Link to="/privacy" style={{ textDecoration: 'none', color: '#007bff' }}>
                            Privacy Policy
                        </Link>
                    </nav>
                )}
                
                <button 
                    onClick={() => setShowNav(!showNav)}
                    style={{
                        position: 'fixed',
                        top: '10px',
                        right: '10px',
                        padding: '8px 12px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        zIndex: 1000,
                        fontSize: '12px'
                    }}
                >
                    {showNav ? 'Hide Menu' : 'Menu'}
                </button>
                
                <Routes>
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/" element={
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <h1>OBD2 Scanner Legal Documents</h1>
                            <p>Please select a document to view:</p>
                            <div style={{ marginTop: '20px' }}>
                                <Link to="/terms" style={{ 
                                    display: 'inline-block', 
                                    margin: '10px', 
                                    padding: '10px 20px', 
                                    backgroundColor: '#007bff', 
                                    color: 'white', 
                                    textDecoration: 'none', 
                                    borderRadius: '5px' 
                                }}>
                                    Terms of Service
                                </Link>
                                <Link to="/privacy" style={{ 
                                    display: 'inline-block', 
                                    margin: '10px', 
                                    padding: '10px 20px', 
                                    backgroundColor: '#28a745', 
                                    color: 'white', 
                                    textDecoration: 'none', 
                                    borderRadius: '5px' 
                                }}>
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;