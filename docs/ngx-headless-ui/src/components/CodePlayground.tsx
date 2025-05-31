import React, { useMemo, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export function CodePlayground({
  code,
  preview,
  previewContainerClass,
  language = 'html',
}: {
  code: string;
  preview?: string;
  previewContainerClass?: string;
  language?: string;
}) {
  const [showPreview, setShowPreview] = useState(true);
  
  return (
    <div className=" flex flex-col gap-3 relative">
      <div className={`flex gap-2 z-10 justify-end p-1.5 rounded-md absolute top-2 right-2 bg-black/10 transition-all` }>
        <button
          onClick={() => setShowPreview(true)}
          className={`px-3 py-1 text-sm rounded ${showPreview
            ? 'bg-primary-600 text-white'
            : ' text-gray-200'
            }`}
        >
          Preview
        </button>
        <button
          onClick={() => setShowPreview(false)}
          className={`px-3 py-1 text-sm rounded ${!showPreview
            ? 'bg-primary-600 text-white'
            : ' text-gray-200'
            }`}
        >
          Code
        </button>
      </div>

      <div className={"w-full rounded-md border border-neutral-200 dark:border-neutral-700"}>
        {showPreview ? (
          <iframe
            className={"w-full h-96 rounded-md" + ` ${previewContainerClass}`}
            height={'100%'}
            src={preview}
            title="Code Preview"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            style={{ border: 'none' }}
          />
        ) : (
          <CodeBlock  className='h-full max-h-[50vh] overflow-y-auto pt-10 !mb-0' language={language}>{code}</CodeBlock>
        )}
      </div>
    </div>
  );


}
