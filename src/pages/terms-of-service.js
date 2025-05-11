import Head from 'next/head';
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer
import styles from '@/styles/PrivacyPolicy.module.css'; // Reuse the same CSS module
import Link from 'next/link'; // Import Link for internal navigation

export default function TermsOfServicePage() {
  const lastUpdatedDate = "2025-03-01"; // Use ISO format

  return (
    <>
      <Head>
        <title>Terms of Service - TravelCardInsider</title>
        <meta name="description" content="Read the Terms of Service for using TravelCardInsider. Understand your rights and obligations when accessing our content and tools." />
        {/* Add other relevant meta tags if needed */}
      </Head>

      

      <main className={styles.mainContainer}>
        <div className={styles.contentWrapper}> {/* Use the same wrapper class */}
          <h1 className={styles.pageTitle}>Terms of Service</h1>
          <p className={styles.effectiveDate}> {/* Use the same class for date */}
            <strong>Last Updated:</strong> {new Date(lastUpdatedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Welcome to <strong>TravelCardInsider</strong> (the “Site”), located at
            <strong>TravelCardInsider.com</strong>. By accessing or using the Site, you
            agree to the following Terms of Service (“Terms”). If you do not agree with
            these Terms, please discontinue use of the Site immediately.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <p>
              By using the Site, you acknowledge that you have read, understood, and agree
              to be bound by these Terms and our{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>. We may modify these Terms from
              time to time. Any changes will be effective upon posting. Continued use of
              the Site constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. About Our Services</h2>
            <p>
              <strong>TravelCardInsider</strong> provides reviews, comparisons, and
              informational content about travel-related credit cards and financial
              products. We do not offer official financial advice nor do we directly issue
              any credit cards. All information is presented for educational and
              informational purposes only. Verify all card details on the issuer's official website before applying.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Affiliate Disclaimer</h2>
            <p>
              The Site contains affiliate links. If you click on an affiliate link and
              subsequently apply for and get approved for a card or service, we may receive a
              commission from the issuer or provider at no additional cost to you. Our editorial content, reviews, and analyses
              are independent and based on our assessment of the products, but affiliate partnerships may influence which products we review or feature.
              We strive to keep our content accurate and up-to-date, but we
              cannot guarantee the absolute completeness or timeliness of credit card details (e.g.,
              APRs, annual fees, welcome offers, benefits). Always confirm details on the issuer's secure application page.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. No Financial or Legal Advice</h2>
            <p>
              All content on this Site is provided on an “as-is” basis for informational purposes only. We are not
              licensed financial advisors, registered investment advisors, or legal professionals. Nothing on the Site constitutes
              financial, investment, legal, tax, or other professional advice. You should consult with a qualified professional before making any financial decisions. Your personal financial situation is unique, and any information obtained through this Site may not be appropriate for your situation.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Use of the Site</h2>
            <p>You agree to use the Site lawfully and ethically. You agree not to:</p>
            <ul>
              <li>Violate any applicable local, state, national, or international laws or regulations.</li>
              <li>Use the Site to distribute unsolicited promotional or advertising material ("spam").</li>
              <li>Impersonate any person or entity, including TravelCardInsider staff, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
              <li>Interfere with or disrupt the Site or servers or networks connected to the Site.</li>
              <li>Attempt to gain unauthorized access to non-public areas of the Site, computer systems, or networks connected to the Site.</li>
              <li>Scrape, collect, or store personal data about other users without their consent.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Intellectual Property Rights</h2>
            <p>
              All content on the Site, including but not limited to text, graphics, logos, images, code, and software, is the property
              of <strong>TravelCardInsider</strong> or its content suppliers and protected by copyright, trademark, and other intellectual property laws, unless otherwise noted.
              You may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site without our prior written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Disclaimer of Warranties</h2>
            <p>
              The Site and its content are provided “as is” and “as available” without warranty of any kind, either express or implied.
              <strong>TravelCardInsider</strong> specifically disclaims all warranties, including, but not limited to, the implied warranties of merchantability,
              fitness for a particular purpose, accuracy, completeness, timeliness, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. Use of the Site is at your own risk.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, in no event shall <strong>TravelCardInsider</strong>, its owners, employees,
              partners, or affiliates be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages (including, without limitation, damages for loss of profits, goodwill, use, data, or other intangible losses) arising out of or relating to your access to or use of, or your inability to access or use, the Site or any content on the Site, whether based on warranty, contract, tort (including negligence), statute, or any other legal theory, and whether or not we have been informed of the possibility of such damage.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless
              <strong>TravelCardInsider</strong> and its officers, directors, employees, agents, and affiliates, from and against any claims, actions, demands, liabilities,
              damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from or in connection with your use of the Site, your violation
              of these Terms, or your violation of any rights of another person or entity.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws
              of the jurisdiction in which TravelCardInsider operates {/* Replace with specific Jurisdiction if desired, e.g., the State of [Your State], USA */}, without regard to its conflict of law principles.
              You agree to submit to the personal and exclusive jurisdiction of the courts located within that jurisdiction for the resolution of any disputes arising out of or relating to these Terms or the Site.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Changes to These Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we may provide notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. We will notify you of any changes by posting the new Terms on this page and updating the
              “Last Updated” date at the top. Your continued use of the Site after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <br /><strong>Email:</strong> team@travelcardinsider.com
            </p>
          </section>
        </div>
      </main>

      
    </>
  );
}