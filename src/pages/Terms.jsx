import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen px-6 py-20 text-white bg-black">

        {/* Heading */}
        <div className="max-w-5xl mx-auto mb-16 text-center">

          <h1 className="mb-6 text-5xl font-bold md:text-6xl text-[#F9F295]">
            Terms & Conditions
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            Please read these Terms & Conditions carefully before using
            AXON Real Estate services and website.
          </p>

        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Section 1 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              1. Acceptance of Terms
            </h2>

            <p className="leading-8 text-gray-400">
              By accessing and using the AXON Real Estate website, you agree
              to comply with these Terms & Conditions. If you do not agree
              with any part of these terms, please do not use our services.
            </p>

          </div>

          {/* Section 2 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              2. Property Information
            </h2>

            <p className="leading-8 text-gray-400">
              We strive to provide accurate and updated property information.
              However, AXON Real Estate does not guarantee the completeness,
              accuracy, or availability of any property listing displayed on
              this website.
            </p>

          </div>

          {/* Section 3 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              3. User Responsibilities
            </h2>

            <p className="leading-8 text-gray-400">
              Users must provide accurate information while submitting forms
              or inquiries. Any misuse of the website, including fraudulent
              activity or unauthorized access, is strictly prohibited.
            </p>

          </div>

          {/* Section 4 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              4. Privacy & Security
            </h2>

            <p className="leading-8 text-gray-400">
              Your personal information is handled securely and used only for
              communication and service-related purposes. We do not share your
              personal data with third parties without consent.
            </p>

          </div>

          {/* Section 5 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              5. Limitation of Liability
            </h2>

            <p className="leading-8 text-gray-400">
              AXON Real Estate is not responsible for any direct or indirect
              damages resulting from the use of this website, property
              transactions, or reliance on listed information.
            </p>

          </div>

          {/* Section 6 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              6. Updates to Terms
            </h2>

            <p className="leading-8 text-gray-400">
              We reserve the right to update or modify these Terms &
              Conditions at any time without prior notice. Continued use of
              the website indicates acceptance of the updated terms.
            </p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Terms;