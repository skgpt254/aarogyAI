import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Interactive3DCard from '@/components/3d/Interactive3DCard';
import { Search, TestTube, Clock, FileText, Calendar, IndianRupee } from 'lucide-react';

const Diagnostics = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tests = [
    {
      id: 1,
      name: 'Complete Blood Count (CBC)',
      category: 'Blood Test',
      price: 500,
      duration: '2-4 hours',
      preparation: 'No fasting required',
      description: 'Measures different components of blood',
    },
    {
      id: 2,
      name: 'Lipid Profile',
      category: 'Blood Test',
      price: 800,
      duration: '4-6 hours',
      preparation: '12 hours fasting required',
      description: 'Checks cholesterol and triglyceride levels',
    },
    {
      id: 3,
      name: 'Thyroid Function Test',
      category: 'Blood Test',
      price: 600,
      duration: '4-6 hours',
      preparation: 'No fasting required',
      description: 'Evaluates thyroid gland function',
    },
    {
      id: 4,
      name: 'X-Ray Chest',
      category: 'Imaging',
      price: 400,
      duration: '30 minutes',
      preparation: 'Remove metal objects',
      description: 'Imaging of chest and lungs',
    },
    {
      id: 5,
      name: 'ECG',
      category: 'Cardiac',
      price: 300,
      duration: '15 minutes',
      preparation: 'No special preparation',
      description: 'Records electrical activity of heart',
    },
    {
      id: 6,
      name: 'Ultrasound Abdomen',
      category: 'Imaging',
      price: 1200,
      duration: '30-45 minutes',
      preparation: '6 hours fasting required',
      description: 'Imaging of abdominal organs',
    },
    {
      id: 7,
      name: 'HbA1c Test',
      category: 'Blood Test',
      price: 450,
      duration: '4-6 hours',
      preparation: 'No fasting required',
      description: 'Measures average blood sugar levels',
    },
    {
      id: 8,
      name: 'Vitamin D Test',
      category: 'Blood Test',
      price: 900,
      duration: '24 hours',
      preparation: 'No special preparation',
      description: 'Checks vitamin D levels in blood',
    },
  ];

  const filteredTests = tests.filter((test) =>
    test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    test.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Diagnostic Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book diagnostic tests with quick results and expert analysis
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
          </motion.div>

          {/* Tests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Interactive3DCard>
                  <Card className="group hover:shadow-elevated transition-all h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                          <TestTube className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary">{test.category}</Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {test.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{test.description}</p>

                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center text-muted-foreground">
                          <IndianRupee className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-semibold text-foreground">₹{test.price}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{test.duration}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <FileText className="h-4 w-4 mr-2 text-primary" />
                          <span>{test.preparation}</span>
                        </div>
                      </div>

                      <Button className="w-full group-hover:bg-gradient-primary transition-all">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Test
                      </Button>
                    </CardContent>
                  </Card>
                </Interactive3DCard>
              </motion.div>
            ))}
          </div>

          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tests found matching your search.</p>
            </div>
          )}

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Important Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Results are typically available within 24-48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Home sample collection available for select tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>All tests are conducted by certified professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Digital reports accessible through your account</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Diagnostics;
