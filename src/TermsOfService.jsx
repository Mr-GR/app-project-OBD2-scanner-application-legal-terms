function TermsOfService() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Terms of Service</h1>
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2>1. Agreement to Terms</h2>
            <p>By accessing and using this OBD2 Scanner Application ("the App"), you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2>2. Description of Service</h2>
            <p>The App provides OBD2 vehicle diagnostic services, including but not limited to:</p>
            <ul>
                <li>Reading and clearing diagnostic trouble codes</li>
                <li>Monitoring vehicle performance parameters</li>
                <li>Providing diagnostic reports and recommendations</li>
            </ul>
            
            <h2>3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
                <li>Use the App only for lawful purposes</li>
                <li>Ensure your vehicle is compatible with OBD2 standards</li>
                <li>Not attempt to reverse engineer or modify the App</li>
                <li>Not use the App while driving</li>
            </ul>
            
            <h2>4. Disclaimer</h2>
            <p>The App is provided "as is" without any warranty. We do not guarantee that the diagnostic information provided is completely accurate or that following our recommendations will resolve all vehicle issues.</p>
            
            <h2>5. Limitation of Liability</h2>
            <p>We shall not be liable for any damages resulting from the use or inability to use the App, including but not limited to vehicle damage or repair costs.</p>
            
            <h2>6. Privacy</h2>
            <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.</p>
            
            <h2>7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the new terms.</p>
            
            <h2>8. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at support@obd2scanner.com</p>
        </div>
    );
}

export default TermsOfService;