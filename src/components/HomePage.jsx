import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import PaypalTalkHomepage from "../assets/PaypalTalkHomepage.jpg";

const HomePage = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-cobalt-600" />,
      title: "Leadership Coaching",
      description: "A personalized and collaborative process that aims to enhance your leadership skills. I help leaders gain self-awareness, refine their leadership style, and overcome challenges, providing ongoing support for skill application in real-world scenarios."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-cobalt-600" />,
      title: "Sales Coaching",
      description: "A process of improving sales professional's skills and performance through consistent feedback and involvement. Investment into sales coaching not only helps generate sales results but also focusing on the mindsets and behaviors."
    },
    {
      icon: <Target className="h-8 w-8 text-cobalt-600" />,
      title: "Leadership Training",
      description: "An educational process designed to develop and enhance the skills and qualities necessary for effective leadership. It focuses on cultivating self-awareness, fostering teamwork, and equipping individuals with the tools needed to inspire and guide a team."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-cobalt-600" />,
      title: "Rising Professional Coaching",
      description: "Engaging a coach is an investment. Learning and applying lifelong skills such as networking, negotiating and interviewing all the way through your working career in areas such workplace communication and presentations."
    }
  ];

  const testimonials = [
    {
      quote: "As a seasoned coach, Alan provided the safe space and facilitated self-discovery at a gradually effective pace. I found his coaching style efficient, concise, and to the point. He was able to help me get clarity in a short span of time.",
      author: "Executive from AirBnB"
    },
    {
      quote: "Alan is a great coach for anyone looking to move beyond limiting beliefs and take their next steps. Alan maintains a judgement-free space and allows the client to explore aspects of them. With Alan as a coach, you are sure to create new awareness for yourself.",
      author: "Design Executive"
    },
    {
      quote: "I am expressing my gratitude to Alan for the transformative coaching sessions. Alan's expertise shines through as he brought forth invaluable resources and practical tools, enabling me to gain profound clarity on my career goals.",
      author: "Head of Human Resources"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${PaypalTalkHomepage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Journey to a 
              <span className="text-cobalt-300 block">Better Tomorrow</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              From Transition to Transformation
            </h2>
            <p className="text-lg text-white mb-12 max-w-4xl mx-auto leading-relaxed">
              Each of us have a story, a collection of experiences and challenges at different points of time which have helped influenced our minds, bodies and hearts. I want to help others manage their transitions in the best way possible. I enjoy partnering with people and turn transitions into opportunities for transformative growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-cobalt-600 hover:bg-cobalt-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-cobalt-600 text-cobalt-600 hover:bg-cobalt-50 px-8 py-4 text-lg rounded-lg transition-all duration-200"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coaching and training solutions designed to unlock your potential and drive sustainable success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-cobalt-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Happy Clients
            </h2>
            <p className="text-lg text-gray-600">
              Hear from professionals who have transformed their careers through coaching.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-cobalt-600 font-medium">
                    — {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cobalt-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Leadership Journey?
          </h2>
          <p className="text-xl text-cobalt-100 mb-8">
            Take the first step towards unlocking your potential and achieving sustainable success.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-cobalt-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            <Link to="/contact">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

