import React from 'react';
import { Check, X } from 'lucide-react';

function ErrorDiagram() {
  return (
    <section className="bg-cf-light-gray py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {/* Browser */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-20 h-16 bg-gray-400 rounded-t-lg">
                <div className="flex gap-1 p-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
                <div className="bg-white mx-2 h-6 rounded"></div>
              </div>
              <div className="w-20 h-4 bg-gray-500 rounded-b-lg"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="status-icon status-working">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-cf-gray text-sm mb-1">You</div>
              <div className="text-cf-gray font-medium">Browser</div>
              <div className="text-success-green font-medium">Working</div>
            </div>
          </div>

          {/* Cloudflare */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-20 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-12 h-8 bg-white rounded opacity-80"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="status-icon status-working">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-cf-gray text-sm mb-1">Stockholm</div>
              <div className="text-cf-blue font-medium">Cloudflare</div>
              <div className="text-success-green font-medium">Working</div>
            </div>
          </div>

          {/* Host */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-20 h-16 bg-gray-400 rounded-lg flex items-center justify-center">
                <div className="w-12 h-10 bg-gray-300 rounded"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="status-icon status-error">
                  <X className="w-4 h-4" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-cf-gray text-sm mb-1">sargas.io</div>
              <div className="text-cf-gray font-medium">Host</div>
              <div className="text-error-red font-medium">Error</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorDiagram;