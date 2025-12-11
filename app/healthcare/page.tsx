'use client';

import { useState } from 'react';

export default function HealthcarePage() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const featureDescriptions: { [key: string]: string } = {
    'whatsapp': 'Your SEO manager on WhatsApp—guides you, handles tasks, and supports your growth.',
    'protection': 'Alerts you instantly if anyone makes unauthorized changes to your profile.',
    'review': 'Automatically replies to all reviews with smart, sentiment-based responses.',
    'microsite': 'A clean mini-website built from your Google profile to boost visibility.',
    'posts': 'Publish and schedule unlimited posts to keep your profile active.',
    'report': 'Monthly report with calls, visits, reviews, rankings, and insights.',
    'escalation': 'Instant WhatsApp alerts for negative reviews so you can respond quickly.',
    'ranking': 'Monthly keyword ranking updates for your key services.',
    'audit': 'Continuous checks for missing info, errors, or improvements—plus fix suggestions.',
    'images': 'Personalised AI-generated images to enhance your Google posts.',
    'citations': 'Creates listings on key directories like Practo, Justdial, and Medindia to boost local SEO.',
  };

  const InfoButton = ({ feature }: { feature: string }) => (
    <div className="relative inline-block ml-1">
      <button
        onMouseEnter={() => setActiveTooltip(feature)}
        onMouseLeave={() => setActiveTooltip(null)}
        onClick={() => setActiveTooltip(activeTooltip === feature ? null : feature)}
        className="inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-600 transition cursor-pointer"
        aria-label="More info"
      >
        i
      </button>
      {activeTooltip === feature && (
        <div className="absolute left-6 top-0 z-50 w-72 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl pointer-events-none">
          {featureDescriptions[feature]}
          <div className="absolute left-0 top-2 -ml-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-gray-900"></div>
        </div>
      )}
    </div>
  );


  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Fly Social</h1>
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600">How It Works</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Login</a>
              <a
                href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20Fly%20Social%20for%20my%20practice"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition text-sm font-medium inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 3-Minute Setup Banner */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm font-medium">
            ⚡ 3-Minute Setup • No Staff Required • 14-Day Free Trial
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI That Keeps Your Practice Visible, Trusted, and Fully Booked — Automatically.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your 24/7 AI Practice Manager that updates your Google Business Profile, responds to patient reviews, posts weekly content, and handles all local SEO tasks — all through a simple chat interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20Fly%20Social%20for%20my%20practice"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition text-lg font-medium inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Started on WhatsApp
              </a>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-md border-2 border-blue-600 hover:bg-blue-50 transition text-lg font-medium inline-flex items-center justify-center">
                Start 14-Day Free Trial
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              From $29/month • No contracts • Cancel anytime
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-[500px] flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-8xl mb-6">👨‍⚕️</div>
                <p className="text-xl font-semibold text-gray-800 mb-2">US Doctor with Smartphone</p>
                <p className="text-gray-600">Managing practice from anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            👩‍⚕️ What We Do
          </h2>
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            We help US doctors grow patient visibility with an autonomous AI agent that manages your entire Google Business Profile and local presence — without needing agencies, staff, or complex dashboards.
          </p>
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
            <p className="text-2xl font-bold text-blue-600 mb-2">You text like you're texting a friend.</p>
            <p className="text-xl text-gray-700">The AI does all the heavy lifting.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            💬 How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Simple as sending a text message
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Chat Like You're Texting a Friend</h3>
            <p className="text-gray-700 text-center text-lg">
              Tell the AI what you need — update hours, publish a post, upload photos, add services, etc.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">We Monitor Your Profile 24/7</h3>
            <p className="text-gray-700 text-center text-lg">
              If Google flags, suspends, or changes anything… the AI handles it instantly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto text-white text-2xl font-bold">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">You Get More Patient Appointments</h3>
            <p className="text-gray-700 text-center text-lg">
              Automated updates, posts, and review responses keep your practice ranking higher in local search.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section - BIGGER BOXES */}
      <section id="features" className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ⚡ What's Included
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to dominate local search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp AI Assistant</h3>
                  <p className="text-gray-600">Your SEO manager on WhatsApp—guides you, handles tasks, and supports your growth</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Profile Protection</h3>
                  <p className="text-gray-600">Alerts you instantly if anyone makes unauthorized changes to your profile</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Review Auto-Reply</h3>
                  <p className="text-gray-600">Automatically replies to all reviews with smart, sentiment-based responses</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Microsite (Basic Website)</h3>
                  <p className="text-gray-600">A clean mini-website built from your Google profile to boost visibility</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Unlimited Posts + Scheduling</h3>
                  <p className="text-gray-600">Publish and schedule unlimited posts to keep your profile active</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Performance Report Monthly</h3>
                  <p className="text-gray-600">Monthly report with calls, visits, reviews, rankings, and insights</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Negative Review Escalation</h3>
                  <p className="text-gray-600">Instant WhatsApp alerts for negative reviews so you can respond quickly</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">AI Audit</h3>
                  <p className="text-gray-600">Continuous checks for missing info, errors, or improvements—plus fix suggestions</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ranking Insights Monthly</h3>
                  <p className="text-gray-600">Monthly keyword ranking updates for your key services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designed for US Healthcare */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📈 Designed Specifically for US Healthcare
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand how US practices operate — tight schedules, patient load, compliance needs, and the importance of staying visible in your local community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🏥</div>
              <p className="font-semibold text-gray-900">Primary Care</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🦷</div>
              <p className="font-semibold text-gray-900">Dentists</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">✨</div>
              <p className="font-semibold text-gray-900">Dermatologists</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">💆</div>
              <p className="font-semibold text-gray-900">Med Spas</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🦴</div>
              <p className="font-semibold text-gray-900">Chiropractors</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🦶</div>
              <p className="font-semibold text-gray-900">Podiatrists</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">👨‍⚕️</div>
              <p className="font-semibold text-gray-900">Family Physicians</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🏢</div>
              <p className="font-semibold text-gray-900">Multi-Location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Performance */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              See Real Results
            </h2>
            <p className="text-xl text-blue-100">
              Average improvements after 3 months
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">+127%</div>
              <div className="text-blue-100 text-lg">Google Views</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">+89%</div>
              <div className="text-blue-100 text-lg">Phone Calls</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="text-5xl font-bold text-white mb-2">+156%</div>
              <div className="text-blue-100 text-lg">Direction Requests</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              💵 Simple Pricing
            </h2>
            <p className="text-lg text-gray-600">
              No contracts. No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-10 hover:shadow-xl transition">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-blue-600">$29</span>
                  <span className="text-xl text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Perfect for getting started</p>
                <p className="text-sm text-green-600 font-semibold mt-2">14-Day Free Trial</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">WhatsApp AI Assistant
                    <InfoButton feature="whatsapp" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Profile Protection (Advanced)
                    <InfoButton feature="protection" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Review Auto-Reply (with sentiment insights)
                    <InfoButton feature="review" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Microsite (Basic Website)
                    <InfoButton feature="microsite" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Unlimited Posts + Scheduling
                    <InfoButton feature="posts" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Performance Report Monthly
                    <InfoButton feature="report" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Negative Review Escalation
                    <InfoButton feature="escalation" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ranking Insights (Top 3 Keywords)
                    <InfoButton feature="ranking" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">AI Audit (Basic)
                    <InfoButton feature="audit" />
                  </span>
                </li>
              </ul>

              <a
                href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20the%20Starter%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Started on WhatsApp
              </a>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-green-500 p-10 relative hover:shadow-xl transition">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  MOST POPULAR
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                <div className="mb-4">
                  <span className="text-6xl font-bold text-green-600">$49</span>
                  <span className="text-xl text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Everything in Starter, plus:</p>
                <p className="text-sm text-green-600 font-semibold mt-2">14-Day Free Trial</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700"><strong>All Starter features</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">AI Personalised Images for Posting (30 images/month)
                    <InfoButton feature="images" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Profile Protection (Advanced + Auto-Fix Suggestions)
                    <InfoButton feature="protection" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ranking Insights (Top 10 Keywords)
                    <InfoButton feature="ranking" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">AI Audit (Deep Audit + Fix Suggestions)
                    <InfoButton feature="audit" />
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Citations (Practo, Justdial, Medindia etc.)
                    <InfoButton feature="citations" />
                  </span>
                </li>
              </ul>

              <a
                href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20the%20Growth%20plan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Started on WhatsApp
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Cancel anytime • No setup fees • 3-minute setup
          </p>
        </div>
      </section>

      {/* Made for Doctors in USA */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              📍 Made for Doctors in USA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200">
              <div className="text-3xl mb-3">🇺🇸</div>
              <p className="font-semibold text-gray-900">US English</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <p className="font-semibold text-gray-900">US Medical Imagery</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200">
              <div className="text-3xl mb-3">🎨</div>
              <p className="font-semibold text-gray-900">US-Style Branding</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200">
              <div className="text-3xl mb-3">🔍</div>
              <p className="font-semibold text-gray-900">US Search Behavior</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200">
              <div className="text-3xl mb-3">📞</div>
              <p className="font-semibold text-gray-900">Real Patient Appointments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ⭐ What US Doctors Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from healthcare providers like you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">
                "Finally — a simple way to keep my Google profile updated without hiring an agency."
              </p>
              <div className="font-semibold text-gray-900">Dr. Lauren M.</div>
              <div className="text-sm text-gray-600">Family Physician, Dallas TX</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">
                "The AI handles reviews, posts, and profile issues quicker than my staff ever could."
              </p>
              <div className="font-semibold text-gray-900">Dr. Patel</div>
              <div className="text-sm text-gray-600">Dentist, New Jersey</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Fill Your Calendar with Patients?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of US doctors using AI to automate their Google Business Profile and grow their practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20Fly%20Social%20for%20my%20practice"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-green-700 transition shadow-xl inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Started on WhatsApp
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-blue-100 flex-wrap">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">3-minute setup • No credit card required • 14-day free trial</span>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-lg">Ready to grow your business?</span>
            </div>

            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="bg-white rounded-lg p-4 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
                  <span className="font-bold text-gray-900">Google</span>
                </div>
                <span className="text-xs text-gray-600">Official Partner</span>
              </div>

              <div className="bg-white rounded-lg p-4 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                  <span className="font-bold text-gray-900">1500+</span>
                </div>
                <span className="text-xs text-gray-600">Locations Managed</span>
              </div>

              <div className="bg-white rounded-lg p-4 text-center shadow-lg">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="font-bold text-gray-900">Protection</span>
                </div>
                <span className="text-xs text-gray-600">of Google Profile</span>
              </div>
            </div>

            <a
              href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20Fly%20Social%20for%20my%20practice"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Fly Social</h3>
              <p className="text-gray-400 mb-6">
                AI-powered Google Business Profile management for US healthcare providers. Automate your local presence and get more patient appointments.
              </p>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@zoomlocal.in</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 8446712833</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Specialties</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Primary Care</a></li>
                <li><a href="#" className="hover:text-white transition">Dentists</a></li>
                <li><a href="#" className="hover:text-white transition">Med Spas</a></li>
                <li><a href="#" className="hover:text-white transition">Dermatology</a></li>
                <li><a href="#" className="hover:text-white transition">Chiropractic</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Fly Social. All rights reserved. Made for Doctors in USA.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918446712833?text=Hi%2C%20I%27m%20interested%20in%20Fly%20Social%20for%20my%20practice"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-600 text-white p-5 rounded-full shadow-2xl hover:bg-green-700 transition z-50 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
