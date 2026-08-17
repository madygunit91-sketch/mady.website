import React from 'react';
import { Group } from '@visx/group';

// The Exact Data Payload (52 weeks / columns x 7 days / rows)
const activityData = [
  [4,5,2,5,5,4,3], [5,5,5,5,5,5,5], [3,3,5,4,5,4,3], [4,2,2,5,1,5,4], [5,3,5,5,5,3,5],
  [5,5,4,5,5,4,3], [5,5,5,2,5,3,5], [5,5,5,4,5,5,5], [5,5,4,5,5,5,4], [5,5,5,3,3,3,2],
  [5,5,5,4,3,4,5], [5,5,4,4,5,5,2], [4,5,3,5,5,5,1], [5,5,5,5,5,5,5], [5,5,2,4,5,5,4],
  [5,5,5,5,5,5,4], [5,3,5,5,5,4,5], [5,5,4,5,5,2,3], [5,2,5,5,5,5,5], [5,5,5,2,5,5,3],
  [5,5,5,5,3,4,5], [2,4,5,2,5,5,5], [5,5,5,5,2,2,3], [5,2,4,4,5,5,5], [5,5,5,5,3,5,5],
  [5,5,5,4,4,1,2], [5,5,5,5,5,5,5], [5,5,5,5,5,5,2], [5,3,5,4,3,5,5], [5,5,5,5,5,3,4],
  [3,5,5,2,2,2,2], [5,5,5,4,5,5,5], [4,5,4,4,4,3,2], [1,2,2,5,5,3,4], [5,2,5,1,5,4,4],
  [3,5,4,3,3,5,5], [5,3,5,4,5,1,2], [5,4,5,2,4,1,2], [5,3,4,4,5,4,3], [4,3,4,3,4,3,2],
  [2,4,4,5,4,1,2], [4,4,4,2,4,1,2], [3,4,2,4,1,2,3], [4,2,3,2,2,3,2], [4,2,3,3,1,2,2],
  [2,2,1,3,3,2,3], [2,3,1,3,2,2,3], [2,1,2,1,2,2,3], [1,2,3,3,1,2,2], [1,2,3,2,2,2,2],
  [2,2,2,3,3,2,1], [3,1,2,2,3,1,3]
];

// Color scale mapping (1-5 to CSS variables)
const getColor = (val) => {
  switch (val) {
    case 1: return 'var(--chart-scale-01, #1a1a1c)';
    case 2: return 'var(--chart-scale-02, #333336)';
    case 3: return 'var(--chart-scale-03, #5c5c60)';
    case 4: return 'var(--chart-scale-04, #949498)';
    case 5: return 'var(--chart-scale-05, #e4e4e6)';
    default: return 'var(--chart-scale-01, #1a1a1c)';
  }
};

// Dimensions according to exact specifications
const CELL_SIZE = 2.96;
const GAP = 3;
const STEP = CELL_SIZE + GAP; // 5.96px

// Alternate months for X-Axis to prevent overlap
const monthLabels = [
  { label: 'Jan', left: '26px' },
  { label: 'Mar', left: '80px' },
  { label: 'May', left: '135px' },
  { label: 'Jul', left: '190px' },
  { label: 'Sept', left: '245px' },
  { label: 'Nov', left: '300px' }
];

// Y-Axis labels aligned with rows 2, 4, 6 (1-indexed: row 2 = idx 1, row 4 = idx 3, row 6 = idx 5)
const dayLabels = [
  { label: 'Di', top: `${18 + 1 * STEP}px` },
  { label: 'Do', top: `${18 + 3 * STEP}px` },
  { label: 'Sa', top: `${18 + 5 * STEP}px` }
];

