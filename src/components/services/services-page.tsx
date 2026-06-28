import Link from "next/link";
import { Prose } from "@/components/content/prose";
import { Signature } from "@/components/landing/signature";
import { ContentBox, PageShell } from "@/components/layout/shell";

export const ServicesPage = () => {
  return (
    <PageShell>
      <ContentBox position="first" className="h-12 sm:h-16 md:h-24" />
      <ContentBox
        position="last"
        className="flex flex-col gap-6 px-6 py-6 sm:px-10 sm:py-8"
      >
        <Prose>
          <h1>ted.ac Services</h1>
          <p>
            I run ted.ac Services to provide bespoke development, consultancy
            and hosting to clients. I have a wide range of experience in the web
            development industry and can help with a variety of projects.
          </p>
          <p>
            If you are interested in working with me, please{" "}
            <Link href="/">get in touch with me</Link>. I will get back to you
            as soon as possible to discuss your requirements and provide a
            quote.
          </p>

          <h2>Terms of Service</h2>

          <h3>1. Payment Processing</h3>
          <p>
            ted.ac Services uses{" "}
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe
            </a>{" "}
            as our payment processor to ensure secure and reliable transactions.
            Stripe processes sensitive payment details, including credit card
            numbers and billing information. This data is transmitted directly
            to Stripe and is never stored on our servers. Any related
            non-sensitive information, such as transaction IDs or user purchase
            details, is stored in our secure database for record-keeping and
            support purposes. If there is any issues during your transaction
            which you do not believe we can handle, directly contact Stripe.
          </p>

          <h3>2. Cancellations, Refunds and Terminations</h3>
          <p>
            All payments are final and non-refundable, unless a billing mistake
            occurs. If you have a subscription, you may request for the
            subscription to be cancelled at any time. You will retain access to
            the service until the end of the current billing period, at which
            point your subscription will be cancelled.
          </p>
          <p>
            If you violate any of the terms of service, ted.ac Services reserves
            the right to terminate your products and access to our services
            without notice. In such cases, you will not be entitled to a refund.
            Any subscription will be cancelled immediately and you will lose
            access to the service.
          </p>

          <h3>3. Service Availability</h3>
          <p>
            ted.ac Services will make every effort to ensure that our services
            are available at all times. However, we cannot guarantee that our
            services will be uninterrupted or error-free. We reserve the right
            to suspend or terminate our services at any time, with or without
            notice.
          </p>

          <h3>4. Data Privacy</h3>
          <p>
            ted.ac Services takes data privacy seriously and will never share
            your personal information with third parties without your consent.
            We may collect and store personal information for the purpose of
            providing our services, but we will never sell or distribute this
            information to third parties.
          </p>

          <h3>5. Preinstalled Software</h3>
          <p>
            Some of the products ted.ac Services may provide will contain
            preinstalled software, such as, but not limited to, our server
            hosting. This software is used to provide additional functionality
            and features to our services. By using our services, you agree to
            not tamper with or remove any preinstalled software, unless
            explicitly permitted by ted.ac Services. Any unauthorized
            modifications to preinstalled software may result in the termination
            of your product.
          </p>

          <h3>6. Changes to Terms of Service</h3>
          <p>
            ted.ac Services reserves the right to update or modify these terms of
            service at any time. Any changes will be posted on our website and
            will take effect immediately. By continuing to use our services, you
            agree to be bound by the updated terms of service.
          </p>
        </Prose>
      </ContentBox>
      <Signature />
    </PageShell>
  );
};