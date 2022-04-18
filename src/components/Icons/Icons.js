import React from "react";

export const mainLogo = () => (
  <div style={{ width: "110px", height: "55px" }}>
    <svg viewBox="0 0 300 145" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <rect width="300" height="145" fill="white" /> */}
      <path
        d="M56.0625 56.5234C56.0312 56.7891 56 57.1016 55.9688 57.4609C55.9531 57.8203 55.9453 58.2266 55.9453 58.6797V72.9531C55.9453 75.1875 55.5391 77.1016 54.7266 78.6953C53.9297 80.2734 52.8438 81.5703 51.4688 82.5859C50.0938 83.6016 48.4922 84.3438 46.6641 84.8125C44.8516 85.2812 42.9375 85.5156 40.9219 85.5156C36.0312 85.5156 32.3672 84.3672 29.9297 82.0703C27.4922 79.7578 26.2734 76.2188 26.2734 71.4531V58.6797C26.2734 58.1953 26.2578 57.7734 26.2266 57.4141C26.2109 57.0547 26.1875 56.7578 26.1562 56.5234H21.7734V52.4922C25.3516 52.3047 28.5781 52.2109 31.4531 52.2109C32.6875 52.2109 33.7578 52.2188 34.6641 52.2344C35.5703 52.25 36.3594 52.2734 37.0312 52.3047C37.7188 52.3203 38.3125 52.3438 38.8125 52.375C39.3125 52.4062 39.7812 52.4453 40.2188 52.4922V56.5234H36.5156C36.4531 56.9141 36.4062 57.2891 36.375 57.6484C36.3594 57.9922 36.3516 58.3359 36.3516 58.6797V73.0469C36.3516 74.2656 36.4609 75.375 36.6797 76.375C36.9141 77.3594 37.25 78.2031 37.6875 78.9062C38.125 79.6094 38.6719 80.1484 39.3281 80.5234C39.9844 80.8984 40.7344 81.0859 41.5781 81.0859C42.6562 81.0859 43.5391 80.8359 44.2266 80.3359C44.9141 79.8203 45.4531 79.1328 45.8438 78.2734C46.25 77.3984 46.5234 76.3828 46.6641 75.2266C46.8203 74.0547 46.8984 72.8047 46.8984 71.4766V58.6797C46.8984 58.1953 46.8828 57.7734 46.8516 57.4141C46.8359 57.0547 46.8125 56.7578 46.7812 56.5234H43.3359V52.4922C46.0078 52.3047 48.8594 52.2109 51.8906 52.2109C53.0312 52.2109 54.0312 52.2188 54.8906 52.2344C55.7656 52.25 56.5391 52.2734 57.2109 52.3047C57.8828 52.3203 58.4766 52.3438 58.9922 52.375C59.5234 52.4062 60.0156 52.4453 60.4688 52.4922V56.5234H56.0625ZM247.453 52.4922C250.438 52.4922 253.062 52.8203 255.328 53.4766C257.609 54.1172 259.516 55.1094 261.047 56.4531C262.578 57.7969 263.734 59.5078 264.516 61.5859C265.297 63.6641 265.688 66.1406 265.688 69.0156C265.688 71.8594 265.234 74.2891 264.328 76.3047C263.422 78.3203 262.141 79.9766 260.484 81.2734C258.828 82.5547 256.844 83.5 254.531 84.1094C252.219 84.7031 249.648 85 246.82 85H229.758V81.4609H234.211C234.211 81.4609 234.219 81.3828 234.234 81.2266C234.25 81.0547 234.266 80.8359 234.281 80.5703C234.297 80.2891 234.312 79.9688 234.328 79.6094C234.344 79.25 234.352 78.875 234.352 78.4844V59.3828C234.352 58.3203 234.281 57.4375 234.141 56.7344H229.57V52.9844C234.867 52.6562 240.828 52.4922 247.453 52.4922ZM255.117 68.8516C255.117 66.9922 255 65.3125 254.766 63.8125C254.547 62.2969 254.125 61.0078 253.5 59.9453C252.875 58.8828 252.008 58.0625 250.898 57.4844C249.805 56.9062 248.383 56.6172 246.633 56.6172C246.57 56.6172 246.492 56.6172 246.398 56.6172C246.32 56.6172 246.195 56.625 246.023 56.6406C245.867 56.6406 245.656 56.6406 245.391 56.6406C245.141 56.6406 244.812 56.6406 244.406 56.6406V80.9922C244.547 81.0078 244.68 81.0156 244.805 81.0156C244.945 81.0156 245.078 81.0156 245.203 81.0156C247.141 81.0156 248.742 80.7344 250.008 80.1719C251.289 79.6094 252.305 78.8047 253.055 77.7578C253.82 76.6953 254.352 75.4141 254.648 73.9141C254.961 72.4141 255.117 70.7266 255.117 68.8516Z"
        fill="#00006C"
      />
      <path
        d="M61.2656 52.4922C61.9375 52.4453 62.6172 52.4062 63.3047 52.375C63.9922 52.3438 64.7188 52.3203 65.4844 52.3047C66.2656 52.2734 67.1016 52.25 67.9922 52.2344C68.8828 52.2188 69.8828 52.2109 70.9922 52.2109C72.4453 52.2109 73.7891 52.2344 75.0234 52.2812C76.2578 52.3281 77.4219 52.3984 78.5156 52.4922L79.5703 56.5234H76.5703L77.3203 58.5625L81.9609 74.4062L85.8281 58.9609C85.9531 58.4922 86.0625 57.9688 86.1562 57.3906C86.25 56.7969 86.3203 56.2812 86.3672 55.8438L86.5312 54.1328C86.5625 53.7734 86.5938 53.4609 86.625 53.1953C86.6562 52.9141 86.6875 52.6797 86.7188 52.4922H91.5234C92.0859 52.4922 92.5703 52.5859 92.9766 52.7734C93.3984 52.9453 93.7656 53.1875 94.0781 53.5C94.3906 53.8125 94.6562 54.1875 94.875 54.625C95.0938 55.0625 95.2812 55.5391 95.4375 56.0547L100.992 74.4062C101.695 71.7031 102.344 69.1797 102.938 66.8359C103.188 65.8359 103.438 64.8203 103.688 63.7891C103.953 62.7578 104.195 61.7812 104.414 60.8594C104.648 59.9375 104.852 59.1016 105.023 58.3516C105.211 57.5859 105.352 56.9766 105.445 56.5234H101.977L103.031 52.4922C103.469 52.4453 103.938 52.4062 104.438 52.375C104.938 52.3438 105.5 52.3203 106.125 52.3047C106.766 52.2734 107.492 52.25 108.305 52.2344C109.117 52.2188 110.062 52.2109 111.141 52.2109C113.484 52.2109 116.062 52.3047 118.875 52.4922L118.312 56.5234H114.117L113.789 57.6016C113.117 59.8672 112.391 62.25 111.609 64.75C110.828 67.25 110.023 69.7266 109.195 72.1797C108.367 74.6328 107.531 76.9844 106.688 79.2344C105.859 81.4844 105.062 83.4922 104.297 85.2578H97.6875C96.7344 85.2578 96.0156 85.1172 95.5312 84.8359C95.0469 84.5391 94.7266 84.0156 94.5703 83.2656L89.7422 68.6875C88.8984 72.1875 88.1016 75.2969 87.3516 78.0156C86.6172 80.7344 85.9219 83.1484 85.2656 85.2578H78.8906C77.8906 85.2578 77.125 85.1172 76.5938 84.8359C76.0625 84.5391 75.7109 84.0156 75.5391 83.2656L67.0547 58.6797C66.8828 58.1484 66.7188 57.7344 66.5625 57.4375C66.4219 57.1406 66.3203 56.9453 66.2578 56.8516L65.9766 56.5234H61.8281L61.2656 52.4922Z"
        fill="#2D2DC6"
      />
      <path
        d="M132.117 68.9219C132.117 72.8594 132.656 75.875 133.734 77.9688C134.828 80.0469 136.469 81.0859 138.656 81.0859C140.734 81.0859 142.344 80.0859 143.484 78.0859C144.625 76.0703 145.195 72.9922 145.195 68.8516C145.195 64.6953 144.633 61.5703 143.508 59.4766C142.383 57.3828 140.766 56.3359 138.656 56.3359C136.594 56.3359 134.984 57.375 133.828 59.4531C132.688 61.5312 132.117 64.6875 132.117 68.9219ZM155.766 68.8516C155.766 71.4922 155.367 73.8438 154.57 75.9062C153.773 77.9688 152.633 79.7109 151.148 81.1328C149.664 82.5547 147.867 83.6406 145.758 84.3906C143.648 85.1406 141.281 85.5156 138.656 85.5156C135.969 85.5156 133.562 85.1328 131.438 84.3672C129.328 83.5859 127.539 82.4766 126.07 81.0391C124.602 79.6016 123.477 77.8594 122.695 75.8125C121.914 73.75 121.523 71.4297 121.523 68.8516C121.523 66.1641 121.914 63.7734 122.695 61.6797C123.492 59.5703 124.625 57.7969 126.094 56.3594C127.578 54.9062 129.375 53.8047 131.484 53.0547C133.609 52.2891 136 51.9062 138.656 51.9062C141.344 51.9062 143.742 52.2969 145.852 53.0781C147.977 53.8594 149.773 54.9844 151.242 56.4531C152.711 57.9062 153.828 59.6797 154.594 61.7734C155.375 63.8672 155.766 66.2266 155.766 68.8516Z"
        fill="#A5BFF7"
      />
      <path
        d="M170.039 85C168.711 85 167.273 85.0234 165.727 85.0703C164.18 85.1172 162.492 85.1797 160.664 85.2578V81.0859H164.555C164.648 80.6641 164.695 79.9453 164.695 78.9297V58.5859C164.695 58.1172 164.68 57.7109 164.648 57.3672C164.633 57.0234 164.609 56.7422 164.578 56.5234H159.773V52.6094C162.43 52.4844 165.055 52.3906 167.648 52.3281C170.258 52.25 172.898 52.2109 175.57 52.2109C176.883 52.2109 178.18 52.2578 179.461 52.3516C180.758 52.4297 181.984 52.5938 183.141 52.8438C184.297 53.0938 185.367 53.4453 186.352 53.8984C187.336 54.3359 188.18 54.9062 188.883 55.6094C189.602 56.3125 190.164 57.1719 190.57 58.1875C190.977 59.2031 191.18 60.3984 191.18 61.7734C191.18 63.4766 190.539 65.0078 189.258 66.3672C187.992 67.7266 186.086 68.8516 183.539 69.7422C184.836 70.3203 185.898 70.9453 186.727 71.6172C187.555 72.2891 188.242 73.0547 188.789 73.9141C189.336 74.7578 189.789 75.7188 190.148 76.7969C190.523 77.875 190.906 79.1016 191.297 80.4766H195.234V85.0234C194.266 85.1016 193.289 85.1953 192.305 85.3047C191.336 85.4141 190.336 85.4688 189.305 85.4688C187.961 85.4688 186.812 85.2734 185.859 84.8828C184.906 84.4766 184.094 83.9531 183.422 83.3125C182.766 82.6562 182.219 81.9141 181.781 81.0859C181.344 80.2578 180.969 79.4141 180.656 78.5547C180.359 77.6797 180.094 76.8281 179.859 76C179.625 75.1562 179.367 74.4141 179.086 73.7734C178.82 73.1172 178.508 72.5938 178.148 72.2031C177.805 71.7969 177.359 71.5938 176.812 71.5938H174.82V78.9297C174.82 79.3672 174.828 79.7656 174.844 80.125C174.875 80.4688 174.906 80.7891 174.938 81.0859H178.172V85.2578C176.656 85.1797 175.227 85.1172 173.883 85.0703C172.539 85.0234 171.258 85 170.039 85ZM176.016 67.6797C179.312 67.6797 180.961 65.7734 180.961 61.9609C180.961 60.9766 180.859 60.1406 180.656 59.4531C180.453 58.7656 180.133 58.2109 179.695 57.7891C179.258 57.3516 178.695 57.0312 178.008 56.8281C177.32 56.625 176.484 56.5234 175.5 56.5234H174.82V67.6797H176.016Z"
        fill="#5382E6"
      />
      <path
        d="M211.523 56.5234C211.414 56.9766 211.359 57.6484 211.359 58.5391V81.0859H216.727C217.289 81.0859 217.75 80.9844 218.109 80.7812C218.484 80.5625 218.789 80.2969 219.023 79.9844C219.273 79.6562 219.461 79.3125 219.586 78.9531C219.727 78.5781 219.844 78.2266 219.938 77.8984C220.094 77.3516 220.273 76.7734 220.477 76.1641C220.68 75.5391 220.906 74.8047 221.156 73.9609L226.664 74.7109L225.68 85H215.812C211.094 85 207.273 85.0156 204.352 85.0469C201.43 85.0781 199.43 85.1562 198.352 85.2812V81.0859H201.211C201.242 80.3828 201.266 79.7266 201.281 79.1172C201.297 78.4922 201.305 77.9062 201.305 77.3594V58.5391C201.305 58.1172 201.289 57.7422 201.258 57.4141C201.242 57.0703 201.219 56.7734 201.188 56.5234H196.805V52.7266C198.508 52.5547 200.109 52.4297 201.609 52.3516C203.109 52.2578 204.547 52.2109 205.922 52.2109C207.984 52.2109 209.836 52.2422 211.477 52.3047C213.117 52.3672 214.594 52.4609 215.906 52.5859V56.5234H211.523Z"
        fill="#2D2DC6"
      />
      <line
        x1="21"
        y1="97"
        x2="266"
        y2="97"
        stroke="#5889F3"
        stroke-width="4"
      />
      <line
        x1="172.995"
        y1="97.2559"
        x2="265.993"
        y2="97.0004"
        stroke="url(#paint0_linear_140_200)"
        stroke-width="4"
      />
      <line
        x1="114.679"
        y1="97.0215"
        x2="21.0006"
        y2="97.0005"
        stroke="url(#paint1_linear_140_200)"
        stroke-width="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_140_200"
          x1="219.499"
          y1="99.1281"
          x2="173"
          y2="99.2559"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0035A8" />
          <stop offset="0.41459" stop-color="#0035A8" stop-opacity="0.58541" />
          <stop offset="1" stop-color="#0035A8" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_140_200"
          x1="67.8404"
          y1="95.011"
          x2="114.68"
          y2="95.0215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0035A8" />
          <stop offset="0.41459" stop-color="#0035A8" stop-opacity="0.58541" />
          <stop offset="1" stop-color="#0035A8" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);
