import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero3DScene from '@/components/3d/Hero3DScene';
import Interactive3DCard from '@/components/3d/Interactive3DCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  MessageSquare,
  Calendar,
  Activity,
  Wind,
  Ambulance,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'AI Assistant',
      description: 'Chat with Aarogy CareAgent for instant health guidance',
      path: '/ai-assistant',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Calendar,
      title: 'Appointments',
      description: 'Book appointments with top doctors instantly',
      path: '/services',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Activity,
      title: 'Diagnostics',
      description: 'Schedule tests and get results quickly',
      path: '/diagnostics',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Wind,
      title: 'AQI Dashboard',
      description: 'Monitor air quality and health advisories',
      path: '/aqi',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Ambulance,
      title: 'Emergency',
      description: 'Quick access to emergency services',
      path: '/emergency',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Stethoscope,
      title: 'Hospital Services',
      description: 'Explore OPD schedules and doctor profiles',
      path: '/services',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  const features = [
    {
      title: '24/7 AI Support',
      description: 'Get instant health guidance anytime, anywhere',
    },
    {
      title: 'Multilingual',
      description: 'Communicate in English, Hindi, or Hinglish',
    },
    {
      title: 'Voice Enabled',
      description: 'Talk to our AI assistant naturally',
    },
    {
      title: 'Smart Booking',
      description: 'Seamless appointment and test scheduling',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3DScene />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Healthcare</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Welcome to Aarogy Healthcare Solutions
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the future of healthcare with our AI-powered assistant, seamless
              appointment booking, and comprehensive health services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/ai-assistant">
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Talk to AI Assistant
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1.5 h-1.5 bg-current rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare solutions powered by cutting-edge AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={service.path}>
                  <Interactive3DCard>
                    <Card className="group hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary/50 h-full">
                      <CardContent className="p-6">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                        >
                          <service.icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                        <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Interactive3DCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Aarogy?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed to make healthcare accessible and efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-glow transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-1"
          >
            <div className="bg-background rounded-3xl p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Healthcare Experience?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust Aarogy for their healthcare needs
              </p>
              <Link to="/ai-assistant">
                <Button size="lg" className="group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
