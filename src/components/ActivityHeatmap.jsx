import React from 'react';
import { Group } from '@visx/group';
import { HeatmapRect } from '@visx/heatmap';
import { scaleLinear } from '@visx/scale';
import { ParentSize } from '@visx/responsive';

const mockData = Array.from({ length: 52 }).map((_, weekIdx) => {
  // Define project phases
  // Project 1: weeks 4-12
  // Project 2: weeks 16-24
  // Project 3: weeks 29-38
  // Project 4: weeks 42-49
  
  let phase = 'quiet';
  if (weekIdx >= 4 && weekIdx <= 12) phase = 'build';
  if (weekIdx >= 16 && weekIdx <= 24) phase = 'build';
  if (weekIdx >= 29 && weekIdx <= 38) phase = 'build';
  if (weekIdx >= 42 && weekIdx <= 49) phase = 'build';
  
  // Transitions / coordination
  if ([3, 13, 15, 25, 28, 39, 41, 50].includes(weekIdx)) phase = 'coordination';

  return {
    bin: weekIdx,
    bins: Array.from({ length: 7 }).map((_, dayIdx) => {
      // Weekends (Saturday=5, Sunday=6) are always empty
      if (dayIdx === 5 || dayIdx === 6) {
        return { bin: dayIdx, count: 0 };
      }

      let count = 0;
      if (phase === 'build') {
        // High activity during build (mostly 2, 3, 4)
        count = Math.floor(Math.random() * 3) + 2; 
        // Occasional lighter day
        if (Math.random() > 0.8) count = 1;
      } else if (phase === 'coordination') {
        // Medium/Light activity (mostly 0, 1, 2)
        count = Math.floor(Math.random() * 3);
      } else {
        // Quiet (mostly 0, rare 1)
        count = Math.random() > 0.85 ? 1 : 0;
      }
      
      return {
        bin: dayIdx,
        count: count
      };
    })
  };
});

const colorScale = scaleLinear({
  domain: [0, 1, 2, 3, 4],
  range: [
    'var(--chart-scale-01)',
    'var(--chart-scale-02)',
    'var(--chart-scale-03)',
    'var(--chart-scale-04)',
    'var(--chart-scale-05)',
  ]
});

// X axis labels
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Y axis labels (Di, Do, Sa -> Tue, Thu, Sat in German abbreviated, or just standard 2nd, 4th, 6th day)
const days = ["Di", "Do", "Sa"];

const rectWidth = 8.2;
const rectHeight = 8.2;
const gap = 3;

export default function ActivityHeatmap() {
  const xMax = 52 * (rectWidth + gap);
  const yMax = 7 * (rectHeight + gap);

  return (
    <div className="relative overflow-hidden rounded-xl border border-bone/[0.10] bg-gradient-to-b from-bone/[0.05] to-bone/[0.012] p-5 shadow-[0_28px_70px_-30px_rgba(0,0,0,1)]">
      <header className="mb-4 flex items-baseline gap-3">
        <h3 className="eyebrow text-[0.58rem] text-gilt/55 uppercase tracking-wider">Activity</h3>
        <span className="text-[0.62rem] text-bone/35">2025</span>
      </header>

      <div className="relative mt-2">
        {/* Y Axis Labels */}
        <div className="absolute left-0 top-0 flex flex-col justify-between" style={{ height: yMax, paddingTop: '10px', paddingBottom: '10px' }}>
          <div className="text-[0.6rem] text-bone/45" style={{ position: 'absolute', top: 1 * (rectHeight + gap) }}>{days[0]}</div>
          <div className="text-[0.6rem] text-bone/45" style={{ position: 'absolute', top: 3 * (rectHeight + gap) }}>{days[1]}</div>
          <div className="text-[0.6rem] text-bone/45" style={{ position: 'absolute', top: 5 * (rectHeight + gap) }}>{days[2]}</div>
        </div>

        <div className="ml-6 overflow-x-auto overflow-y-hidden pb-4" style={{ minWidth: '300px' }}>
          <div style={{ width: xMax, position: 'relative' }}>
            {/* X Axis Labels */}
            <div className="relative flex w-full justify-between mb-2">
              {months.map((month, i) => (
                <div key={month} className="text-[0.6rem] text-bone/45" style={{ position: 'absolute', left: `${(i / 12) * 100}%` }}>
                  {month}
                </div>
              ))}
            </div>

            {/* SVG Heatmap */}
            <svg width={xMax} height={yMax} className="mt-6">
              <Group>
                <HeatmapRect
                  data={mockData}
                  xScale={bin => bin.bin * (rectWidth + gap)}
                  yScale={bin => bin.bin * (rectHeight + gap)}
                  colorScale={colorScale}
                  binWidth={rectWidth}
                  binHeight={rectHeight}
                  gap={gap}
                >
                  {(heatmap) => (
                    heatmap.map((bins) => (
                      bins.map((bin) => (
                        <g key={`heatmap-rect-${bin.row}-${bin.column}`}>
                          <rect
                            className="visx-heatmap-rects"
                            width={bin.width}
                            height={bin.height}
                            x={bin.x}
                            y={bin.y}
                            fill={bin.color}
                            rx={2}
                            ry={2}
                            style={{ transition: 'opacity 0.2s ease' }}
                          />
                          {/* Invisible hover rect */}
                          <rect
                            width={bin.width + gap}
                            height={bin.height + gap}
                            x={bin.x - gap / 2}
                            y={bin.y - gap / 2}
                            fill="transparent"
                            className="pointer-events-none opacity-0 hover:opacity-100"
                          />
                        </g>
                      ))
                    ))
                  )}
                </HeatmapRect>
              </Group>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
