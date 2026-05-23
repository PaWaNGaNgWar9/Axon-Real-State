import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen px-6 py-20 text-white bg-black">

        {/* Heading */}
        <div className="max-w-5xl mx-auto mb-16 text-center">

          <h1 className="mb-6 text-5xl font-bold md:text-6xl text-[#F9F295]">
            Privacy Policy
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            Your privacy is important to us. This Privacy Policy explains how
            AXON Real Estate collects, uses, and protects your information.
          </p>

        </div>

        {/* Policy Content */}
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Section 1 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              1. Information We Collect
            </h2>

            <p className="leading-8 text-gray-400">
              We may collect personal information such as your name, email
              address, phone number, and property preferences when you fill
              out forms or contact us through the website.
            </p>

          </div>

          {/* Section 2 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              2. How We Use Your Information
            </h2>

            <p className="leading-8 text-gray-400">
              Your information is used to respond to inquiries, provide
              property recommendations, improve our services, and communicate
              important updates related to AXON Real Estate.
            </p>

          </div>

          {/* Section 3 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              3. Data Protection
            </h2>

            <p className="leading-8 text-gray-400">
              We implement security measures to protect your personal data from
              unauthorized access, misuse, or disclosure. However, no online
              platform can guarantee complete security.
            </p>

          </div>

          {/* Section 4 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              4. Sharing of Information
            </h2>

            <p className="leading-8 text-gray-400">
              AXON Real Estate does not sell or rent your personal information
              to third parties. Information may only be shared when required
              by law or necessary to provide requested services.
            </p>

          </div>

          {/* Section 5 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              5. Cookies & Website Usage
            </h2>

            <p className="leading-8 text-gray-400">
              Our website may use cookies and analytics tools to improve user
              experience, monitor website performance, and understand visitor
              behavior.
            </p>

          </div>

          {/* Section 6 */}
          <div className="p-8 border bg-gray-900 rounded-2xl border-[#F9F295]/10">

            <h2 className="mb-4 text-3xl font-semibold text-[#F9F295]">
              6. Changes to Privacy Policy
            </h2>

            <p className="leading-8 text-gray-400">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and continued use of the website
              indicates your acceptance of the updated policy.
            </p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;