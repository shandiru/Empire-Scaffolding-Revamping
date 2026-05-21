import { Link } from "react-router-dom";

const serviceItems = [
  "Traditional Tube & Fit Scaffolding",
  "Plettac System Scaffolding",
  "Scaffold Design Services",
  "Supply, Erection & Dismantling",
  "Temporary Access Structures",
  "Commercial & Domestic Scaffolding",
  "Safety Inspections & Maintenance",
  "Emergency Scaffolding Services",
];

const quotationItems = [
  "Free and without obligation",
  "Valid for 30 days unless otherwise stated",
  "Subject to site inspection and project requirements",
];

const pricingChangeItems = [
  "Project specifications are altered",
  "Additional work is requested",
  "Access conditions differ from those originally stated",
  "Delays occur outside of our control",
];

const customerResponsibilities = [
  "Provide accurate project information",
  "Ensure clear and safe site access",
  "Obtain necessary permissions or permits where required",
  "Prevent unauthorised interference with scaffolding structures",
  "Notify us immediately of any safety concerns or damage",
];

const lawsAndGuidance = [
  "UK Health & Safety legislation",
  "Working at Height Regulations 2005",
  "NASC guidance and industry standards",
];

const liabilityExclusions = [
  "Delays caused by weather, site conditions, or third parties",
  "Indirect or consequential losses",
  "Damage caused by unauthorised scaffold alterations",
  "Misuse of scaffolding by clients or contractors",
];

const websiteRestrictions = [
  "Reproduce website content without permission",
  "Attempt to disrupt website functionality",
  "Use website content for unlawful purposes",
];

const dataUseItems = [
  "Respond to enquiries",
  "Provide quotations",
  "Deliver services",
  "Maintain business records",
];

const sectionHeadingClassName = "text-2xl font-medium text-white";
const bodyClassName = "mt-3 leading-8 text-gray-300";
const listClassName = "mt-3 list-disc space-y-2 pl-6 text-gray-300";

