import React from 'react';

export default function Integrations() {
  const leftItems = [
    {
      name: 'Cloudflare',
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 text-bone/75 fill-current">
          <path d="M16.94 9.17A5.96 5.96 0 0 0 12 6a5.98 5.98 0 0 0-4.94 3.17A4.01 4.01 0 0 0 3.5 13a4.01 4.01 0 0 0 4 4h9a5.01 5.01 0 0 0 5-5 5.01 5.01 0 0 0-4.56-4.83z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 text-bone/75 fill-current">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      name: 'Figma',
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 text-bone/75 fill-current">
          <path d="M12 12.016a3.468 3.468 0 0 0-3.486 3.467 3.468 3.468 0 0 0 3.486 3.468A3.468 3.468 0 0 0 15.486 15.483 3.468 3.468 0 0 0 12 12.016zm0-10.404C10.076 1.612 8.513 3.17 8.513 5.08s1.563 3.468 3.487 3.468c1.923 0 3.486-1.558 3.486-3.468S13.923 1.612 12 1.612zm0 6.936a3.468 3.468 0 0 0-3.486 3.468A3.468 3.468 0 0 0 12 15.484a3.468 3.468 0 0 0 3.486-3.468A3.468 3.468 0 0 0 12 8.548z" />
        </svg>
      )
    },
    {
      name: 'Notion',
      icon: (
        <svg viewBox="0 0 24 24" className="size-4 text-bone/75 fill-current">
          <path d="M4.444 3.738L18.428 2v1.5l-2.02.663v14.072l-1.428.536-7.85-12.071v10.584l2.02.643v1.5L4.542 21.24v-1.5l1.63-.518V4.87L4.444 4.18V3.738z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex items-center justify-between gap-3 mt-12 w-full max-w-sm relative z-20">
      {/* Left Column (Integrations List) */}
      <div className="flex flex-col gap-2.5">
        {leftItems.map((item) => (
          <div key={item.name} className="flex items-center justify-end gap-2.5">
            <span className="whitespace-nowrap text-[0.5rem] text-bone/50 eyebrow uppercase tracking-wider">
              {item.name}
            </span>
            <div className="flex shrink-0 items-center justify-center rounded-full border size-11 border-bone/[0.14] bg-bone/[0.045]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Middle Column (Central Application Logo) */}
      <div className="flex flex-col items-center gap-1.5 ml-4 mr-4">
        <div className="size-14 flex shrink-0 items-center justify-center rounded-full border border-bone/30 bg-bone/[0.10]">
          {/* Main Logo SVG */}
          <svg viewBox="0 0 24 24" className="w-7 text-bone fill-current">
            <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z" />
          </svg>
        </div>
        <span className="eyebrow uppercase tracking-wider text-[0.45rem] text-gilt/50">
          Scale & Form
        </span>
      </div>

      {/* Right Column (User Profile) */}
      <div className="flex flex-col items-center gap-1.5">
        <div 
          className="size-11 flex shrink-0 items-center justify-center rounded-full border bg-bone/[0.10]"
          style={{ borderColor: 'rgba(217, 217, 216, 0.616)' }}
        >
          {/* User Icon SVG */}
          <svg viewBox="0 0 24 24" className="size-4 text-bone fill-current">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <span className="eyebrow uppercase tracking-wider text-[0.45rem] text-bone/45">
          You
        </span>
      </div>
    </div>
  );
}
