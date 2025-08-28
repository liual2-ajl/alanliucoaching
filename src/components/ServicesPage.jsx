import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, Briefcase, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesPage = () => {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-cobalt-600" />,
      title: "Leadership Coaching",
      subtitle: "Personalized Leadership Development",
      description: "A personalized and collaborative process that aims to enhance your leadership skills. I help leaders gain self-awareness, refine their leadership style, and overcome challenges, providing ongoing support for skill application in real-world scenarios, ultimately empowering leaders to navigate complexity and achieve sustainable success.",
      benefits: [
        "Enhanced self-awareness and emotional intelligence",
        "Refined leadership style and communication skills",
        "Strategic thinking and decision-making capabilities",
        "Improved team management and motivation techniques",
        "Sustainable leadership practices for long-term success"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-cobalt-600" />,
      title: "Sales Coaching",
      subtitle: "Performance-Driven Sales Excellence",
      description: "A process of improving sales professional\"s skills and performance through consistent feedback and involvement. Investment into sales coaching not only helps generate sales results but also focusing on the mindsets, behaviors to show growth opportunities for better and more consistent results.",
      benefits: [
        "Improved sales performance and conversion rates",
        "Enhanced prospecting and relationship building skills",
        "Advanced negotiation and closing techniques",
        "Mindset shifts for consistent high performance",
        "Strategic account management and growth planning"
      ]
    },
    {
      icon: <Target className="h-12 w-12 text-cobalt-600" />,
      title: "Leadership Training",
      subtitle: "Comprehensive Leadership Education",
      description: "An educational process designed to develop and enhance the skills and qualities necessary for effective leadership. It focuses on cultivating self-awareness, fostering teamwork, and equipping individuals with the tools needed to inspire and guide a team towards organizational goals.",
      benefits: [
        "Comprehensive leadership skill development",
        "Team building and collaboration techniques",
        "Organizational goal alignment strategies",
        "Conflict resolution and problem-solving skills",
        "Change management and adaptability training"
      ]
    },
    {
      icon: <Briefcase className="h-12 w-12 text-cobalt-600" />,
      title: "Rising Professional Coaching",
      subtitle: "Career Advancement & Professional Growth",
      description: "Engaging a coach is an investment. Learning and applying lifelong skills such as networking, negotiating and interviewing all the way through your working career in areas such workplace communication and presentations and navigating office politics.",
      benefits: [
        "Professional networking and relationship building",
        "Advanced negotiation and interviewing skills",
        "Workplace communication and presentation mastery",
        "Office politics navigation and influence building",
        "Career planning and advancement strategies"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Coaching
              <span className="text-cobalt-600 block">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive coaching and training solutions designed to unlock your potential and drive sustainable success in your professional journey.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-cobalt-600 hover:bg-cobalt-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        {service.icon}
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </CardTitle>
                          <p className="text-cobalt-600 font-medium">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button 
                        asChild 
                        className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-200"
                      >
                        <Link to="/contact">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      What You'll Gain
                    </h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-cobalt-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Coaching Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach designed to maximize your growth and ensure sustainable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cobalt-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-cobalt-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Assessment & Discovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We begin with a comprehensive assessment to understand your current situation, goals, and challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Personalized Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Together, we develop a customized coaching plan tailored to your specific needs and objectives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Implementation & Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Through regular sessions and ongoing support, we implement strategies and track your progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cobalt-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Invest in Your Growth?
          </h2>
          <p className="text-xl text-cobalt-100 mb-8">
            Take the first step towards transforming your professional journey with personalized coaching.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-cobalt-600 hover:bg-gray-50 px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