export default function ActivityHeatmap() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-bone/[0.12] bg-gradient-to-b from-bone/[0.06] via-bone/[0.03] to-bone/[0.012] p-5 sm:p-7 md:p-8 shadow-[0_28px_70px_-30px_rgba(0,0,0,1)] max-w-4xl">
      
      {/* Eyebrow & Year Header */}
      <header className="mb-3 flex items-baseline justify-between gap-3 border-b border-bone/10 pb-2.5">
        <div className="flex items-center gap-2.5">
          <h3 className="eyebrow text-[0.60rem] sm:text-[0.66rem] text-gilt font-semibold tracking-wider">
            Activity
          </h3>
          <span className="eyebrow rounded-full border border-bone/15 bg-bone/[0.04] px-2 py-0.5 text-[0.50rem] text-bone/70">
            Workdays
          </span>
        </div>
        <span className="text-[0.66rem] sm:text-[0.70rem] font-medium text-bone/45 tabular-nums">2025</span>
      </header>

      {/* Main Title & Description on Top of Chart */}
      <div className="mb-5 sm:mb-6 space-y-1.5">
        <h4 className="display text-[1.15rem] sm:text-[1.35rem] md:text-[1.5rem] text-bone leading-tight">
          A year, <span className="display-italic">day by day</span>
        </h4>
        <p className="body-copy text-[0.74rem] sm:text-[0.80rem] md:text-[0.85rem] text-bone/70 leading-relaxed max-w-2xl">
          Each cell is a working day. Dense weeks are build phases; quiet weeks are review and testing.
        </p>
      </div>

      {/* Enlarged Chart Wrapper with responsive scale & scroll */}
      <div className="relative w-full overflow-x-auto pt-2 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative transform origin-left scale-100 sm:scale-110 md:scale-120" style={{ width: '340px', height: '64px', marginBottom: '12px' }}>
          
          {/* X-Axis Month Labels (top edge) */}
          {monthLabels.map((m) => (
            <div
              key={m.label}
              className="pointer-events-none absolute text-chart-label text-xs whitespace-nowrap"
              style={{
                top: '0px',
                left: m.left,
                color: 'var(--chart-label, rgba(241,241,239,0.5))',
                fontSize: '0.54rem',
                lineHeight: 1
              }}
            >
              {m.label}
            </div>
          ))}

          {/* Y-Axis Day Labels (left edge) */}
          {dayLabels.map((d) => (
            <div
              key={d.label}
              className="pointer-events-none absolute text-chart-label text-xs whitespace-nowrap"
              style={{
                left: '2px',
                top: d.top,
                transform: 'translateY(-20%)',
                color: 'var(--chart-label, rgba(241,241,239,0.5))',
                fontSize: '0.52rem',
                lineHeight: 1
              }}
            >
              {d.label}
            </div>
          ))}

          {/* Visx SVG Heatmap */}
          <svg 
            width={340} 
            height={64} 
            viewBox="0 0 340 64" 
            className="block overflow-visible"
          >
            <Group left={26} top={18}>
              {activityData.map((week, colIdx) => (
                <g key={`week-${colIdx}`} transform={`translate(${colIdx * STEP}, 0)`}>
                  {week.map((val, rowIdx) => {
                    const y = rowIdx * STEP;
                    const fill = getColor(val);
                    return (
                      <g key={`cell-${colIdx}-${rowIdx}`}>
                        {/* Primary Heatmap Cell */}
                        <rect
                          x={0}
                          y={y}
                          width={CELL_SIZE}
                          height={CELL_SIZE}
                          rx={2}
                          ry={2}
                          fill={fill}
                          className="transition-colors duration-200"
                        />
                        {/* Secondary Invisible Rect for Hover Interactions */}
                        <rect
                          x={0}
                          y={y}
                          width={CELL_SIZE}
                          height={CELL_SIZE}
                          rx={2}
                          ry={2}
                          className="pointer-events-none opacity-0"
                          fill="transparent"
                        />
                      </g>
                    );
                  })}
                </g>
              ))}
            </Group>
          </svg>

        </div>
      </div>

    </div>
  );
}
