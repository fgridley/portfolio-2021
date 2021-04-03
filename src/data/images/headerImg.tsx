import * as React from 'react';

interface LogoProps {
  style?: React.CSSProperties;
  width?: string;
}

const SVG = ({ style = {}, width = '100%' }: LogoProps): JSX.Element => (
  <svg style={style} width={width} height="45" viewBox="0 0 319 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M35.076 9.312H19.284L17.7 16.032H30.66L29.172 22.416H16.26L13.428 34.608H5.172L12.516 2.928H36.564L35.076 9.312Z"
      fill="black"
    />
    <path
      d="M44.0344 7.824C42.6264 7.824 41.5224 7.536 40.7224 6.96C39.9544 6.384 39.6504 5.456 39.8104 4.176C39.9704 2.704 40.4664 1.648 41.2984 1.008C42.1304 0.335999 43.2984 0 44.8024 0C46.2744 0 47.3944 0.304 48.1624 0.912C48.9304 1.488 49.2344 2.384 49.0744 3.6C48.9144 5.168 48.4024 6.272 47.5384 6.912C46.7064 7.52 45.5384 7.824 44.0344 7.824ZM47.0104 10.608L41.4424 34.608H33.2824L38.8504 10.608H47.0104Z"
      fill="black"
    />
    <path
      d="M60.5505 35.088C58.0865 35.088 55.9745 34.608 54.2145 33.648C52.4545 32.688 51.0945 31.392 50.1345 29.76C49.1745 28.128 48.6945 26.272 48.6945 24.192C48.6945 21.6 49.2225 19.248 50.2785 17.136C51.3665 14.992 52.9185 13.296 54.9345 12.048C56.9825 10.768 59.4625 10.128 62.3745 10.128C64.8385 10.128 66.9505 10.608 68.7105 11.568C70.4705 12.528 71.8305 13.824 72.7905 15.456C73.7505 17.088 74.2305 18.944 74.2305 21.024C74.2305 23.616 73.6865 25.968 72.5985 28.08C71.5425 30.192 69.9905 31.888 67.9425 33.168C65.9265 34.448 63.4625 35.088 60.5505 35.088ZM60.6465 29.328C61.7665 29.328 62.7425 28.88 63.5745 27.984C64.4065 27.056 65.0465 25.904 65.4945 24.528C65.9745 23.152 66.2145 21.76 66.2145 20.352C66.2145 18.976 65.8785 17.888 65.2065 17.088C64.5345 16.288 63.5425 15.888 62.2305 15.888C61.1425 15.888 60.1825 16.352 59.3505 17.28C58.5185 18.176 57.8625 19.312 57.3825 20.688C56.9025 22.064 56.6625 23.456 56.6625 24.864C56.6625 26.208 56.9985 27.296 57.6705 28.128C58.3745 28.928 59.3665 29.328 60.6465 29.328Z"
      fill="black"
    />
    <path
      d="M75.8438 34.608L81.4118 10.608H88.6598L87.9398 15.264C88.8037 13.6 89.9717 12.336 91.4437 11.472C92.9477 10.576 94.6277 10.128 96.4837 10.128C99.0437 10.128 100.98 10.96 102.292 12.624C103.636 14.256 103.972 16.528 103.3 19.44L99.7477 34.608H91.5878L94.8997 20.448C95.1878 19.168 95.0758 18.176 94.5638 17.472C94.0518 16.736 93.2197 16.368 92.0677 16.368C89.5078 16.368 87.8278 18.128 87.0277 21.648L84.0038 34.608H75.8438Z"
      fill="black"
    />
    <path
      d="M114.934 35.04C112.534 35.04 110.534 34.208 108.934 32.544C107.366 30.88 106.582 28.496 106.582 25.392C106.582 23.472 106.854 21.6 107.398 19.776C107.942 17.952 108.726 16.32 109.75 14.88C110.806 13.408 112.054 12.256 113.494 11.424C114.966 10.56 116.614 10.128 118.438 10.128C120.038 10.128 121.494 10.56 122.806 11.424C124.15 12.288 125.014 13.696 125.398 15.648L126.55 10.608H134.71L129.142 34.608H121.75L122.566 30.096C121.798 31.632 120.742 32.848 119.398 33.744C118.054 34.608 116.566 35.04 114.934 35.04ZM118.486 29.088C119.574 29.088 120.518 28.656 121.318 27.792C122.15 26.896 122.806 25.792 123.286 24.48C123.766 23.168 124.006 21.84 124.006 20.496C124.006 19.152 123.67 18.096 122.998 17.328C122.358 16.528 121.462 16.128 120.31 16.128C119.126 16.128 118.102 16.576 117.238 17.472C116.406 18.368 115.766 19.472 115.318 20.784C114.87 22.064 114.646 23.296 114.646 24.48C114.646 25.952 114.966 27.088 115.606 27.888C116.246 28.688 117.206 29.088 118.486 29.088Z"
      fill="black"
    />
    <path
      d="M163.862 35.04C161.494 35.04 159.35 34.496 157.43 33.408C155.542 32.288 154.038 30.704 152.918 28.656C151.798 26.608 151.238 24.16 151.238 21.312C151.238 18.752 151.606 16.336 152.342 14.064C153.11 11.792 154.23 9.792 155.702 8.064C157.206 6.304 159.03 4.928 161.174 3.936C163.35 2.944 165.846 2.448 168.662 2.448C172.15 2.448 175.11 3.296 177.542 4.992C179.974 6.656 181.446 9.104 181.958 12.336L174.182 13.824C173.958 12.224 173.366 11.008 172.406 10.176C171.446 9.344 170.134 8.928 168.47 8.928C166.678 8.928 165.11 9.456 163.766 10.512C162.422 11.568 161.382 12.992 160.646 14.784C159.91 16.576 159.542 18.544 159.542 20.688C159.542 23.184 160.102 25.168 161.222 26.64C162.374 28.08 164.118 28.8 166.454 28.8C168.278 28.8 169.734 28.384 170.822 27.552C171.942 26.688 172.71 25.584 173.126 24.24L173.51 23.184H165.926L167.174 17.712H181.286L177.062 34.608H171.59L172.358 30.96C171.43 32.304 170.262 33.328 168.854 34.032C167.478 34.704 165.814 35.04 163.862 35.04Z"
      fill="black"
    />
    <path
      d="M182.719 34.608L188.287 10.608H195.535L194.623 16.08C195.455 14.256 196.559 12.816 197.935 11.76C199.343 10.672 201.007 10.128 202.927 10.128C203.471 10.128 203.919 10.176 204.271 10.272C204.655 10.336 204.975 10.432 205.231 10.56L203.263 17.424C202.943 17.296 202.559 17.184 202.111 17.088C201.695 16.992 201.151 16.944 200.479 16.944C198.975 16.944 197.567 17.456 196.255 18.48C194.943 19.472 194.015 21.152 193.471 23.52L190.879 34.608H182.719Z"
      fill="black"
    />
    <path
      d="M213.816 7.824C212.408 7.824 211.304 7.536 210.504 6.96C209.736 6.384 209.432 5.456 209.592 4.176C209.752 2.704 210.248 1.648 211.08 1.008C211.912 0.335999 213.08 0 214.584 0C216.056 0 217.176 0.304 217.944 0.912C218.712 1.488 219.016 2.384 218.856 3.6C218.696 5.168 218.184 6.272 217.32 6.912C216.488 7.52 215.32 7.824 213.816 7.824ZM216.792 10.608L211.224 34.608H203.064L208.632 10.608H216.792Z"
      fill="black"
    />
    <path
      d="M226.684 35.04C224.284 35.04 222.284 34.208 220.684 32.544C219.116 30.88 218.332 28.496 218.332 25.392C218.332 23.472 218.604 21.6 219.148 19.776C219.692 17.952 220.476 16.32 221.5 14.88C222.556 13.408 223.804 12.256 225.244 11.424C226.716 10.56 228.364 10.128 230.188 10.128C231.788 10.128 233.244 10.56 234.556 11.424C235.9 12.288 236.764 13.696 237.148 15.648L240.652 0.432H248.812L240.892 34.608H233.5L234.316 30.096C233.548 31.632 232.492 32.848 231.148 33.744C229.804 34.608 228.316 35.04 226.684 35.04ZM230.236 29.088C231.324 29.088 232.268 28.656 233.068 27.792C233.9 26.896 234.556 25.792 235.036 24.48C235.516 23.168 235.756 21.84 235.756 20.496C235.756 19.152 235.42 18.096 234.748 17.328C234.108 16.528 233.212 16.128 232.06 16.128C230.876 16.128 229.852 16.576 228.988 17.472C228.156 18.368 227.516 19.472 227.068 20.784C226.62 22.064 226.396 23.296 226.396 24.48C226.396 25.952 226.716 27.088 227.356 27.888C227.996 28.688 228.956 29.088 230.236 29.088Z"
      fill="black"
    />
    <path
      d="M255.252 35.04C252.372 35.04 250.34 34.256 249.156 32.688C248.004 31.088 247.748 28.96 248.388 26.304L254.388 0.432H262.548L256.596 26.208C256.084 28.32 256.836 29.376 258.852 29.376C259.62 29.376 260.196 29.312 260.58 29.184L259.14 34.464C258.18 34.848 256.884 35.04 255.252 35.04Z"
      fill="black"
    />
    <path
      d="M275.614 35.04C273.246 35.04 271.166 34.592 269.374 33.696C267.582 32.8 266.19 31.536 265.198 29.904C264.206 28.272 263.71 26.352 263.71 24.144C263.71 21.456 264.254 19.056 265.342 16.944C266.462 14.832 268.03 13.184 270.046 12C272.094 10.784 274.526 10.176 277.342 10.176C280.83 10.176 283.534 11.152 285.454 13.104C287.406 15.024 288.382 17.616 288.382 20.88C288.382 21.488 288.35 22.128 288.286 22.8C288.222 23.472 288.094 24.128 287.902 24.768H271.294C271.326 26.272 271.774 27.424 272.638 28.224C273.502 28.992 274.606 29.376 275.95 29.376C277.102 29.376 278.03 29.12 278.734 28.608C279.438 28.064 279.982 27.392 280.366 26.592L287.086 29.232C286.222 31.056 284.766 32.48 282.718 33.504C280.67 34.528 278.302 35.04 275.614 35.04ZM277.15 15.84C275.678 15.84 274.526 16.288 273.694 17.184C272.862 18.048 272.254 19.104 271.87 20.352H280.558C280.59 20.128 280.606 19.856 280.606 19.536C280.606 18.32 280.286 17.408 279.646 16.8C279.006 16.16 278.174 15.84 277.15 15.84Z"
      fill="black"
    />
    <path
      d="M290.721 44.928C289.345 44.928 287.5 44.928 286.5 44.928C286.283 44.928 287 44.928 286 44.928L287 38.928C288.5 38.928 288.945 38.928 290.577 38.928C292.369 38.928 293.745 38.192 294.705 36.72L295.665 35.136L291.441 10.608H299.697L300.417 23.52L300.609 29.376L303.345 23.664L309.681 10.608H318.369L302.913 36.624C301.153 39.6 299.345 41.728 297.489 43.008C295.633 44.288 293.377 44.928 290.721 44.928Z"
      fill="black"
    />
    <path d="M281 44.928L282 38.928H1L0 44.928H281Z" fill="#3F8BFC" />
  </svg>
);

export default SVG;