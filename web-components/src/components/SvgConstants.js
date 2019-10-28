const notSentStatus = `
<svg version="1.1" class="notSentStatus" xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 129 129">
  <g>
    <g>
      <path style="fill: #bbb;" d="m12.3,70.2c0,28.8 23.4,52.2 52.2,52.2s52.2-23.4 52.2-52.2c0-14.3-5.8-27.4-15.2-36.8l4.1-4.1 1.9,1.9c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-9.5-9.5c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l1.9,1.9-4.5,4.5c-7.6-5.6-16.7-9.1-26.7-9.9v-3.5h9.1c2.3,0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1h-27c-2.3,0-4.1,1.8-4.1,4.1s1.8,4.1 4.1,4.1h9.7v3.5c-27,2.1-48.2,24.6-48.2,52zm52.2-44c24.3-3.55271e-15 44.1,19.8 44.1,44.1 0,24.3-19.8,44.1-44.1,44.1-24.3,0-44.1-19.8-44.1-44.1 0-24.4 19.8-44.1 44.1-44.1z"/>
      <path style="fill: #bbb;" d="m64.5,73.6h17.5c2.3,0 4.1-1.8 4.1-4.1 0-2.3-1.8-4.1-4.1-4.1h-13.4v-21.1c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v25.3c0,2.2 1.8,4 4.1,4z"/>
    </g>
  </g>
</svg>
`;

const notGivenStatus = `
<svg version="1.1" class="notGivenStatus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 768 768">
<g>
</g>
<path style="fill: #bbb;" d="M288 519l339-340.5 45 45-384 384-178.5-178.5 43.5-45z"></path>
</svg>
`;

const notReadStatus = `
<svg version="1.1" class="notReadStatus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 768 768">
<g>
</g>
<path style="fill: #03a9f4;" d="M288 519l339-340.5 45 45-384 384-178.5-178.5 43.5-45z"></path>
</svg>
`;

const haveReadStatus = `
<svg version="1.1" class="haveReadStatus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 768 768">
<g id="icomoon-ignore">
</g>
<path style="fill: #03a9f4;" d="M13.5 429l45-45 178.5 178.5-45 45zM711 178.5l46.5 45-384 384-180-178.5 46.5-45 133.5 133.5zM576 223.5l-202.5 204-45-45 202.5-204z"></path>
</svg>
`;

export { notGivenStatus, notReadStatus, notSentStatus, haveReadStatus };
