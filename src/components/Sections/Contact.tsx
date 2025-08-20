import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/portfolio';

const Contact: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    subject: Yup.string()
      .min(5, 'Subject must be at least 5 characters')
      .required('Subject is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setSubmitStatus('loading');
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Here you would typically send the email using EmailJS or your backend API
        console.log('Form submitted:', values);
        
        setSubmitStatus('success');
        resetForm();
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    },
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      color: 'text-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new opportunities, creative ideas, or 
                potential collaborations. Feel free to reach out through any of the 
                following channels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`p-3 rounded-lg ${info.color} bg-opacity-10 mr-4`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Follow me on social media
              </h4>
              <div className="flex space-x-4">
                {Object.entries(personalInfo.social).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...formik.getFieldProps('name')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    formik.touched.name && formik.errors.name
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'
                  } text-gray-900 dark:text-white`}
                  placeholder="Your full name"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...formik.getFieldProps('email')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'
                  } text-gray-900 dark:text-white`}
                  placeholder="your.email@example.com"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...formik.getFieldProps('subject')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    formik.touched.subject && formik.errors.subject
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'
                  } text-gray-900 dark:text-white`}
                  placeholder="What's this about?"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {formik.errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...formik.getFieldProps('message')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                    formik.touched.message && formik.errors.message
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'
                  } text-gray-900 dark:text-white`}
                  placeholder="Tell me about your project or just say hello!"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitStatus === 'loading'}
                whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.98 }}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  submitStatus === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {submitStatus === 'loading' && (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {submitStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                {submitStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                {submitStatus === 'idle' && <Send className="w-5 h-5" />}
                <span>
                  {submitStatus === 'loading' && 'Sending...'}
                  {submitStatus === 'success' && 'Message Sent!'}
                  {submitStatus === 'error' && 'Try Again'}
                  {submitStatus === 'idle' && 'Send Message'}
                </span>
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;