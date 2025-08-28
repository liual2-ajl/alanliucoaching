import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-teal-600" />,
      title: "Email",
      content: "alan@createtheark.com",
      link: "mailto:alan@createtheark.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-teal-600" />,
      title: "Phone",
      content: "+65.9155.1741",
      link: "tel:+6591551741"
    },
    {
      icon: <Phone className="h-6 w-6 text-teal-600" />,
      title: "Alternative Phone",
      content: "+1.416.605.8725",
      link: "tel:+14166058725"
    }
  ];

  const services = [
    "Leadership Coaching",
    "Sales Coaching", 
    "Leadership Training",
    "Rising Professional Coaching",
    "General Inquiry"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <span className="text-teal-600 block">Transformation Journey</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to unlock your potential? Get in touch to schedule a consultation and begin your path to professional growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send Me a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                            Service of Interest
                          </Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="mt-1"
                          placeholder="Tell me about your goals and how I can help you..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg transition-colors duration-200"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  I'm here to help you navigate your professional journey. Whether you have questions about my services or are ready to start coaching, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h3>
                          <a 
                            href={info.link}
                            className="text-teal-600 hover:text-teal-700 transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-teal-50 border-teal-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Response Time
                  </h3>
                  <p className="text-gray-700">
                    I typically respond to all inquiries within 24 hours during business days. For urgent matters, please call directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about coaching and getting started.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How long does a typical coaching engagement last?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coaching engagements typically range from 3-6 months, depending on your goals and needs. We'll discuss the optimal timeline during our initial consultation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What can I expect from our first session?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our first session focuses on understanding your current situation, goals, and challenges. We'll also discuss how coaching can help you achieve your objectives and outline a personalized plan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do you offer virtual coaching sessions?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, I offer both in-person and virtual coaching sessions to accommodate your schedule and preferences. Virtual sessions are conducted via secure video conferencing platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

