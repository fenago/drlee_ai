import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last updated: October 9, 2026

This Privacy Policy explains how [LEGAL ENTITY NAME] ("DrLee.ai", "we", "us" or "our") collects, uses, shares and protects personal information when you use:

- the website at https://drlee.ai (the "Website"), and
- the DrLee.ai mobile app for iOS and Android (the "App").

Together we call these the "Service". If you do not agree with this policy, please do not use the Service.

Hands-on courses hosted on CourseLabs.io are run on that platform and are covered by its own privacy policy, not this one.


1. Information we collect

1.1 Information you give us

- Account information: your email address and name. You can also add a profile photo.
- Onboarding answers: in the App, your role (for example, business leader or technical builder), experience level and the topics you are interested in.
- Content you create: lesson comments, notes, study notebooks, documents and files you upload for study, bookmarks, and questions you ask the AI assistant. Instructors who use the App's Studio may also upload or record lesson videos, audio and images.
- Reports and blocks: if you report content or block another user, we keep a record of the report or block.
- Support messages: anything you send us by email.
- Purchases: when you buy a program on the Website, our payment processor Stripe collects your payment details. We receive your name, email address, what you bought and the status of the payment. We do not receive or store your full card number.

1.2 Information collected automatically

- Learning activity: lessons watched, watch progress, completed lessons, certificates earned and similar activity, so the App can resume where you left off and track your progress.
- Video playback data: when you watch a video, our video provider Mux collects playback quality information (such as start-up time, buffering and errors) along with your account ID, device and app information, and your IP address.
- Device and notification data: if you allow notifications, we store a push notification token for your device so we can send you notifications.
- Diagnostics: if crash reporting is enabled in the App, crash reports and related technical information (device model, operating system version, app version and the error) are sent to Sentry.
- AI usage: we record how many AI requests you make, and related technical data such as the number of tokens used, to run the service and enforce daily usage limits.
- Website technical data: like most websites, our servers and hosting provider receive standard log information such as IP address, browser type and the pages requested. If you sign in on the Website, we use cookies to keep you signed in.

We do not collect your location, contacts, health information or device advertising ID. We do not use third-party advertising or cross-app tracking.

1.3 Information from other sources

- Purchases made elsewhere: if you buy a program on the Website or on CourseLabs.io, we receive the email address and purchase details so that we can unlock that content in the App for the account with the same email address.
- Sign-in providers: if you sign in to the Website with Google, we receive your name, email address and profile picture from Google.


2. How we use information

We use personal information to:

- create and manage your account and sign you in (for example, by emailing you a one-time code or sign-in link);
- provide the lessons, track your progress, resume playback and issue certificates of completion;
- unlock programs you have purchased, by matching your account email to your purchase;
- personalize your home screen based on your onboarding answers;
- run the AI assistant and study tools you choose to use;
- run lesson discussions, including moderating comments, reviewing reports and honoring blocks;
- send service messages and, if you allow them, push notifications;
- monitor video quality, fix crashes and improve the Service;
- process payments, refunds and customer support requests;
- protect the Service and its users, prevent abuse and enforce our Terms of Service; and
- comply with legal obligations.

We do not sell your personal information, and we do not share it for cross-context behavioral advertising.


3. AI features

The App includes an AI assistant and study tools (such as summaries, outlines and flashcards). Before you use them for the first time, the App asks for your consent.

When you use these features, we send your question or request, together with the relevant lesson text, notes or documents you have added, to an AI provider to generate a response. Depending on the feature, the provider may be OpenAI, Google (Gemini) or Anthropic. These providers process the data to return a response to us. We use them under their business or API terms, and we do not use your AI data for advertising.

AI responses are generated automatically and can be inaccurate. Please do not include sensitive personal information in your prompts, notes or uploaded documents.


4. Service providers we share information with

We share personal information only with service providers that help us run the Service, and only as needed for the purposes in this policy:

