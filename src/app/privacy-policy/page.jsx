import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Ovia Wellness",
  description:
    "Read the Privacy Policy for Ovia Wellness and learn how we collect, use and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <div className="legal-container">

          <span className="legal-eyebrow">
            / YOUR PRIVACY
          </span>

          <h1>
            Privacy
            <em> Policy</em>
          </h1>

          <p>
            Your privacy matters to us. This policy explains
            how Ovia Wellness handles information shared
            through our website.
          </p>

        </div>
      </section>


      <section className="legal-content-section">

        <div className="legal-container">

          <div className="legal-content">

            <p className="legal-updated">
              Last updated: August 27, 2026
            </p>


            <h2>
              1. Introduction
            </h2>

            <p>
              Ovia Wellness respects your privacy and is
              committed to protecting the information you
              provide while using our website, contacting
              our team or enquiring about our services.
            </p>


            <h2>
              2. Information We Collect
            </h2>

            <p>
              When you contact us or submit an enquiry,
              we may collect information such as your name,
              phone number, email address, location and
              message or service enquiry details.
            </p>

            <p>
              We may also receive technical information
              such as your browser type, device information,
              approximate location and pages visited on
              our website.
            </p>


            <h2>
              3. How We Use Your Information
            </h2>

            <p>
              Information provided through our website may
              be used to:
            </p>

            <ul>
              <li>Respond to your enquiries.</li>
              <li>Provide information about our services.</li>
              <li>Help with appointment or booking enquiries.</li>
              <li>Improve our website and user experience.</li>
              <li>Communicate relevant offers or updates.</li>
              <li>Maintain website security and functionality.</li>
            </ul>


            <h2>
              4. Contact Forms
            </h2>

            <p>
              If you submit our contact form, the information
              you provide may be securely transmitted to our
              lead management or communication service so
              that our team can respond to your enquiry.
            </p>


            <h2>
              5. WhatsApp and Phone Communication
            </h2>

            <p>
              If you choose to contact Ovia Wellness through
              WhatsApp or telephone, your communication will
              also be subject to the privacy practices and
              terms of the relevant service provider.
            </p>


            <h2>
              6. Cookies and Analytics
            </h2>

            <p>
              Our website may use cookies, analytics and
              advertising technologies to understand website
              usage, measure advertising performance and
              improve the visitor experience.
            </p>

            <p>
              These technologies may collect information about
              visits, interactions and website activity without
              necessarily identifying you personally.
            </p>


            <h2>
              7. Google Advertising
            </h2>

            <p>
              We may use Google advertising and measurement
              technologies to understand the effectiveness of
              our advertising campaigns and improve marketing
              performance.
            </p>


            <h2>
              8. Information Sharing
            </h2>

            <p>
              We do not sell your personal information.
              Information may be shared with trusted service
              providers when necessary to operate our website,
              manage enquiries, provide communication services,
              measure advertising performance or maintain
              website functionality.
            </p>


            <h2>
              9. Data Security
            </h2>

            <p>
              We take reasonable steps to protect information
              submitted through our website. However, no
              internet transmission or electronic storage system
              can be guaranteed to be completely secure.
            </p>


            <h2>
              10. Third-Party Websites
            </h2>

            <p>
              Our website may contain links to third-party
              services such as Google Maps, WhatsApp or social
              media platforms. We are not responsible for the
              privacy practices or content of those external
              services.
            </p>


            <h2>
              11. Your Choices
            </h2>

            <p>
              You may choose not to provide certain information.
              However, this may prevent us from responding to
              certain enquiries or providing particular services
              requested through the website.
            </p>


            <h2>
              12. Changes to This Policy
            </h2>

            <p>
              We may update this Privacy Policy from time to
              time. Any changes will be published on this page
              with an updated revision date.
            </p>


            <h2>
              13. Contact Us
            </h2>

            <p>
              If you have questions about this Privacy Policy
              or how your information is handled, please contact
              Ovia Wellness through the contact information
              provided on our website.
            </p>


            <div className="legal-back">

              <Link href="/contact">
                Contact Ovia Wellness
              </Link>

              <Link href="/">
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}