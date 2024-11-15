{/* Continuing from previous Contact.jsx */}
                    <p className="text-gray-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Name *</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Service Interested In *</label>
                        <select
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="ecommerce">E-commerce Solutions</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Budget Range</label>
                        <select
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                          <option value="">Select budget range</option>
                          <option value="<5k">Less than $5,000</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Project Details *</label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="6"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    {status.error && (
                      <div className="text-red-500 text-sm">{status.error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full btn btn-primary"
                    >
                      {status.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollRevealSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <ScrollRevealSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our services
              </p>
            </div>
          </ScrollRevealSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <ScrollRevealSection key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                </ScrollRevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.935242!3d40.730610!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA1IzQwIzQwLjczMDYxMCwtNzMuOTM1MjQy!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  )
}

const contactInfo = [
  {
    icon: <FaPhone />,
    title: "Phone",
    content: "+1 (555) 123-4567"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "info@codewhiz.co"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    content: "123 Tech Street, New York, NY 10001"
  }
]

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. A typical website project takes 6-8 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various maintenance and support packages to keep your application running smoothly after launch. This includes regular updates, security patches, and technical support."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular client communication. The process includes discovery, planning, design, development, testing, and deployment phases, with continuous feedback and iterations."
  },
  {
    question: "How do you handle project pricing?",
    answer: "We provide custom quotes based on project requirements. Factors include project scope, features, timeline, and complexity. We offer both fixed-price and time-and-materials pricing models."
  },
  {
    question: "Can you help with existing projects?",
    answer: "Yes, we can take over existing projects, perform code audits, and help with improvements or maintenance. We'll assess the current state and provide recommendations."
  }
]
