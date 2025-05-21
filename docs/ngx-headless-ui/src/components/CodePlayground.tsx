import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export function CodePlayground({
  code,
  language = 'html',
}: {
  code: string;
  language?: string;
}) {
  const [showPreview, setShowPreview] = useState(true);

  return (
    <div className=" flex flex-col gap-3">
      <div className="flex gap-2 justify-end w-full">
        <button
          onClick={() => setShowPreview(true)}
          className={`px-3 py-1 text-sm rounded ${showPreview
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200'
            }`}
        >
          Preview
        </button>
        <button
          onClick={() => setShowPreview(false)}
          className={`px-3 py-1 text-sm rounded ${!showPreview
              ? 'bg-blue-600 text-white'
              : 'bg-white dark:bg-neutral-700 text-gray-700 dark:text-gray-200'
            }`}
        >
          Code
        </button>
      </div>

      <div className="w-full min-h-72 rounded-md border border-neutral-200 dark:border-neutral-700">
        {showPreview ? (
          <div dangerouslySetInnerHTML={{ __html: code }} />
        ) : (
          <CodeBlock className='h-full' language={language}>{code}</CodeBlock>
        )}
      </div>
    </div>
  );
}
