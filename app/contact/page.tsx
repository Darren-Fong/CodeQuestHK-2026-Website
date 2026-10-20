import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import ScrollAnimations from "../components/ScrollAnimations";

export const metadata: Metadata = {
  title: "Contact | TyphoonHacks 2027",
  description: "Questions about TyphoonHacks 2027, partnerships or judging.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="bg-deep-space text-storm-white">
        <ScrollAnimations />
        <PageHero
          badge="Contact"
          title="Contact us"
          subtitle="Questions about the event, partnerships or judging. We usually reply within a day."
        />

        <section className="px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <ContactForm />
            </div>
            <aside className="md:col-span-2">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold">Before you write</h2>
              <ul className="mt-4 space-y-4 text-storm-white/65">
                <li>
                  <span className="block text-xs tracking-widest text-storm-white/40 uppercase">Teams and entry</span>
                  Use the form and pick "Participant Question". Include your school and year.
                </li>
                <li>
                  <span className="block text-xs tracking-widest text-storm-white/40 uppercase">Partnerships</span>
                  Pick "Event Sponsor" or "Industry Partner" and tell us what you can offer.
                </li>
                <li>
                  <span className="block text-xs tracking-widest text-storm-white/40 uppercase">Reply time</span>
                  One working day. If it is urgent, say so in the message.
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
