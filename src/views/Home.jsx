import React, { useState } from 'react';
import { DollarSign, Clock, CheckCircle } from 'lucide-react';
export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why is change so difficult?",
      answer: "Change often disrupts established patterns and comfort zones, triggering resistance. Understanding the psychological underpinnings of this resistance is crucial for successful implementation."
    },
    {
      question: "What makes autonomous teams more effective?",
      answer: "Autonomous teams foster ownership, creativity, and intrinsic motivation, leading to higher performance and job satisfaction. They thrive when empowered with decision-making authority and clear accountability."
    },
    {
      question: "Why address individual, relational, and organizational levels?",
      answer: "Lasting change requires a holistic approach. Addressing individual mindsets, interpersonal dynamics, and organizational structures ensures alignment and synergy, leading to sustainable results."
    },
    {
      question: "How can organizations better align with human functioning?",
      answer: "By recognizing that individuals are not simply cogs in a machine, but complex beings with unique needs and motivations, organizations can create environments that foster well-being and maximize individual potential. This involves shifting from rigid hierarchies to more flexible, human-centered structures."
    },
    {
      question: "How can we ensure alignment between responsibility and authority?",
      answer: "Empowerment requires a clear match between the scope of one's responsibilities and the power to make decisions and take action within that scope. This fosters ownership and accountability."
    },
    {
      question: "How can we increase volunteer engagement and responsibility?",
      answer: "By providing meaningful roles, clear expectations, and opportunities for growth and recognition, organizations can cultivate a sense of purpose and ownership among volunteers, leading to greater commitment and impact."
    },
    {
      question: "How can we assess an organization's human readiness for change?",
      answer: "Evaluating the organizational culture, leadership styles, and individual mindsets reveals the level of openness to change and identifies potential barriers to success."
    },
    {
      question: "How can I maintain a positive focus?",
      answer: "By consciously focusing on strengths, solutions, and desired outcomes, we cultivate a positive mindset that attracts positive results and fuels growth."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='min-h-screen text-white'>
      {/* Hero Section */}
      <section className='min-h-screen flex flex-col items-center justify-center relative bg-[url("https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg?auto=compress&cs=tinysrgb&w=1920")] bg-bottom bg-fixed bg-no-repeat bg-cover'>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative z-10 p-8 max-w-4xl text-center'>
          <h1 className='text-5xl font-bold mb-6'>Facilitating Human-Centered Organizational Transformation</h1>
          <p className='text-2xl mb-8'>By Miguel Wils</p>
          <button className='bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition duration-300'>
            Discover My Approach
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className='text-black py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6'>Unlock More Potential Through Adaptive Intelligence</h2>
          <p className='text-lg mb-4'>
            In today's rapidly changing world, organizations face persistent challenges that hinder growth and well-being. These challenges often stem from a disconnect between organizational structures and human needs. My approach, grounded in Adaptive Intelligence and neurocognitive principles, addresses these issues at their root, fostering lasting positive change.
          </p>
        </div>
      </section>



      {/* My Approach Section */}
      <section className='py-20 px-4 bg-gray-900'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-6 text-white'>My Approach & Insights</h2>
          <div className='grid gap-6 md:grid-cols-2'>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-amber-400'>Human-Centered, Results-Driven</h3>
              <p>
                As a seasoned facilitator, I leverage my expertise in Adaptive Intelligence to help organizations achieve significant and sustainable results. My approach is human-focused, recognizing that organizations are ultimately composed of individuals.
              </p>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-amber-400'>My Journey: From Dominance to Service</h3>
              <p>
                My personal journey has been one of continuous learning and self-development. My extensive travels and volunteer work have broadened my perspective and deepened my commitment to service.
              </p>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-amber-400'>The Importance of Spirituality</h3>
              <p>
                My spiritual practice, grounded in the Ananda Marga tantric tradition, is integral to my work. Through meditation, I cultivate inner peace, mindfulness, and enhanced interpersonal skills.
              </p>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4 text-amber-400'>Neurocognitive Insights</h3>
              <p>
                My training in the Neurocognitive and Behavioral Approach provides a scientific foundation for understanding human behavior and decision-making, essential for resilience and adaptability in organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Method Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold mb-6 text-gray-900 text-center'>My Method: Co-Creation and Adaptive Intelligence</h2>
          <div className='grid gap-6 md:grid-cols-2'>
            <div className='bg-gray-900 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4'>Initial Assessment</h3>
              <p>In-depth conversations to explore vision and areas for improvement.</p>
            </div>
            <div className='bg-gray-900 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4'>Adaptive Intelligence Training</h3>
              <p>Equipping individuals with skills for composure and resourcefulness.</p>
            </div>
            <div className='bg-gray-900 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4'>Collaborative Exploration</h3>
              <p>Engaging in dialogues to explore solutions together.</p>
            </div>
            <div className='bg-gray-900 p-6 rounded-lg'>
              <h3 className='text-xl font-bold mb-4'>Prototyping</h3>
              <p>Testing and refining tailored approaches iteratively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Commitment Section */}
      <section className='py-20 px-4 bg-gray-900 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold mb-6 text-white'>My Commitment: Your Success</h2>
          <ul className='list-disc list-inside space-y-4'>
            <li>Guiding individuals and organizations towards peak performance.</li>
            <li>Coaching leaders with 2500+ hours of experience.</li>
            <li>Fostering Adaptive Intelligence for resilience.</li>
            <li>Empowering individuals to achieve their highest potential.</li>
            <li>Employing a holistic and interconnected approach.</li>
            <li>Unwavering determination—I never give up.</li>
          </ul>
        </div>
      </section>

      {/* Core Questions Section - FAQ Accordion */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold mb-6 text-gray-900'>Core Questions Driving Transformation</h2>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div key={index} className='border border-gray-600 rounded-md overflow-hidden'>
                <button
                  className='w-full text-left px-4 py-3 bg-gray-700 hover:bg-gray-600 focus:outline-none flex justify-between items-center'
                  onClick={() => toggleFAQ(index)}>
                  <span className='font-semibold'>{faq.question}</span>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className='p-4 bg-gray-900 text-gray-300'>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Structure */}
      <section className='py-20 px-4 bg-gray-900 text-center'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-4xl font-bold mb-6 text-white'>Payment Structure</h2>
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
              <DollarSign size={40} className='text-amber-300 mb-4' />
              <h3 className='text-xl text-amber-300 font-bold mb-2'>Initial Deposit</h3>
              <p className='text-lg'>25% upon commencement</p>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
              <Clock size={40} className='text-amber-300 mb-4' />
              <h3 className='text-xl text-amber-300 font-bold mb-2'>Midway Payment</h3>
              <p className='text-lg'>25% midway through the engagement</p>
            </div>
            <div className='bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center'>
              <CheckCircle size={40} className='text-amber-300 mb-4' />
              <h3 className='text-xl text-amber-300 font-bold mb-2'>Final Payment</h3>
              <p className='text-lg'>50% only upon achievement of results</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold mb-6 text-gray-900 text-center'>Contact Us</h2>
          <form className='space-y-4 bg-gray-900 text-white p-8 rounded-xl shadow-lg'>
            <label htmlFor="Name" >Name</label>
            <input
              type='text'
              id='name'
              placeholder='Your name'
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 mt-1'
            />
            <label htmlFor="email" >Email</label>

            <input
              type='email'
              id='email'
              placeholder='Your most used email'
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 mt-1'
            />
            <label htmlFor="phone">Phone</label>

            <input
              type='text'
              id='phone'
              placeholder='Your phone number'
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600'
            />
            <label htmlFor="message" >Message</label>

            <textarea
              type='text'
              id='message'
              placeholder='Your message'
              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600'
              rows='6'
            />
          </form>
        </div>
      </section>
    </div>
  )
}