'use client';

import { Wrench, Hammer, Zap, Package, Settings, Headphones } from 'lucide-react';
import type { VendorProfile } from '@/components/vendor-profile/types';
import { VendorProfilePage } from '@/components/vendor-profile/vendor-profile-page';

const mockVendor: VendorProfile = {
  id: 'vendor-001',
  slug: 'sterling-industrial',
  name: 'Sterling Industrial Solutions',
  logo: {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop',
    alt: 'Sterling Industrial Solutions logo',
  },
  rating: 4.8,
  yearsInBusiness: 12,
  location: 'Dhaka, Bangladesh',
  businessType: 'Manufacturer & Supplier',
  responseRate: '98%',
  responseTime: '2 hours',
  isVerified: true,
  isPremium: true,

  // Contact
  contactPersonName: 'Md. Karim Ahmed',
  phone: '+880-2-5884-2023',
  email: 'contact@sterlingindustrial.bd',
  website: 'https://sterlingindustrial.bd',
  whatsapp: '+8801700123456',
  businessHours: 'Monday - Friday, 9:00 AM - 6:00 PM',

  // Company Info
  companyName: 'Sterling Industrial Solutions Ltd.',
  yearEstablished: 2012,
  employees: '150-200',
  factorySize: '50,000 sq ft',
  vat: 'BD123456789',
  bin: 'BIN12345678',
  tin: 'TIN00012345678',
  tradeLicense: 'TL/2012/00001',

  // About & Vision
  aboutText: `Sterling Industrial Solutions has been a leading manufacturer and supplier of industrial machinery and equipment for over a decade. With state-of-the-art facilities and a dedicated team of engineers, we deliver high-quality products and services to clients across the region.

Our commitment to excellence, innovation, and customer satisfaction has made us a trusted partner for many multinational companies operating in Bangladesh and Southeast Asia.`,

  vision: `To be the most trusted and reliable provider of industrial solutions in South Asia by delivering innovative, high-quality products and exceptional customer service.`,

  strengths: [
    'ISO 9001:2015 certified quality management system',
    'Custom fabrication and engineering capabilities',
    'Fast turnaround time and flexible order quantities',
    'Competitive pricing with premium quality',
    'Experienced team with 15+ years in the industry',
    'Full after-sales support and maintenance services',
  ],

  // Products
  products: [
    {
      id: 'prod-001',
      name: 'Industrial Mixing Tanks',
      category: 'Equipment',
      description: 'Stainless steel mixing tanks with customizable capacity from 100L to 10,000L for pharmaceutical, food, and chemical industries.',
      image: {
        url: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=400&h=300&fit=crop',
        alt: 'Industrial Mixing Tank',
      },
      detailsLink: '/products/mixing-tanks',
    },
    {
      id: 'prod-002',
      name: 'Conveyor Belt Systems',
      category: 'Conveyor',
      description: 'Modular conveyor systems designed for food processing, packaging, and manufacturing operations with variable speed control.',
      image: {
        url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
        alt: 'Conveyor Belt System',
      },
      detailsLink: '/products/conveyor',
    },
    {
      id: 'prod-003',
      name: 'Packaging Machinery',
      category: 'Packaging',
      description: 'Automated packaging solutions for bags, boxes, and containers with integrated quality control systems.',
      image: {
        url: 'https://images.unsplash.com/photo-1581092918169-2f75e6a89a5e?w=400&h=300&fit=crop',
        alt: 'Packaging Machinery',
      },
      detailsLink: '/products/packaging',
    },
    {
      id: 'prod-004',
      name: 'Water Treatment Systems',
      category: 'Systems',
      description: 'Complete water purification and treatment systems for industrial use with advanced filtration technology.',
      image: {
        url: 'https://images.unsplash.com/photo-1581092918124-0c75c5d46c82?w=400&h=300&fit=crop',
        alt: 'Water Treatment System',
      },
      detailsLink: '/products/water-treatment',
    },
    {
      id: 'prod-005',
      name: 'Control Panel Systems',
      category: 'Electronics',
      description: 'Custom-built industrial control panels with PLC integration for automation and process monitoring.',
      image: {
        url: 'https://images.unsplash.com/photo-1581092916948-2e6e87a6c9c0?w=400&h=300&fit=crop',
        alt: 'Control Panel',
      },
      detailsLink: '/products/control-panels',
    },
    {
      id: 'prod-006',
      name: 'Safety Equipment',
      category: 'Safety',
      description: 'Comprehensive safety gear and protective equipment for industrial work environments.',
      image: {
        url: 'https://images.unsplash.com/photo-1581092918257-0c9e1fea88e5?w=400&h=300&fit=crop',
        alt: 'Safety Equipment',
      },
      detailsLink: '/products/safety',
    },
  ],

  // Projects
  projects: [
    {
      id: 'proj-001',
      title: 'Pharmaceutical Factory Setup - Dhaka',
      description: 'Complete manufacturing line installation for a leading pharmaceutical company including mixing, packaging, and quality control systems.',
      clientIndustry: 'Pharmaceutical',
      image: {
        url: 'https://images.unsplash.com/photo-1581092161562-40038e57c0b0?w=400&h=300&fit=crop',
        alt: 'Pharmaceutical Factory',
      },
      link: '/projects/pharma-dhaka',
    },
    {
      id: 'proj-002',
      title: 'Food Processing Plant Modernization - Chittagong',
      description: 'Upgraded conveyor systems and automated packaging machinery for a major food processing facility, improving output by 40%.',
      clientIndustry: 'Food & Beverage',
      image: {
        url: 'https://images.unsplash.com/photo-1581092877017-a5d5c8d8e8c0?w=400&h=300&fit=crop',
        alt: 'Food Processing Plant',
      },
      link: '/projects/food-chittagong',
    },
    {
      id: 'proj-003',
      title: 'Textile Mill Equipment Installation - Narayanganj',
      description: 'Installation of textile processing machinery and control systems for a medium-sized textile mill.',
      clientIndustry: 'Textile',
      image: {
        url: 'https://images.unsplash.com/photo-1581092915360-773d6b45e5e0?w=400&h=300&fit=crop',
        alt: 'Textile Mill',
      },
      link: '/projects/textile-narayanganj',
    },
    {
      id: 'proj-004',
      title: 'Water Treatment Facility - Export Zone',
      description: 'Designed and installed a complete water treatment system for an industrial export zone with 500,000 GPD capacity.',
      clientIndustry: 'Utilities',
      image: {
        url: 'https://images.unsplash.com/photo-1581092918256-0c9e1fea88e5?w=400&h=300&fit=crop',
        alt: 'Water Treatment Facility',
      },
      link: '/projects/water-export-zone',
    },
  ],

  // Services
  services: [
    {
      id: 'svc-001',
      name: 'Custom Fabrication',
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      id: 'svc-002',
      name: 'Installation',
      icon: <Hammer className="h-6 w-6" />,
    },
    {
      id: 'svc-003',
      name: 'Commissioning',
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: 'svc-004',
      name: 'Maintenance',
      icon: <Settings className="h-6 w-6" />,
    },
    {
      id: 'svc-005',
      name: 'Technical Support',
      icon: <Headphones className="h-6 w-6" />,
    },
    {
      id: 'svc-006',
      name: 'Design Consulting',
      icon: <Package className="h-6 w-6" />,
    },
  ],

  // Certifications
  certifications: [
    {
      id: 'cert-001',
      name: 'ISO 9001:2015',
      issuer: 'International Standards Organization',
      issuedDate: '2020-05-15',
      expiryDate: '2026-05-15',
      logo: {
        url: 'https://images.unsplash.com/photo-1581092162392-8c6d1e2c5e8d?w=100&h=100&fit=crop',
        alt: 'ISO 9001 Logo',
      },
    },
    {
      id: 'cert-002',
      name: 'CE Marking',
      issuer: 'European Commission',
      issuedDate: '2019-03-20',
      logo: {
        url: 'https://images.unsplash.com/photo-1581092162392-8c6d1e2c5e8d?w=100&h=100&fit=crop',
        alt: 'CE Marking',
      },
    },
    {
      id: 'cert-003',
      name: 'GMP Certified',
      issuer: 'Bangladeshi Regulatory Authority',
      issuedDate: '2021-08-10',
      expiryDate: '2024-08-10',
      logo: {
        url: 'https://images.unsplash.com/photo-1581092162392-8c6d1e2c5e8d?w=100&h=100&fit=crop',
        alt: 'GMP Certificate',
      },
    },
    {
      id: 'cert-004',
      name: 'Safety Management',
      issuer: 'OHSAS 18001',
      issuedDate: '2020-12-05',
      expiryDate: '2025-12-05',
      logo: {
        url: 'https://images.unsplash.com/photo-1581092162392-8c6d1e2c5e8d?w=100&h=100&fit=crop',
        alt: 'OHSAS 18001',
      },
    },
  ],

  // Gallery
  gallery: [
    {
      id: 'img-001',
      url: 'https://images.unsplash.com/photo-1581092916550-e323be2ae537?w=400&h=400&fit=crop',
      alt: 'Factory Floor',
      category: 'Factory',
    },
    {
      id: 'img-002',
      url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
      alt: 'Manufacturing Equipment',
      category: 'Equipment',
    },
    {
      id: 'img-003',
      url: 'https://images.unsplash.com/photo-1581092169177-c5bce5b27ef0?w=400&h=400&fit=crop',
      alt: 'Workshop',
      category: 'Workshop',
    },
    {
      id: 'img-004',
      url: 'https://images.unsplash.com/photo-1581092209174-0c9e1fea88e5?w=400&h=400&fit=crop',
      alt: 'Office',
      category: 'Office',
    },
    {
      id: 'img-005',
      url: 'https://images.unsplash.com/photo-1581092209375-0c9e1fea88e6?w=400&h=400&fit=crop',
      alt: 'Team',
      category: 'Team',
    },
    {
      id: 'img-006',
      url: 'https://images.unsplash.com/photo-1581092209476-0c9e1fea88e7?w=400&h=400&fit=crop',
      alt: 'Finished Products',
      category: 'Products',
    },
  ],

  // Industries
  industriesServed: [
    'Pharmaceutical',
    'Food & Beverage',
    'Textile',
    'Cement',
    'Power',
    'Steel',
    'Chemical',
    'Packaging',
  ],

  // Reviews
  reviews: [
    {
      id: 'rev-001',
      rating: 5,
      buyerCompany: 'Purity Healthcare Ltd.',
      reviewText: 'Excellent service! Sterling delivered our pharmaceutical production line on time and with exceptional quality. Their technical support team has been very responsive. Highly recommended!',
      date: '2 weeks ago',
      buyerImage: {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
        alt: 'Buyer Avatar',
      },
    },
    {
      id: 'rev-002',
      rating: 4,
      buyerCompany: 'Delicious Foods Co.',
      reviewText: 'Good experience overall. The conveyor system installation was smooth and the machinery works as expected. Minor delays in delivery but they communicated well throughout.',
      date: '1 month ago',
      buyerImage: {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop',
        alt: 'Buyer Avatar',
      },
    },
    {
      id: 'rev-003',
      rating: 5,
      buyerCompany: 'Northern Textiles',
      reviewText: 'Sterling is a professional and reliable partner. Their custom fabrication work met our exact specifications and the installation process was very smooth.',
      date: '2 months ago',
      buyerImage: {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop',
        alt: 'Buyer Avatar',
      },
    },
  ],

  // Similar Vendors
  similarVendors: [
    {
      id: 'vendor-002',
      slug: 'precision-engineering',
      name: 'Precision Engineering Works',
      logo: {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop',
        alt: 'Precision Engineering Logo',
      },
      rating: 4.7,
      businessType: 'Manufacturer',
      location: 'Chittagong, Bangladesh',
      isVerified: true,
    },
    {
      id: 'vendor-003',
      slug: 'advanced-systems',
      name: 'Advanced Systems Ltd.',
      logo: {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884979?w=100&h=100&fit=crop',
        alt: 'Advanced Systems Logo',
      },
      rating: 4.6,
      businessType: 'Supplier',
      location: 'Narayanganj, Bangladesh',
      isVerified: true,
    },
    {
      id: 'vendor-004',
      slug: 'industrial-innovators',
      name: 'Industrial Innovators Group',
      logo: {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884980?w=100&h=100&fit=crop',
        alt: 'Industrial Innovators Logo',
      },
      rating: 4.5,
      businessType: 'Manufacturer & Supplier',
      location: 'Dhaka, Bangladesh',
      isVerified: true,
    },
  ],

  reviewsNextCursor: 'cursor_page_2',
  reviewsPrevCursor: undefined,
};

export default function VendorPage({
  params,
}: {
  params: { vendorSlug: string };
}) {
  return (
    <VendorProfilePage
      vendor={mockVendor}
      onSendRfq={() => {
        console.log('Send RFQ clicked');
      }}
      onContactSupplier={() => {
        console.log('Contact Supplier clicked');
      }}
      onRequestQuotation={() => {
        console.log('Request Quotation clicked');
      }}
      onChatSupplier={() => {
        console.log('Chat with Supplier clicked');
      }}
    />
  );
}
