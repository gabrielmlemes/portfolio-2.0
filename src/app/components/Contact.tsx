import { Suspense } from "react";
import { ContactFormSkeleton } from "./contact/ContactFormSkeleton";
import { ContactTitle } from "./contact/ContactTitle";
import { ContactFormWrapper } from "./contact/ContactFormWrapper";

export function Contact() {
  return (
    <section id="contato" className="w-full py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactTitle />
        <Suspense fallback={<ContactFormSkeleton />}>
          <ContactFormWrapper />
        </Suspense>
      </div>
    </section>
  );
}