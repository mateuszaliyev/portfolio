export const BackgroundDashedGrid = () => (
  <div aria-hidden className="absolute inset-0 content-center">
    <div
      className="mx-auto size-[calc(round(100%,21px)+1px)] bg-[size:21px]"
      style={{
        backgroundImage: `url(\"data:image/svg+xml,%3Csvg viewBox='0 0 21 21' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M -1.75 0 L 21 0 M 0 -1.75 L 0 21' stroke='%23404040' stroke-dasharray='4 3' stroke-width='1' /%3E%3C/svg%3E\")`,
      }}
    />
  </div>
);
