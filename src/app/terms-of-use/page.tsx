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
        label="Terms of Use"
      />
      <Heading
        align="left"
        className="my-6 md:my-8 text-lg md:text-xl"
        label="Your Acceptance of These Terms of Use"
      />
      <p>
        These Terms of Use apply to all users of the online and mobile website
        and other applications and platforms (collectively, the
        &quot;Site&quot;) owned and/or operated by AllCleanATX and its
        affiliates and franchisees. By using this Site, you agree to comply with
        and be bound by these Terms of Use. If you do not agree to these Terms
        of Use, you may not access or use this Site.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-lg md:text-xl"
        label="Your Acceptance of Our Privacy Policy"
      />
      <p>
        By agreeing to these Terms of Use, you agree to the terms of our Privacy
        Policy, which is expressly incorporated herein. Before using this Site,
        please carefully review our Privacy Policy. All information provided to
        us because of your use of this Site will be handled in accordance with
        our Privacy Policy. To the extent there are inconsistencies between
        these Terms of Use and our Privacy Policy, these Terms of Use control.
        You agree that you are more than 18 years of age, an emancipated minor,
        or possess legal parental or guardian consent, and are fully able and
        competent to enter into these Terms of Use, and to abide by and comply
        with these Terms of Use. The Site is not intended to be used by, or
        targeted to, anyone under the age of 13 years old. You must be at least
        13 years old to use the Site.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-lg md:text-xl"
        label="Your Consent to Other Agreements"
      />
      <p>
        When you sign up to use a special feature of this Site, you may be asked
        to agree to special terms governing your use of the special feature. In
        such cases, you may be asked to expressly consent to the special terms,
        for example, by checking a box or clicking on a button marked &quot;I
        agree.&quot; This type of agreement is known as a
        &quot;click-through&quot; agreement.
      </p>
      <br />
      <p>
        If any of the terms of the click-through agreement are different than
        the terms of these Terms of Use, the terms of the click-through
        agreement will supplement or amend these Terms of Use, but only with
        respect to the matters governed by the click-through agreement.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-lg md:text-xl"
        label="Ownership of This Site and Its Content"
      />
      <p>
        This Site, including all its Content, is protected under applicable
        intellectual property and other laws, including without limitation the
        laws of the United States, foreign laws, and international conventions.
        AllCleanATX Maid Service and its affiliates own all content and
        intellectual property rights therein, or the material is included with
        the permission of the rights owner and is protected pursuant to
        applicable copyright and trademark laws.
      </p>
      <br />
      <p>
        The presence of any Content on this Site does not constitute a waiver of
        any right in such Content. You will not attempt to and do not acquire
        ownership rights to any such Content viewed through this Site. Except as
        otherwise provided herein, none of this Content may be used, copied,
        reproduced, distributed, republished, downloaded, modified, displayed,
        posted, or transmitted in any form or by any means, including, but not
        limited to, electronic, mechanical, photocopying, recording, or
        otherwise, without our express prior written permission.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-lg md:text-xl"
        label="Trademarks"
      />
      <p>
        AllCleanATX names and logos, all product and service names, all
        graphics, all button icons, and all trademarks, service marks, and logos
        appearing within this Site, unless otherwise noted, are trademarks
        (whether registered or not), service marks and/or trade dress of
        AllCleanATX (&quot;AllCleanATX Marks&quot;).
      </p>
      <p>
        All other trademarks, product names, company names, logos, service
        marks, and/or trade dress mentioned, displayed, cited, or otherwise
        indicated within this Site are the property of their respective owners.
        You are not authorized to display or use AllCleanATX Marks in any manner
        without our prior written permission. You are not authorized to display
        or use trademarks, product names, company names, logos, service marks,
        and/or trade dress of other owners featured within this Site without the
        prior written permission of such owners.
      </p>
      <p>
        The use or misuse of AllCleanATX Marks or other trademarks, product
        names, company names, logos, service marks, and/or trade dress or any
        other materials contained herein, except as permitted herein, is
        expressly prohibited.
      </p>
      <Heading
        align="left"
        className="my-6 md:my-8 text-lg md:text-xl"
        label="Your Access"
      />
      <p>
        AllCleanATX hereby grants you permission to use the Site solely for
        noncommercial and personal use, provided that you: (i) comply with these
        Terms of Use; (ii) use the Site for lawful and permitted purposes; (iii)
        do not modify, copy, or distribute the Site or Content, including on any
        network, computer, or broadcast in any media; (iv) you retain any and
        all copyright and other proprietary notices contained in the Site or
        Content; and (v) do not disable or interfere with any security features
        of the Site.
      </p>
    </div>
  );
}
