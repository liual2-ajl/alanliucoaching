import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  const credentials = [
    {
      icon: <Award className="h-6 w-6 text-cobalt-600" />,
      title: "MBA, ACC Certified",
      description: "Master of Business Administration with Associate Certified Coach credentials"
    },
    {
      icon: <Users className="h-6 w-6 text-cobalt-600" />,
      title: "Leadership Expert",
      description: "Specialized in executive coaching and leadership development"
    },
    {
      icon: <Target className="h-6 w-6 text-cobalt-600" />,
      title: "Transformation Focus",
      description: "Helping professionals navigate transitions and achieve sustainable growth"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Alan Liu
              </h1>
              <h2 className="text-xl md:text-2xl text-cobalt-600 mb-8">
                Executive Coach & Leadership Development Specialist
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Welcome to your Ark as you navigate through the waters of life as you could be experiencing life in some sort of life stage, a new phase or a transition in between. Maybe you'll find something you wish to connect on.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-cobalt-600 hover:bg-cobalt-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
              >
                <Link to="/contact">
                  Work With Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Professional Credentials
                </h3>
                <div className="space-y-6">
                  {credentials.map((credential, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {credential.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {credential.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {credential.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Coaching Philosophy
            </h2>
            <p className="text-lg text-gray-600">
              Transforming transitions into opportunities for growth
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-8">
              I want to help others manage their transitions in the best way possible. I enjoy partnering with people and turn transitions into opportunities for transformative growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Leadership Coaching Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A personalized and collaborative journey, guiding aspiring and current professionals to gain self-awareness, refine their style, overcome challenges, and apply their skills in real-world scenarios for sustainable success.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Leadership Training Focus
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A process that cultivates effective leadership by developing self-awareness, promoting teamwork, and equipping individuals with the tools to inspire and guide teams toward organizational goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            "Everyone needs a coach. It doesn't matter whether you're a basketball player, a tennis player, a gymnast or a bridge player. We all need people who will give us feedback. That's how we improve."
          </blockquote>
          <cite className="text-lg text-cobalt-600 font-medium">
            — Bill Gates
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's work together to unlock your potential and achieve your leadership goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <Link to="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

