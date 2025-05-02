import Head from 'next/head';
import Layout from '@/components/Layout'; // Assuming you have a Layout component
// If no Layout component, import Header and Footer separately:
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import styles from '@/styles/PrivacyPolicy.module.css'; // Import the CSS module
import Link from 'next/link'; // Import Link for internal navigation if needed

export default function PrivacyPolicyPage() {
  const effectiveDate = "2025-03-01"; // Use ISO format for consistency

  return (
    <Layout> {/* Or wrap with <Header /> ... <Footer /> */}
      <Head>
        <title>Privacy Policy - TravelCardInsider</title>
        <meta name="description" content="Review the Privacy Policy for TravelCardInsider to understand how we collect, use, and protect your information." />
        {/* Add other relevant meta tags if needed */}
      </Head>

      <main className={styles.mainContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>
            <strong>Effective Date:</strong> {new Date(effectiveDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Welcome to <strong>TravelCardInsider</strong> (“we,” “our,” or “us”). This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website <strong>TravelCardInsider.com</strong> (the "Site").
            Please read this policy carefully. If you do not agree with the terms of this
            Privacy Policy, please do not access the Site.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we collect includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Information such as your name, email address, or other details you voluntarily provide.</li>
              <li><strong>Derivative Data:</strong> Details like your IP address, browser type, and operating system when you visit the Site.</li>
              <li><strong>Cookies and Tracking:</strong> We may use cookies, web beacons, and other tracking tools to enhance your experience.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Site’s functionality.</li>
              <li>Deliver newsletters or other relevant information you request.</li>
              <li>Analyze usage and trends to enhance your experience.</li>
              <li>Respond to inquiries or customer service requests.</li>
              <li>Enforce our terms, conditions, and policies.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Disclosure of Your Information</h2>
            <p>
              We may share the information we’ve collected about you in certain situations:
            </p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe disclosure is necessary to respond to legal process, investigate potential violations of our policies, or protect the rights, property, and safety of others.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              <li><strong>Affiliates & Partners:</strong> Information may be shared with our affiliates or partner companies in connection with affiliate links or offers displayed on the Site. These parties' use of your information will be governed by their own privacy policies.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Cookies and Other Tracking Technologies</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site
              to help customize the Site and improve your experience. When you access the Site, your personal
              information is not collected through the use of tracking technology. Most browsers are set to
              accept cookies by default. You can usually choose to set your browser to remove cookies and to
              reject cookies. If you choose to remove cookies or reject cookies, this could affect certain
              features or services of our Site.
              {/* Optional: Add link to a separate Cookie Policy page if you have one */}
              {/* For more details, please see our <Link href="/cookie-policy"><a>Cookie Policy</a></Link>. */}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Third-Party Websites</h2>
            <p>
              The Site may contain links to third-party websites and applications of interest, including
              advertisements and external services, that are not affiliated with us. Once you have used these
              links to leave the Site, any information you provide to these third parties is not covered by
              this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before
              visiting and providing any information to any third-party websites, you should inform yourself
              of the privacy policies and practices (if any) of the third party responsible for that website,
              and should take those steps necessary to, in your discretion, protect the privacy of your
              information. We are not responsible for the content or privacy and security practices and
              policies of any third parties, including other sites, services or applications that may be
              linked to or from the Site.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide
              to us, please be aware that despite our efforts, no security measures are perfect or
              impenetrable, and no method of data transmission can be guaranteed against any interception or
              other type of misuse. Any information disclosed online is vulnerable to interception and misuse
              by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal
              information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Policy for Children</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13.
              If you become aware of any data we may have collected from children under age 13, please
              contact us using the contact information provided below.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Your Choices About Your Information</h2>
            <ul>
              <li><strong>Access & Update:</strong> You may review or change the information you have provided us by contacting us at the email address below.</li>
              <li><strong>Opt-Out:</strong> You may opt-out of future email communications by following the unsubscribe instructions in our emails.</li>
              <li><strong>Cookie Management:</strong> As mentioned above, you can manage cookies through your browser settings.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason.
              We will alert you about any changes by updating the "Effective Date" of this Privacy Policy.
              You are encouraged to periodically review this Privacy Policy to stay informed of updates.
              You will be deemed to have been made aware of, will be subject to, and will be deemed to
              have accepted the changes in any revised Privacy Policy by your continued use of the Site
              after the date such revised Privacy Policy is posted.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> TravelCardInsider@gmail.com
              {/* Add other contact methods if desired */}
            </p>
          </section>
        </div>
      </main>
    </Layout> // Or </Footer>
  );
}