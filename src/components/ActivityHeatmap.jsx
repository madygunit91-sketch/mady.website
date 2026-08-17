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
    <div className="relative overflow-hidden rounded-xl border border-bone/[0.10] bg-gradient-to-b from-bone/[0.05] to-bone/[0.012] p-5 shadow-[0_28px_70px_-30px_rgba(0,0,0,1)]">
      
      {/* Header */}
      <header className="mb-4 flex items-baseline gap-3">
        <h3 className="eyebrow text-[0.58rem] text-gilt/55">Activity</h3>
        <span className="text-[0.62rem] text-bone/35">2025</span>
      </header>

      {/* Chart Wrapper with responsive container */}
      <div className="relative w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="relative" style={{ width: '340px', height: '62px' }}>
          
          {/* X-Axis Month Labels (top edge) */}
          {monthLabels.map((m) => (
            <div
              key={m.label}
              className="pointer-events-none absolute text-chart-label text-xs whitespace-nowrap"
              style={{
                top: '0px',
                left: m.left,
                color: 'var(--chart-label, rgba(241,241,239,0.45))',
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
                color: 'var(--chart-label, rgba(241,241,239,0.45))',
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
            height={62} 
            viewBox="0 0 340 62" 
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