const TermsConditions = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-28 sm:px-6 lg:px-16">
        <h1 className="mb-8 text-center text-4xl font-semibold text-white">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-400">Last Updated: May 2026</p>

        <div className="mt-10 space-y-8">
          <section>
            <p className={bodyClassName}>
              Welcome to Empire Scaffolding (GB) Ltd. These Terms & Conditions
              govern the use of our website and services. By requesting a
              quotation, engaging our services, or using our website, you agree
              to comply with the following terms.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>1. About Us</h2>
            <p className={bodyClassName}>
              Empire Scaffolding (GB) Ltd is a UK-based scaffolding company
              established in 2000, providing professional scaffolding supply,
              erection, inspection, and dismantling services for commercial,
              domestic, and industrial projects throughout the Midlands and
              across the United Kingdom.
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-300">
              <p className="font-semibold text-white">Registered Office:</p>
              <p className="mt-2">Bakerbrook Industrial Estate</p>
              <p>Wigwam Lane, Hucknall</p>
              <p>Nottingham NG15 7SZ</p>

              <p className="mt-5 font-semibold text-white">Contact:</p>
              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:01159641600"
                  className="text-amber-400 transition hover:text-amber-300 hover:underline"
                >
                  01159 641 600
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@empirescaffolding.co.uk"
                  className="text-amber-400 transition hover:text-amber-300 hover:underline"
                >
                  info@empirescaffolding.co.uk
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>2. Services Provided</h2>
            <p className={bodyClassName}>
              Empire Scaffolding (GB) Ltd provides scaffolding-related services
              including but not limited to:
            </p>
            <ul className={listClassName}>
              {serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={bodyClassName}>
              All services are subject to site assessment, availability,
              weather conditions, and health & safety regulations.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>3. Quotations & Pricing</h2>
            <p className={bodyClassName}>
              All quotations provided by Empire Scaffolding (GB) Ltd are:
            </p>
            <ul className={listClassName}>
              {quotationItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={bodyClassName}>Quoted prices may change if:</p>
            <ul className={listClassName}>
              {pricingChangeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={bodyClassName}>VAT will be charged where applicable.</p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>4. Payment Terms</h2>
            <p className={bodyClassName}>Unless otherwise agreed in writing:</p>
            <ul className={listClassName}>
              <li>A deposit may be required before work commences</li>
              <li>Invoices must be paid within the agreed payment period</li>
              <li>
                Late payments may incur interest and recovery charges in
                accordance with the Late Payment of Commercial Debts (Interest)
                Act 1998
              </li>
            </ul>
            <p className={bodyClassName}>
              Empire Scaffolding (GB) Ltd reserves the right to suspend or
              remove scaffolding where payments remain outstanding.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>
              5. Customer Responsibilities
            </h2>
            <p className={bodyClassName}>Customers agree to:</p>
            <ul className={listClassName}>
              {customerResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={bodyClassName}>
              Scaffolding must not be altered, moved, or tampered with by
              anyone other than authorised Empire Scaffolding personnel.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>6. Health & Safety</h2>
            <p className={bodyClassName}>
              Safety is our highest priority. All scaffolding work is carried
              out in accordance with:
            </p>
            <ul className={listClassName}>
              {lawsAndGuidance.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={bodyClassName}>
              Customers and site operators must ensure that scaffolding is used
              responsibly and only for its intended purpose.
            </p>
            <p className={bodyClassName}>
              Empire Scaffolding (GB) Ltd reserves the right to stop work if
              unsafe conditions are identified.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>7. Liability</h2>
            <p className={bodyClassName}>
              While we take every reasonable precaution to ensure safety and
              service quality, Empire Scaffolding (GB) Ltd shall not be liable
              for:
            </p>
            <ul className={listClassName}>
              {liabilityExclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={bodyClassName}>
              Nothing within these terms excludes liability for death or
              personal injury caused by negligence where such exclusion is
              prohibited under UK law.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>8. Cancellations</h2>
            <p className={bodyClassName}>
              Cancellation requests must be made in writing.
            </p>
            <p className={bodyClassName}>The company reserves the right to charge for:</p>
            <ul className={listClassName}>
              <li>Work already completed</li>
              <li>Materials ordered</li>
              <li>Labour and transport costs incurred</li>
              <li>Scheduled project time</li>
            </ul>
            <p className={bodyClassName}>
              Emergency cancellations after scaffolding erection may be subject
              to additional dismantling charges.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>9. Website Use</h2>
            <p className={bodyClassName}>
              All content on this website, including text, images, branding,
              and graphics, is the property of Empire Scaffolding (GB) Ltd
              unless otherwise stated.
            </p>
            <p className={bodyClassName}>Users may not:</p>
            <ul className={listClassName}>
              {websiteRestrictions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>
              10. Privacy & Data Protection
            </h2>
            <p className={bodyClassName}>
              Empire Scaffolding (GB) Ltd is committed to protecting your
              personal information in accordance with the UK GDPR and Data
              Protection Act 2018.
            </p>
            <p className={bodyClassName}>
              Information submitted through contact forms, quotation requests,
              or email communications may be used to:
            </p>
            <ul className={listClassName}>
              {dataUseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={bodyClassName}>
              We do not sell or share personal information with third parties
              unless required by law or necessary for service delivery.
            </p>
            <p className={bodyClassName}>
              For more information, please refer to our{" "}
              <Link
                to="/privacy-policy"
                className="text-amber-400 transition hover:text-amber-300 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>11. Cookies</h2>
            <p className={bodyClassName}>
              Our website may use cookies to improve user experience, monitor
              website performance, and analyse traffic.
            </p>
            <p className={bodyClassName}>
              Users can manage or disable cookies through their browser
              settings.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>12. Third-Party Links</h2>
            <p className={bodyClassName}>
              Our website may contain links to third-party websites. Empire
              Scaffolding (GB) Ltd is not responsible for the content,
              security, or privacy practices of external websites.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>
              13. Changes to These Terms
            </h2>
            <p className={bodyClassName}>
              Empire Scaffolding (GB) Ltd reserves the right to update these
              Terms & Conditions at any time without prior notice.
            </p>
            <p className={bodyClassName}>
              Updated versions will be published on this page.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>14. Governing Law</h2>
            <p className={bodyClassName}>
              These Terms & Conditions shall be governed by and interpreted in
              accordance with the laws of England and Wales.
            </p>
            <p className={bodyClassName}>
              Any disputes arising from the use of our services or website
              shall be subject to the exclusive jurisdiction of the UK courts.
            </p>
          </section>

          <section>
            <h2 className={sectionHeadingClassName}>Contact Us</h2>
            <p className={bodyClassName}>
              If you have any questions regarding these Terms & Conditions,
              please contact:
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-300">
              <p className="font-semibold text-white">
                Empire Scaffolding (GB) Ltd
              </p>
              <p className="mt-2">Bakerbrook Industrial Estate</p>
              <p>Wigwam Lane, Hucknall</p>
              <p>Nottingham NG15 7SZ</p>
              <p className="mt-4">
                Phone:{" "}
                <a
                  href="tel:01159641600"
                  className="text-amber-400 transition hover:text-amber-300 hover:underline"
                >
                  01159 641 600
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@empirescaffolding.co.uk"
                  className="text-amber-400 transition hover:text-amber-300 hover:underline"
                >
                  info@empirescaffolding.co.uk
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
