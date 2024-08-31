"use client";

import * as React from "react";
import classNames from "classnames";
import Heading from "@/components/Heading";

export default function Page() {
  const getListItem = (item: string) => {
    return (
      <div className="flex items-start">
        <span className="mr-2 font-bold">-</span>
        <span>{item}</span>
      </div>
    );
  };

  return (
    <div className="bg-brand-light-green max-w-7xl mx-6 md:mx-20 w-[calc(100%-3rem)] md:w-3/4 rounded-3xl p-6 md:p-12 mb-10 md:mb-20 mt-12">
      <Heading
        className="mb-6 md:mb-12 text-xl md:text-3xl"
        label="Privacy Policy"
      />
      <p>
        All Clean ATX is committed to safeguarding the privacy of our customers.
        This privacy policy (the &quot;Policy&quot;) explains how we collect,
        use, and protect personal information.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Scope"
      />
      <p>
        This Policy applies solely to information collected through All Clean
        ATX-owned websites on which it is posted (the &quot;Site&quot;). It does
        not apply to information collected through third-party platforms, social
        media websites, vendor pages, or other websites or platforms owned by
        All Clean ATX.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Information Collection"
      />
      <div>
        <p>We collect information that you manually provide, such as:</p>
        <br />
        <div>
          {getListItem(
            "Information you provide when requesting service, expressing interest in becoming a franchisee, sending questions, or interacting with the Site."
          )}
          {getListItem(
            "Information from third-party social media platforms, such as Facebook or Twitter, if you choose to populate data fields with information from your profile."
          )}
          {getListItem(
            "Information sent automatically by your web browser or mobile device, such as IP address, operating system, browser version, and pages visited."
          )}
        </div>
      </div>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Use of Information"
      />
      <div>
        <p>We use the information we collect to:</p>
        <br />
        <div>
          {getListItem(
            "Provide requested information, products, and services."
          )}
          {getListItem("Offer effective customer service.")}
          {getListItem("Personalize your experience on the Site.")}
          {getListItem(
            "Contact you with information, notices, special offers, and surveys."
          )}
          {getListItem(
            "Improve the Site&apos;s content, functionality, and usability."
          )}
          {getListItem("Understand your needs and interests.")}
          {getListItem(
            "Enhance our products, services, marketing, and promotional efforts."
          )}
          {getListItem(
            "Prevent security breaches, fraud, and other illegal activities."
          )}
        </div>
      </div>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Sharing Information"
      />
      <div>
        <p>We share information with:</p>
        <br />
        <div>
          {getListItem("Third-party vendors who act on our behalf.")}
          {getListItem(
            "Other users of the Site through User-Generated Content."
          )}
          {getListItem(
            "Third-party social media platforms if you choose to share information about your actions on the Site."
          )}
          {getListItem(
            "Additionally, If you choose to connect your profile on our Site with a third-party social media account, we may share your profile information with that platform. Additionally, we may use third-party social media platforms to deliver targeted advertisements to you. To do so, we may anonymize your email address to match with a user on the platform, enabling our partner companies to gain insights about individuals who interact with our ads, without disclosing any personal information"
          )}
          {getListItem(
            "We may share your information with carefully selected business partners for their own marketing purposes. For example, we may partner with third parties to sponsor contests or promotions and share the information you submit to participate. We will offer you the opportunity to opt-out or opt-in, as required by applicable law."
          )}
          {getListItem(
            "We use aggregated data to create a compiled view of usage patterns and may share this information with third parties to help them understand our user base. We may also share individualized data (which is not personally identifiable) to show how particular users interact with our Site."
          )}
        </div>
      </div>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Business Transfers"
      />
      <p>
        Your information may be transferred to a successor organization if we
        transfer ownership or operation of this Site or merge with another
        organization.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Legal Compliance and Protection"
      />
      <p>
        We may disclose your information to comply with laws, court orders, or
        subpoenas. We may also disclose your information to prevent or
        investigate possible crimes, protect the security of this Site, enforce
        our online Terms of Use, or protect our rights or property.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Privacy Notices and Click-Through Agreements"
      />
      <p>
        We reserve the right to disclose your information as described in any
        Privacy Notice posted on this Site or in any click-through agreement you
        have agreed to.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Security"
      />
      <p>
        All Clean ATX takes reasonable precautions to provide a level of
        security appropriate to the sensitivity of the information we collect.
        While we use reasonable measures to protect your information, we cannot
        guarantee security beyond our reasonable control.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Children's Privacy"
      />
      <p>
        You must be at least 13 years old to use this Site. We do not knowingly
        collect, use, or disclose personal information about visitors under 13
        years old.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Links to Other Websites"
      />
      <p>
        This Policy only applies to All Clean ATX-owned websites on which it is
        posted. Our affiliates operate many different websites for different
        purposes and in different countries, where different laws may apply. If
        you visit another All Clean ATX website, please review the privacy
        policy posted on that site to learn how your information will be
        processed.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Access to Your Information"
      />
      <p>
        If you would like to review, correct, and update the personal
        information you have provided to us, please contact us using the
        information provided below. We will respond to your request within a
        reasonable time or as required by applicable privacy law.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Retention of Personal Information"
      />
      <p>
        All Clean ATX retains personal information collected on this Site as
        long as necessary to provide the services, products, and information you
        request or as permitted by
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Data Retention"
      />
      <p>
        All Clean ATX retains the personal information collected on this Site
        for a period necessary to fulfill requests, provide services, and comply
        with applicable laws.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Cross-Border Data Transfer"
      />
      <p>
        All Clean ATX, a U.S. corporation, operates this Site primarily for a
        U.S. audience. Our servers, which store user-provided information, may
        be located outside your country of residence. U.S. data protection laws
        may differ from those in other countries. By using this Site, non-U.S.
        users consent to data transfer to the United States. We process
        information in accordance with this Policy regardless of server
        location.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Governing Law"
      />
      <p>
        This Policy is governed by Texas State laws, excluding conflicts of law
        provisions.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-l md:text-2xl"
        label="Contact"
      />
      <p className="mb-4">
        For questions or concerns about this Policy, Privacy Notices, or All
        Clean ATX&apos;s data practices, please contact us:
      </p>
      {getListItem("Email: privacy@allcleanatx.com")}
      {getListItem("Phone: 737-377-2440")}
    </div>
  );
}
