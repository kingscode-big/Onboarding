 import React, { useState } from 'react';
import Header from './Header';

export default function Boarding() {
  const websiteTypes = [
    {
      id: 1,
      name: 'E-commerce',
      description: 'Online store with product listings, cart, and checkout',
      image: 'ecom.gif',
      alt: 'E-commerce website with product grid and shopping cart'
    },
    {
      id: 2,
      name: 'Portfolio',
      description: 'Showcase your work with a clean portfolio website',
      image: 'portifolio.gif',
      alt: 'Artist portfolio showcase with image gallery'
    },
    {
      id: 3,
      name: 'Corporate',
      description: 'Professional business website for your company',
      image: 'pott.gif',
      alt: 'Corporate website with professional design and team section'
    },
    {
      id: 4,
      name: 'Blog',
      description: 'Content-rich website with articles and posts',
      image: 'blog.gif',
      alt: 'Blog website with featured articles and clean typography'
    }
  ];

  const features = [
    { id: 1, name: 'Responsive Design', description: 'Looks great on all devices' },
    { id: 2, name: 'SEO Optimization', description: 'Better search engine visibility' },
    { id: 3, name: 'Contact Form', description: 'Let visitors reach out to you' },
    { id: 4, name: 'User Accounts', description: 'Membership system for users' },
    { id: 5, name: 'Blog System', description: 'Publish and manage posts' },
    { id: 6, name: 'Payment Gateway', description: 'Accept online payments' },
    { id: 7, name: 'Multilingual', description: 'Support for multiple languages' },
    { id: 8, name: 'Analytics', description: 'Track visitor statistics' }
  ];

  function BoardingDashboard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedWebsite, setSelectedWebsite] = useState(null);
    const [customWebsiteType, setCustomWebsiteType] = useState('');
    const [buildMethod, setBuildMethod] = useState('');
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [budget, setBudget] = useState(5000);
    const [deadline, setDeadline] = useState('');

    const steps = [
      { id: 1, label: 'Website Type' },
      { id: 2, label: 'Build Method' },
      { id: 3, label: 'Features' },
      { id: 4, label: 'Budget & Deadline' },
      { id: 5, label: 'Summary' }
    ];

    const handleWebsiteSelect = (website) => {
      setSelectedWebsite(website);
      setCustomWebsiteType('');
    };

    const handleFeatureToggle = (featureId) => {
      if (selectedFeatures.includes(featureId)) {
        setSelectedFeatures(selectedFeatures.filter(id => id !== featureId));
      } else {
        setSelectedFeatures([...selectedFeatures, featureId]);
      }
    };

    const handleBudgetChange = (e) => {
      setBudget(parseInt(e.target.value));
    };

    const handleDateChange = (e) => {
      setDeadline(e.target.value);
    };

    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const handleSubmit = () => {
      alert('Your request has been submitted successfully! We will contact you soon.');
    };

    const getSelectedFeaturesNames = () => {
      return selectedFeatures.map(id => {
        const feature = features.find(f => f.id === id);
        return feature ? feature.name : '';
      });
    };

    const isWebsiteTypeSelected = selectedWebsite || customWebsiteType.trim() !== '';

    return (
      <div className="dashboard-container" >

     
        <div className="header" style={{ marginTop: '9rem' }}>
          <h1>Website Configuration Dashboard</h1>
          <p>Select the perfect setup for your new website</p>
           
        </div>

        <div className="stepper">
          {steps.map(step => (
            <div
              key={step.id}
              className={`step ${step.id === currentStep ? 'active' : ''} ${step.id < currentStep ? 'completed' : ''}`}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>

        <div className="step-content">
          {currentStep === 1 && (
            <>
              <h2>Select Your Website Type</h2>
              <div className="card-container">
                {websiteTypes.map(website => (
                  <div
                    key={website.id}
                    className={`card ${selectedWebsite?.id === website.id ? 'selected' : ''}`}
                    onClick={() => handleWebsiteSelect(website)}
                  >
                    <img src={website.image} alt={website.alt} />
                    <h3>{website.name}</h3>
                    <p>{website.description}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <label><strong>Or describe your own website type:</strong></label>
                <input
                  type="text"
                  placeholder="e.g. Booking platform for travel agency"
                  value={customWebsiteType}
                  onChange={(e) => {
                    setCustomWebsiteType(e.target.value);
                    setSelectedWebsite(null);
                  }}
                  style={{ width: '100%', padding: '10px', marginTop: '0.5rem', borderRadius: '5px' }}
                />
              </div>
              <div className="buttons">
                <div></div>
                <button className="btn btn-next" onClick={nextStep} disabled={!isWebsiteTypeSelected}>
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h2>Choose Build Method</h2>
              <p>Would you prefer a CMS or a custom coded website?</p>
              <div className="card-container">
                <div
                  className={`card ${buildMethod === 'CMS' ? 'selected' : ''}`}
                  onClick={() => setBuildMethod('CMS')}
                >
                  <h3>CMS (Content Management System)</h3>
                  <p>Use platforms like WordPress, Shopify, or Wix. Quicker and cost-effective.</p>
                </div>
                <div
                  className={`card ${buildMethod === 'Code' ? 'selected' : ''}`}
                  onClick={() => setBuildMethod('Code')}
                >
                  <h3>Custom Code</h3>
                  <p>Fully custom-built using frameworks like React, Laravel, or Node.js.</p>
                </div>
              </div>
              <div className="buttons">
                <button className="btn btn-back" onClick={prevStep}>
                  Back
                </button>
                <button className="btn btn-next" onClick={nextStep} disabled={!buildMethod}>
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <h2>Select Features</h2>
              <p>Choose the additional features you need for your website:</p>
              <div className="feature-list">
                {features.map(feature => (
                  <div key={feature.id} className="feature-item">
                    <input
                      type="checkbox"
                      id={`feature-${feature.id}`}
                      checked={selectedFeatures.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                    />
                    <label htmlFor={`feature-${feature.id}`}>
                      <strong>{feature.name}</strong> - {feature.description}
                    </label>
                  </div>
                ))}
              </div>
              <div className="buttons">
                <button className="btn btn-back" onClick={prevStep}>
                  Back
                </button>
                <button className="btn btn-next" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <h2>Budget & Deadline</h2>
              <div className="slider-container">
                <label htmlFor="budget">Budget: ${budget}</label>
                <input
                  type="range"
                  id="budget"
                  className="slider"
                  min="1000"
                  max="10000"
                  step="500"
                  value={budget}
                  onChange={handleBudgetChange}
                />
                <div className="slider-value">${budget}</div>
              </div>
              <div>
                <label htmlFor="deadline">Project Deadline:</label>
                <input
                  type="date"
                  id="deadline"
                  className="date-picker"
                  value={deadline}
                  onChange={handleDateChange}
                />
              </div>
              <div className="buttons">
                <button className="btn btn-back" onClick={prevStep}>
                  Back
                </button>
                <button className="btn btn-next" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 5 && (
            <>
              <h2>Review Your Selections</h2>
              <div className="summary-item">
                <h3>Website Type</h3>
                <p>{selectedWebsite?.name || customWebsiteType || 'Not specified'}</p>
              </div>
              <div className="summary-item">
                <h3>Build Method</h3>
                <p>{buildMethod || 'Not selected'}</p>
              </div>
              <div className="summary-item">
                <h3>Selected Features</h3>
                {selectedFeatures.length > 0 ? (
                  <ul>
                    {getSelectedFeaturesNames().map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No additional features selected</p>
                )}
              </div>
              <div className="summary-item">
                <h3>Budget</h3>
                <p>${budget}</p>
              </div>
              <div className="summary-item">
                <h3>Deadline</h3>
                <p>{deadline || 'No deadline set'}</p>
              </div>
              <div className="buttons">
                <button className="btn btn-back" onClick={prevStep}>
                  Back
                </button>
                <button className="btn btn-submit" onClick={handleSubmit}>
                  Submit Request
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section>
        <div className='App-boarding-header'>
          <div style={{ paddingLeft: '2rem' }}>
            <h1 style={{ fontFamily: 'sans-serif', fontSize: '2rem' }}>Website Boarding</h1>
            <h5 style={{ fontSize: '1rem', paddingTop: '1rem', opacity: '0.6' }}>
              Help us understand your project needs
            </h5>
          </div>
        </div>
      </section>
      <BoardingDashboard />
    </>
  );
}
