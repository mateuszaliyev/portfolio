import { type SVGAttributes, useId } from "react";

export type ChopTheBillLogoProps = Omit<
  SVGAttributes<SVGSVGElement>,
  "viewBox" | "xmlns"
>;

export const ChopTheBillLogo = ({
  fill = "currentColor",
  ...props
}: ChopTheBillLogoProps) => {
  const id1 = useId();
  const id2 = useId();

  return (
    <svg
      fill={fill}
      viewBox="0 0 170.38 40.222"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id={id1} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#4caf50" />
          <stop offset="1" stopColor="#009688" />
        </linearGradient>
        <filter height="1.175" id={id2} width="1.268" x="-.111" y="-.072">
          <feFlood floodOpacity=".2" />
          <feComposite in2="SourceGraphic" operator="in" />
          <feGaussianBlur stdDeviation="1" />
          <feOffset dx="1" dy="1" />
          <feComposite in="SourceGraphic" in2="offset" />
        </filter>
      </defs>
      <path
        d="M6.35 0h27.517a6.336 6.336 0 0 1 6.35 6.35v27.517a6.336 6.336 0 0 1-6.35 6.35H6.35A6.336 6.336 0 0 1 0 33.867V6.35A6.336 6.336 0 0 1 6.35 0z"
        fill={`url(#${id1})`}
      />
      <path
        d="m22.958 3.34-1.121 4.186c-5.31-.801-10.907 2.193-13.17 7.069-2.372 4.747-1.307 10.907 2.538 14.57l3.812 3.812-.825 3.076 4.163 4.164c5.388-.022 10.777.042 16.162-.033 3.346-.25 6-3.49 5.7-6.811V19.478L24.49 3.752l-1.533-.411z"
        fill="#000"
        opacity=".2"
      />
      <path
        d="m22.958 3.34-1.122 4.187a12.699 12.699 0 0 0-1.792-.119c-6.989.036-12.635 5.711-12.635 12.7 0 5.212 3.174 9.835 7.906 11.761l-1.122 4.185 1.533.411 1.096-4.09.63-2.347.192-.72 4.93-18.4.794-2.961.028-.106 1.096-4.088zm1.945 5.008-.83 3.1a9.526 9.526 0 0 1 2.77 1.925l2.246-2.245a12.7 12.7 0 0 0-4.186-2.78zm-4.805 2.235h.01c.3 0 .6.015.898.043L16.144 28.77a9.526 9.526 0 0 1 3.954-18.186zm6.746 16.26a9.525 9.525 0 0 1-7.633 2.747l-.83 3.1a12.694 12.694 0 0 0 10.708-3.601z"
        fill="#fff"
        filter={`url(#${id2})`}
      />
      <path d="M66.254 13.883q.264.176.308.462.044.264-.132.528-.154.198-.396.22t-.462-.088q-.836-.55-1.804-.858-.946-.308-2.046-.308-1.342 0-2.508.484-1.144.462-2.002 1.364-.858.88-1.342 2.09-.462 1.21-.462 2.662 0 1.496.484 2.728.484 1.21 1.342 2.09.88.88 2.024 1.342t2.464.462q1.078 0 2.024-.308.968-.308 1.804-.836.22-.132.462-.088.264.022.418.242.198.242.132.528-.044.264-.286.418-.55.352-1.298.66t-1.584.484q-.836.198-1.672.198-1.584 0-2.97-.572t-2.464-1.606q-1.078-1.056-1.694-2.508Q54 22.221 54 20.439q0-1.716.594-3.146.594-1.452 1.65-2.508t2.464-1.65 3.014-.594q1.254 0 2.42.352t2.112.99zM74.174 16.809q1.386 0 2.244.594t1.254 1.606q.418 1.012.418 2.244v6.226q0 .264-.198.462t-.462.198q-.308 0-.484-.198t-.176-.462v-6.226q0-.902-.286-1.628-.264-.726-.88-1.144-.616-.44-1.65-.44-.924 0-1.76.44-.814.418-1.32 1.144t-.506 1.628v6.226q0 .264-.198.462t-.462.198q-.308 0-.484-.198t-.176-.462v-14.96q0-.264.176-.462.198-.198.484-.198t.462.198q.198.198.198.462v7.128l-.506.77q.044-.682.418-1.32.396-.66 1.012-1.166.616-.528 1.364-.814.748-.308 1.518-.308zM91.928 22.507q0 1.672-.748 3.014-.726 1.32-1.98 2.09-1.254.748-2.838.748-1.562 0-2.838-.748-1.254-.77-2.002-2.09-.726-1.342-.726-3.014 0-1.694.726-3.014.748-1.32 2.002-2.09 1.276-.77 2.838-.77 1.584 0 2.838.77t1.98 2.09q.748 1.32.748 3.014zm-1.32 0q0-1.342-.55-2.376-.55-1.056-1.518-1.65-.946-.616-2.178-.616-1.21 0-2.178.616-.946.594-1.518 1.65-.55 1.034-.55 2.376t.55 2.376q.572 1.034 1.518 1.65.968.594 2.178.594 1.232 0 2.178-.594.968-.616 1.518-1.65t.55-2.376zM99.98 16.809q1.496 0 2.64.748 1.166.726 1.848 2.024.682 1.276.682 2.948t-.682 2.97-1.848 2.046-2.618.748q-.77 0-1.474-.22-.682-.242-1.254-.638t-1.012-.924q-.44-.55-.704-1.188l.396-.286v6.842q0 .264-.198.462-.176.198-.462.198t-.484-.198q-.176-.198-.176-.462V17.535q0-.286.176-.484t.484-.198q.286 0 .462.198.198.198.198.484v2.376l-.308-.176q.22-.682.638-1.21.44-.55 1.012-.924.572-.396 1.254-.594t1.43-.198zm-.11 1.232q-1.188 0-2.09.594-.902.572-1.43 1.584-.506.99-.506 2.31 0 1.298.506 2.332.528 1.034 1.43 1.628.902.572 2.09.572 1.166 0 2.046-.572.902-.594 1.43-1.628t.528-2.332-.528-2.31-1.43-1.584q-.88-.594-2.046-.594zM111.73 28.139q-.308 0-.506-.198-.176-.198-.176-.462V13.465h1.364v14.014q0 .264-.198.462t-.484.198zm-5.236-14.146q-.264 0-.462-.176t-.198-.462q0-.264.198-.44t.462-.176h10.472q.264 0 .462.176t.198.462-.198.462q-.198.154-.462.154zM125.24 16.809q1.386 0 2.244.594t1.254 1.606q.418 1.012.418 2.244v6.226q0 .264-.198.462t-.462.198q-.308 0-.484-.198t-.176-.462v-6.226q0-.902-.286-1.628-.264-.726-.88-1.144-.616-.44-1.65-.44-.924 0-1.76.44-.814.418-1.32 1.144t-.506 1.628v6.226q0 .264-.198.462t-.462.198q-.308 0-.484-.198t-.176-.462v-14.96q0-.264.176-.462.198-.198.484-.198t.462.198q.198.198.198.462v7.128l-.506.77q.044-.682.418-1.32.396-.66 1.012-1.166.616-.528 1.364-.814.748-.308 1.518-.308zM137.6 28.359q-1.694 0-2.992-.726t-2.024-2.024-.726-3.036q0-1.87.726-3.19.748-1.32 1.914-2.024 1.188-.726 2.508-.726.968 0 1.87.352.924.33 1.628 1.012.704.66 1.144 1.628t.462 2.244q0 .264-.198.462-.198.176-.462.176h-8.822l-.264-1.188h8.668l-.286.264v-.44q-.11-1.034-.682-1.76t-1.386-1.1q-.792-.374-1.672-.374-.66 0-1.364.264-.682.264-1.254.836-.55.55-.902 1.43-.352.858-.352 2.046 0 1.298.528 2.354t1.518 1.672 2.398.616q.748 0 1.364-.22t1.078-.572q.484-.374.792-.77.242-.198.462-.198.242 0 .396.176.176.176.176.396 0 .264-.22.462-.66.792-1.716 1.386-1.056.572-2.31.572zM151.66 12.739q1.848 0 2.882 1.012 1.056.99 1.056 2.772 0 .924-.396 1.76t-1.166 1.364q-.77.506-1.914.572l-.088-.44q.814 0 1.584.242.792.22 1.408.726t.99 1.276q.374.748.374 1.826 0 1.144-.396 1.98-.374.814-1.034 1.32-.638.506-1.474.748t-1.738.242h-5.918q-.264 0-.462-.198t-.198-.462v-14.08q0-.264.198-.462t.462-.198zm-.176 1.298h-5.17l.264-.396v6.226l-.242-.33h5.148q1.144-.022 1.914-.748.792-.726.792-2.156 0-1.21-.704-1.892-.704-.704-2.002-.704zm.154 6.82h-5.17l.11-.132v6.314l-.132-.198h5.236q1.408 0 2.354-.704.946-.726.946-2.288 0-1.1-.462-1.76t-1.232-.946-1.65-.286zM160.44 27.479q0 .264-.198.462t-.462.198q-.286 0-.484-.198-.176-.198-.176-.462v-10.12q0-.264.176-.462.198-.198.484-.198t.462.198q.198.198.198.462zm-.66-12.254q-.462 0-.704-.198-.22-.22-.22-.616v-.22q0-.396.242-.594.264-.22.704-.22.418 0 .638.22.242.198.242.594v.22q0 .396-.242.616-.22.198-.66.198zM165.32 27.479q0 .264-.198.462t-.462.198q-.286 0-.484-.198-.176-.198-.176-.462v-14.96q0-.264.198-.462t.462-.198q.286 0 .462.198.198.198.198.462zM170.38 27.479q0 .264-.198.462t-.462.198q-.286 0-.484-.198-.176-.198-.176-.462v-14.96q0-.264.198-.462t.462-.198q.286 0 .462.198.198.198.198.462z" />
    </svg>
  );
};
