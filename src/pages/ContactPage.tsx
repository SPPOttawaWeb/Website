import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });


    const result = await response.json();

    if (!result.success) {
      throw new Error("Email failed");
    }

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone_number: '',
      subject: '',
      message: ''
    });
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  }

  setLoading(false);
};


  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-amber-500 text-red-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              We would love to hear from you and answer any questions you may have
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-900 mb-2">Thank You!</h3>
                    <p className="text-green-800">
                      Your message has been received. We will get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-green-700 hover:text-green-900 font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>




                     <div>
                      <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="integer"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="6131234567"
                      />
                    </div>




                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Mass Times">Mass Times</option>
                        <option value="Sacraments">Sacraments (Baptism, Marriage, etc.)</option>
                        <option value="Ministries">Ministries & Volunteering</option>
                        <option value="Events">Events</option>
                        <option value="Donations">Donations</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                        <p className="text-red-800 text-sm">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-red-900 font-bold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Contact Information</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-red-50 to-white rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">
                        Saints Peter and Paul Melkite Catholic Church<br />
                        1161 N River Rd<br />
                        Ottawa, ON K1K 2C8
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-amber-50 to-white rounded-lg">
                    <Phone className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+16137466091" className="text-gray-700 hover:text-amber-600">(613) 746-6091</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-red-50 to-white rounded-lg">
                    <Mail className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@melkite.com" className="text-red-600 hover:text-red-700">
                        info@melkite.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-amber-50 to-white rounded-lg">
                    <Clock className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-700 mb-2">
                        Monday to Friday: 9:30 AM - 5:00 PM
                      </p>
                      <p className="text-sm text-gray-600">
                        Church Secretary: Mrs. Mona Obagi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-900 to-red-800 text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <p className="text-gray-200 mb-4">
                    Follow us on social media for updates, photos, and inspiration.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-red-900 mb-8 text-center">Find Us</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.8384769177807!2d-75.64024092345486!3d45.44937597107422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04f3d8e8f7e1%3A0x8e8e8e8e8e8e8e8e!2s1161%20N%20River%20Rd%2C%20Ottawa%2C%20ON%20K1K%202C8%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-red-900 mb-6">Visitors Welcome</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a longtime parishioner or visiting for the first time, we welcome you with open arms.
              Our parish office staff and clergy are always happy to answer questions, provide information about our
              community, or simply share a friendly conversation. Come and experience the warmth of Byzantine Catholic
              hospitality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
