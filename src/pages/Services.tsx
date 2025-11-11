import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Interactive3DCard from '@/components/3d/Interactive3DCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, Clock, Star, Search, MapPin, Stethoscope } from 'lucide-react';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Cardiologist',
      rating: 4.9,
      experience: '15 years',
      availability: 'Mon, Wed, Fri',
      image: '👩‍⚕️',
      location: 'Building A, Floor 3',
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Neurologist',
      rating: 4.8,
      experience: '12 years',
      availability: 'Tue, Thu, Sat',
      image: '👨‍⚕️',
      location: 'Building B, Floor 2',
    },
    {
      id: 3,
      name: 'Dr. Anita Desai',
      specialty: 'Pediatrician',
      rating: 4.9,
      experience: '10 years',
      availability: 'Mon-Sat',
      image: '👩‍⚕️',
      location: 'Building A, Floor 1',
    },
    {
      id: 4,
      name: 'Dr. Vikram Singh',
      specialty: 'Orthopedic',
      rating: 4.7,
      experience: '18 years',
      availability: 'Mon, Wed, Fri',
      image: '👨‍⚕️',
      location: 'Building C, Floor 2',
    },
    {
      id: 5,
      name: 'Dr. Meera Patel',
      specialty: 'Dermatologist',
      rating: 4.8,
      experience: '8 years',
      availability: 'Tue, Thu, Sat',
      image: '👩‍⚕️',
      location: 'Building B, Floor 1',
    },
    {
      id: 6,
      name: 'Dr. Arjun Reddy',
      specialty: 'General Physician',
      rating: 4.6,
      experience: '20 years',
      availability: 'Mon-Sat',
      image: '👨‍⚕️',
      location: 'Building A, Floor 2',
    },
  ];

  const opdSchedule = [
    { day: 'Monday', time: '9:00 AM - 5:00 PM', departments: 'Cardiology, Orthopedic, General' },
    { day: 'Tuesday', time: '9:00 AM - 5:00 PM', departments: 'Neurology, Dermatology, Pediatrics' },
    { day: 'Wednesday', time: '9:00 AM - 5:00 PM', departments: 'Cardiology, Orthopedic, General' },
    { day: 'Thursday', time: '9:00 AM - 5:00 PM', departments: 'Neurology, Dermatology, Pediatrics' },
    { day: 'Friday', time: '9:00 AM - 5:00 PM', departments: 'All Departments' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM', departments: 'Emergency & General' },
  ];

  const specialties = ['all', 'Cardiologist', 'Neurologist', 'Pediatrician', 'Orthopedic', 'Dermatologist', 'General Physician'];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

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
              Hospital Services
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book appointments with our expert doctors and explore OPD schedules
            </p>
          </motion.div>

          {/* OPD Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Clock className="h-6 w-6 mr-2 text-primary" />
              OPD Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {opdSchedule.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-elevated transition-all">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{schedule.day}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{schedule.time}</p>
                      <p className="text-xs text-muted-foreground">{schedule.departments}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Doctors Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Stethoscope className="h-6 w-6 mr-2 text-primary" />
              Our Doctors
            </h2>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search doctors by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty === 'all' ? 'All Specialties' : specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Interactive3DCard>
                    <Card className="group hover:shadow-elevated transition-all h-full">
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center text-4xl shadow-glow">
                            {doctor.image}
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                          <Badge variant="secondary" className="mb-2">
                            {doctor.specialty}
                          </Badge>
                          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{doctor.rating}</span>
                          </div>
                        </div>

                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            <span>{doctor.experience} experience</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                            <span>{doctor.availability}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                            <span>{doctor.location}</span>
                          </div>
                        </div>

                        <Button className="w-full group-hover:bg-gradient-primary transition-all">
                          Book Appointment
                        </Button>
                      </CardContent>
                    </Card>
                  </Interactive3DCard>
                </motion.div>
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No doctors found matching your criteria.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
