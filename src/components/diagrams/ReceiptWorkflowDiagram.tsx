export function ReceiptWorkflowDiagram() {
  return (
    <svg
      viewBox="0 0 720 200"
      className="w-full h-auto"
      role="img"
      aria-label="Receipt reconciliation workflow: intake, extraction with confidence, review queue, exception handling, close package"
    >
      <defs>
        <marker
          id="arrow"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
        >
          <path d="M0,0 L8,4 L0,8 Z" fill="#949a91" />
        </marker>
      </defs>

      {/* Background rail */}
      <rect x="20" y="88" width="680" height="2" fill="#e3e1d6" rx="1" />

      {/* Step 1: Intake */}
      <g>
        <rect x="20" y="40" width="100" height="56" rx="8" fill="#fcfbf7" stroke="#e3e1d6" strokeWidth="1" />
        <text x="70" y="62" textAnchor="middle" fill="#1c211c" fontSize="11" fontWeight="600" fontFamily="system-ui">
          Intake
        </text>
        <text x="70" y="78" textAnchor="middle" fill="#949a91" fontSize="9" fontFamily="system-ui">
          email · photo
        </text>
        <circle cx="70" cy="100" r="6" fill="#3d5a52" />
      </g>

      {/* Arrow 1 */}
      <line x1="120" y1="68" x2="148" y2="68" stroke="#949a91" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 2: Extract */}
      <g>
        <rect x="148" y="40" width="100" height="56" rx="8" fill="#fcfbf7" stroke="#e3e1d6" strokeWidth="1" />
        <text x="198" y="62" textAnchor="middle" fill="#1c211c" fontSize="11" fontWeight="600" fontFamily="system-ui">
          Extract
        </text>
        <text x="198" y="78" textAnchor="middle" fill="#949a91" fontSize="9" fontFamily="system-ui">
          + confidence
        </text>
        <circle cx="198" cy="100" r="6" fill="#3d5a52" />
      </g>

      {/* Arrow 2 */}
      <line x1="248" y1="68" x2="276" y2="68" stroke="#949a91" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 3: Match / Review */}
      <g>
        <rect x="276" y="40" width="100" height="56" rx="8" fill="#fcfbf7" stroke="#3d5a52" strokeWidth="1.5" />
        <text x="326" y="62" textAnchor="middle" fill="#1c211c" fontSize="11" fontWeight="600" fontFamily="system-ui">
          Match
        </text>
        <text x="326" y="78" textAnchor="middle" fill="#949a91" fontSize="9" fontFamily="system-ui">
          amount · date · vendor
        </text>
        <circle cx="326" cy="100" r="6" fill="#3d5a52" />
      </g>

      {/* Arrow 3 */}
      <line x1="376" y1="68" x2="404" y2="68" stroke="#949a91" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 4: Exception queue */}
      <g>
        <rect x="404" y="40" width="100" height="56" rx="8" fill="#f5efe3" stroke="#a67c2e" strokeWidth="1.5" />
        <text x="454" y="62" textAnchor="middle" fill="#1c211c" fontSize="11" fontWeight="600" fontFamily="system-ui">
          Exceptions
        </text>
        <text x="454" y="78" textAnchor="middle" fill="#a67c2e" fontSize="9" fontFamily="system-ui">
          human review
        </text>
        <circle cx="454" cy="100" r="6" fill="#a67c2e" />
      </g>

      {/* Arrow 4 */}
      <line x1="504" y1="68" x2="532" y2="68" stroke="#949a91" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Step 5: Close package */}
      <g>
        <rect x="532" y="40" width="100" height="56" rx="8" fill="#fcfbf7" stroke="#e3e1d6" strokeWidth="1" />
        <text x="582" y="62" textAnchor="middle" fill="#1c211c" fontSize="11" fontWeight="600" fontFamily="system-ui">
          Close
        </text>
        <text x="582" y="78" textAnchor="middle" fill="#949a91" fontSize="9" fontFamily="system-ui">
          PDF · CSV · images
        </text>
        <circle cx="582" cy="100" r="6" fill="#3d5a52" />
      </g>

      {/* Exception branch down */}
      <path
        d="M 454 108 L 454 140 L 198 140 L 198 108"
        fill="none"
        stroke="#a67c2e"
        strokeWidth="1"
        strokeDasharray="4 3"
        markerEnd="url(#arrow)"
      />
      <text x="326" y="158" textAnchor="middle" fill="#a67c2e" fontSize="9" fontFamily="system-ui">
        unresolved items block close
      </text>

      {/* Legend */}
      <g transform="translate(20, 175)">
        <circle cx="6" cy="6" r="4" fill="#3d5a52" />
        <text x="16" y="10" fill="#949a91" fontSize="9" fontFamily="system-ui">
          auto-confirm above threshold
        </text>
        <circle cx="160" cy="6" r="4" fill="#a67c2e" />
        <text x="170" y="10" fill="#949a91" fontSize="9" fontFamily="system-ui">
          human decision required
        </text>
      </g>
    </svg>
  );
}
