import type { ReactNode } from "react";

export type OpenGraphImageProps = {
  children?: ReactNode;
  title: ReactNode;
};

export const OpenGraphImage = ({ children, title }: OpenGraphImageProps) => (
  <div
    style={{
      alignItems: "center",
      background: "#f1f5f9",
      display: "flex",
      flexDirection: "column",
      fontSize: 128,
      height: "100%",
      justifyContent: "center",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        height: "100%",
        position: "absolute",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          height: "50%",
          opacity: 0.5,
          position: "absolute",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          background: "#ffffff",
          height: "33.33%",
          opacity: 0.5,
          position: "absolute",
          width: "100%",
        }}
      ></div>
    </div>
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
      }}
    >
      {children}
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "80px",
        position: "absolute",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <svg
          fill="none"
          height="128"
          stroke="url(#gradient-cyan-sky-blue)"
          strokeWidth={1.4}
          viewBox="0 0 24 24"
          width="128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="gradient-cyan-sky-blue"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path d="M12 2.248 5.616 21.753 1.61 9.535 12 17.115l10.389-7.58-4.005 12.218z" />
        </svg>
      </div>
      <div
        style={{
          color: "#94a3b8",
          display: "flex",
          flexDirection: "column",
          lineHeight: 0.825,
          textAlign: "start",
          width: "100%",
        }}
      >
        {title}
      </div>
    </div>
  </div>
);
