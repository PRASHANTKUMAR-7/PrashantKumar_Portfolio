import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Terminal } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/portfolio';

const Contact = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [typedLabel, setTypedLabel] = useState('');
  const [currentField, setCurrentField] = useState(0);

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
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Form submitted:', values);
        setSubmitStatus('success');
        resetForm();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    },
  });

  const labels = ['name', 'email', 'subject', 'message'];
  
  useEffect(() => {
    if (!isIntersecting) return;
    
    const typeLabel = (label, index) => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < label.length) {
          setTypedLabel(label.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setTypedLabel('');
            setCurrentField((prev) => (prev + 1) % labels.length);
          }, 1000);
        }
      }, 50);
      
      return () => clearInterval(interval);
    };

    const timeout = setTimeout(() => {
      typeLabel(labels[currentField], currentField);
    }, 500);

    return () => clearTimeout(timeout);
  }, [currentField, isIntersecting]);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    },
  ];

  const TerminalField = ({ id, label, type = 'text', rows, ...props }) => {
    const hasError = formik.touched[id] && formik.errors[id];
    const fieldValue = formik.values[id];
    
    return (
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <span className="terminal-prompt mr-2">$</span>
          <span className="terminal-text text-sm">
            {typedLabel || (fieldValue ? `${label.toLowerCase()}=` : `${label.toLowerCase()}=`)}
          </span>
          {fieldValue && (
            <span className="terminal-text ml-1">{fieldValue}</span>
          )}
          {!fieldValue && <span className="terminal-cursor ml-1" />}
        </div>
        {type === 'textarea' ? (
          <textarea
            id={id}
            rows={rows}
            {...formik.getFieldProps(id)}
            className={`w-full px-4 py-3 terminal-bg terminal-text border border-green-500/30 rounded focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 font-mono ${
              hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''
            }`}
            placeholder=""
            {...props}
          />
        ) : (
          <input
            type={type}
            id={id}
            {...formik.getFieldProps(id)}
            className={`w-full px-4 py-3 terminal-bg terminal-text border border-green-500/30 rounded focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all duration-200 font-mono ${
              hasError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' : ''
            }`}
            placeholder=""
            {...props}
          />
        )}
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-red-400 text-sm font-mono"
          >
            <span className="terminal-prompt">!</span> {formik.errors[id]}
          </motion.p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isIntersecting ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <Terminal className="w-12 h-12 text-blue-600 dark:text-[#00f0ff] mx-auto" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            {'>'} Get In Touch
          </h2>
          <div className="w-24 h-1 bg-green-500 dark:bg-green-400 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-mono">
            {'$'} Have a project in mind? Let's connect!
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-mono">
                {'>'} Contact Info
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to discussing new opportunities, creative ideas, or 
                potential collaborations.
              </p>
            </div>

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
                  className="flex items-center p-4 glassmorphism-light dark:glassmorphism-dark rounded-xl hover:glow-blue dark:hover:glow-blue transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-green-500/10 dark:bg-green-500/20 mr-4 group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors">
                    <info.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white font-mono">
                      {'$'} {info.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Terminal-Style Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="terminal-bg p-8 rounded-xl border border-green-500/30 shadow-2xl"
          >
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <span className="terminal-text font-mono text-sm">contact-form.sh</span>
              </div>
              <div className="h-px bg-green-500/30 mb-4" />
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <TerminalField
                id="name"
                label="name"
                type="text"
              />
              
              <TerminalField
                id="email"
                label="email"
                type="email"
              />
              
              <TerminalField
                id="subject"
                label="subject"
                type="text"
              />
              
              <TerminalField
                id="message"
                label="message"
                type="textarea"
                rows={5}
              />

              {/* Terminal-Style Submit Button */}
              <motion.button
                type="submit"
                disabled={submitStatus === 'loading'}
                whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.98 }}
                className={`w-full px-6 py-3 rounded-lg font-semibold font-mono transition-all duration-200 flex items-center justify-center space-x-2 ${
                  submitStatus === 'loading'
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-green-600 hover:bg-green-700 glow-blue dark:glow-blue'
                } text-white`}
              >
                <span className="terminal-prompt">{'>'}</span>
                {submitStatus === 'loading' && (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {submitStatus === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                )}
                {submitStatus === 'error' && (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Error: Try Again</span>
                  </>
                )}
                {submitStatus === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    <span>send_message</span>
                  </>
                )}
              </motion.button>

              {/* Terminal-Style Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg font-mono"
                >
                  <p className="text-green-400 text-sm">
                    <span className="terminal-prompt">✓</span> Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg font-mono"
                >
                  <p className="text-red-400 text-sm">
                    <span className="terminal-prompt">✗</span> Error sending message. Please try again.
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
