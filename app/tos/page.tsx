import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last updated: October 9, 2026

These Terms of Service ("Terms") are an agreement between you and Learning Science Inc. ("DrLee.ai", "we", "us" or "our"). They govern your use of the website at https://drlee.ai (the "Website") and the DrLee.ai mobile app for iOS and Android (the "App"), together the "Service".

By creating an account or using the Service, you agree to these Terms and to our Privacy Policy at https://drlee.ai/privacy-policy. If you do not agree, do not use the Service.


1. The Service

DrLee.ai offers short, practical video masterclasses about artificial intelligence taught by Dr. Ernesto Lee, along with study tools such as progress tracking, notes, notebooks, an AI assistant, lesson discussions and certificates of completion.

Some masterclasses are paired with longer, hands-on programs. Programs delivered on CourseLabs.io are provided on that platform and are governed by CourseLabs.io's own terms and policies, in addition to any terms shown when you buy them.

We may add, change or remove features, lessons or programs over time.


2. Eligibility and accounts

You must be at least 18 years old (or the age of majority where you live) to use the Service.

You need an account to use the App. You sign in with your email address and a one-time code (or a password, where offered). You agree to give us accurate information, keep access to your email account secure, and not share your account with others. You are responsible for activity on your account. Tell us right away at support@drlee.ai if you think someone else has accessed it.


3. Purchases and access

The App is free to use with an account. The App does not sell anything and has no in-app purchases.

Paid programs are sold on the Website (payments processed by Stripe) or on CourseLabs.io. When you buy a program, the price, what is included and any access period are shown at checkout. Purchased content unlocks in the App for the account that uses the same email address you used at checkout, so please sign in to the App with that email address.

Unless the offer says otherwise, "lifetime access" means access for as long as we continue to offer the Service and the program. If we discontinue a program you paid for, we will give you reasonable notice.

Prices may change, but a change will not affect a purchase you have already completed. You are responsible for any taxes that apply to your purchase, unless they are collected at checkout.


4. Refunds

Purchases made on the Website for Self-Paced and Cohort-Based programs come with a 30-day money-back guarantee: if you are not satisfied, email support@drlee.ai within 30 days of purchase for a full refund. Founder's Edition purchases follow the satisfaction guarantee described on the program page at the time of purchase.

Refunds for purchases made on CourseLabs.io are handled under CourseLabs.io's refund policy. After a refund, access to the refunded program ends.


5. License to use the content

All lessons, videos, text, code, slides, notebooks and other materials in the Service ("Content") are owned by us or our licensors.

We grant you a personal, limited, non-exclusive, non-transferable and revocable license to access and view the Content for your own learning, for as long as you have access under these Terms.

You may not:

- copy, download, record, screen-capture, reproduce, sell, rent, publish, stream or redistribute the Content, except for offline downloads made with the App's own download feature, which stay inside the App and are for your personal viewing only;
- share your account or give others access to paid Content;
- remove copyright or other notices;
- use the Content to build a competing course or product, or to train AI models; or
- scrape, reverse engineer or interfere with the Service, or bypass any access controls or usage limits.


6. Your content and conduct

You keep ownership of the content you post or upload, such as comments, notes, notebooks, documents and profile photos ("Your Content"). You give us a worldwide, non-exclusive, royalty-free license to host, store, display and process Your Content only as needed to run the Service (for example, showing your comments to other learners, or sending your notes to our AI providers when you use AI features). This license ends when you delete Your Content or your account, except for copies we must keep by law.

You are responsible for Your Content and confirm you have the rights to post it. When using the Service, you must not:

- harass, threaten, bully or abuse anyone, or post hateful, sexually explicit, violent or otherwise objectionable content;
- post spam, advertising, scams or misleading content;
- impersonate anyone or misrepresent your affiliation;
- post content that infringes someone else's intellectual property or privacy;
- upload malware or try to disrupt or gain unauthorized access to the Service; or
- break any law.

We have zero tolerance for objectionable content or abusive users.

