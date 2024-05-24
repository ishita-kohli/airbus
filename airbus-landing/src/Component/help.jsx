import React from 'react';

const help = () => {
  return (
    <div>
      <section className="bordered-section">
        <h1 className="section__subtitle">Help Page</h1>
        <p>Welcome to our help page! Here you can find answers to common questions and troubleshoot issues.</p>
      </section>

      <section className="bordered-section">
        <h2 className="section__subtitle">Frequently Asked Questions</h2>
        <ul>
          <li>How do I create an account?</li>
          <li>How can I reset my password?</li>
          <li>What payment methods do you accept?</li>
        </ul>
      </section>

      <section className="bordered-section">
        <h2 className="section__subtitle">Contact Us</h2>
        <p>If you have any further questions or need assistance, please feel free to contact us.</p>
        <button className="primary__btn"><a href="mailto:support@example.com">Email Support</a></button>
      </section>
    </div>
  );
}

export default help;
