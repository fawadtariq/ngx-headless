import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export function CodePlayground({
  variants,
  defaultTab = 'Tailwind',
}: {
  variants: { [key: string]: { code: string; language: string } };
  defaultTab?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showPreview, setShowPreview] = useState(true);

  const current = variants[activeTab];

  return (
    <div className="border rounded bg-white dark:bg-neutral-900 shadow-sm">
      <div className="flex justify-between items-center border-b px-4 py-2 bg-gray-100 dark:bg-neutral-800">
        <div className="flex gap-2">
          {Object.keys(variants).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1 text-sm rounded ${
                activeTab === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="text-sm text-blue-600"
        >
          {showPreview ? 'Code' : 'Preview'}
        </button>
      </div>

      <div className="p-4">
        {showPreview ? (
          <div dangerouslySetInnerHTML={{ __html: current.code }} />
        ) : (
          <CodeBlock language={current.language}>{current.code}</CodeBlock>
        )}
      </div>
    </div>
  );
}
