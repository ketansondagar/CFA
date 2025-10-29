import React from "react";
import "./time.css"; // Import external CSS

export default function TimeValueOfMoney() {
  return (
    <div className="time-page">

      {/* Fixed Header */}
      <div className="time-header">
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
        <span style={{ paddingLeft: "10px" }}>Time Value of Money</span>
      </div>

      {/* Page Content */}
      <div className="time-overflow" tabIndex={0}>
        {/* Readiness Check Card */}
        
          <div className="time-modules">
          <svg width="182" height="235" viewBox="0 0 182 235" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4859 182.299L43.5946 207.947L48.9174 211.451L65.8088 185.802L60.4859 182.299Z" fill="#4476FF"/>
<path d="M52.4194 174.896L35.2384 200.984L40.5612 204.488L57.7422 178.399L52.4194 174.896Z" fill="#4476FF"/>
<path d="M45.1528 166.249L27.4391 193.146L32.7619 196.65L50.4756 169.753L45.1528 166.249Z" fill="#4476FF"/>
<path d="M38.7971 156.245L20.2563 184.398L25.5792 187.902L44.1199 159.749L38.7971 156.245Z" fill="#4476FF"/>
<path d="M33.5369 144.551L13.7299 174.627L19.0527 178.13L38.8597 148.055L33.5369 144.551Z" fill="#4476FF"/>
<path d="M29.7822 130.592L7.97998 163.697L13.3028 167.201L35.105 134.095L29.7822 130.592Z" fill="#4476FF"/>
<path d="M30.811 113.091L0 115.797L0.557648 122.143L31.3687 119.438L30.811 113.091Z" fill="#4476FF"/>
<path d="M31.5874 102.174L0.276978 104.924L0.834626 111.27L32.145 108.521L31.5874 102.174Z" fill="#4476FF"/>
<path d="M33.8271 91.1211L1.57715 93.9531L2.1348 100.3L34.3848 97.4677L33.8271 91.1211Z" fill="#4476FF"/>
<path d="M37.7146 79.9161L3.97485 82.8789L4.5325 89.2255L38.2722 86.2626L37.7146 79.9161Z" fill="#4476FF"/>
<path d="M43.6221 68.5525L7.5885 71.7168L8.14615 78.0634L44.1798 74.8991L43.6221 68.5525Z" fill="#4476FF"/>
<path d="M52.214 56.9463L12.5914 60.4258L13.1491 66.7724L52.7717 63.2929L52.214 56.9463Z" fill="#4476FF"/>
<path d="M44.9587 24.5249L40.3284 28.9023L61.6323 51.424L66.2626 47.0466L44.9587 24.5249Z" fill="#4476FF"/>
<path d="M53.6616 17.978L49.0312 22.3555L70.6446 45.2043L75.275 40.8268L53.6616 17.978Z" fill="#4476FF"/>
<path d="M63.0701 12.1851L58.4397 16.5625L80.6544 40.047L85.2847 35.6696L63.0701 12.1851Z" fill="#4476FF"/>
<path d="M73.2413 7.20068L68.611 11.5781L91.8065 36.0996L96.4368 31.7221L73.2413 7.20068Z" fill="#4476FF"/>
<path d="M84.2511 3.09131L79.6207 7.46875L104.328 33.5887L108.959 29.2113L84.2511 3.09131Z" fill="#4476FF"/>
<path d="M96.2079 -0.000487279L91.5775 4.37695L118.673 33.0213L123.303 28.6439L96.2079 -0.000487279Z" fill="#4476FF"/>
<path d="M137.474 1.68953L133.274 32.4609L139.588 33.3223L143.788 2.55087L137.474 1.68953Z" fill="#4476FF"/>
<path d="M148.024 4.36245L143.767 35.5547L150.081 36.416L154.338 5.22379L148.024 4.36245Z" fill="#4476FF"/>
<path d="M158.442 8.06646L154.068 40.1172L160.382 40.9785L164.757 8.9278L158.442 8.06646Z" fill="#4476FF"/>
<path d="M168.699 12.8535L164.135 46.293L170.449 47.1543L175.014 13.7148L168.699 12.8535Z" fill="#4476FF"/>
<path d="M178.793 18.8596L173.936 54.4453L180.25 55.3067L185.107 19.7209L178.793 18.8596Z" fill="#4476FF"/>
<path d="M138.6 200.276L132.534 202.229L141.984 231.564L148.05 229.611L138.6 200.276Z" fill="#4476FF"/>
<path d="M127.751 201.905L121.685 203.857L131.306 233.726L137.372 231.773L127.751 201.905Z" fill="#4476FF"/>
<path d="M116.47 202.127L110.404 204.08L120.328 234.887L126.394 232.934L116.47 202.127Z" fill="#4476FF"/>
<path d="M104.678 200.793L98.6116 202.746L109.001 235L115.067 233.047L104.678 200.793Z" fill="#4476FF"/>
<path d="M92.2613 197.537L86.1952 199.49L97.2986 233.96L103.365 232.007L92.2613 197.537Z" fill="#4476FF"/>
<path d="M79.0082 191.68L72.9421 193.633L85.1681 231.587L91.2342 229.635L79.0082 191.68Z" fill="#4476FF"/>
<path d="M183.523 170.601L181.26 176.557L211.326 187.974L213.589 182.018L183.523 170.601Z" fill="#4476FF"/>
<path d="M175.14 178.988L172.877 184.943L204.332 196.889L206.595 190.933L175.14 178.988Z" fill="#4476FF"/>
<path d="M164.854 186.618L162.592 192.574L196.171 205.319L198.433 199.363L164.854 186.618Z" fill="#4476FF"/>
<path d="M152.108 193.354L149.846 199.311L186.754 213.319L189.016 207.363L152.108 193.354Z" fill="#4476FF"/>
</svg>
</div>
<div className="time-modules1">
          <div className="row">
            <div className="col-md-12 col-lg-1"></div>
            <div className="col-md-12 col-lg-10">
              
              <div className="time-card time-readiness-card">
                <div className="time-card-content">
                  <div className="time-readiness-icon">
                    <img
  src={require(`../../asset/images/4.png`)}
  className="time-readiness-icon-box"
  alt="Readiness Icon"
/>
                  </div>
                  <div className="time-readiness-text">
                    <p className="time-readiness-quote">
                      “Let's take a quick 5-question readiness check for this module.”
                    </p>
                    <a href="readiness_check" className="time-readiness-btn line">
                      START READINESS CHECK
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-1"></div>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="time-footer">
        <p>© cfa institute</p>
      </div>
    </div>
  );
}
