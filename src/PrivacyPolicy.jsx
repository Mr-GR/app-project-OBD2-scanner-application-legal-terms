function PrivacyPolicy() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Privacy Policy</h1>
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following personal information:</p>
            <ul>
                <li>Device information (make, model, year)</li>
                <li>Vehicle Identification Number (VIN) if provided</li>
                <li>Diagnostic data from your vehicle's OBD2 system</li>
                <li>Usage statistics and app performance data</li>
            </ul>
            
            <h3>Technical Information</h3>
            <p>We automatically collect certain technical information:</p>
            <ul>
                <li>Device type and operating system</li>
                <li>App version and usage patterns</li>
                <li>Error logs and crash reports</li>
                <li>IP address and location data (if permitted)</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
                <li>Provide accurate diagnostic services</li>
                <li>Improve app functionality and user experience</li>
                <li>Generate usage statistics and analytics</li>
                <li>Provide customer support</li>
                <li>Send important updates about the service</li>
            </ul>
            
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
            <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who help us operate the app</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            
            <h2>5. Data Retention</h2>
            <p>We retain your information only as long as necessary to provide our services and fulfill the purposes outlined in this policy, or as required by law.</p>
            
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of certain data collection</li>
                <li>Withdraw consent where applicable</li>
            </ul>
            
            <h2>7. Children's Privacy</h2>
            <p>Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>
            
            <h2>8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            
            <h2>9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@obd2scanner.com</p>
        </div>
    );
}

export default PrivacyPolicy;