- Supabase: App account, sign-in, database and file storage (hosted in the United States).
- Mux: video hosting, streaming and playback analytics.
- OpenAI, Google (Gemini) and Anthropic: processing AI assistant and study tool requests.
- Expo (and Apple Push Notification service or Google Firebase Cloud Messaging): delivering push notifications.
- Sentry: crash reporting, when enabled.
- Stripe: payment processing on the Website.
- Resend: sending sign-in and service emails from the Website.
- MongoDB: Website account and purchase records.
- Google: optional "Sign in with Google" on the Website.
- Our website hosting provider.

We may also disclose information:

- to comply with the law, a court order or other legal process;
- to protect the rights, safety and property of our users, the public or DrLee.ai;
- in connection with a merger, acquisition or sale of assets, in which case this policy will continue to apply to your information; or
- with your consent.

Other users can see your name, profile photo and comments when you post in a lesson discussion.


5. Cookies and local storage

The Website uses cookies that are needed to keep you signed in and to complete checkout. The Website and App also store settings (such as your theme preference) on your device. We do not use advertising cookies. We do not currently use third-party analytics on the Website; if we add them, we will update this policy.


6. How long we keep information

We keep your account information and content for as long as your account is active. When you delete your account, we delete your account and associated data as described in section 7. We may keep limited records for longer where we must, for example purchase and tax records, records needed to resolve disputes or enforce our Terms, or information about accounts removed for abuse. Data in backups is overwritten on a rolling basis within [BACKUP RETENTION PERIOD].

Video files you download for offline viewing in the App are stored only on your device. You can remove them in the App or by deleting the App.


7. Deleting your account and data

- In the App: go to Settings, then Delete Account. This permanently deletes your account and the data linked to it, including your profile, progress, notes, notebooks, uploaded files and comments.
- By email: write to support@drlee.ai from the email address on your account and ask us to delete your account. We may ask you to confirm your identity.

Deleting your App account does not cancel or refund a purchase. Purchase records held by Stripe or CourseLabs.io are governed by their own retention rules.


8. Security

We use reasonable technical and organizational measures to protect personal information, including encryption in transit (HTTPS/TLS) and access controls on our databases. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.


9. Children

The Service is intended for adults and is not directed to children. We do not knowingly collect personal information from children under 13 (or under 16 where local law sets a higher age). If you believe a child has given us personal information, contact us at support@drlee.ai and we will delete it.


10. International transfers

We are based in the United States, and our main service providers store and process data in the United States. If you use the Service from outside the United States, your information will be transferred to and processed in the United States and other countries where our providers operate. Where required, we rely on appropriate safeguards for these transfers, such as the European Commission's Standard Contractual Clauses.


11. Your rights and choices

Depending on where you live, you may have the right to:

- access the personal information we hold about you and get a copy of it;
- correct information that is inaccurate;
- delete your information;
- object to or restrict certain processing;
- withdraw consent at any time, where we rely on consent (for example, for AI features or push notifications); and
- lodge a complaint with your local data protection authority.

You can update your profile in the App, turn off push notifications in your device settings, and delete your account as described in section 7. For any other request, email support@drlee.ai. We will respond within the time required by law and will not discriminate against you for exercising your rights.

People in the EEA and UK: we process personal information to perform our contract with you (providing the Service), based on our legitimate interests (keeping the Service secure, improving it and preventing abuse), with your consent (AI features and push notifications), and to comply with legal obligations.

California residents: in the last 12 months we have collected the categories of information described in section 1 (identifiers, commercial information about purchases, internet and app activity, user content, and limited device data) for the purposes described in section 2, and disclosed them to the service providers listed in section 4. We do not sell or "share" personal information as those terms are defined in California law, and we do not use sensitive personal information to infer characteristics about you. You may use an authorized agent to make a request on your behalf.


12. Changes to this policy

We may update this policy from time to time. When we do, we will change the "Last updated" date above. If the changes are significant, we will let you know in the App or by email before they take effect.


13. Contact us

If you have questions about this policy or your information, contact us at:

[LEGAL ENTITY NAME]
[MAILING ADDRESS]
Email: support@drlee.ai`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
