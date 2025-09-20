
import React, { useState } from 'react';
import Section from '../components/Section';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Submitting...');
    // In a real app, you would send this data to a backend or email service.
    // For this demo, we'll just simulate a successful submission.
    console.log('Form data submitted:', formData);
    setTimeout(() => {
      setStatus('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="pt-20 bg-black">
      <Section title="Contact & Booking">
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">Ready to start a project or have a question? Reach out. I'm available for recording, mixing, mastering, and production work.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" placeholder="YOUR NAME" value={formData.name} onChange={handleChange} required className="w-full bg-neutral-900 border-2 border-neutral-700 focus:border-green-400 focus:ring-0 outline-none p-3 transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="YOUR EMAIL" value={formData.email} onChange={handleChange} required className="w-full bg-neutral-900 border-2 border-neutral-700 focus:border-green-400 focus:ring-0 outline-none p-3 transition-colors" />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="SUBJECT" value={formData.subject} onChange={handleChange} required className="w-full bg-neutral-900 border-2 border-neutral-700 focus:border-green-400 focus:ring-0 outline-none p-3 transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={6} placeholder="YOUR MESSAGE" value={formData.message} onChange={handleChange} required className="w-full bg-neutral-900 border-2 border-neutral-700 focus:border-green-400 focus:ring-0 outline-none p-3 transition-colors"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-green-500 text-black font-bold uppercase tracking-widest py-3 px-8 border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">
                Send Message
              </button>
            </div>
          </form>
          {status && <p className="mt-6 text-center text-green-400">{status}</p>}
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
