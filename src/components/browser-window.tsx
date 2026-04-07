import React from "react";

interface BrowserWindowProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserWindow({
  url = "anacare.ai/app",
  children,
  className = "",
}: BrowserWindowProps) {
  return (
    <div className={`browser-window ${className}`}>
      {/* Chrome bar */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b"
        style={{ borderColor: "var(--line)", background: "var(--bg3)" }}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#ff5f57" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#febc2e" }}
          />
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: "#28c840" }}
          />
        </div>

        {/* URL bar */}
        <div
          className="flex-1 mx-6 h-7 rounded-md flex items-center justify-center px-3 text-[11px]"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--line)",
            color: "var(--muted)",
          }}
        >
          <span className="tracking-wide">{url}</span>
        </div>

        {/* Right spacer to balance the traffic lights */}
        <div className="w-[52px]" />
      </div>

      {/* Body */}
      <div style={{ background: "var(--bg2)" }}>{children}</div>
    </div>
  );
}
