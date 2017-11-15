import React from 'react';
import Anime from 'react-anime';
import anime from 'animejs';

class Miles extends React.Component {
  handleMouse(e) {
    // console.log(typeof e.target.getAttribute("points"));
    // let points = e.target.getAttribute('points').split(' ');
    // console.log(points, 'points')

    // let newPoints = points.map((p) => {
    //   return Number(p) + 10;
    // })
    // console.log(newPoints, 'np')
    // console.log(typeof newPoints.join(' '), 'np joined')

   anime({
      targets: '#miles',
      scale: 1.1,
    });

    // document.querySelector("polygon").onmouseover = ruffleFeathers.restart;

  }

  handleMouseExit() {
    console.log('left')

    anime({
      targets: "#miles",
      scale: 1,
    });
  }

  render() {
    return <svg id="miles" width="405px" height="1374px" viewBox="0 0 1114 1374" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...this.props}>
        <defs />
        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g id="Miles" transform="translate(1.000000, 1.000000)">
            <g transform="translate(280.000000, 0.000000)">
              <path d="M152.815098,428.316793 L234.902617,341.516497 L298.760298,213.188739 L332.406507,141.689436 L399.636798,50.202989 L445.557527,13.3971786 L530.813523,0.235129635 L621.472096,13.3971786 L702.32484,35.5401122 L769.36653,85.8241459 L816.331486,141.689436 L831.477545,186.783127 L831.477545,214.275961 L816.331486,233.969355 L789.361415,249.883563 L791.390457,300.487368 L777.273312,353.131635 L749.179159,411.610104 L706.359363,453.349356 L679.072853,462.882486 L687.381612,428.316793 L687.381612,397.596219 L647.305588,406.174192 C630.08326,406.174192 621.472096,406.174192 621.472096,406.174192 C621.472096,406.174192 616.240246,404.62283 605.776544,401.520107 L571.497843,453.349356 L595.54272,526.523965 L605.776544,583.36871 L601.96698,664.870517 L583.520282,750.237207 L557.63516,815.715243 L515.147272,865.586236 L492.146322,875.329574 L468.868259,913.550603 L433.693407,945.450631 L449.470092,963.801445 L463.506104,986.880102 L468.868259,1011.73262 L468.868259,1043.51464 L468.868259,1080.82476 L445.557527,1011.73262 L424.289352,997.526967 L404.090918,997.526967 L366.898803,1005.14241 L332.406507,1019.56933 L309.692648,997.526967 L231.722431,978.980696 L234.902617,1005.14241 L242.42231,1019.56933 L250.413912,1080.82476 L217.602981,1028.40177 L207.848579,1028.40177 L207.848579,1059.02211 L217.602981,1133.88945 L185.507495,1074.09072 L170.752349,1052.35814 L165.607778,1019.56933 L152.815098,1011.73262 L144.694588,1017.4581 L131.657297,978.980696 L112.749615,954.482212 L100.055985,922.265027 L82.0112634,908.642055 L65.1429708,908.642055 L36.2780546,875.329574 L9.821314,806.742668 L0.926184597,715.279938 L5.28155268,649.366734 L20.0477625,590.593236 L36.2780546,526.523965 L60.3192439,475.104069 L86.8349903,443.993243 L112.749615,443.993243 L131.657297,453.349356 L152.815098,428.316793 Z" id="Path" stroke="#979797" />
              <g id="beak" transform="translate(542.000000, 233.000000)">
                <polygon id="Path-2" fill="#1A1A1A" points="137.496177 229.743316 164.149478 220.33591 146.211369 194.258946" />
                <polygon id="Path-3" fill="#000000" points="163.79507 220.551301 207.902303 177.293596 146.070507 194.698067" />
                <polygon id="Path-4" fill="#414141" points="145.788103 164.201426 165.192818 189.254539 145.788103 195.457937" />
                <polygon id="Path-6" fill="#D8D8D8" points="164.934598 189.253462 195.151934 159.559957 187.465742 182.914541" />
                <polygon id="Path-7" fill="#1A1A1A" points="187.205222 183.190339 195.459595 158.429243 222.681373 144.556398 207.602704 177.725873" />
                <polygon id="Path-8" fill="#9F9F9F" points="145.900739 164.378914 165.323306 189.466396 181.371056 173.038128" />
                <polygon id="Path-9" fill="#454545" points="145.628097 164.494555 195.630819 159.112887 181.251853 173.525713" />
                <polygon id="Path-10" fill="#000000" points="196.330134 159.628996 222.186305 82.9885966 222.186305 145.779765" />
                <polygon id="Path-11" fill="#242424" points="221.537761 147.823888 235.15079 119.498526 222.076177 83.8202743" />
                <polygon id="Path-12" fill="#2A2A2A" points="235.223874 120.477839 248.249684 69.6443691 222.159715 84.1274339" />
                <polygon id="Path-13" fill="#171717" points="145.532214 164.726796 207.761491 126.372282 196.708742 159.068883" />
                <polygon id="Path-14" fill="#2D2D2D" points="222.033242 85.0610011 178.841193 105.149029 207.77879 127.007608" />
                <polygon id="Path-15" fill="#484848" points="207.970876 126.975855 178.770367 105.112617 177.658624 144.922625" />
                <polygon id="Path-16" fill="#191919" points="249.051293 69.2417181 222.842749 84.7252317 224.446768 0.577858026" />
                <polygon id="Path-17" fill="#353535" points="248.902671 68.4331176 246.739477 15.9236645 223.973387 1.13770863" />
                <polygon id="Path-18" fill="#A5A5A5" points="224.650323 2.09134738 213.626233 12.4121117 223.11373 86.4257392" />
                <polygon id="Path-19" fill="#414141" points="179.985578 104.984898 165.177566 67.0878297 221.887052 85.7380476" />
                <polygon id="Path-20" fill="#BDBDBD" points="222.807671 84.877181 213.841963 12.3314899 192.461479 13.3395473" />
                <polygon id="Path-21" fill="#DADADA" points="223.455055 86.8829386 192.981873 13.498545 180.143019 28.6391248" />
                <polygon id="Path-22" fill="#8D8B8B" points="222.952514 86.4427425 180.292273 28.6507073 164.434255 67.0294939" />
                <polygon id="Path-23" fill="#A2A2A2" points="185.492166 21.612414 145.155948 14.0548988 164.502627 67.2183011" />
                <polygon id="Path-24" fill="#0B0B0B" points="159.635874 156.099242 108.256352 123.034042 104.673084 172.69238 146.22675 164.827677" />
                <polygon id="Path-25" fill="#3E3E3E" points="177.457175 145.687501 151.899292 122.04776 159.797946 156.651114" />
                <polygon id="Path-26" fill="#777777" points="178.228766 146.469929 179.657777 104.259421 151.827638 122.056188" />
                <polygon id="Path-27" fill="#2E2E2E" points="160.310118 156.601296 152.069174 122.134154 107.792434 123.451454" />
                <polygon id="Path-28" fill="#6E6E6E" points="180.474777 105.15742 152.661193 122.042266 145.397863 14.3298599" />
                <polygon id="Path-29" fill="#343434" points="108.709267 124.105996 98.4914438 81.28811 154.194589 124.105996" />
                <polygon id="Path-30" fill="#4E4E4E" points="153.095888 123.575677 98.3288348 81.763471 145.613902 13.4507569" />
                <polygon id="Path-31" fill="#3D3D3D" points="145.072812 14.9833562 83.8902672 48.3638672 98.4972876 81.7443783" />
                <polygon id="Path-32" fill="#313131" points="147.154325 13.8201957 72.704297 37.9028692 84.129407 48.6476677" />
                <polygon id="Path-33" fill="#282828" points="104.898108 172.39707 108.527487 123.383611 63.2062411 168.5909 79.3957104 173.125299" />
                <polygon id="Path-34" fill="#212121" points="73.8150619 159.075198 62.7926139 170.370321 6.44965262 142.660667" />
                <polygon id="Path-35" fill="#1B1B1B" points="73.7659314 159.211535 108.228584 124.714491 9.41591203 143.60029" />
                <polygon id="Path-36" fill="#141414" points="108.421422 124.655534 0.32061144 102.700302 9.12604154 144.611152" />
                <polygon id="Path-37" fill="#1A1A1A" points="108.477922 124.721861 45.1952646 77.7640703 1.18039678 104.061219" />
                <polygon id="Path-38" fill="#030303" points="0.578547041 104.398992 41.3059015 39.8152627 44.4386535 78.3167895" />
                <polygon id="Path-40" fill="#151515" points="109.130883 125.665606 92.4638059 112.921921 104.499572 105.811496" />
                <polygon id="Path-41" fill="#222222" points="92.5111023 113.026839 104.483752 106.251067 98.4974273 80.4740679" />
                <polygon id="Path-42" fill="#2A2A2A" points="92.5323334 113.243989 98.3928236 81.0585445 45.1464899 78.418592" />
                <polygon id="Path-43" fill="#333333" points="99.1989976 82.5886798 44.3075009 78.5248303 75.4902031 54" />
                <polygon id="Path-44" fill="#151515" points="99.2560567 82.9544004 84.0851069 48.2656025 74.7689061 53.8535126" />
                <polygon id="Path-45" fill="#161616" points="43.974784 78.8070496 71.0956369 57.5293723 42.7960885 58.684626" />
                <polygon id="Path-47" fill="#131313" points="67.7701154 60.3917971 72.7364779 37.983421 84.0007649 48.3147058" />
                <polygon id="Path-46" fill="#0C0C0C" points="69.8866084 57.8617878 40.30464 37.5414505 42.62792 59.7880566" />
                <polygon id="Path-48" fill="#000000" points="69.7781029 58.2114866 72.6622057 37.7537098 42.8305278 39.5687139" />
              </g>
              <g id="eye" transform="translate(505.000000, 91.000000)">
                <polygon id="Path-56" fill="#000000" points="17.1872074 74.9281727 35.2316811 29.9258555 45.5965805 78.1330089" />
                <polygon id="Path-57" fill="#000000" points="35.2126438 30.3901199 45.5424825 78.4092656 54.7822289 69.3354699 64.3808436 59.1213975" />
                <polygon id="Path-58" fill="#111111" points="35.573179 31.8807498 64.3661852 59.5418015 64.3661852 29.8331278" />
                <polygon id="Path-59" fill="#212121" points="35.5589703 31.8839072 59.1440595 14.0492145 64.1055768 29.9961874" />
                <polygon id="Path-60" fill="#787878" points="35.5968966 31.6205712 49.7486589 5.81895864 38.9279952 0.833307059" />
                <polygon id="Path-61" fill="#1D1D1D" points="35.9110287 30.5956578 39.1869081 0.823834637 13.2735182 12.3123041" />
                <polygon id="Path-62" fill="#131313" points="37.0230779 31.1364437 13.5276949 12.4070283 0.481011958 29.297936" />
                <polygon id="Path-63" fill="#141414" points="35.8683731 30.4740951 0.628154982 29.1346849 0.628154982 50.7175732" />
                <polygon id="Path-64" fill="#0C0C0C" points="35.4989783 30.6793309 16.8856686 75.7727971 0.608889659 50.5840475" />
                <polygon id="Path-65" fill="#0C0C0C" points="59.1634392 14.3470016 50.0525703 5.74142545 34.6357414 32.5693866" />
              </g>
              <g id="eye-lid" transform="translate(505.000000, 90.000000)">
                <Anime translateY={-40} direction="alternate" duration={2300} loop={true} easing="easeOutCubic">
                  <polygon id="Path-5" stroke="#E8DDDD" fill="#E8DDDD" points="0 29.160357 13.3995532 11.5208028 39.9451196 4.54747351e-13 51.5248069 4.89686562 61.2008957 13.2810873 66.6399994 29.160357 66.6399994 49.6300011" />
                </Anime>
                <Anime translateY={40} direction="alternate" duration={2300} loop={true} easing="easeOutCubic">
                  <polygon id="Path-39" stroke="#D9C6C6" fill="#D9C6C6" points="63.5989509 49.2384242 64.265388 60.9259099 46.170689 79.539064 16.5194115 76.9271272 0.598394361 52.2430829 0.598394361 29.5697332" />
                </Anime>
              </g>

