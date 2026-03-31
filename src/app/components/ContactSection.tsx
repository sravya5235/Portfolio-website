import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MoveUpRight, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully!', {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message', {
        description: 'Please try again later or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 border-t border-gray-300 pt-16 md:pt-24">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex justify-between items-start">
          <div>
            <p className="font-['IBM_Plex_Mono'] text-[#555] text-sm md:text-base tracking-widest uppercase mb-4">
              That's all for now.
            </p>
            <h2 className="font-['Inter'] text-black text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-1 tracking-tight">
              Got a project in mind?
            </h2>
            <h2 className="font-['Inter'] text-black text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
              Let's talk
            </h2>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-[#455CE9] text-white rounded-full w-48 h-48 flex items-center justify-center hover:scale-[1.05] transition-transform duration-300 shadow-lg pointer-events-none">
              <span className="font-['Inter'] text-xl font-medium">Get in touch</span>
            </div>
          </div>
        </div>

        {/* Content Section: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">
          {/* Contact Info */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-2">Email</p>
              <a 
                href="mailto:sravya5235@gmail.com" 
                className="font-['Inter'] text-[#1A1A1E] text-lg md:text-2xl hover:text-[#455CE9] transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#455CE9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                sravya5235@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider mb-2">Phone</p>
              <a 
                href="tel:+919490122471" 
                className="font-['Inter'] text-[#1A1A1E] text-lg md:text-2xl hover:text-[#455CE9] transition-colors relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#455CE9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                (+91) 9490122471
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="text-[#1A1A1E] font-medium font-['DM_Sans'] text-sm uppercase tracking-wide">
                  What's your name?
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  placeholder="John Doe"
                  className="bg-transparent border-b border-gray-300 py-3 text-[#1A1A1E] font-['Inter'] text-lg focus:outline-none focus:border-[#455CE9] transition-colors placeholder:text-gray-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="text-[#1A1A1E] font-medium font-['DM_Sans'] text-sm uppercase tracking-wide">
                  What's your email?
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  placeholder="john@example.com"
                  className="bg-transparent border-b border-gray-300 py-3 text-[#1A1A1E] font-['Inter'] text-lg focus:outline-none focus:border-[#455CE9] transition-colors placeholder:text-gray-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[#1A1A1E] font-medium font-['DM_Sans'] text-sm uppercase tracking-wide">
                  Tell me about your project
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Hello, I would like to discuss..."
                  rows={4}
                  className="bg-transparent border-b border-gray-300 py-3 text-[#1A1A1E] font-['Inter'] text-lg focus:outline-none focus:border-[#455CE9] transition-colors resize-none placeholder:text-gray-300"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 font-['Inter'] text-lg font-medium border border-gray-300 rounded-full px-8 py-4 flex items-center justify-center gap-3 hover:border-black hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group w-fit"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <MoveUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