Moderation. Comments may be filtered automatically before they are posted. You can report any comment or AI response, and you can block another user so you no longer see their content. We review reports and act on them within 24 hours, which may include removing content and suspending or removing the user responsible. We may remove any content or restrict any account that we believe breaks these Terms, with or without notice.


7. AI features

The App includes an AI assistant and study tools that generate content automatically using third-party AI providers. You must agree to the AI consent screen before using them.

AI output can be inaccurate, incomplete or out of date, and may not reflect our views. It is provided for learning purposes only and is not professional, legal, financial, medical or other expert advice. Check anything important before you rely on it. You are responsible for how you use AI output.

AI features are subject to a daily usage limit, which we may change. Do not use AI features to produce content that breaks these Terms or the law.


8. Certificates of completion

Certificates of completion confirm that you completed a masterclass or program in the Service. They are not academic credit, a degree, a professional license or an accredited credential, and they do not certify any particular level of skill.


9. Intellectual property

The Service, the Content, and the DrLee.ai name, logos and trademarks belong to us or our licensors and are protected by law. These Terms do not give you any right to use them except as stated in section 5.

If you believe content in the Service infringes your copyright, email support@drlee.ai with a description of the work, where it appears in the Service, your contact details, and a statement that you have a good-faith belief the use is not authorized.

If you send us feedback or suggestions, we may use them without any obligation to you.


10. Third-party services

The Service relies on and links to services run by others, such as Stripe, CourseLabs.io, Apple, Google and our AI providers. We are not responsible for third-party services, and your use of them is subject to their own terms.

If you downloaded the App from the Apple App Store, you also agree that: these Terms are between you and us, not Apple; Apple has no obligation to provide maintenance or support for the App; Apple is not responsible for any claims relating to the App, including product liability, legal or regulatory compliance, or intellectual property claims; and Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you. If the App fails to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price of the App (if any); to the extent permitted by law, Apple has no other warranty obligation for the App.


11. Ending your use

You can stop using the Service at any time and delete your account in the App under Settings, then Delete Account, or by emailing support@drlee.ai.

We may suspend or end your access if you break these Terms, if required by law, or to protect the Service or other users. Sections that by their nature should survive (including sections 5 to 9 and 12 to 14) survive termination. Deleting your account or having it terminated for breach does not entitle you to a refund, except as required by law or as stated in section 4.


12. Disclaimers

The Service and Content are provided "as is" and "as available". To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy and non-infringement. We do not promise that the Service will be uninterrupted, error-free or always available, or that any course will lead to a particular result, job or income.


13. Limitation of liability

To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue, data or goodwill, arising from or related to your use of the Service.

Our total liability for any claim relating to the Service is limited to the greater of (a) the amount you paid us in the 12 months before the claim arose, or (b) US$100.

Some jurisdictions do not allow certain disclaimers or limits, so some of the above may not apply to you. Nothing in these Terms limits rights you have under consumer protection laws that cannot be waived.


14. Governing law and disputes

These Terms are governed by the laws of the State of Florida, United States, without regard to its conflict-of-law rules. Any dispute arising from these Terms or the Service will be resolved in the state or federal courts located in Broward County, Florida, and you and we consent to the jurisdiction of those courts. Before filing a claim, please contact us at support@drlee.ai so we can try to resolve it informally.


15. Changes to these Terms

We may update these Terms from time to time. When we do, we will change the "Last updated" date above. If the changes are significant, we will notify you in the App or by email before they take effect. If you keep using the Service after changes take effect, you accept the updated Terms.


16. General

These Terms, together with the Privacy Policy and any terms shown at checkout, are the entire agreement between you and us about the Service. If any part of these Terms is found unenforceable, the rest remains in effect. Our failure to enforce a provision is not a waiver. You may not transfer these Terms without our consent; we may transfer them in connection with a merger, acquisition or sale of assets.


17. Contact us

Learning Science Inc.
7027 Broward Blvd #744, Plantation, FL 33317, United States
Email: support@drlee.ai`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
