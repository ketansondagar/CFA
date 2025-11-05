import React from "react";
import "./timeline.css"; // Import external CSS

export default function TimeValueOfMoney() {
  return (
    <div className="time-page">

      {/* Fixed Header */}
      <div className="timeline-header">
        <div className="row w-100">
          <div className="col-8">
            <a href="learning_module" aria-label="Home">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="34" height="34" rx="6" fill="#F7F9FB" />
                <path
                  d="M21.125 9.125L12.875 17L21.125 24.875"
                  stroke="#0F3349"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span style={{ paddingLeft: "10px" }}>Progress</span>
          </div>
          <div className="col-4 text-right">
            
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="time-overflow" tabIndex={0}>
        {/* Readiness Check Card */}
        <div className="row">
          <div className="col-6 color-p">
            <h2>Time value of money</h2>
            <span>30-35 Minutes</span>
          </div>
          <div className="col-6">
            <div className="time-modules">
              <svg width="182" height="235" viewBox="0 0 182 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.4859 182.299L43.5946 207.947L48.9174 211.451L65.8088 185.802L60.4859 182.299Z" fill="#4476FF" />
                <path d="M52.4194 174.896L35.2384 200.984L40.5612 204.488L57.7422 178.399L52.4194 174.896Z" fill="#4476FF" />
                <path d="M45.1528 166.249L27.4391 193.146L32.7619 196.65L50.4756 169.753L45.1528 166.249Z" fill="#4476FF" />
                <path d="M38.7971 156.245L20.2563 184.398L25.5792 187.902L44.1199 159.749L38.7971 156.245Z" fill="#4476FF" />
                <path d="M33.5369 144.551L13.7299 174.627L19.0527 178.13L38.8597 148.055L33.5369 144.551Z" fill="#4476FF" />
                <path d="M29.7822 130.592L7.97998 163.697L13.3028 167.201L35.105 134.095L29.7822 130.592Z" fill="#4476FF" />
                <path d="M30.811 113.091L0 115.797L0.557648 122.143L31.3687 119.438L30.811 113.091Z" fill="#4476FF" />
                <path d="M31.5874 102.174L0.276978 104.924L0.834626 111.27L32.145 108.521L31.5874 102.174Z" fill="#4476FF" />
                <path d="M33.8271 91.1211L1.57715 93.9531L2.1348 100.3L34.3848 97.4677L33.8271 91.1211Z" fill="#4476FF" />
                <path d="M37.7146 79.9161L3.97485 82.8789L4.5325 89.2255L38.2722 86.2626L37.7146 79.9161Z" fill="#4476FF" />
                <path d="M43.6221 68.5525L7.5885 71.7168L8.14615 78.0634L44.1798 74.8991L43.6221 68.5525Z" fill="#4476FF" />
                <path d="M52.214 56.9463L12.5914 60.4258L13.1491 66.7724L52.7717 63.2929L52.214 56.9463Z" fill="#4476FF" />
                <path d="M44.9587 24.5249L40.3284 28.9023L61.6323 51.424L66.2626 47.0466L44.9587 24.5249Z" fill="#4476FF" />
                <path d="M53.6616 17.978L49.0312 22.3555L70.6446 45.2043L75.275 40.8268L53.6616 17.978Z" fill="#4476FF" />
                <path d="M63.0701 12.1851L58.4397 16.5625L80.6544 40.047L85.2847 35.6696L63.0701 12.1851Z" fill="#4476FF" />
                <path d="M73.2413 7.20068L68.611 11.5781L91.8065 36.0996L96.4368 31.7221L73.2413 7.20068Z" fill="#4476FF" />
                <path d="M84.2511 3.09131L79.6207 7.46875L104.328 33.5887L108.959 29.2113L84.2511 3.09131Z" fill="#4476FF" />
                <path d="M96.2079 -0.000487279L91.5775 4.37695L118.673 33.0213L123.303 28.6439L96.2079 -0.000487279Z" fill="#4476FF" />
                <path d="M137.474 1.68953L133.274 32.4609L139.588 33.3223L143.788 2.55087L137.474 1.68953Z" fill="#4476FF" />
                <path d="M148.024 4.36245L143.767 35.5547L150.081 36.416L154.338 5.22379L148.024 4.36245Z" fill="#4476FF" />
                <path d="M158.442 8.06646L154.068 40.1172L160.382 40.9785L164.757 8.9278L158.442 8.06646Z" fill="#4476FF" />
                <path d="M168.699 12.8535L164.135 46.293L170.449 47.1543L175.014 13.7148L168.699 12.8535Z" fill="#4476FF" />
                <path d="M178.793 18.8596L173.936 54.4453L180.25 55.3067L185.107 19.7209L178.793 18.8596Z" fill="#4476FF" />
                <path d="M138.6 200.276L132.534 202.229L141.984 231.564L148.05 229.611L138.6 200.276Z" fill="#4476FF" />
                <path d="M127.751 201.905L121.685 203.857L131.306 233.726L137.372 231.773L127.751 201.905Z" fill="#4476FF" />
                <path d="M116.47 202.127L110.404 204.08L120.328 234.887L126.394 232.934L116.47 202.127Z" fill="#4476FF" />
                <path d="M104.678 200.793L98.6116 202.746L109.001 235L115.067 233.047L104.678 200.793Z" fill="#4476FF" />
                <path d="M92.2613 197.537L86.1952 199.49L97.2986 233.96L103.365 232.007L92.2613 197.537Z" fill="#4476FF" />
                <path d="M79.0082 191.68L72.9421 193.633L85.1681 231.587L91.2342 229.635L79.0082 191.68Z" fill="#4476FF" />
                <path d="M183.523 170.601L181.26 176.557L211.326 187.974L213.589 182.018L183.523 170.601Z" fill="#4476FF" />
                <path d="M175.14 178.988L172.877 184.943L204.332 196.889L206.595 190.933L175.14 178.988Z" fill="#4476FF" />
                <path d="M164.854 186.618L162.592 192.574L196.171 205.319L198.433 199.363L164.854 186.618Z" fill="#4476FF" />
                <path d="M152.108 193.354L149.846 199.311L186.754 213.319L189.016 207.363L152.108 193.354Z" fill="#4476FF" />
              </svg>
            </div>
          </div>
        </div>

        <div className="timeline-modules1" style={{ height: 'auto', padding: '30px' }}>
          <div className="timeline-modules time-card" style={{ background: "#FBF5EF" }}>
            <div className="row"><div className="col-4 text-center col-lg-2 margin-l-8"><svg width="61" height="61" data-bs-toggle="modal"
              data-bs-target="#ReadinessCheck" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.6" d="M47.2745 10.6763H18.2988V47.2748H39.6492L47.2745 39.6495V10.6763Z" fill="url(#paint0_linear_939_7622)" />
              <path d="M39.6489 47.2752L47.2742 39.6499H39.6489V47.2752Z" fill="url(#paint1_linear_939_7622)" />
              <path opacity="0.3" d="M61 0H0V61H61V0Z" fill="url(#paint2_linear_939_7622)" />
              <mask id="mask0_939_7622" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="28" y="15" width="17" height="5">
                <path d="M44.9106 19.8076L28.1043 19.8277L28.0918 15.251H44.898L44.9106 19.8076Z" fill="white" />
              </mask>
              <g mask="url(#mask0_939_7622)">
                <path d="M21.2627 17.5376H41.1677" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
              </g>
              <mask id="mask1_939_7622" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="28" y="20" width="17" height="6">
                <path d="M44.9106 25.1412L28.1043 25.1612L28.0918 20.582H44.898L44.9106 25.1412Z" fill="white" />
              </mask>
              <g mask="url(#mask1_939_7622)">
                <path d="M21.2627 22.8711H41.1677" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
              </g>
              <mask id="mask2_939_7622" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="28" y="25" width="17" height="6">
                <path d="M44.9106 30.4893L28.1043 30.5069L28.0918 25.9302H44.898L44.9106 30.4893Z" fill="white" />
              </mask>
              <g mask="url(#mask2_939_7622)">
                <path d="M21.2627 28.2192H41.1677" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
              </g>
              <mask id="mask3_939_7622" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="28" y="31" width="17" height="5">
                <path d="M44.9106 35.8223L28.1043 35.8424L28.0918 31.2632H44.898L44.9106 35.8223Z" fill="white" />
              </mask>
              <g mask="url(#mask3_939_7622)">
                <path d="M21.2627 33.5527H41.1677" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
              </g>
              <path d="M26.1068 15.4761L22.8928 18.7173L21.335 17.3078" stroke="#4476FF" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M26.1068 26.5938L22.8928 29.835L21.335 28.4254" stroke="#4476FF" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M26.1068 20.8848L22.8928 24.126L21.335 22.7165" stroke="#4476FF" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M26.1068 31.5513L22.8928 34.7925L21.335 33.383" stroke="#4476FF" strokeWidth="1.5" strokeMiterlimit="10" />
              <path d="M12.036 51.8574L18.3619 44.5894C22.0339 46.4047 26.6075 45.6021 29.42 42.3706C32.7641 38.5285 32.356 32.7068 28.5086 29.3689C24.6612 26.0309 18.8301 26.4397 15.4861 30.2818C12.6547 33.5349 12.5148 38.2077 14.8736 41.5891L8.53589 48.8707C7.71282 49.8163 7.81335 51.2503 8.76031 52.0719L8.77655 52.0859C9.73975 52.9216 11.1988 52.8193 12.036 51.8574ZM22.0301 30.2569C25.416 30.0195 28.3543 32.5687 28.5913 35.9492C28.8282 39.3296 26.2744 42.2639 22.8885 42.5012C19.5027 42.7386 16.5644 40.1894 16.3274 36.8089C16.0904 33.4285 18.6418 30.4944 22.0301 30.2569Z" fill="url(#paint3_linear_939_7622)" />
              <defs>
                <linearGradient id="paint0_linear_939_7622" x1="18.2995" y1="28.9762" x2="47.2748" y2="28.9762" gradientUnits="userSpaceOnUse">
                  <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#4476FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_939_7622" x1="39.6494" y1="43.4629" x2="47.2745" y2="43.4629" gradientUnits="userSpaceOnUse">
                  <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#4476FF" />
                </linearGradient>
                <linearGradient id="paint2_linear_939_7622" x1="-0.000301205" y1="-0.000224851" x2="61.0003" y2="61.0003" gradientUnits="userSpaceOnUse">
                  <stop offset="0.000888276" stopColor="#4476FF" />
                  <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="paint3_linear_939_7622" x1="6.24006" y1="57.679" x2="29.4741" y2="31.1552" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0162" stopColor="#4476FF" stopOpacity="0.2" />
                  <stop offset="0.9991" stopColor="#4476FF" />
                </linearGradient>
              </defs>
            </svg><br></br>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#4476FF" />
                <path d="M8.15789 16.7619H15.1053V10.5714H8.15789V16.7619ZM11.6316 14.9048C11.95 14.9048 12.2226 14.7835 12.4493 14.5411C12.6761 14.2986 12.7895 14.0071 12.7895 13.6667C12.7895 13.3262 12.6761 13.0347 12.4493 12.7923C12.2226 12.5498 11.95 12.4286 11.6316 12.4286C11.3132 12.4286 11.0406 12.5498 10.8138 12.7923C10.5871 13.0347 10.4737 13.3262 10.4737 13.6667C10.4737 14.0071 10.5871 14.2986 10.8138 14.5411C11.0406 14.7835 11.3132 14.9048 11.6316 14.9048ZM8.15789 18C7.83947 18 7.56689 17.8788 7.34013 17.6363C7.11338 17.3938 7 17.1024 7 16.7619V10.5714C7 10.231 7.11338 9.93948 7.34013 9.69702C7.56689 9.45456 7.83947 9.33333 8.15789 9.33333H12.2105V8.09524C12.2105 7.23889 12.4928 6.50893 13.0572 5.90536C13.6217 5.30179 14.3044 5 15.1053 5C15.9061 5 16.5888 5.30179 17.1533 5.90536C17.7178 6.50893 18 7.23889 18 8.09524H16.8421C16.8421 7.57937 16.6732 7.14087 16.3355 6.77976C15.9978 6.41865 15.5877 6.2381 15.1053 6.2381C14.6228 6.2381 14.2127 6.41865 13.875 6.77976C13.5373 7.14087 13.3684 7.57937 13.3684 8.09524V9.33333H15.1053C15.4237 9.33333 15.6963 9.45456 15.923 9.69702C16.1498 9.93948 16.2632 10.231 16.2632 10.5714V16.7619C16.2632 17.1024 16.1498 17.3938 15.923 17.6363C15.6963 17.8788 15.4237 18 15.1053 18H8.15789Z" fill="white" />
              </svg>

            </div> <div className="col-8 col-lg-9" style={{ padding: "0px" }}><span className="font-color">Readiness <br></br>Check</span></div></div>
            <svg width="171" height="19" className="center-box-b" viewBox="0 0 171 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00004 0L1 9.80645H170L170 19" stroke="#4476FF" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="7 7" />
            </svg>

            <div style={{ textAlign: 'end', zIndex: '1' }} className="row">
              <div className="col-9 col-lg-11">
                <span className="font-color-b">Concept<br></br> Snapshots</span>
              </div>
              <div className="col-3 text-center col-lg-1 margin-l">
                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path d="M25.9183 42.7006C25.9183 39.6996 24.3978 38.2316 22.0931 36.1174C20.0415 34.2361 18.3682 30.9195 18.3682 27.4926C18.3682 20.8192 23.8016 15.3156 30.5601 15.3081C30.5627 15.3081 30.5652 15.3081 30.5677 15.3081C30.5702 15.3081 30.5727 15.3081 30.5752 15.3081C37.3337 15.3156 42.6043 20.7515 42.697 27.4224C42.7446 30.7942 41.2341 34.2837 39.0422 36.1174C36.6399 38.1264 35.0792 39.6996 35.0792 42.7006H25.9183Z" fill="url(#paint0_linear_939_7680)" />
                    <path d="M25.9238 48.8006H35.0747V42.6934H25.9238V48.8006Z" fill="url(#paint1_linear_939_7680)" />
                    <path d="M35.0746 48.8003C35.0696 51.2903 33.023 53.3294 30.5005 53.3294C27.9779 53.3294 25.9313 51.2878 25.9263 48.8003H28.7219H33.1808H35.0746Z" fill="#4476FF" />
                    <path opacity="0.3" d="M61 0H0V61H61V0Z" fill="url(#paint2_linear_939_7680)" />
                    <path d="M46.5975 10.5938L41.8555 15.3383" stroke="url(#paint3_linear_939_7680)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M14.3252 10.5938L19.0672 15.3383" stroke="url(#paint4_linear_939_7680)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M30.5015 6.09717V12.1969" stroke="url(#paint5_linear_939_7680)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M52.5646 26.606H46.4648" stroke="url(#paint6_linear_939_7680)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M14.3952 26.606H8.29541" stroke="url(#paint7_linear_939_7680)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M30.4953 23.1862C28.9772 23.1862 27.652 24.0103 26.903 25.1927L23.3384 22.9657C24.9316 20.4507 27.6019 18.9952 30.4852 18.9902L30.5028 23.1736C30.4978 23.1761 30.5028 23.1862 30.4953 23.1862Z" fill="#4476FF" fillOpacity="0.8" />
                    <path d="M36.7856 33.0483C34.9369 35.0723 32.5296 36.0443 29.7791 35.8038C25.3126 35.418 21.9483 31.6304 22.046 27.2667V27.2416C22.046 27.2391 22.046 27.2391 22.046 27.2366C22.0585 25.7687 22.6222 24.0953 23.3436 22.958L26.9133 25.19C26.4524 25.949 26.2419 26.7657 26.252 27.4445C26.2895 29.7692 28.1357 31.653 30.483 31.653C31.7355 31.653 32.8703 31.1019 33.6468 30.2476L36.7856 33.0483Z" fill="#4476FF" />
                    <path d="M22.043 27.2441V27.2693H22.0405C22.0405 27.2618 22.043 27.2542 22.043 27.2441Z" fill="url(#paint8_linear_939_7680)" />
                    <path d="M34.7208 27.4671C34.7208 26.162 34.1472 24.947 33.1978 24.178L35.8731 20.939C39.6657 24.1304 39.9012 29.6314 36.7825 33.0508L33.6436 30.2552C34.325 29.4536 34.7208 28.5442 34.7208 27.4671Z" fill="url(#paint9_linear_939_7680)" />
                    <path d="M30.4949 23.1862L30.4849 18.9902C32.4889 18.9902 34.3226 19.6891 35.8807 20.9341L33.1978 24.1782C32.4714 23.5895 31.5069 23.1912 30.4949 23.1862Z" fill="#4476FF" fillOpacity="0.6" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_939_7680" x1="30.5347" y1="43.6567" x2="30.5347" y2="15.0901" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000888276" stopColor="#4476FF" />
                      <stop offset="0.8896" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_939_7680" x1="25.9245" y1="45.7474" x2="35.0746" y2="45.7474" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000441771" stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4476FF" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_939_7680" x1="-0.000728077" y1="-0.000749891" x2="60.9999" y2="60.9998" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000888276" stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_939_7680" x1="43.2721" y1="10.343" x2="45.1813" y2="15.5886" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_939_7680" x1="14.3245" y1="10.594" x2="19.0682" y2="15.3377" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_939_7680" x1="0" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000592821" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1055" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_939_7680" x1="0" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_939_7680" x1="0" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_939_7680" x1="22.0411" y1="27.2572" x2="22.0438" y2="27.2572" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000441771" stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_939_7680" x1="39.4934" y1="33.2683" x2="31.4252" y2="19.2939" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000441771" stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg><br></br>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#4476FF" />
                  <path d="M7.90953 18.5452C7.53453 18.5452 7.21351 18.4028 6.94647 18.1179C6.67942 17.8331 6.5459 17.4906 6.5459 17.0906V9.81792C6.5459 9.41792 6.67942 9.07549 6.94647 8.79064C7.21351 8.50579 7.53453 8.36337 7.90953 8.36337H8.59135V6.90882C8.59135 5.90276 8.92374 5.04519 9.58851 4.3361C10.2533 3.62701 11.0573 3.27246 12.0004 3.27246C12.9436 3.27246 13.7476 3.62701 14.4124 4.3361C15.0771 5.04519 15.4095 5.90276 15.4095 6.90882V8.36337H16.0914C16.4664 8.36337 16.7874 8.50579 17.0544 8.79064C17.3215 9.07549 17.455 9.41792 17.455 9.81792V17.0906C17.455 17.4906 17.3215 17.8331 17.0544 18.1179C16.7874 18.4028 16.4664 18.5452 16.0914 18.5452H7.90953ZM7.90953 17.0906H16.0914V9.81792H7.90953V17.0906ZM12.0004 14.9088C12.3754 14.9088 12.6965 14.7664 12.9635 14.4816C13.2306 14.1967 13.3641 13.8543 13.3641 13.4543C13.3641 13.0543 13.2306 12.7119 12.9635 12.427C12.6965 12.1422 12.3754 11.9997 12.0004 11.9997C11.6254 11.9997 11.3044 12.1422 11.0374 12.427C10.7703 12.7119 10.6368 13.0543 10.6368 13.4543C10.6368 13.8543 10.7703 14.1967 11.0374 14.4816C11.3044 14.7664 11.6254 14.9088 12.0004 14.9088ZM9.95499 8.36337H14.0459V6.90882C14.0459 6.30276 13.847 5.78761 13.4493 5.36337C13.0516 4.93913 12.5686 4.72701 12.0004 4.72701C11.4323 4.72701 10.9493 4.93913 10.5516 5.36337C10.1539 5.78761 9.95499 6.30276 9.95499 6.90882V8.36337Z" fill="white" />
                </svg>
              </div>
            </div>
            <svg width="169" height="20" className="center-box" viewBox="0 0 169 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00004 20L1 9.67742H168L168 5.96046e-07" stroke="#4476FF" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="7 7" />
            </svg>

            <div style={{ zIndex: '1' }}>
              <div className="row"><div className="col-4 text-center col-lg-2 margin-l-8">
                <svg width="63" height="60" viewBox="0 0 63 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path opacity="0.3" d="M62.3214 0H0V60H62.3214V0Z" fill="url(#paint0_linear_939_7701)" />
                    <path opacity="0.2" d="M28.5361 44.1494H49.5841C49.5841 47.7668 48.7339 51.1771 47.2362 54.192H28.5361V44.1494Z" fill="#4476FF" />
                    <path d="M28.5265 44.1494H7.47852C7.47852 47.7668 8.32873 51.1771 9.8264 54.192H28.5265V44.1494Z" fill="url(#paint1_linear_939_7701)" fillOpacity="0.5" />
                    <path opacity="0.8" d="M13.5264 29.1922L13.7983 28.9121C13.7061 29.0039 13.6162 29.098 13.5264 29.1922Z" fill="#4476FF" />
                    <path opacity="0.9" d="M38.869 54.1899C41.1962 51.6057 42.6178 48.1507 42.6178 44.352C42.6178 36.3547 36.3138 29.8706 28.5374 29.8706C20.7611 29.8706 14.457 36.3547 14.457 44.352C14.457 48.1507 15.881 51.6057 18.2058 54.1899H38.869Z" fill="url(#paint2_linear_939_7701)" />
                    <path opacity="0.3" d="M43.3117 28.9456C39.5122 25.0928 34.2957 22.7134 28.54 22.7134V44.1425L43.3117 28.9456Z" fill="url(#paint3_linear_939_7701)" />
                    <path opacity="0.8" d="M7.49414 44.1537C7.56096 38.2039 9.92958 32.8214 13.7314 28.9121L28.549 44.1537H7.49414Z" fill="url(#paint4_linear_939_7701)" />
                    <path opacity="0.3" d="M13.7637 28.945C17.5631 25.0899 22.7796 22.7104 28.5376 22.7104V44.1396L13.7637 28.945Z" fill="url(#paint5_linear_939_7701)" />
                    <path opacity="0.2" d="M28.5352 44.149H49.5832C49.5141 38.2016 47.1455 32.8214 43.346 28.9121L28.5283 44.1537H28.5375V44.149H28.5352Z" fill="#4476FF" />
                    <path d="M43.9057 37.8544H30.4992V22.6147L39.0306 14.4087L40.5541 15.874C40.6963 16.0108 40.8131 16.1964 40.9045 16.4309C40.9959 16.6653 41.0416 16.89 41.0416 17.1049V17.5152L39.701 22.6147H47.5621C48.2121 22.6147 48.7809 22.8491 49.2684 23.3181C49.7559 23.787 49.9996 24.334 49.9996 24.9593V27.3038C49.9996 27.4406 49.9793 27.5871 49.9387 27.7434C49.8981 27.8997 49.8574 28.0463 49.8168 28.183L46.1605 36.4477C45.9777 36.8384 45.673 37.1706 45.2464 37.4441C44.8198 37.7176 44.3729 37.8544 43.9057 37.8544ZM32.9367 35.5098H43.9057L47.5621 27.3038V24.9593H36.5931L38.2384 18.5117L32.9367 23.6111V35.5098ZM30.4992 22.6147V24.9593H26.8428V35.5098H30.4992V37.8544H24.4053V22.6147H30.4992Z" fill="url(#paint6_linear_939_7701)" />
                    <path d="M47.1522 10.429L44.5522 12.8568" stroke="url(#paint7_linear_939_7701)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M29.8125 10.2305L32.308 12.7165" stroke="url(#paint8_linear_939_7701)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M38.5537 8.00146L38.4865 11.1602" stroke="url(#paint9_linear_939_7701)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M50.181 18.7577L46.9038 18.7202" stroke="url(#paint10_linear_939_7701)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                    <path d="M29.6747 18.5233L26.3975 18.4858" stroke="url(#paint11_linear_939_7701)" strokeOpacity="0.8" strokeWidth="2" strokeMiterlimit="10" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_939_7701" x1="-0.000410089" y1="-9.79794e-05" x2="59.957" y2="62.2771" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000888276" stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_939_7701" x1="7.47776" y1="49.1697" x2="28.5258" y2="49.1697" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.9989" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_939_7701" x1="18.5534" y1="54.5426" x2="36.9337" y2="36.5485" gradientUnits="userSpaceOnUse">
                      <stop offset="0.1006" stopColor="#4476FF" />
                      <stop offset="0.841" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_939_7701" x1="28.5389" y1="33.426" x2="43.3115" y2="33.426" gradientUnits="userSpaceOnUse">
                      <stop offset="3.31713e-07" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.9991" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_939_7701" x1="7.49389" y1="36.5322" x2="28.5505" y2="36.5322" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint5_linear_939_7701" x1="13.7645" y1="33.4255" x2="28.5371" y2="33.4255" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000888276" stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint6_linear_939_7701" x1="37.2025" y1="14.4087" x2="37.2025" y2="37.8544" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4E7DFF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint7_linear_939_7701" x1="45.3684" y1="10.2788" x2="46.2924" y2="13.0217" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint8_linear_939_7701" x1="29.8121" y1="10.2306" x2="32.2141" y2="12.8043" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint9_linear_939_7701" x1="0" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000592821" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1055" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint10_linear_939_7701" x1="0" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                    <linearGradient id="paint11_linear_939_7701" x1="0" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                      <stop offset="0.1053" stopColor="#4476FF" stopOpacity="0.284" />
                      <stop offset="1" stopColor="#4476FF" />
                    </linearGradient>
                  </defs>
                </svg><br></br>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#4476FF" />
                  <path d="M7.90953 18.5452C7.53453 18.5452 7.21351 18.4028 6.94647 18.1179C6.67942 17.8331 6.5459 17.4906 6.5459 17.0906V9.81792C6.5459 9.41792 6.67942 9.07549 6.94647 8.79064C7.21351 8.50579 7.53453 8.36337 7.90953 8.36337H8.59135V6.90882C8.59135 5.90276 8.92374 5.04519 9.58851 4.3361C10.2533 3.62701 11.0573 3.27246 12.0004 3.27246C12.9436 3.27246 13.7476 3.62701 14.4124 4.3361C15.0771 5.04519 15.4095 5.90276 15.4095 6.90882V8.36337H16.0914C16.4664 8.36337 16.7874 8.50579 17.0544 8.79064C17.3215 9.07549 17.455 9.41792 17.455 9.81792V17.0906C17.455 17.4906 17.3215 17.8331 17.0544 18.1179C16.7874 18.4028 16.4664 18.5452 16.0914 18.5452H7.90953ZM7.90953 17.0906H16.0914V9.81792H7.90953V17.0906ZM12.0004 14.9088C12.3754 14.9088 12.6965 14.7664 12.9635 14.4816C13.2306 14.1967 13.3641 13.8543 13.3641 13.4543C13.3641 13.0543 13.2306 12.7119 12.9635 12.427C12.6965 12.1422 12.3754 11.9997 12.0004 11.9997C11.6254 11.9997 11.3044 12.1422 11.0374 12.427C10.7703 12.7119 10.6368 13.0543 10.6368 13.4543C10.6368 13.8543 10.7703 14.1967 11.0374 14.4816C11.3044 14.7664 11.6254 14.9088 12.0004 14.9088ZM9.95499 8.36337H14.0459V6.90882C14.0459 6.30276 13.847 5.78761 13.4493 5.36337C13.0516 4.93913 12.5686 4.72701 12.0004 4.72701C11.4323 4.72701 10.9493 4.93913 10.5516 5.36337C10.1539 5.78761 9.95499 6.30276 9.95499 6.90882V8.36337Z" fill="white" />
                </svg>
              </div>
                <div className="col-8 col-lg-9" style={{ padding: "0px" }}><span className="font-color-b">Confidence<br></br> Builder</span></div>
              </div>

            </div>
            <svg width="171" height="19" className="center-box-b" viewBox="0 0 171 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00004 0L1 9.80645H170L170 19" stroke="#4476FF" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="7 7" />
            </svg>
            <div style={{ textAlign: 'end', zIndex: '1' }} className="row">
              <div className="col-9 col-lg-11">
                <span className="font-color-b">Scenario <br></br>Challenge</span>
              </div>
              <div className="col-3 text-center col-lg-1 margin-l">  <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path opacity="0.3" d="M61 0H0V61H61V0Z" fill="url(#paint0_linear_939_7599)" />
                  <path d="M9.87207 11.4355H23.6222" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M9.87207 16.0127H23.6222" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M9.87207 20.5889H23.4293" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M9.87207 25.1631H15.9919" stroke="#4476FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                  <path d="M48.8006 54.9005L48.7956 34.4545L48.8006 34.462V22.3953L52.0271 25.6167L54.7976 22.7785L46.516 14.4844L38.2344 22.766L41.0125 25.5967L44.2289 22.3877V34.4595L44.2214 34.452V54.898H48.8006V54.9005Z" fill="url(#paint1_linear_939_7599)" />
                  <path opacity="0.6" d="M27.4356 6.10254H6.11523V33.5677H21.3508L27.4506 27.4504L27.4356 6.10254Z" fill="url(#paint2_linear_939_7599)" />
                  <path d="M21.3491 33.568L27.4489 27.4507H21.3541L21.3491 33.568Z" fill="url(#paint3_linear_939_7599)" />
                  <path d="M18.3398 42.4018L20.1979 43.6588L22.7993 42.3338L25.4006 43.6588L27.1912 42.4697L25.8398 39.7859H19.6236L18.3398 42.4018ZM13.6438 52.0161H31.9209L28.4074 44.9158L25.6033 46.7843L22.7993 45.3914L19.9952 46.7843L17.1235 44.8818L13.6438 52.0161ZM9.28564 54.7339L17.1911 38.5968C17.4163 38.1438 17.7485 37.7758 18.1877 37.4927C18.6269 37.2096 19.1055 37.068 19.6236 37.068H21.4479V27.5557H30.9074L29.5561 30.2735L30.9074 32.9913H24.1506V37.068H25.8398C26.3578 37.068 26.8308 37.2039 27.2588 37.4757C27.6867 37.7475 28.0245 38.1099 28.2723 38.5628L36.3129 54.7339H9.28564Z" fill="url(#paint4_linear_939_7599)" />
                </g>
                <defs>
                  <linearGradient id="paint0_linear_939_7599" x1="-0.000301205" y1="-0.000224851" x2="61.0003" y2="61.0003" gradientUnits="userSpaceOnUse">
                    <stop offset="0.000888276" stopColor="#4476FF" />
                    <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_939_7599" x1="46.5039" y1="54.1857" x2="46.5038" y2="23.9677" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0124" stopColor="#4476FF" stopOpacity="0.2" />
                    <stop offset="0.9115" stopColor="#4476FF" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_939_7599" x1="-2.01858" y1="19.8346" x2="19.3171" y2="19.8346" gradientUnits="userSpaceOnUse">
                    <stop offset="0.000376896" stopColor="#4476FF" stopOpacity="0.2" />
                    <stop offset="1" stopColor="#4476FF" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_939_7599" x1="21.3487" y1="30.5092" x2="27.4487" y2="30.5092" gradientUnits="userSpaceOnUse">
                    <stop offset="0.000376898" stopColor="#4476FF" stopOpacity="0.2" />
                    <stop offset="0.9998" stopColor="#4476FF" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_939_7599" x1="22.7993" y1="27.5557" x2="22.7993" y2="54.7339" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4476FF" />
                    <stop offset="1" stopColor="#4577FF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
                <br></br>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#4476FF" />
                  <path d="M7.90953 18.5452C7.53453 18.5452 7.21351 18.4028 6.94647 18.1179C6.67942 17.8331 6.5459 17.4906 6.5459 17.0906V9.81792C6.5459 9.41792 6.67942 9.07549 6.94647 8.79064C7.21351 8.50579 7.53453 8.36337 7.90953 8.36337H8.59135V6.90882C8.59135 5.90276 8.92374 5.04519 9.58851 4.3361C10.2533 3.62701 11.0573 3.27246 12.0004 3.27246C12.9436 3.27246 13.7476 3.62701 14.4124 4.3361C15.0771 5.04519 15.4095 5.90276 15.4095 6.90882V8.36337H16.0914C16.4664 8.36337 16.7874 8.50579 17.0544 8.79064C17.3215 9.07549 17.455 9.41792 17.455 9.81792V17.0906C17.455 17.4906 17.3215 17.8331 17.0544 18.1179C16.7874 18.4028 16.4664 18.5452 16.0914 18.5452H7.90953ZM7.90953 17.0906H16.0914V9.81792H7.90953V17.0906ZM12.0004 14.9088C12.3754 14.9088 12.6965 14.7664 12.9635 14.4816C13.2306 14.1967 13.3641 13.8543 13.3641 13.4543C13.3641 13.0543 13.2306 12.7119 12.9635 12.427C12.6965 12.1422 12.3754 11.9997 12.0004 11.9997C11.6254 11.9997 11.3044 12.1422 11.0374 12.427C10.7703 12.7119 10.6368 13.0543 10.6368 13.4543C10.6368 13.8543 10.7703 14.1967 11.0374 14.4816C11.3044 14.7664 11.6254 14.9088 12.0004 14.9088ZM9.95499 8.36337H14.0459V6.90882C14.0459 6.30276 13.847 5.78761 13.4493 5.36337C13.0516 4.93913 12.5686 4.72701 12.0004 4.72701C11.4323 4.72701 10.9493 4.93913 10.5516 5.36337C10.1539 5.78761 9.95499 6.30276 9.95499 6.90882V8.36337Z" fill="white" />
                </svg>
              </div>
            </div>
            <svg width="169" height="20" className="center-box" viewBox="0 0 169 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00004 20L1 9.67742H168L168 5.96046e-07" stroke="#4476FF" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="7 7" />
            </svg>
            <div style={{ zIndex: '1' }} className="row">
              <div className="col-4 text-center col-lg-2 margin-l-8">
                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.5">
                    <path opacity="0.3" d="M61 0H0V61H61V0Z" fill="url(#paint0_linear_939_7667)" />
                    <path opacity="0.4" d="M16.1152 15.4536V32.7956H16.1364C16.1632 39.1469 20.2048 43.8029 24.6753 45.9283C24.6809 45.9304 24.7148 45.945 24.7148 45.945C24.7148 45.945 24.7501 45.9304 24.7543 45.9283C25.0548 45.945 33.1704 46.2687 33.2932 46.2687L33.3144 30.1982V15.4536H16.1152Z" fill="url(#paint1_linear_939_7667)" />
                    <path d="M16.1152 15.4536V32.7956L16.1364 45.8874C16.2522 45.8874 20.2026 45.8494 20.4178 45.8494V15.4536H16.1152Z" fill="url(#paint2_linear_939_7667)" />
                    <path opacity="0.7" d="M20.417 15.4536V45.8515C20.5038 45.8515 24.626 45.9304 24.6745 45.9304C24.6801 45.9325 24.7139 45.9471 24.7139 45.9471V15.4536H20.417Z" fill="url(#paint3_linear_939_7667)" />
                    <path d="M40.8058 45.8667V15.4887C41.8492 15.4887 42.7423 15.8605 43.4853 16.6041C44.2282 17.3477 44.5997 18.2417 44.5997 19.2859V42.0694C44.5997 43.1137 44.2282 44.0076 43.4853 44.7512C42.7423 45.4948 41.8492 45.8667 40.8058 45.8667ZM16.1455 49.6639C15.1021 49.6639 14.209 49.2921 13.466 48.5485C12.723 47.8048 12.3516 46.9109 12.3516 45.8667V15.4887C12.3516 14.4444 12.723 13.5505 13.466 12.8068C14.209 12.0632 15.1021 11.6914 16.1455 11.6914H33.218C34.2613 11.6914 35.1545 12.0632 35.8975 12.8068C36.6404 13.5505 37.0119 14.4444 37.0119 15.4887V45.8667C37.0119 46.9109 36.6404 47.8048 35.8975 48.5485C35.1545 49.2921 34.2613 49.6639 33.218 49.6639H16.1455ZM48.3936 42.0694V19.2859C49.184 19.2859 49.8559 19.5628 50.4091 20.1166C50.9624 20.6703 51.2391 21.3428 51.2391 22.1338V39.2215C51.2391 40.0126 50.9624 40.685 50.4091 41.2388C49.8559 41.7925 49.184 42.0694 48.3936 42.0694ZM16.1455 45.8667H33.218V15.4887H16.1455V45.8667Z" fill="url(#paint4_linear_939_7667)" />
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_939_7667" x1="-0.000300604" y1="30.5" x2="61.0003" y2="30.5" gradientUnits="userSpaceOnUse">
                      <stop offset="0.000888276" stopColor="#4476FF" />
                      <stop offset="1" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_939_7667" x1="24.7142" y1="45.9462" x2="24.7142" y2="15.4539" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4476FF" />
                      <stop offset="0.9838" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_939_7667" x1="18.2657" y1="42.8427" x2="18.2657" y2="15.7908" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4476FF" />
                      <stop offset="0.9838" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_939_7667" x1="22.566" y1="45.9462" x2="22.566" y2="15.4539" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4476FF" />
                      <stop offset="0.9838" stopColor="#4476FF" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_939_7667" x1="12.3516" y1="32.2324" x2="46.4072" y2="30.7102" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#376DFF" />
                      <stop offset="1" stopColor="#376DFF" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg><br></br>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#4476FF" />
                  <path d="M7.90953 18.5452C7.53453 18.5452 7.21351 18.4028 6.94647 18.1179C6.67942 17.8331 6.5459 17.4906 6.5459 17.0906V9.81792C6.5459 9.41792 6.67942 9.07549 6.94647 8.79064C7.21351 8.50579 7.53453 8.36337 7.90953 8.36337H8.59135V6.90882C8.59135 5.90276 8.92374 5.04519 9.58851 4.3361C10.2533 3.62701 11.0573 3.27246 12.0004 3.27246C12.9436 3.27246 13.7476 3.62701 14.4124 4.3361C15.0771 5.04519 15.4095 5.90276 15.4095 6.90882V8.36337H16.0914C16.4664 8.36337 16.7874 8.50579 17.0544 8.79064C17.3215 9.07549 17.455 9.41792 17.455 9.81792V17.0906C17.455 17.4906 17.3215 17.8331 17.0544 18.1179C16.7874 18.4028 16.4664 18.5452 16.0914 18.5452H7.90953ZM7.90953 17.0906H16.0914V9.81792H7.90953V17.0906ZM12.0004 14.9088C12.3754 14.9088 12.6965 14.7664 12.9635 14.4816C13.2306 14.1967 13.3641 13.8543 13.3641 13.4543C13.3641 13.0543 13.2306 12.7119 12.9635 12.427C12.6965 12.1422 12.3754 11.9997 12.0004 11.9997C11.6254 11.9997 11.3044 12.1422 11.0374 12.427C10.7703 12.7119 10.6368 13.0543 10.6368 13.4543C10.6368 13.8543 10.7703 14.1967 11.0374 14.4816C11.3044 14.7664 11.6254 14.9088 12.0004 14.9088ZM9.95499 8.36337H14.0459V6.90882C14.0459 6.30276 13.847 5.78761 13.4493 5.36337C13.0516 4.93913 12.5686 4.72701 12.0004 4.72701C11.4323 4.72701 10.9493 4.93913 10.5516 5.36337C10.1539 5.78761 9.95499 6.30276 9.95499 6.90882V8.36337Z" fill="white" />
                </svg>

              </div>
              <div className="col-8 col-lg-9" style={{ padding: "0px" }}>
                <span className="font-color-b">Flashcards</span>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="time-footer topic-footer">
        <div className="row w-100">
          <div className="col-4" style={{ textAlign: 'left' }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.2889 22L12.5889 14.3C11.9778 14.7889 11.275 15.1759 10.4806 15.4611C9.68611 15.7463 8.84074 15.8889 7.94444 15.8889C5.72407 15.8889 3.84491 15.1199 2.30694 13.5819C0.768982 12.044 0 10.1648 0 7.94444C0 5.72407 0.768982 3.84491 2.30694 2.30694C3.84491 0.768982 5.72407 0 7.94444 0C10.1648 0 12.044 0.768982 13.5819 2.30694C15.1199 3.84491 15.8889 5.72407 15.8889 7.94444C15.8889 8.84074 15.7463 9.68611 15.4611 10.4806C15.1759 11.275 14.7889 11.9778 14.3 12.5889L22 20.2889L20.2889 22ZM7.94444 13.4444C9.47222 13.4444 10.7708 12.9097 11.8403 11.8403C12.9097 10.7708 13.4444 9.47222 13.4444 7.94444C13.4444 6.41667 12.9097 5.11806 11.8403 4.04861C10.7708 2.97917 9.47222 2.44444 7.94444 2.44444C6.41667 2.44444 5.11806 2.97917 4.04861 4.04861C2.97917 5.11806 2.44444 6.41667 2.44444 7.94444C2.44444 9.47222 2.97917 10.7708 4.04861 11.8403C5.11806 12.9097 6.41667 13.4444 7.94444 13.4444Z" fill="#4476FF" />
            </svg>

          </div>
          <div className="col-4">
            <p><svg width="118" height="26" viewBox="0 0 118 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_529_7042)">
                <path d="M15.9478 0.341288C15.5497 0.220474 15.1445 0.123348 14.7345 0.0428046L14.6208 0.0214844L13.0781 11.4539L14.68 10.485L14.6848 10.4305L16.0355 0.367346L15.9478 0.341288Z" fill="#4476FF" />
                <path d="M17.1587 0.7747L17.026 0.720215L15.8057 9.80028L17.3957 8.8385L17.4052 8.78638L18.4005 1.37877L18.3341 1.34324C17.9526 1.13241 17.5616 0.945262 17.1587 0.777069" fill="#4476FF" />
                <path d="M20.6568 3.00133C20.2919 2.67205 19.9057 2.36409 19.5076 2.07982L19.3606 1.97559L18.5312 8.15372L20.145 7.17773L20.1521 7.12561L20.7019 3.0416L20.6592 3.00133H20.6568Z" fill="#4476FF" />
                <path d="M5.38659 2.04688L5.30839 2.10136C4.96716 2.34299 4.64015 2.60357 4.32498 2.87837L4.2373 2.95417L12.0548 11.3093L12.3084 9.43316L12.2729 9.39526L5.38659 2.04688Z" fill="#4476FF" />
                <path d="M7.63223 0.793457L7.56351 0.824253C7.16304 0.997184 6.77441 1.1938 6.39764 1.40464L6.27441 1.47334L12.4901 8.10394L12.7412 6.24197L12.7057 6.20407L7.63223 0.793457Z" fill="#4476FF" />
                <path d="M13.1401 2.98484L10.3415 0L10.2847 0.00947567C9.79887 0.0971257 9.32494 0.208465 8.86049 0.3506L8.6875 0.402716L12.9197 4.91551L13.1757 3.02274L13.1401 2.98247V2.98484Z" fill="#4476FF" />
                <path d="M24.6468 10.2337C24.571 9.79782 24.4715 9.36668 24.353 8.94738L24.3127 8.80762L16.5781 13.4957L18.3056 14.1614L18.3506 14.1329L24.6611 10.3071L24.6468 10.2313V10.2337Z" fill="#4476FF" />
                <path d="M23.9309 7.70824C23.7745 7.315 23.5992 6.93123 23.4049 6.55931L23.3504 6.45508L13.6016 12.3537L15.3433 13.0241L15.3883 12.9957L23.9641 7.79589L23.9286 7.70824H23.9309Z" fill="#4476FF" />
                <path d="M24.813 11.6244L24.8011 11.4443L19.5381 14.6353L21.2964 15.3104L21.3414 15.2844L24.8272 13.1713V13.1097C24.839 12.8965 24.8438 12.6809 24.8438 12.4653C24.8438 12.1811 24.8319 11.9015 24.8153 11.6244" fill="#4476FF" />
                <path d="M7.71582 20.631L7.73241 20.6807L8.97885 24.606L9.03573 24.6226C9.50255 24.7576 9.97885 24.8642 10.4646 24.9448L10.64 24.9732L8.75373 19.0391L7.71582 20.631Z" fill="#4476FF" />
                <path d="M12.2583 13.6567L11.2275 15.2368L11.2441 15.2866L14.3152 24.9517L14.4076 24.9375C14.8223 24.8688 15.2275 24.7788 15.6256 24.6722L15.737 24.6414L12.2536 13.6567H12.2583Z" fill="#4476FF" />
                <path d="M9.48145 17.9208L9.49803 17.9705L11.7587 25.082L11.8345 25.0867C12.0265 25.0938 12.2208 25.101 12.4175 25.101C12.6592 25.101 12.8961 25.0939 13.1331 25.0796L13.2753 25.0725L10.5028 16.3525L9.48145 17.9208Z" fill="#4476FF" />
                <path d="M3.2135 13.8108L3.1827 13.8559L0.943359 17.3003L0.964686 17.3547C1.15426 17.8143 1.37227 18.2573 1.61161 18.6861L1.69928 18.8448L5.0808 13.645L3.21113 13.8132L3.2135 13.8108Z" fill="#4476FF" />
                <path d="M9.54475 13.2444L9.51631 13.2894L4.00684 21.7607L4.07556 21.8247C4.38361 22.1089 4.70352 22.3766 5.04001 22.6277L5.13243 22.6964L11.4002 13.0786L9.54475 13.2444Z" fill="#4476FF" />
                <path d="M6.39307 13.5267L6.36463 13.5717L2.3125 19.802L2.35752 19.866C2.61108 20.2237 2.88359 20.5672 3.17269 20.8964L3.26748 21.003L8.23667 13.3633L6.39544 13.5291L6.39307 13.5267Z" fill="#4476FF" />
                <path d="M10.0261 10.6626L9.97394 10.6673L0.0308057 11.5652L0.0260664 11.6623C0.00947867 11.9229 0 12.1906 0 12.4582C0 12.617 0.00473934 12.7733 0.00947867 12.9273L0.014218 13.0457L11.3104 12.0342L10.0237 10.6626H10.0261Z" fill="#4476FF" />
                <path d="M5.63953 5.97656L5.5874 5.9813L1.54474 6.34611L1.51868 6.39823C1.28408 6.83174 1.07792 7.28184 0.895452 7.74378L0.829102 7.91197L6.93574 7.36001L5.63953 5.97656Z" fill="#4476FF" />
                <path d="M7.84317 8.32903L7.79103 8.33377L0.473499 8.9947L0.452172 9.06813C0.336058 9.49217 0.243641 9.92094 0.170181 10.3592L0.146484 10.499L9.11568 9.68879L7.8408 8.32666L7.84317 8.32903Z" fill="#4476FF" />
                <path d="M13.2393 13.3369L13.8127 15.1397L13.8625 15.1586L23.2037 18.7404L23.2487 18.6551C23.4525 18.288 23.6374 17.9113 23.8056 17.5204L23.853 17.4138L13.2416 13.3369H13.2393Z" fill="#4476FF" />
                <path d="M14.7822 18.2027L14.8319 18.2216L21.704 20.8559L21.7561 20.799C22.0405 20.4674 22.3106 20.1215 22.5594 19.7614L22.64 19.6453L14.2158 16.4165L14.7845 18.205L14.7822 18.2027Z" fill="#4476FF" />
                <path d="M15.7633 21.2965L15.8131 21.3154L19.6046 22.7699L19.652 22.7368C20.0477 22.4454 20.4316 22.135 20.7918 21.801L20.9221 21.6778L15.1875 19.4795L15.7633 21.2965Z" fill="#4476FF" />
                <path d="M38.7227 17.6814C37.9763 17.8567 37.1753 18.006 36.4005 18.006C33.0995 18.006 30.8057 16.3359 30.8057 12.8536C30.8057 9.32627 32.9407 7.34822 36.4028 7.35059C37.0758 7.35059 37.9644 7.48325 38.7109 7.77936L38.564 9.52052C37.7891 9.07753 37.0877 8.9733 36.3578 8.9733C34.2535 8.9733 32.9384 10.596 32.9384 12.7067C32.9384 14.8032 34.2227 16.3833 36.4005 16.3833C37.2038 16.3833 38.154 16.208 38.635 15.9569L38.7227 17.6838V17.6814Z" fill="black" />
                <path d="M40.159 7.52832H45.8273L45.8249 9.1534L42.2017 9.15103V11.6905L45.6496 11.6929V13.3156L42.2017 13.3132L42.1993 17.8307H40.1543L40.159 7.52832Z" fill="black" />
                <path d="M50.265 9.59883H50.2365L48.7602 13.8487H51.7413L50.2674 9.59883H50.265ZM49.1418 7.53076H51.4498L55.4498 17.8356H53.1844L52.3076 15.4737H48.1726L47.2816 17.8332H45.1631L49.1394 7.53076H49.1418Z" fill="black" />
                <path d="M61.673 7.53564H59.6279V17.8381H61.673V7.53564Z" fill="black" />
                <path d="M63.8386 10.2387H65.6917V11.2716H65.7201C66.3338 10.3998 67.168 10.061 68.1893 10.061C69.9713 10.061 70.7438 11.3308 70.7438 13.0435V17.8406H68.7841V13.7826C68.7841 12.8516 68.7722 11.5985 67.5139 11.5985C66.0969 11.5985 65.7912 13.1477 65.7888 14.1214V17.8406H63.8291V10.2387H63.8386Z" fill="black" />
                <path d="M77.3061 11.835C76.7066 11.6289 76.2682 11.5105 75.5526 11.5105C75.0265 11.5105 74.3985 11.7024 74.3985 12.3514C74.3985 13.562 77.8014 12.7944 77.8014 15.54C77.8014 17.312 76.2398 18.0203 74.645 18.0179C73.9009 18.0179 73.1402 17.8852 72.4246 17.6934L72.5431 16.0706C73.1568 16.381 73.799 16.5729 74.4696 16.5729C74.9673 16.5729 75.7564 16.381 75.7564 15.6442C75.7564 14.1518 72.3535 15.1705 72.3535 12.4249C72.3535 10.7856 73.773 10.0631 75.3061 10.0654C76.2256 10.0654 76.8251 10.2123 77.4365 10.3473L77.3038 11.8374L77.3061 11.835Z" fill="black" />
                <path d="M79.7463 11.6905H78.3008V10.2431H79.7463V8.72227L81.706 8.0874V10.2431H83.443V11.6905H81.7036V15.2344C81.7036 15.8835 81.8766 16.49 82.6207 16.49C82.9714 16.49 83.3079 16.4165 83.5117 16.2839L83.5709 17.8497C83.161 17.9682 82.7084 18.0274 82.1254 18.0274C80.5899 18.0274 79.7439 17.0656 79.7439 15.5613V11.6929L79.7463 11.6905Z" fill="black" />
                <path d="M85.0502 6.96924H87.0076V8.85964H85.0502V6.96924ZM85.0479 10.2455H87.0052V17.8473H85.0479V10.2455Z" fill="black" />
                <path d="M89.4885 11.693H88.043V10.2456H89.4885V8.72471L91.4458 8.08984V10.2456H93.1828V11.693H91.4434V15.2345C91.4434 15.8836 91.6164 16.4877 92.3629 16.4877C92.7136 16.4877 93.0501 16.4142 93.2539 16.2816L93.3131 17.8451C92.9032 17.9635 92.4529 18.0227 91.8676 18.0227C90.3344 18.0227 89.4861 17.0633 89.4885 15.5567V11.6906V11.693Z" fill="black" />
                <path d="M101.436 17.8523H99.5809V16.8194H99.5501C98.9529 17.5562 98.1046 18.0299 97.0832 18.0276C95.3013 18.0276 94.5264 16.7578 94.5264 15.0451V10.248H96.4861V14.306C96.4861 15.237 96.4979 16.4901 97.7539 16.4901C99.1709 16.4901 99.479 14.9409 99.479 13.9672V10.248H101.439V17.8499L101.436 17.8523Z" fill="black" />
                <path d="M103.805 11.6979H102.357V10.2504H103.805V8.7296L105.763 8.09473V10.2504H107.5V11.6979H105.76V15.2418C105.758 15.8908 105.933 16.4973 106.677 16.4973C107.028 16.4973 107.365 16.4238 107.568 16.2912L107.628 17.8547C107.218 17.9731 106.765 18.0323 106.18 18.0323C104.647 18.0323 103.798 17.0729 103.798 15.5663V11.6979H103.805Z" fill="black" />
                <path d="M113.415 13.3107C113.356 12.3513 112.92 11.5246 111.822 11.5246C110.728 11.5246 110.171 12.2921 110.083 13.3107H113.415ZM114.73 17.4279C114.014 17.8259 113.197 18.032 112.145 18.032C109.661 18.032 108.216 16.5846 108.216 14.0901C108.216 11.8917 109.37 10.0771 111.709 10.0771C114.498 10.0771 115.287 12.0126 115.287 14.6681H110.085C110.173 15.8905 111.019 16.5846 112.232 16.5869C113.183 16.5869 114 16.234 114.73 15.8194V17.4279Z" fill="black" />
                <path d="M116.441 8.85513H116.643C116.82 8.85513 116.91 8.78407 116.91 8.6443C116.91 8.50453 116.82 8.43346 116.643 8.43346H116.441V8.8575V8.85513ZM116.925 9.6274L116.628 9.1015H116.441V9.6274H116.131V8.15393H116.673C116.832 8.15393 116.965 8.19657 117.069 8.28185C117.176 8.36713 117.228 8.48321 117.228 8.62772C117.228 8.83618 117.128 8.97832 116.932 9.05175L117.278 9.6274H116.925ZM115.842 8.08523C115.635 8.29607 115.531 8.56612 115.531 8.89067C115.531 9.21521 115.635 9.48527 115.842 9.6961C116.048 9.90693 116.316 10.0135 116.643 10.0135C116.97 10.0135 117.237 9.90693 117.444 9.6961C117.652 9.48527 117.754 9.21521 117.754 8.89067C117.754 8.56612 117.65 8.29607 117.444 8.08523C117.237 7.8744 116.97 7.7678 116.643 7.7678C116.316 7.7678 116.048 7.8744 115.842 8.08523ZM115.673 9.86192C115.415 9.60371 115.287 9.28154 115.287 8.89067C115.287 8.49979 115.415 8.17762 115.673 7.92178C115.932 7.66357 116.254 7.53564 116.645 7.53564C117.036 7.53564 117.358 7.66357 117.616 7.92178C117.875 8.17999 118.003 8.50216 118.003 8.89067C118.003 9.27917 117.875 9.60371 117.616 9.86192C117.358 10.1201 117.036 10.2481 116.645 10.2481C116.254 10.2481 115.932 10.1201 115.673 9.86192Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_529_7042">
                  <rect width="118" height="25.1011" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </p>
          </div>
          <div className="col-4" style={{ textAlign: 'end' }}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.94 20C12.36 20 12.715 19.849 13.005 19.5469C13.295 19.2448 13.44 18.875 13.44 18.4375C13.44 18 13.295 17.6302 13.005 17.3281C12.715 17.026 12.36 16.875 11.94 16.875C11.52 16.875 11.165 17.026 10.875 17.3281C10.585 17.6302 10.44 18 10.44 18.4375C10.44 18.875 10.585 19.2448 10.875 19.5469C11.165 19.849 11.52 20 11.94 20ZM10.86 15.1875H13.08C13.08 14.5 13.155 13.9583 13.305 13.5625C13.455 13.1667 13.88 12.625 14.58 11.9375C15.1 11.3958 15.51 10.8802 15.81 10.3906C16.11 9.90104 16.26 9.3125 16.26 8.625C16.26 7.45833 15.85 6.5625 15.03 5.9375C14.21 5.3125 13.24 5 12.12 5C10.98 5 10.055 5.3125 9.345 5.9375C8.635 6.5625 8.14 7.3125 7.86 8.1875L9.84 9C9.94 8.625 10.165 8.21875 10.515 7.78125C10.865 7.34375 11.4 7.125 12.12 7.125C12.76 7.125 13.24 7.30729 13.56 7.67188C13.88 8.03646 14.04 8.4375 14.04 8.875C14.04 9.29167 13.92 9.68229 13.68 10.0469C13.44 10.4115 13.14 10.75 12.78 11.0625C11.9 11.875 11.36 12.4896 11.16 12.9062C10.96 13.3229 10.86 14.0833 10.86 15.1875ZM12 25C10.34 25 8.78 24.6719 7.32 24.0156C5.86 23.3594 4.59 22.4688 3.51 21.3438C2.43 20.2188 1.575 18.8958 0.945 17.375C0.315 15.8542 0 14.2292 0 12.5C0 10.7708 0.315 9.14583 0.945 7.625C1.575 6.10417 2.43 4.78125 3.51 3.65625C4.59 2.53125 5.86 1.64062 7.32 0.984375C8.78 0.328125 10.34 0 12 0C13.66 0 15.22 0.328125 16.68 0.984375C18.14 1.64062 19.41 2.53125 20.49 3.65625C21.57 4.78125 22.425 6.10417 23.055 7.625C23.685 9.14583 24 10.7708 24 12.5C24 14.2292 23.685 15.8542 23.055 17.375C22.425 18.8958 21.57 20.2188 20.49 21.3438C19.41 22.4688 18.14 23.3594 16.68 24.0156C15.22 24.6719 13.66 25 12 25ZM12 22.5C14.68 22.5 16.95 21.5312 18.81 19.5938C20.67 17.6562 21.6 15.2917 21.6 12.5C21.6 9.70833 20.67 7.34375 18.81 5.40625C16.95 3.46875 14.68 2.5 12 2.5C9.32 2.5 7.05 3.46875 5.19 5.40625C3.33 7.34375 2.4 9.70833 2.4 12.5C2.4 15.2917 3.33 17.6562 5.19 19.5938C7.05 21.5312 9.32 22.5 12 22.5Z" fill="#4476FF" />
            </svg>

          </div>
        </div>
      </div>
      <div className="modal fade bottom-modal" id="ReadinessCheck" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-slideup">
          <div className="modal-content">
            <div className="modal-body">

              <p className="p-class" style={{color: '#4476FF',textAlign:'left'}}>
                Readiness Check
              </p>
              <div className="colorset row">
                <a href="time" className="check-btn active1">
                  START
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
