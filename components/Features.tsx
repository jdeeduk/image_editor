'use client';

import {
  PhotoIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Easy Upload',
    description: 'Drag and drop your images or click to upload. Supports all major image formats.',
    icon: PhotoIcon,
  },
  {
    name: 'Real-time Editing',
    description: 'See your changes instantly as you edit. No waiting for processing or page reloads.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Text Overlay',
    description: 'Add beautiful text with customizable fonts, colors, and styles.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Professional Filters',
    description: 'Enhance your images with our collection of professional-grade filters.',
    icon: SparklesIcon,
  },
  {
    name: 'Quick Download',
    description: 'Download your edited images in high quality with a single click.',
    icon: ArrowDownTrayIcon,
  },
  {
    name: 'Custom Effects',
    description: 'Apply and customize effects to make your images stand out.',
    icon: SwatchIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to perfect your images
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our image editor comes packed with all the tools you need to create stunning visuals. No design experience required.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}