              <g id="eye-skin" transform="translate(464.000000, 66.000000)">
                <polygon id="Path-66" fill="#CDCED9" points="104.870695 84.6800597 86.6523957 103.267516 138.419609 127.959322" />
                <polygon id="Path-67" fill="#C3C8DD" points="136.711105 126.924952 104.793989 147.382964 87.2094044 103.696315" />
                <polygon id="Path-68" fill="#B6B5CB" points="87.0702908 103.183091 69.3452292 141.191019 104.795352 147.245507" />
                <polygon id="Path-70" fill="#90A1B5" points="87.1985505 102.979467 58 100 69.4959891 140.592891" />
                <polygon id="Path-71" fill="#AEC9D2" points="69.7730484 141.239602 105.182159 146.919204 77.2798681 164.983078" />
                <polygon id="Path-72" fill="#B6CCD9" points="136.515418 126.877526 133.566093 153.043468 86.0112399 159.286157" />
                <polygon id="Path-73" fill="#B5B8C3" points="133.527964 153.019801 141.259721 172.45767 109.299304 172.45767 100.782272 162.690979 77.0578357 164.860586 88.8889693 157.705197" />
                <polygon id="Path-74" stroke="#C9C8CE" fill="#C9C8CE" points="164.445805 144.629977 136.255383 126.673084 133.581105 152.669066 141.514848 172.052032" />
                <polygon id="Path-75" stroke="#CED2D3" fill="#CED2D3" points="165.423979 144.946288 135.616419 125.564338 150.531699 55.5912531" />
                <polygon id="Path-76" fill="#D3E0E3" points="135.594742 125.266737 150.793144 52.6528719 126.788429 69.9308127" />
                <polygon id="Path-77" stroke="#C3DAE0" fill="#C3DAE0" points="135.536896 123.996465 126.864575 70.4000963 106.384317 85.5276305" />
                <polygon id="Path-78" stroke="#AFBDBE" fill="#AFBDBE" points="77.3473531 164.733613 40.6628051 140.328148 66.1639009 130.07331" />
                <polygon id="Path-79" stroke="#AAB0B0" fill="#AAB0B0" points="66.1600834 129.5484 22.5791686 107.455403 39.8754396 140.220303" />
                <polygon id="Path-80" stroke="#96959D" fill="#96959D" points="66.3614581 129.163784 58.2711591 100.517998 22.1935982 106.501975" />
                <polygon id="Path-81" stroke="#D7C1C1" fill="#D7C1C1" points="37.6571479 102.809804 2.19683807 60.9556182 21.6612277 105.790705" />
                <polygon id="Path-82" fill="#EADADA" points="58.1482045 100.300614 41.2366084 75.8297363 1.03803896 58.8071492 38.4512623 103.652807" />
                <polygon id="Path-83" fill="#EAE4E4" points="41.6776471 54.5933884 41.6776471 76.179227 0.473486805 58.7438067" />
                <polygon id="Path-84" stroke="#ABBCC4" fill="#ABBCC4" points="126.174842 69.4707902 120.942878 48.5051275 105.159343 55.4762286 105.159343 85.0970829" />
                <polygon id="Path-85" stroke="#E2EAED" fill="#E2EAED" points="127.658764 70.0344572 150.352376 52.5367213 111.920769 8.79410002" />
                <polygon id="Path-86" fill="#DBD8D8" points="104.629037 55.3526231 111.077049 6.52336957 121.461722 47.608672" />
                <polygon id="Path-87" fill="#E1E1E1" points="104.630475 54.5077341 111.536993 7.14936704 89.3203668 0.265858377" />
                <polygon id="Path-88" fill="#E8DDDD" points="100.649789 39.913085 58.2536174 2.47838905 89.3059857 0.231343761" />
                <polygon id="Path-89" fill="#E9D0D0" points="100.407805 39.2979328 95.8416626 24.4287986 87.0122634 27.1897786" />
                <polygon id="Path-90" fill="#EAE9E9" points="89.6847598 30.1792602 58.4651204 2.43235903 41.2888814 12.0896245" />
                <polygon id="Path-91" fill="#E9D0D0" points="79.4527497 26.3734931 54.7945095 37.181619 58.8399603 18.2830778" />
                <polygon id="Path-92" fill="#DFD9D9" points="41.5861444 12.0853364 54.9602947 36.870954 59.0349159 18.4444874" />
                <polygon id="Path-93" fill="#E9D0D0" points="41.3163181 54.4271699 40.3016737 38.0056833 54.9209147 36.8972074" />
                <polygon id="Path-94" fill="#F4EEEE" points="42.0086293 54.4505062 2.97034563 46.6401269 0.537046627 58.8649627" />
                <polygon id="Path-95" fill="#E6E6E6" points="41.4558214 54.4487275 40.4846347 37.9734538 2.85772852 46.6016228" />
                <polygon id="Path-96" fill="#EBCACA" points="40.5018527 38.3034822 49.7756582 26.8878575 55.0509452 36.9635409" />
                <polygon id="Path-97" fill="#E6E6E6" points="41.514613 11.7189366 40.9296316 38.4093423 49.7429182 26.914845" />
                <polygon id="Path-98" fill="#D8D8D8" points="41.5570749 11.9573579 3.1957144 46.2889776 41.2654337 38.1542368" />
              </g>
              <g id="body" transform="translate(85.000000, 0.000000)">
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-99" fill="#2A2A2A" points="665.59879 216.26712 695.596631 223.815594 632.277828 193.212263" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-100" fill="#151515" points="696.115294 224.213607 664.782438 186.274525 628.103208 191.729199" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-101" stroke="#322D1A" fill="#322D1A" points="736.899795 235.753133 695.715417 223.944451 704.344037 265.495106" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-102" stroke="#4F4E38" fill="#4F4E38" points="746.67376 214.811091 737.34237 235.006961 695.880811 223.151265" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-103" stroke="#676952" fill="#676952" points="747.385272 214.107332 747.385272 186.836461 695.562473 222.567979" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-104" stroke="#7A795D" fill="#7A795D" points="731.484358 140.844131 746.994846 185.843644 695.994166 221.185181" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-105" stroke="#8B8062" fill="#8B8062" points="731.656073 141.121583 684.71402 85.404745 694.912253 221.627896" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-106" stroke="#5E5A37" fill="#5E5A37" points="694.33552 221.491521 666.251218 187.516251 684.038893 87.1595806" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-107" stroke="#59512A" fill="#59512A" points="665.797483 187.720601 683.010564 87.4731758 632.824072 193.821186" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-108" stroke="#6E6B4C" fill="#6E6B4C" points="683.947562 84.0997817 617.526204 36.1059013 632.968107 192.390308" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-109" stroke="#685E3B" fill="#685E3B" points="634.3631 192.71683 594.107143 152.415614 600.90268 215.542656" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-110" stroke="#645E3A" fill="#645E3A" points="634.452148 192.918934 616.888589 37.8425297 593.79098 150.771266" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-111" stroke="#85897C" fill="#85897C" points="600.396293 216.312669 520.666861 239.403941 535.621468 269.725289" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-112" stroke="#9F9A6C" fill="#9F9A6C" points="520.624028 238.577122 593.730515 153.397291 601.306147 215.500813" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-113" stroke="#918D65" fill="#918D65" points="544.189652 209.905195 595.570203 152.004874 530.622695 119.599168" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-114" stroke="#9A9674" fill="#9A9674" points="593.818294 150.898272 616.401478 35.9967596 529.859117 118.079765" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-115" stroke="#908A61" fill="#908A61" points="615.329373 35.7402716 529.954195 117.520486 490.701521 73.1360795" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-116" stroke="#8F7E60" fill="#8F7E60" points="615.503883 35.3226477 536.38275 13.6900958 490.870761 72.5680745" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-117" stroke="#9D906E" fill="#9D906E" points="535.995978 13.2154569 445.479588 0.529652739 489.908146 72.5225719" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-118" stroke="#A29D7F" fill="#A29D7F" points="488.846696 72.4616713 446.776069 2.95117498 467.530391 65.0366366" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-119" stroke="#998C69" fill="#998C69" points="467.596704 65.4844086 437.698291 68.1402512 445.492989 1.71547978" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-120" stroke="#9D8B65" fill="#9D8B65" points="445.623452 1.36189984 437.096872 68.4907146 420.222063 78.2434627" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-121" stroke="#70693B" fill="#70693B" points="445.616593 1.58483939 361.247691 13.4486535 419.297721 79.708004" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-122" stroke="#525731" fill="#525731" points="418.640907 80.6443502 381.913714 112.506943 360.580587 13.2960257" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-124" stroke="#5E5F23" fill="#5E5F23" points="381.960565 112.216274 314.356643 51.8319851 359.879185 14.1483407" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-125" stroke="#2F2C19" fill="#2F2C19" points="535.01925 269.840027 519.504742 238.946101 497.709176 274.053717" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-126" stroke="#434B36" fill="#434B36" points="519.513538 238.68073 457.993006 336.127898 488.888824 238.68073" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-127" stroke="#738065" fill="#738065" points="480.171155 229.499312 454.734731 343.274351 489.623436 238.615066" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-128" stroke="#ADBA9F" fill="#ADBA9F" points="479.569565 228.830018 457.348387 231.062816 455.62773 337.624337" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-129" stroke="#8E9B7F" fill="#8E9B7F" points="457.13128 232.261153 418.749813 206.776073 454.806167 340.873352" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-130" stroke="#41461A" fill="#41461A" points="382.51654 112.65747 379.381782 123.504586 313.555918 51.4881078" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-131" stroke="#74734F" fill="#74734F" points="314.014461 52.4576824 307.778085 111.404649 378.750626 124.246877" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-132" stroke="#697851" fill="#697851" points="313.294871 52.4625283 246.75428 143.09739 307.775925 111.749484" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-133" stroke="#969B76" fill="#969B76" points="308.654152 112.597325 339.124964 165.319115 379.316813 124.59402" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-134" stroke="#7C8065" fill="#7C8065" points="380.038525 124.995877 418.528689 207.361779 339.704855 166.178828" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-135" stroke="#6C8167" fill="#6C8167" points="454.578584 342.866599 385.361634 272.181315 419.209413 208.647334" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-136" stroke="#6F785E" fill="#6F785E" points="418.154148 209.828173 304.575509 248.104097 385.114892 271.34195" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-137" stroke="#959579" fill="#959579" points="419.703293 208.18368 339.104723 167.015789 303.748582 247.662746" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-138" stroke="#D8CFB0" fill="#D8CFB0" points="338.863188 166.461937 304.20642 245.390326 307.517643 111.945145" />
                <polyline id="Path-139" stroke="#B4AE8A" fill="#B4AE8A" points="306.852112 112.553161 217.093717 209.141467 304.171988 248.090648" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-140" stroke="#8DA460" fill="#8DA460" points="304.915648 113.610589 245.775961 144.284554 216.564572 208.448627" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-141" stroke="#AFB390" fill="#AFB390" points="217.292767 210.095925 223.084976 264.903469 304.261344 249.167611" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-142" stroke="#556A56" fill="#556A56" points="455.061191 344.37443 346.032379 357.611992 385.153962 272.329145" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-143" stroke="#839179" fill="#839179" points="385.771334 271.949078 345.923481 357.200691 305.783537 249.643166" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-144" stroke="#798968" fill="#798968" points="223.543345 265.305026 305.180841 248.213564 345.848179 357.641189" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-145" stroke="#404F37" fill="#404F37" points="455.792645 345.379515 371.063914 421.205739 346.159586 358.416695" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-146" stroke="#59624D" fill="#59624D" points="457.787328 336.455807 466.99807 378.131421 371.587008 422.76722" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-147" stroke="#2D2F18" fill="#2D2F18" points="372.713437 423.734095 519.790203 403.493734 467.386922 377.691933" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-148" stroke="#3B3827" fill="#3B3827" points="519.727763 402.861052 487.36366 453.5793 372.463351 425.033219" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-149" stroke="#41432C" fill="#41432C" points="372.163637 425.729221 486.674318 454.095474 449.040246 484.328279" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-150" stroke="#435034" fill="#435034" points="415.415872 458.902137 325.371641 445.26224 371.897875 423.849016" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-151" stroke="#5A644E" fill="#5A644E" points="325.941097 445.130699 346.180109 357.56596 371.700745 422.773709" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-152" stroke="#6E7961" fill="#6E7961" points="346.967812 357.268717 326.109264 442.75682 223.097066 265.17055" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-153" stroke="#8B8D56" fill="#8B8D56" points="327.395253 446.198874 236.958999 388.285646 223.487873 266.156607" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-154" stroke="#93AD59" fill="#93AD59" points="223.686448 265.912741 147.808142 342.716874 215.973858 208.235121" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-155" stroke="#859D48" fill="#859D48" points="224.540322 265.375402 236.144641 386.830837 145.332691 346.3274" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-156" stroke="#3E5830" fill="#3E5830" points="327.227845 446.996292 258.627599 441.653925 237.705522 388.1458" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-157" stroke="#3E5830" fill="#3E5830" points="416.891533 459.642091 378.179675 489.990796 327.671356 446.226909" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-158" stroke="#88A844" fill="#88A844" points="237.587995 387.857863 95.7347428 399.287396 144.181933 345.416311" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-159" stroke="#6C8636" fill="#6C8636" points="259.317796 441.619872 237.374694 388.22941 141.726636 396.412903" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-160" stroke="#7FA536" fill="#7FA536" points="140.193563 396.300913 47.6328221 452.889493 95.4948074 398.630545" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-161" stroke="#8EA244" fill="#8EA244" points="141.118144 396.492773 128.37141 439.831186 46.8721916 453.695485" />
                <polyline id="Path-162" stroke="#62922B" fill="#62922B" points="128.835759 439.724121 188.073906 414.882667 142.103381 395.721665 128.835759 437.71876" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-163" stroke="#4D7247" fill="#4D7247" points="129.888806 439.305182 259.198284 441.983929 188.509598 415.130502" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-164" stroke="#274D10" fill="#274D10" points="485.348979 455.390606 463.448291 544.613906 449.977687 484.946875" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-165" stroke="#244F1A" fill="#244F1A" points="377.748705 491.096382 449.748735 485.202657 417.496914 460.118107" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-166" stroke="#33663D" fill="#33663D" points="449.351611 485.448608 462.867877 545.572289 377.860098 490.893447" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-167" stroke="#245816" fill="#245816" points="463.033583 546.027773 450.777279 607.427634 378.309608 492.096041" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-168" stroke="#274212" fill="#274212" points="451.606249 606.555462 452.92607 661.030706 392.260021 623.960654" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-169" stroke="#47733C" fill="#47733C" points="450.394345 607.348597 401.810943 621.716173 379.222112 492.749842" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-170" stroke="#2F5C1B" fill="#2F5C1B" points="377.799468 490.160056 333.642554 567.042387 401.837784 622.571627" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-171" stroke="#639060" fill="#639060" points="327.228747 447.618054 332.890317 566.688148 377.891153 491.258196" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-172" stroke="#1D4200" fill="#1D4200" points="451.743701 661.590818 362.608872 675.412384 333.025762 566.198465" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-173" stroke="#264C02" fill="#264C02" points="452.861016 660.873402 449.332931 717.102676 363.023519 675.287084" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-174" stroke="#7FB170" fill="#7FB170" points="326.391996 445.238512 331.915599 564.13546 259.020779 441.409186" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-175" stroke="#7C9E0D" fill="#7C9E0D" points="47.0815353 453.553896 55.6944225 473.019307 126.903854 439.937598" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-176" stroke="#78951B" fill="#78951B" points="56.0739204 473.723358 57.9782847 491.816377 129.465459 439.187782" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-177" stroke="#57914E" fill="#57914E" points="130.398065 440.360443 178.687425 479.650379 258.67453 442.083031" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-178" stroke="#3E8630" fill="#3E8630" points="258.940253 441.627954 252.101721 507.458738 178.924672 480.545704" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-179" stroke="#52A742" fill="#52A742" points="259.407567 443.058897 331.320653 563.546805 252.943602 506.626551" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-180" stroke="#60871B" fill="#60871B" points="58.0309022 492.766538 180.31162 480.735498 129.713288 439.716031" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-181" stroke="#678F13" fill="#678F13" points="58.1181983 493.067386 58.1181983 519.089818 179.724822 481.316008" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-182" stroke="#4FA23F" fill="#4FA23F" points="252.320474 507.934483 179.456556 510.364419 180.780281 481.887758" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-183" stroke="#63C150" fill="#63C150" points="179.985839 481.762429 179.985839 510.783969 61.150167 519.079723" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-184" stroke="#4D9240" fill="#4D9240" points="256.160037 507.417704 210.223585 651.350638 178.729106 510.81594" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-185" stroke="#2A641C" fill="#2A641C" points="210.624757 652.203123 331.819 563.987836 254.625903 508.463315" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-186" stroke="#255B18" fill="#255B18" points="331.6733 564.952026 288.634254 673.749397 211.383381 652.680173" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-187" stroke="#2B540C" fill="#2B540C" points="331.913276 564.729191 361.790328 673.971983 288.976799 673.971983" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-188" stroke="#61A554" fill="#61A554" points="58.6755758 520.328957 177.932474 509.955469 208.939114 650.067758" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-189" stroke="#4A7F11" fill="#4A7F11" points="58.3014344 519.682575 66.9968742 611.031234 152.347896 599.911318" />
                <polyline id="Path-190" stroke="#3D6D1F" fill="#3D6D1F" points="210.873976 652.115534 208.391701 651.434186 68.7197994 611.81047 152.412282 600.093454" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-191" stroke="#0A2E06" fill="#0A2E06" points="57.4129012 522.232973 24.7867438 630.950518 66.6455061 611.548899" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-192" stroke="#042805" fill="#042805" points="66.0984429 612.461986 7.99107211 716.631331 24.4565808 631.787842" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-194" stroke="#2A640E" fill="#2A640E" points="210.704038 653.153961 155.233248 672.700673 69.1601753 612.599235" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-195" stroke="#396415" fill="#396415" points="154.271807 672.706745 25.903943 686.330144 66.874382 612.211892" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-196" stroke="#304E06" fill="#304E06" points="450.398009 718.477514 443.014493 764.72715 362.297923 674.999399" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-197" stroke="#365809" fill="#365809" points="361.461625 674.891219 368.577485 755.789123 443.099703 766.042234" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-198" stroke="#335D09" fill="#335D09" points="362.45329 674.821642 367.814361 756.266283 287.445093 673.746007" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-199" stroke="#32690E" fill="#32690E" points="209.735497 652.747626 219.359797 723.663466 288.178689 674.023922" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-200" stroke="#2F5F0F" fill="#2F5F0F" points="288.64886 674.951414 218.765996 724.454548 368.149181 757.915284" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-201" stroke="#337217" fill="#337217" points="210.060116 651.921909 218.891064 723.986848 153.339006 673.406584" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-202" stroke="#4B801E" fill="#4B801E" points="25.2508967 687.32671 8.78751196 716.817049 124.163608 682.195227 152.67641 673.639164" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-203" stroke="#417119" fill="#417119" points="219.731262 724.703904 152.557941 672.697733 10.4584494 717.324088" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-204" stroke="#497110" fill="#497110" points="8.12592314 717.524919 5.5872752 793.861426 150.734482 722.450771" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-205" stroke="#377714" fill="#377714" points="150.727526 722.970163 205.040474 782.383269 290.502222 741.628614 220.236752 723.557568" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-206" stroke="#405D0B" fill="#405D0B" points="366.28113 756.307568 388.386972 819.643065 443.289964 767.046747" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-207" stroke="#37610B" fill="#37610B" points="387.984116 820.056423 289.173092 740.401069 366.987332 757.743122" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-208" stroke="#576808" fill="#576808" points="388.374709 820.960714 424.565391 836.89345 442.92682 766.469729" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-209" stroke="#6D7D1A" fill="#6D7D1A" points="424.733618 837.750062 406.974325 875.223319 387.856402 820.664769" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-210" stroke="#256F0E" fill="#256F0E" points="290.695442 742.220462 388.402881 821.034198 205.395297 781.62733" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-211" stroke="#3E8118" fill="#3E8118" points="204.370457 781.306797 236.972393 882.032508 309.316224 805.00376" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-212" stroke="#396A17" fill="#396A17" points="388.94296 821.35045 238.019231 882.063701 309.513154 804.702715" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-213" stroke="#568B1C" fill="#568B1C" points="150.527852 724.047234 161.87906 869.809554 204.871342 780.559665" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-214" stroke="#4F9025" fill="#4F9025" points="237.252198 883.206943 160.766444 870.478185 205.053532 781.690121" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-215" stroke="#4D730E" fill="#4D730E" points="149.713051 723.895756 156.354176 805.254599 66.7302149 764.012019" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-216" stroke="#4D741B" fill="#4D741B" points="161.089649 870.541963 66.292147 764.424775 156.230824 804.348499" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-217" stroke="#5E691A" fill="#5E691A" points="407.906484 875.628669 238.140597 882.525142 388.329542 821.819784" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-218" stroke="#5C7D2A" fill="#5C7D2A" points="159.884453 870.856716 5.74185035 794.751268 66.3727018 764.264674" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-219" stroke="#7E8712" fill="#7E8712" points="4.44539427 794.324802 0.524410473 840.372425 75.0861559 829.721081" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-220" stroke="#8A940F" fill="#8A940F" points="77.6906524 830.214164 62.1915472 898.408009 0.942772445 840.951992" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-221" stroke="#737C07" fill="#737C07" points="62.5778465 898.164955 162.289281 870.877251 78.0464544 830.315822" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-222" stroke="#816F0E" fill="#816F0E" points="0.00513037798 841.105845 4.46225228 892.550355 61.6221876 897.966365" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-223" stroke="#ACA716" fill="#ACA716" points="4.27288015 893.310714 15.2184699 921.557653 61.6297677 898.322631" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-224" stroke="#87900F" fill="#87900F" points="64.6083332 897.673846 120.509505 972.848459 15.2737896 922.536159" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-225" stroke="#988C17" fill="#988C17" points="161.494741 870.663463 124.187059 976.511848 62.5996098 898.565275" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-226" stroke="#897D1A" fill="#897D1A" points="89.4578733 957.757581 28.9662684 957.757581 15.0484725 922.347694" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-227" stroke="#45670A" fill="#45670A" points="71.4166738 958.179197 59.4914134 1015.73431 47.0079107 979.782511 29.5919025 958.179197" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-228" stroke="#6C7B1C" fill="#6C7B1C" points="124.567155 974.365602 237.763059 883.921272 161.43608 870.977901" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-229" stroke="#585B04" fill="#585B04" points="238.883672 884.245158 185.123649 987.585789 124.510276 974.527138" />
                <polyline id="Path-230" stroke="#6D7C10" fill="#6D7C10" points="239.915358 885.504781 256.567235 986.580922 225.388479 997.408396 184.715083 987.613991 239.915358 881.866805" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-231" stroke="#6C730B" fill="#6C730B" points="408.350365 875.491125 386.202751 913.576323 238.802806 882.872424" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-232" stroke="#8C921D" fill="#8C921D" points="385.484477 914.390179 348.56736 945.732851 240.955105 883.17502" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-233" stroke="#8F9F2C" fill="#8F9F2C" points="348.592055 945.895519 292.63911 968.485557 238.277242 882.454418" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-234" stroke="#586208" fill="#586208" points="237.508242 882.412842 292.457842 968.718662 256.951737 988.219035" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-49" fill="#D4B4B4" points="632.909171 238.593311 665.418069 215.823683 632.909171 193.527945" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-49" fill="#BCA5A5" transform="translate(617.254449, 216.060628) scale(-1, 1) translate(-617.254449, -216.060628) " points="601 238.593311 633.508898 215.823683 601 193.527945" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-50" fill="#F1E8E8" points="671.037086 245.069332 632.948202 238.468006 665.166399 215.65497 682.383523 234.714818" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-51" fill="#FFF4F4" points="672.2514 245.234191 650.275825 246.305238 642.169032 255.74783 602.296571 247.844115 601.265806 215.995391 633.337778 238.343658" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-52" fill="#D7C1C1" points="536.066488 269.791488 602.380492 248.282101 601.534279 215.761029" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-53" fill="#A09D9D" points="665.243932 215.485284 682.008824 235.167046 704.358459 249.537169" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-54" fill="#BFB2B2" points="704.093579 249.342603 695.494014 223.697342 665.30227 216.067946" />
              </g>
              <g onMouseEnter={e => this.handleMouse(e)} id="left-wing" transform="translate(2.000000, 443.000000)">
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-235" stroke="#6E7F19" fill="#6E7F19" points="85.0659907 0.976131771 98.7575659 68.117609 110.438905 0.976131771" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-236" stroke="#97A02B" fill="#97A02B" points="129.67862 10.3797369 99.4861954 69.4937648 111.259211 1.2269134" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-237" stroke="#7D8C27" fill="#7D8C27" points="84.3015547 1.48887096 58.5368731 32.0633724 98.7335225 71.6503616" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-238" stroke="#789030" fill="#789030" points="129.889581 11.4755128 138.627021 30.544803 100.525745 69.5143654" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-239" stroke="#5E8127" fill="#5E8127" points="138.567306 31.5246377 140.52654 49.4079271 101.026934 70.1745002" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-240" stroke="#154D02" fill="#154D02" points="140.268555 50.0921117 140.268555 77.671846 98.8533776 72.1799026" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-241" stroke="#0C3807" fill="#0C3807" points="98.7752731 72.3986524 140.818155 78.2267478 125.845398 128.62199" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-242" stroke="#133B06" fill="#133B06" points="115.247125 106.980626 110.946323 177.02329 125.988213 129.879119" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-243" stroke="#657F28" fill="#657F28" points="98.2715653 72.3173457 57.6142162 32.3438324 34.274458 82.9333455" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-244" stroke="#32611D" fill="#32611D" points="115.259371 107.812837 66.1031549 78.5915418 98.8704731 72.4860987" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-245" stroke="#52790A" fill="#52790A" points="63.5143421 79.0627767 24.0810709 127.540704 34.2307032 83.8728702" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-246" stroke="#3C6217" fill="#3C6217" points="116.002992 109.054911 73.2445899 123.174913 65.2168817 78.6022088" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-247" stroke="#466F02" fill="#466F02" points="72.4312344 123.760035 64.6280504 78.4962351 23.9544253 129.248383" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-248" stroke="#274C17" fill="#274C17" points="73.1414959 123.85595 115.892427 109.85292 110.38635 177.955839 88.0410831 145.572017" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-250" stroke="#264600" fill="#264600" points="23.3619334 130.14443 72.637566 124.120151 11.2305168 177.632537" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-251" stroke="#2C4906" fill="#2C4906" points="110.201858 179.124956 40.8373456 152.882871 73.3394473 123.936846" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-252" stroke="#3E5602" fill="#3E5602" points="11.0003877 178.609905 40.766666 153.116236 45.7965031 208.190241" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-253" stroke="#334A07" fill="#334A07" points="110.443155 179.818934 41.4367137 152.364426 46.3045308 209.409219" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-254" stroke="#002500" fill="#002500" points="109.566858 181.356328 46.8231995 209.942083 91.0686662 273.653055" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-255" stroke="#2C4C03" fill="#2C4C03" points="3.54657136 207.151806 47.9835549 211.037198 10.9706421 178.234672" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-193" stroke="#5C4D12" fill="#5C4D12" points="34.6032772 433.09915 66.3829608 412.462187 63.238754 466.101096" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-257" stroke="#394F11" fill="#394F11" points="66.6401521 410.719371 68.3141324 354.63022 7.85993708 364.632912" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-258" stroke="#466C2F" fill="#466C2F" points="67.8419138 353.520454 89.9231349 274.4431 49.0494214 302.607195" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-259" stroke="#095E1B" fill="#095E1B" points="91.4136853 274.14567 46.8416392 210.833819 48.8811609 301.995338" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-260" stroke="#005661" fill="#005661" points="46.3912449 212.727175 8.71220792 362.840606 49.0307258 302.425337" />
                <path d="M45.8402945,210.954233 L0.241968666,272.870969 C0.221099296,273.300331 0.221099296,273.634567 0.241968666,273.873678 C0.262838035,274.112789 2.87569188,303.715331 8.08053022,362.681305 L45.8402945,210.954233 Z" id="Path-262" stroke="#7C8700" fill="#7C8700" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-263" stroke="#4E5B01" fill="#4E5B01" points="44.4774937 211.219629 0.0974371229 271.740338 3.67649611 207.626154" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-261" stroke="#105206" fill="#105206" points="68.02887 355.004206 49.0709484 303.333455 8.24369195 364.923079" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-256" stroke="#4B631E" fill="#4C6719" points="66.6318556 411.42236 7.84795069 364.773324 34.9834169 433.748127" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-249" stroke="#000000" fill="#000000" points="98.1854937 480.021392 86.467246 448.703724 82.8180995 398.649765 87.7656978 350.397206 90.1346718 275.206632 67.5182182 354.999489 67.5182182 407.489665 63.2462094 466.079561 80.7158516 466.079561" />
              </g>
              <g onMouseEnter={e => this.handleMouse(e)} onMouseLeave={this.handleMouseExit} id="right-wing" transform="translate(493.000000, 453.000000)">
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-266" stroke="#0C3000" fill="#0C3000" points="79.0936275 177.341023 75.8952541 247.182442 65.4435 356.693788 53.7029869 194.046958" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-267" stroke="#0D602A" fill="#0D602A" points="92.4138472 292.765152 75.2765253 246.701703 65.9565819 358.026034" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-268" stroke="#014A4E" fill="#014A4E" points="75.0852141 245.210601 110.165076 172.49642 108.880447 210.676919 92.5826978 291.228061" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-269" stroke="#002F0F" fill="#002F0F" points="75.3681628 242.462403 110.111483 172.206059 79.7937302 176.457198" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-270" stroke="#2C4100" fill="#2C4100" points="80.1782903 175.658376 102.351462 72.2476689 113.080063 130.847747 110.666401 171.407893" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-271" stroke="#374627" fill="#374627" points="102.063823 71.1815307 60.2349463 72.617764 78.4997062 0.0794551219" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-272" stroke="#192F01" fill="#192F01" points="102.13417 71.7958889 80.3908926 176.658858 61.0847259 71.7958889" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-265" stroke="#000000" fill="#000000" points="45.7360834 200.817437 54.5372546 194.706291 65.6075732 361.64721 21.7431315 412.997805 0.296555108 421.767129 17.3995587 383.790817 35.7916736 312.786719 41.622233 264.828085" />
                <polygon onMouseLeave={this.handleMouseExit} onMouseEnter={e => this.handleMouse(e)} id="Path-264" stroke="#000000" fill="#000000" points="60.9970205 70.9603854 80.0163035 176.341507 45.6184991 201.370163 42.6500957 153.047819" />
              </g>
              <g id="feet" transform="translate(145.000000, 946.000000)">
                <polygon id="Path-273" stroke="#000000" fill="#000000" points="89.5302617 60.2211228 97.6237753 73.6075372 105.122908 134.844174 72.608395 82.6431529" />
                <polygon id="Path-274" stroke="#000000" fill="#000000" points="62.3206401 116.541699 26.6954772 107.370764 73.2027758 189.00648" />
                <polygon id="Path-275" stroke="#22231D" fill="#22231D" points="7.41464697 33.3583156 33.8992755 33.3583156 31.3126822 57.5083013 62.7260009 116.473684 26.126078 106.851855 20.8455515 74.9159999 7.41464697 66.3534069 0.145350671 70.7081269" />
                <polygon id="Path-276" stroke="#22231D" fill="#22231D" points="73.0231768 82.6318003 58.344446 49.2073494 90.1945785 59.5805577" />
                <polygon id="Path-277" stroke="#030303" fill="#030303" points="87.0608498 34.1901998 60.8520252 27.3189556 31.5616511 12.5239399 9.53908241 12.5239399 5.52427213 34.1901998 33.8470964 34.1901998 31.5616511 56.8776795 60.8520252 114.343285 63.5787567 81.7954437 72.1868201 81.7954437 56.9579723 47.6956458 90.3883866 58.9141558" />
                <polygon id="Path-278" stroke="#303E3F" fill="#303E3F" points="323.736111 63.0343358 300.357118 65.3371642 323.736111 134.178001" />
                <polygon id="Path-279" stroke="#000000" fill="#000000" points="324.184624 62.489995 319.053397 41.1510449 304.461902 17.7216679 289.39522 0.718673854 232.750186 22.9329161 196.703167 41.1510449 165.42975 51.7484022 187.743772 73.6959076 222.173575 58.7497513 258.817295 51.7484022 279.361962 51.7484022 298.978977 65.3114784" />
              </g>
            </g>
            <g id="branch" transform="translate(0.000000, 913.000000)">
              <polygon id="Path-280" stroke="#502D0F" fill="#502D0F" points="749.348858 170.063225 951.537299 71.7910429 749.348858 96.04725" />
              <polygon id="Path-281" stroke="#683E1B" fill="#683E1B" points="749.366911 96.3519847 815.966262 27.280582 954.045941 70.8896101" />
              <polygon id="Path-282" stroke="#563010" fill="#563010" points="816.563295 27.1411516 750.716669 94.987437 750.716669 1.54465715" />
              <polygon id="Path-283" stroke="#663C18" fill="#663C18" points="750.382166 0.997822097 711.699949 33.7759887 743.858665 74.6761692 750.382166 99.2002939" />
              <polygon id="Path-284" stroke="#502D0F" fill="#502D0F" points="749.49516 170.209169 612.407652 107.960497 649.617693 90.4965684 678.422104 85.1184451 703.579315 85.1184451 725.282922 99.154727" />
              <polygon id="Path-285" stroke="#371F09" fill="#371F09" points="589.959567 84.674385 511.811397 66.6701543 516.181431 94.5493425 522.741012 107.351459 530.649001 168.55135 613.45578 107.351459" />
              <polygon id="Path-286" stroke="#724116" fill="#724116" points="529.389511 169.468837 613.348373 108.190009 749.035543 169.468837" />
              <polygon id="Path-287" stroke="#9D612D" fill="#9D612D" points="530.800012 169.588298 750.655023 294.049174 652.428284 169.588298" />
              <polygon id="Path-288" stroke="#875124" fill="#875124" points="652.021041 167.912238 859.149477 167.912238 751.622467 294.265812" />
              <polygon id="Path-289" stroke="#72451E" fill="#72451E" points="498.325343 229.453949 752.809602 295.434245 529.15244 166.013138" />
              <polygon id="Path-290" stroke="#371F09" fill="#371F09" points="529.128298 165.955914 499.600714 115.718201 488.797848 115.718201 486.707791 148.404909 499.600714 228.169263" />
              <polygon id="Path-291" stroke="#6E4929" fill="#6E4929" points="500.332627 227.450366 369.413138 294.623693 451.81252 139.755917" />
              <polygon id="Path-292" stroke="#724116" fill="#724116" points="424.552806 105.71395 325.221557 154.577539 452.477912 140.92986 446.496507 105.71395 433.713838 99.5495622" />
              <polygon id="Path-293" stroke="#6E431E" fill="#6E431E" points="453.481184 141.955408 325.692356 154.123879 369.225923 294.231104" />
              <polygon id="Path-294" stroke="#8A592F" fill="#8A592F" points="585.309222 252.362268 499.25401 228.379806 331.077201 313.947866" />
              <polygon id="Path-295" stroke="#874F1E" fill="#874F1E" points="369.403049 294.620242 124.794065 174.35146 328.889951 315.701399" />
              <polygon id="Path-296" stroke="#825228" fill="#825228" points="369.71007 296.867196 325.621407 153.87995 126.354346 175.099673" />
              <polygon id="Path-297" stroke="#774D29" fill="#774D29" points="327.956125 315.008066 110.441645 334.828927 125.629327 175.975581" />
              <polygon id="Path-298" stroke="#AB7240" fill="#AB7240" points="330.785412 315.32184 233.334138 402.739744 113.534904 331.223595" />
              <polygon id="Path-299" stroke="#825228" fill="#825228" points="126.819766 176.764819 1.30398325 148.467665 113.8829 327.995506" />
              <path id="Path-300" stroke="#979797" />
              <polygon id="Path-301" stroke="#8A592F" fill="#8A592F" points="117.13633 327.165497 1.74972875 383.431899 1.74972875 147.432716" />
              <polygon id="Path-302" stroke="#A36A3A" fill="#A36A3A" points="234.254677 402.383768 0.171687227 458.952458 0.171687227 382.786337 109.230751 324.029908" />
              <polygon id="Path-303" stroke="#A36A3A" fill="#A36A3A" points="229.266419 404.311451 333.678465 312.396198 479.089558 346.553802" />
              <polygon id="Path-304" stroke="#AB7240" fill="#AB7240" points="479.315554 346.441509 585.350643 250.597724 334.526317 313.099735" />
            </g>
          </g>
        </g>
      </svg>;
  }
}

export default Miles
