import React from 'react';

function ErrorDetails() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-medium text-cf-dark-gray mb-4">
              What happened?
            </h2>
            <p className="text-cf-gray">
              The web server reported a bad gateway error.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-cf-dark-gray mb-4">
              What can I do?
            </h2>
            <p className="text-cf-gray">
              Please try again in a few minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorDetails;