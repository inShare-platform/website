import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import siteContent from '../data/siteContent.json';

const Contact = () => {
  const { contact } = siteContent;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 text-center items-center max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl">
              {contact.headline}
            </h1>
            <p className="text-white/80 text-base font-normal leading-normal">
              {contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
            {/* Email */}
            <a
              href={`mailto:${contact.details.email}`}
              className="flex items-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-accent/10">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-white/60 text-sm">Email us at</p>
                <p className="text-white font-semibold group-hover:text-accent transition-colors">
                  {contact.details.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.details.phone}`}
              className="flex items-center gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 transition-all group"
            >
              <div className="p-3 rounded-lg bg-accent/10">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-white/60 text-sm">Call us at</p>
                <p className="text-white font-semibold group-hover:text-accent transition-colors">
                  {contact.details.phone}
                </p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          {/* <div className="flex flex-col gap-4 items-center mt-4">
            <p className="text-white/60 text-sm">Follow us on social media</p>
            <div className="flex gap-4">
              {contact.details.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-accent/10 hover:border-accent transition-all"
                >
                  {social.platform === 'LinkedIn' ? (
                    <Linkedin className="w-5 h-5 text-white hover:text-accent" />
                  ) : (
                    <Twitter className="w-5 h-5 text-white hover:text-accent" />
                  )}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
