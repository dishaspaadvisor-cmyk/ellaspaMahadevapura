import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Ovia Wellness",
  description:
    "Read the Terms and Conditions governing the use of the Ovia Wellness website and services.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">

      <section className="legal-hero">
        <div className="legal-container">

          <span className="legal-eyebrow">
            / PLEASE READ
          </span>

          <h1>
            Terms &
            <em> Conditions</em>
          </h1>

          <p>
            Please read these terms carefully before using
            the Ovia Wellness website or contacting us about
            our services.
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
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing or using the Ovia Wellness website,
              you agree to comply with these Terms & Conditions.
              If you do not agree with these terms, please do
              not use the website.
            </p>


            <h2>
              2. Website Information
            </h2>

            <p>
              The information displayed on this website is
              provided for general informational purposes.
              Services, prices, offers, availability and other
              details may change without prior notice.
            </p>


            <h2>
              3. Service Enquiries and Bookings
            </h2>

            <p>
              Submitting an enquiry through our website,
              telephone or WhatsApp does not automatically
              guarantee an appointment.
            </p>

            <p>
              Appointments are subject to availability and
              confirmation from Ovia Wellness.
            </p>


            <h2>
              4. Prices and Offers
            </h2>

            <p>
              Promotional offers and displayed prices may be
              subject to specific terms, availability and
              validity periods.
            </p>

            <p>
              Ovia Wellness reserves the right to modify,
              suspend or withdraw an offer when necessary.
            </p>


            <h2>
              5. Website Usage
            </h2>

            <p>
              You agree not to misuse the website, interfere
              with its operation, attempt unauthorized access,
              introduce malicious software or use the website
              for unlawful purposes.
            </p>


            <h2>
              6. Intellectual Property
            </h2>

            <p>
              Unless otherwise stated, website content including
              text, graphics, photographs, logos, branding,
              design elements and other materials belongs to or
              is used by Ovia Wellness with appropriate rights.
            </p>

            <p>
              Website content should not be copied, reproduced,
              modified or redistributed without appropriate
              permission.
            </p>


            <h2>
              7. Third-Party Services
            </h2>

            <p>
              Our website may provide access to third-party
              services including Google Maps, WhatsApp,
              social media platforms, analytics services and
              advertising platforms.
            </p>

            <p>
              Use of those services may be governed by their
              respective terms and privacy policies.
            </p>


            <h2>
              8. External Links
            </h2>

            <p>
              Links to third-party websites are provided for
              convenience. Ovia Wellness does not control and
              is not responsible for the content, availability
              or policies of external websites.
            </p>


            <h2>
              9. Accuracy of Information
            </h2>

            <p>
              We make reasonable efforts to keep website
              information useful and current. However, we do
              not guarantee that every piece of information is
              always complete, accurate or up to date.
            </p>


            <h2>
              10. Limitation of Liability
            </h2>

            <p>
              To the extent permitted by applicable law,
              Ovia Wellness shall not be responsible for
              losses arising from reliance on website content,
              temporary website unavailability or third-party
              services linked from the website.
            </p>


            <h2>
              11. Privacy
            </h2>

            <p>
              Your use of the website is also subject to our
              Privacy Policy, which explains how information
              submitted through the website may be collected
              and used.
            </p>


            <h2>
              12. Changes to These Terms
            </h2>

            <p>
              Ovia Wellness may update these Terms & Conditions
              from time to time. Updated terms will be published
              on this page together with the latest revision date.
            </p>


            <h2>
              13. Governing Law
            </h2>

            <p>
              These terms are intended to be interpreted in
              accordance with applicable laws and regulations.
              Any disputes will be subject to the jurisdiction
              applicable to the business location.
            </p>


            <h2>
              14. Contact
            </h2>

            <p>
              If you have questions regarding these Terms &
              Conditions, please contact Ovia Wellness using
              the contact information provided on the website.
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