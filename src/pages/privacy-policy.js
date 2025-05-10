import Head from 'next/head';
// Removed Layout import
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer
import styles from '@/styles/PrivacyPolicy.module.css';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const effectiveDate = "2025-03-01";

  return (
    // Use React Fragment as a wrapper if needed, otherwise just sequence them
    <>
      <Head>
        <title>Privacy Policy - TravelCardInsider</title>
        <meta name="description" content="Review the Privacy Policy for TravelCardInsider to understand how we collect, use, and protect your information." />
      </Head>

      <Header /> {/* Render Header component */}

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
              <li><strong>Personal Data:</strong> Information such as your name, email address, or other details you voluntarily provide when you register, subscribe, or interact with the site.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Cookies and Tracking:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the Site and improve your experience.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
              <li>Create and manage your account (if applicable).</li>
              <li>Email you regarding your account or subscription.</li>
              <li>Send you newsletters or promotional materials you have requested.</li>
              <li>Enable user-to-user communications (if applicable).</li>
              <li>Fulfill and manage requests related to our services.</li>
              <li>Analyze usage and trends to improve our website and user experience.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
              <li>Request feedback and contact you about your use of the Site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
              <li><strong>Marketing Communications:</strong> With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.</li>
              <li><strong>Affiliates & Partners:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us. This includes partners whose offers are displayed via affiliate links.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
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
              We do not knowingly solicit information from or market to children under the age of 13 (or other age as required by local law).
              If you become aware of any data we may have collected from children under age 13, please
              contact us using the contact information provided below.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Your Choices About Your Information</h2>
             <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Account Information:</strong> You may at any time review or change the information in your account (if applicable) or terminate your account by contacting us using the contact information provided below.</li>
              <li><strong>Emails and Communications:</strong> If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by following the instructions in the communication or by contacting us using the contact information provided below.</li>
              <li><strong>Cookie Management:</strong> As mentioned above, you can manage cookies through your browser settings. Be aware that blocking cookies may impact the functionality of the Site.</li>
              {/* Add sections for specific rights like GDPR or CCPA if applicable */}
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
              <strong>Email:</strong> team@travelcardinsider.com
              {/* Add other contact methods if desired, e.g., mailing address */}
            </p>
          </section>
        </div>
      </main>

       {/* Render Footer component */}
    </>
  );
}