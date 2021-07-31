interface Props {
   setMode: any;
}

const NoInternetModal = ({ setMode }: Props) => {
   return (
      <div className="offline-container">
         <div className="offline-modal-wrapper">
            <button className="btn btn-close" onClick={() => setMode('online')}>X</button>
            <svg width="102" height="108" viewBox="0 0 102 108" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M81.583 73.5799C82.2509 73.5799 82.7923 73.0368 82.7923 72.3667C82.7923 71.6967 82.2509 71.1536 81.583 71.1536C80.9152 71.1536 80.3738 71.6967 80.3738 72.3667C80.3738 73.0368 80.9152 73.5799 81.583 73.5799Z" fill="#F9D4CA"/>
            <path opacity="0.2" d="M27.4756 64.9467L13.78 70.2507C13.78 70.2507 50.6204 90.1692 55.2325 91.7209C59.8445 93.2727 58.3541 77.5297 58.3541 77.5297L27.4756 64.9467Z" fill="#514800"/>
            <path d="M43.5336 75.1317L30.8504 67.3167L7.19946 52.7587C7.19946 52.7587 11.3616 52.8715 12.9364 52.7587C15.13 52.6176 17.8579 52.3637 20.8388 51.9405C21.1482 51.8841 21.4575 51.8558 21.7669 51.7994C28.2632 50.5862 29.3318 47.0032 29.3318 47.0032L43.5336 75.1317Z" fill="#ED7655"/>
            <path opacity="0.2" d="M43.5334 75.1317L30.8502 67.3167L21.7385 51.7994C28.2348 50.5862 29.3035 47.0032 29.3035 47.0032L43.5334 75.1317Z" fill="#514800"/>
            <path opacity="0.2" d="M56.4417 106.787C56.4417 106.787 53.967 107.972 53.2358 107.972C52.5046 107.972 51.8297 107.549 51.8297 107.549C51.8297 107.549 46.7957 102.188 46.4302 101.624C46.0646 101.06 46.852 100.157 46.852 100.157L41.7337 94.627C31.1316 96.348 22.8354 90.9029 22.8354 90.9029C22.8354 90.9029 47.1895 73.0157 48.5956 74.116C50.0017 75.2445 54.4169 82.2132 54.3607 84.9217C54.3044 87.4608 53.9107 91.6364 44.6303 94.0063L56.4417 106.787Z" fill="#514800"/>
            <path d="M50.4234 84.1318C49.636 87.8277 45.6707 91.1004 40.2712 92.6521C39.5681 92.8496 38.837 93.0189 38.0777 93.16C37.2059 93.3293 36.3341 93.4421 35.406 93.5267C34.6467 93.5832 33.8874 93.6114 33.1562 93.6114C27.7849 93.5832 23.1165 91.8057 20.6136 89.0691C19.4887 87.8559 18.8138 86.417 18.6732 84.8653C18.6451 84.5267 18.6451 84.1882 18.6732 83.8496V80.2665H19.9949C22.3572 76.7963 27.5599 74.1161 33.7749 73.6082C41.0305 73.0158 47.4143 75.5549 49.6641 79.5612C49.8047 79.7869 49.9172 80.0408 50.0016 80.2665H50.3672V81.4515C50.4234 81.7336 50.4796 82.0158 50.5078 82.2979C50.6203 82.8904 50.564 83.5111 50.4234 84.1318Z" fill="#3D65EC"/>
            <path d="M20.642 85.4576V89.0407C19.5171 87.8275 18.8421 86.3886 18.7015 84.8369C18.6734 84.4984 18.6734 84.1598 18.7015 83.8212V80.2382H19.0109L20.642 85.4576Z" fill="#0A45C4"/>
            <path d="M50.4234 84.1316C49.636 87.8276 45.6707 91.1003 40.2712 92.652V89.0689C45.6707 87.5172 49.6079 84.2727 50.4234 80.5768V81.4232C50.4797 81.7053 50.5359 81.9874 50.564 82.2696C50.6203 82.8903 50.564 83.511 50.4234 84.1316Z" fill="#0A45C4"/>
            <path d="M50.4235 80.5486C49.636 84.2445 45.6708 87.489 40.2713 89.0408C39.5682 89.2382 38.837 89.4075 38.0777 89.5486C37.2059 89.7179 36.3341 89.8307 35.4061 89.9154C34.6468 89.9718 33.8875 90 33.1563 90C25.3664 89.9436 19.0951 86.2759 18.6733 81.2539C18.2233 75.7523 25.0008 70.7304 33.8031 69.9969C42.6054 69.2915 50.086 73.1567 50.536 78.6583C50.6203 79.3072 50.5641 79.9561 50.4235 80.5486Z" fill="#6D8BF1"/>
            <path d="M50.4797 80.21C50.4515 80.3229 50.4515 80.4357 50.4234 80.5486C49.636 84.2445 45.6707 87.489 40.2712 89.0408C39.5682 89.2382 38.837 89.4075 38.0777 89.5486C37.2059 89.7179 36.3341 89.8307 35.4061 89.9154C34.6468 89.9718 33.8874 90 33.1563 90C25.6476 89.9436 19.5169 86.5298 18.7576 81.7617C18.7295 81.5925 18.7013 81.4232 18.7013 81.2539C18.2514 75.7523 25.0289 70.7304 33.8312 69.9969C42.6335 69.2915 50.1141 73.1567 50.564 78.6583C50.5922 79.1943 50.564 79.7022 50.4797 80.21Z" fill="white"/>
            <path opacity="0.5" d="M35.4062 72.6771C35.4062 72.6771 27.7569 73.5235 23.9885 79.7021C21.6825 83.5391 22.8355 85.6833 22.8355 85.6833C22.8355 85.6833 17.3516 82.8902 21.7106 76.4858C24.9166 71.8589 35.4062 72.6771 35.4062 72.6771Z" fill="#B3B3B3"/>
            <path opacity="0.5" d="M41.3961 73.2132L34.028 88.6458L29.4441 88.3919L33.9156 79.9562C33.0438 79.9562 32.3688 79.8998 32.3688 79.8998C29.9222 79.7869 30.569 78.8841 32.65 78.7712C33.2125 78.743 33.8593 78.7712 34.5061 78.8559L37.8808 72.4797C39.7088 71.8872 41.3961 73.2132 41.3961 73.2132Z" fill="#B3B3B3"/>
            <path opacity="0.5" d="M47.6676 75.2162C47.6676 75.2162 46.6552 81.5924 42.8586 87.2351C42.5493 87.6865 35.8843 89.3792 35.8843 89.3792L38.0778 84.4984C36.9529 84.4984 36.5873 84.0752 36.5873 84.0752C36.5873 84.0752 36.8404 84.0752 37.206 84.0187C37.206 84.0187 37.6841 83.9341 38.3872 83.793L43.0274 73.4952C44.4616 73.7209 47.6676 75.2162 47.6676 75.2162Z" fill="#B3B3B3"/>
            <path d="M32.0876 73.0157L34.6468 74.4828C34.6468 74.4828 40.2994 72.4515 46.4863 75.5831C46.4863 75.5831 43.9834 72.79 37.1216 72.6772C30.2316 72.5643 32.0876 73.0157 32.0876 73.0157Z" fill="white"/>
            <path d="M50.0296 78.6865C47.7799 74.6802 41.4242 72.1692 34.1405 72.7617C26.1818 73.4106 19.6293 78.6865 20.5574 83.8495C20.6417 84.3855 19.3481 83.5109 19.5731 84.0188C19.1794 83.3134 18.8981 82.5799 18.7856 81.7899C19.5731 76.9372 26.1256 71.5485 34.0842 70.9278C41.7335 70.2789 48.1454 74.3134 50.0296 78.6865Z" fill="#0A45C4"/>
            <path d="M35.9123 69.9404V71.3511C39.4838 71.3511 42.8304 72.1693 45.3052 73.6364C47.6112 75.0188 48.9892 76.8527 49.1579 78.7994C49.186 79.1943 49.186 79.5893 49.1017 79.9843V80.0125C49.1017 80.0972 49.0736 80.1818 49.0454 80.2665C48.3705 83.3699 44.7708 86.3041 39.8775 87.7147C39.2026 87.9122 38.5276 88.0815 37.8246 88.1944C37.009 88.3636 36.1654 88.4765 35.3217 88.5329C34.6749 88.5893 33.9999 88.6175 33.3812 88.6175H33.2125C26.435 88.5611 20.8386 85.5423 20.1918 81.5643C20.1637 81.4232 20.1637 81.2821 20.1356 81.1693C19.9669 79.0251 21.2042 76.8244 23.679 74.9906C26.3225 73.0157 29.9784 71.7461 33.9718 71.4357C34.6186 71.3793 35.2936 71.3511 35.9404 71.3511L35.9123 69.9404ZM35.9123 69.9404C35.2373 69.9404 34.5343 69.9686 33.8312 70.0251C25.0289 70.7304 18.2514 75.7523 18.7013 81.2539C18.7295 81.4232 18.7295 81.5925 18.7576 81.7617C19.545 86.5298 25.6476 89.9436 33.1563 90C33.2125 90 33.2688 90 33.3531 90C34.0281 90 34.7311 89.9718 35.4061 89.9154C36.306 89.8307 37.2059 89.7179 38.0777 89.5486C38.837 89.4075 39.5682 89.2382 40.2712 89.0407C45.6707 87.489 49.6079 84.2445 50.4234 80.5486C50.4516 80.4357 50.4797 80.3229 50.4797 80.21C50.564 79.7022 50.5922 79.1943 50.5359 78.6583C50.1422 73.6081 43.7865 69.9404 35.9123 69.9404Z" fill="#6D8BF1"/>
            <path d="M89.4012 52.5047C88.0514 55.9467 86.4484 59.4451 84.5079 62.9154L82.7081 61.0533L59.029 36.6489L57.3979 34.9561L40.3276 17.3793V0C40.3276 0 54.9794 1.97492 69.4343 4.0627C71.206 4.31661 72.9778 4.57053 74.7214 4.82445C76.2962 5.05016 77.8429 5.27586 79.3616 5.50157C80.1771 5.61442 80.9645 5.72727 81.752 5.84013C82.2863 5.92476 82.7925 5.98119 83.2987 6.06583C84.1986 6.2069 85.0704 6.31975 85.8859 6.46081C89.8231 7.05329 93.0572 7.58934 95.1101 7.98433C95.0539 8.01254 98.3442 29.3981 89.4012 52.5047Z" fill="#ED7655"/>
            <path d="M96.8535 59.163C97.5214 59.163 98.0628 58.6199 98.0628 57.9499C98.0628 57.2798 97.5214 56.7367 96.8535 56.7367C96.1857 56.7367 95.6443 57.2798 95.6443 57.9499C95.6443 58.6199 96.1857 59.163 96.8535 59.163Z" fill="#F9D4CA"/>
            <path d="M99.4127 49.0345C100.826 49.0345 101.972 47.885 101.972 46.4671C101.972 45.0491 100.826 43.8997 99.4127 43.8997C97.9993 43.8997 96.8535 45.0491 96.8535 46.4671C96.8535 47.885 97.9993 49.0345 99.4127 49.0345Z" fill="#F9D4CA"/>
            <path d="M11.952 66.5831C12.9615 66.5831 13.7799 65.7621 13.7799 64.7493C13.7799 63.7364 12.9615 62.9154 11.952 62.9154C10.9424 62.9154 10.124 63.7364 10.124 64.7493C10.124 65.7621 10.9424 66.5831 11.952 66.5831Z" fill="#F9D4CA"/>
            <path d="M23.904 47.9623C24.6184 47.9623 25.1976 47.3813 25.1976 46.6645C25.1976 45.9477 24.6184 45.3667 23.904 45.3667C23.1895 45.3667 22.6104 45.9477 22.6104 46.6645C22.6104 47.3813 23.1895 47.9623 23.904 47.9623Z" fill="#F9D4CA"/>
            <path d="M82.5112 13.0345C85.0703 28.7492 91.4541 37.9185 91.5103 38.0314L90.5542 38.7085L89.598 39.3856C89.2887 38.9342 82.8768 29.7931 80.2333 13.8527C71.8247 24.2069 61.4194 34.2508 58.9727 36.5925C58.6915 36.8464 58.5227 37.0157 58.4665 37.0721L56.8635 35.3511C56.8916 35.3229 57.0323 35.1818 57.3416 34.8997C59.6758 32.6709 70.2498 22.4295 78.6022 12.1035C65.2721 9.59249 59.6195 14.0784 59.5352 14.1348L58.7759 13.232L58.0165 12.3292C58.3259 12.0753 64.2316 7.2508 77.9835 9.59249C75.3118 8.04077 72.3871 6.20691 69.3499 4.00629C71.1216 4.26021 72.8933 4.51412 74.6369 4.76804C76.2961 5.86836 77.9272 6.8276 79.4458 7.70221C79.3896 6.96867 79.3333 6.20691 79.2771 5.44516C80.0926 5.55801 80.8801 5.67086 81.6675 5.78372C81.7237 6.48905 81.78 7.19437 81.8362 7.8997C82.3143 7.27901 82.7643 6.63011 83.1861 6.00942C84.086 6.15049 84.9578 6.26334 85.7734 6.40441C85.0141 7.53293 84.1985 8.66146 83.3267 9.78999C86.3358 11.3417 88.7544 12.3856 90.1324 12.9499C90.5823 13.1191 91.0604 13.3166 91.5103 13.4859L90.6948 15.6865C90.6667 15.6865 90.1886 15.489 89.3168 15.1505C86.9545 14.3323 84.6485 13.5988 82.5112 13.0345Z" fill="#FFAB00"/>
            <path opacity="0.2" d="M89.4013 52.5047C88.0514 55.9467 86.4484 59.4451 84.508 62.9153C84.4517 62.8589 83.6362 62.1818 82.7081 61.0533C80.8802 58.8809 78.4616 54.9874 79.5865 50.558L89.4013 52.5047Z" fill="#514800"/>
            <path opacity="0.2" d="M40.2712 12.2727L47.6674 13.5705L40.2712 17.3511V12.2727Z" fill="#514800"/>
            <path d="M98.7096 80.1254C98.4566 81 86.5045 85.7962 76.5773 89.3793C70.5029 91.5799 65.2159 93.3574 63.8379 93.5267C60.1819 93.9499 53.8544 92.116 50.9015 88.4483C50.6203 88.1097 50.1704 87.3762 49.5517 86.3323C48.4549 84.442 46.88 81.5361 45.024 78.0094C38.1621 65.0031 24.2977 37.326 20.7262 30.1881C20.2481 29.2288 20.6137 28.0721 21.5699 27.5925C22.2448 27.2257 23.0604 26.8307 23.904 26.4075C24.3821 26.1818 25.4508 25.5047 26.9412 24.6583C35.378 19.8903 57.2291 7.8997 60.7444 8.60503C63.7535 9.22572 65.244 12.837 65.244 12.837C65.244 12.837 78.0116 46.2696 82.7924 58.5705C82.933 58.9091 83.0455 59.2477 83.1861 59.558C83.8891 61.3919 84.3672 62.5768 84.536 62.9436C85.6609 65.4828 87.9106 72.395 92.129 75.2163C96.3474 78.0376 99.1315 78.7147 98.7096 80.1254Z" fill="#FFF0D2"/>
            <path d="M98.7097 80.1254C98.4566 81 89.7105 84.6113 79.7833 88.2226C79.5864 88.2226 70.9247 89.2383 64.9065 85.1191C58.7477 80.9154 25.507 28.6082 23.9041 26.3793L26.9413 24.6301C35.378 19.8903 57.2291 7.8997 60.7444 8.60503C63.7535 9.22572 65.244 12.837 65.244 12.837C65.244 12.837 83.383 60.3762 84.5079 62.9154C85.6328 65.4546 87.8825 72.3668 92.1009 75.1881C96.3193 78.0094 99.1315 78.7147 98.7097 80.1254Z" fill="#F7E5B1"/>
            <path d="M52.7295 80.1255L54.1356 82.7775L77.3366 70.928L75.8742 68.3888L52.7295 80.1255Z" fill="#FFF0D2"/>
            <path opacity="0.2" d="M98.7097 80.1254C98.4566 81 86.5046 85.7963 76.5774 89.3793C70.503 91.58 65.2159 93.3574 63.8379 93.5267C60.182 93.9499 53.8545 92.116 50.9016 88.4483C50.6204 88.1097 50.1705 87.3762 49.5518 86.3323L82.7643 58.5706C82.8206 58.8527 82.9331 59.1912 83.158 59.558C83.8611 61.3919 84.3392 62.5768 84.5079 62.9436C85.6328 65.4828 87.8826 72.395 92.101 75.2163C96.3193 78.0376 99.1316 78.7148 98.7097 80.1254Z" fill="#514800"/>
            <path opacity="0.2" d="M72.5841 81.3668C72.5841 81.3668 68.9844 82.2978 68.1688 83.9059C67.3533 85.5141 71.5435 86.3323 72.8653 86.6144C74.187 86.8965 77.4211 85.5423 78.1804 84.9781C78.9397 84.4138 79.924 84.3574 79.3053 83.3417C78.6866 82.326 74.637 81.2821 72.5841 81.3668Z" fill="#514800"/>
            <path d="M60.5476 10.0157C61.1382 10.1567 61.6444 10.4671 62.0943 10.8338C62.3756 11.0313 62.6005 11.257 62.7693 11.511C63.5004 12.3573 63.9223 13.2884 63.9504 13.373C64.8222 15.6301 82.1175 60.9686 83.2424 63.5078C83.4111 63.8746 83.5799 64.3542 83.8048 64.8903C85.1547 68.1912 87.3764 73.7492 91.3416 76.373C92.8321 77.3887 94.1539 78.1222 95.2225 78.7147C95.8131 79.0533 96.4599 79.42 96.9099 79.7022L98.4566 80.4075C98.6253 80.2947 98.7097 80.21 98.7378 80.1254C99.1597 78.7147 96.3474 78.0094 92.1291 75.1881C87.9107 72.3668 85.6609 65.4545 84.536 62.9153C83.4111 60.3762 65.244 12.837 65.244 12.837C65.244 12.837 63.7535 9.22569 60.7445 8.605C60.632 8.57678 60.5195 8.57678 60.407 8.57678V9.95923C60.4351 9.95923 60.4913 9.98744 60.5476 10.0157Z" fill="#F7E5B1"/>
            <path d="M44.6304 36.9311L46.0365 39.5549L69.2375 27.7054L67.7751 25.1662L44.6304 36.9311Z" fill="#FFF0D2"/>
            <path d="M37.178 49.3448L38.5841 51.9687L61.7851 40.1191L60.3227 37.58L37.178 49.3448Z" fill="#ED7655"/>
            <path d="M43.168 62.2947L44.5741 64.9467L67.8032 53.0972L66.3408 50.558L43.168 62.2947Z" fill="#FFF0D2"/>
            <path d="M49.0173 73.975L50.4235 76.627L73.6244 64.7775L72.1621 62.2383L49.0173 73.975Z" fill="#FFF0D2"/>
            <path d="M40.2712 55.6363L41.6774 58.2884L64.9065 46.4388L63.4441 43.8997L40.2712 55.6363Z" fill="#F9D4CA"/>
            <path d="M39.1746 25.815L40.5807 28.4388L63.8098 16.5893L62.3474 14.0501L39.1746 25.815Z" fill="#ED7655"/>
            <path d="M41.9023 31.373L43.3085 33.9969L66.5095 22.1473L65.0471 19.6082L41.9023 31.373Z" fill="#F9D4CA"/>
            <path d="M83.2986 43.4483C82.7924 54.2257 75.0868 56.2853 75.0868 56.2853L70.4466 70.2508L64.9627 68.4169C64.9627 68.4169 64.3441 65.257 64.4565 63.3386C64.5409 62.0407 64.5128 60.4326 65.5252 57.9781C66.0033 56.8495 66.7063 55.5235 67.7469 53.9436C71.6278 48.1881 75.6211 44.0125 76.8867 39.1317C77.7303 35.8589 76.4086 34.1379 75.4243 33.348C74.9462 32.953 74.5525 32.7837 74.5525 32.7837C74.5525 32.7837 75.9024 30.1881 78.4896 30.3009C78.8552 30.3292 79.2489 30.3856 79.6145 30.4984C80.88 30.9216 82.0612 32.1066 82.7361 34.7868C83.2423 36.79 83.4954 39.5549 83.2986 43.4483Z" fill="#3D65EC"/>
            <path d="M70.4468 70.2508L64.7379 68.3605C64.7379 68.3605 64.3161 65.257 64.4567 63.3385C64.541 62.0407 64.5129 60.4326 65.5253 57.978L71.1498 59.8119C71.1498 59.8119 70.278 65.9906 70.4468 70.2508Z" fill="#0A45C4"/>
            <path d="M82.1737 39.5549L76.8867 39.1599C77.7304 35.8872 76.4086 34.1662 75.4243 33.3762C75.4243 33.3762 77.6179 30.837 79.6146 30.5549C80.3739 30.442 81.0769 30.6677 81.6675 31.4295C82.3706 32.3887 82.6799 33.6301 82.7362 34.8433C82.9049 37.2414 82.1737 39.5549 82.1737 39.5549Z" fill="#0A45C4"/>
            <path d="M75.0869 23.9813L66.0877 43.4483L59.4227 42.8277C59.4227 42.8277 59.2258 38.8778 60.2382 34.6458C60.3788 34.0816 60.5476 33.5173 60.7163 32.9531C61.1944 31.5142 61.8693 30.2164 62.7411 29.0878C63.9504 27.5079 65.5815 26.2665 67.6625 25.5048C71.7965 24.0377 75.0869 23.9813 75.0869 23.9813Z" fill="#3D65EC"/>
            <path d="M66.0877 43.4483L59.4227 42.8276C59.4227 42.8276 59.2258 38.8777 60.2382 34.6458L65.9471 35.21C65.9471 35.21 65.6658 39.9216 66.0877 43.4483Z" fill="#0A45C4"/>
            <path d="M68.1125 29.511C66.9876 31.3166 66.3126 33.7147 66.3126 33.7147L60.7444 32.9812C61.2225 31.5423 61.8974 30.2445 62.7692 29.116L68.1125 29.511Z" fill="#0A45C4"/>
            <path d="M66.0876 43.4483H72.134C72.134 43.4483 71.8527 32.5862 78.3209 32.3041C84.7891 32.0219 81.8362 43.7304 80.1489 46.5517C78.4615 49.373 72.5558 56.1442 71.1497 59.8119C69.7436 63.4796 70.4466 70.2508 70.4466 70.2508L77.7585 67.5705C77.7585 67.5705 76.8585 62.5486 79.952 57.7523C83.0455 52.9561 88.923 50.3041 88.8106 36.8182C88.6981 24.2633 77.9553 23.2758 75.0868 23.9812C72.7527 24.5454 67.8594 27.141 66.0876 34.5611C64.9346 39.4138 66.0876 43.4483 66.0876 43.4483Z" fill="#6D8BF1"/>
            <path d="M71.8528 26.8025C71.8528 26.8025 74.4963 25.2508 78.574 26.2382C82.6518 27.2257 85.7452 29.7367 86.2233 33.9968C86.7014 38.257 85.8859 42.9404 85.6328 44.2947C85.3797 45.6489 83.9735 48.7523 82.5112 50.7273C81.0488 52.7022 77.3929 55.5799 76.2961 59.8965C75.1993 64.2132 75.3118 65.8213 75.3118 65.8213L70.8123 67.4577C70.8123 67.4577 71.1216 69.2069 71.1497 69.1505C71.1778 69.094 76.8867 67.232 76.8867 67.232C76.8867 67.232 77.0554 62.7743 77.7304 61.279C78.4053 59.7837 79.6427 56.8213 82.1175 54C84.5922 51.1787 87.0108 47.3699 87.517 43.7304C88.0232 40.0909 88.2481 35.605 87.8263 32.8965C87.4045 30.1881 85.1547 27.0282 82.7643 25.8997C80.3739 24.7711 77.8147 23.5862 75.0869 24.5454C72.359 25.5047 71.8528 26.8025 71.8528 26.8025Z" fill="#3D65EC"/>
            <path d="M76.7742 24.9405C77.7022 24.9405 80.88 25.1098 83.5798 27.1975C86.2514 29.2571 87.6013 32.5016 87.6575 36.8464C87.7419 46.7775 84.4516 50.5298 81.555 53.8872C80.6269 54.9593 79.727 55.975 78.9677 57.1599C76.4648 61.0533 76.3805 65.0596 76.5211 66.837L71.4309 68.6991C71.3184 66.5831 71.2622 62.6333 72.1621 60.2352C73.0058 58.0627 75.7336 54.4515 77.8991 51.5455C79.2489 49.7681 80.4301 48.2163 81.0769 47.1442C81.8643 45.8464 82.6799 43.279 83.1017 40.9091C83.4954 38.6803 83.6923 35.5486 82.5111 33.4326C81.6675 31.9656 80.2895 31.1756 78.5178 31.1756C78.4334 31.1756 78.349 31.1756 78.2365 31.1756C76.0149 31.2602 73.0901 32.4734 71.684 37.6928C71.2059 39.4703 71.0372 41.2195 71.0091 42.3198H66.9594C66.7063 40.9656 66.3689 38.0596 67.1563 34.8151C67.8875 31.7681 69.2092 29.3135 71.1216 27.5079C72.9776 25.7304 74.8056 25.1944 75.3118 25.0815C75.5649 25.0251 76.0149 24.9405 76.7742 24.9405ZM76.7742 23.812C76.0711 23.812 75.4805 23.8684 75.0868 23.9812C72.7527 24.5455 67.8594 27.1411 66.0876 34.5612C64.9346 39.4138 66.0876 43.4483 66.0876 43.4483H72.134C72.134 43.4483 71.8527 32.5862 78.3209 32.3041C78.4053 32.3041 78.4615 32.3041 78.5459 32.3041C84.7047 32.3041 81.8081 43.7587 80.1489 46.5518C78.4615 49.3731 72.5558 56.1442 71.1497 59.812C69.7436 63.4797 70.4466 70.2508 70.4466 70.2508L77.7585 67.5706C77.7585 67.5706 76.8585 62.5486 79.952 57.7524C83.0455 52.9562 88.923 50.3041 88.8106 36.8182C88.6981 26.0972 80.8519 23.812 76.7742 23.812Z" fill="#6D8BF1"/>
            <path d="M75.2837 72.3668L73.7651 79.9561L73.2027 82.7492L67.6063 81.6207C66.3127 81.3668 65.4128 80.0972 65.1315 78.4044C64.9909 77.5862 64.9909 76.6552 65.1878 75.7242C65.7502 72.8464 67.775 70.8433 69.6874 71.2383L75.2837 72.3668Z" fill="#3D65EC"/>
            <path d="M73.7652 79.9561L73.2027 82.7493L67.6064 81.6207C66.3127 81.3668 65.4128 80.0972 65.1316 78.4044L73.7652 79.9561Z" fill="#0A45C4"/>
            <path d="M77.7006 78.2545C78.2796 75.3834 77.2065 72.7428 75.3037 72.3566C73.4008 71.9704 71.3889 73.9847 70.8099 76.8558C70.2309 79.7269 71.304 82.3674 73.2068 82.7537C75.1096 83.1399 77.1216 81.1255 77.7006 78.2545Z" fill="#6D8BF1"/>
            <path d="M73.6246 73.8622C73.6246 73.8622 75.7056 74.0879 75.6494 76.9656C75.5931 79.8433 73.8495 81.2258 73.1465 81.5079C73.1465 81.5079 74.9744 83.0314 76.1275 80.718C77.2805 78.4045 77.168 76.4013 77.168 75.1317C77.168 73.8622 75.9025 72.8747 74.7495 72.9876C73.5964 73.1004 73.6246 73.8622 73.6246 73.8622Z" fill="#5376EE"/>
            <path d="M74.8056 73.4388C74.8899 73.4388 74.9743 73.4388 75.0587 73.467C76.4367 73.7492 76.971 76.0909 76.5773 78.0376C76.2117 79.7868 75.0024 81.6771 73.6526 81.6771C73.5682 81.6771 73.4838 81.6771 73.3995 81.6489C72.6683 81.5078 72.2464 80.746 72.0777 80.3228C71.7121 79.42 71.6277 78.2633 71.8527 77.1065C72.2464 75.3291 73.4557 73.4388 74.8056 73.4388ZM74.8056 72.3103C73.062 72.3103 71.3184 74.2288 70.7841 76.8526C70.1935 79.7022 71.2903 82.3542 73.2026 82.7492C73.3713 82.7774 73.5119 82.8056 73.6807 82.8056C75.4243 82.8056 77.1679 80.8871 77.7022 78.2633C78.2928 75.4138 77.196 72.7617 75.2837 72.3667C75.143 72.3385 74.9743 72.3103 74.8056 72.3103Z" fill="#6D8BF1"/>
            <path opacity="0.2" d="M48.23 98.9154C48.23 98.9154 47.9488 96.9687 50.3673 95.0784L53.5451 98.2665L50.4517 101.37L48.23 98.9154Z" fill="#514800"/>
            <path d="M53.5733 98.2665L50.4798 101.37L41.4525 91.5236C40.9463 91.044 41.1432 90.0283 41.8462 89.2665C42.5774 88.5048 43.5617 88.3073 44.0679 88.7869L53.5733 98.2665Z" fill="#6D8BF1"/>
            <path d="M59.1415 103.034L55.7949 106.166L54.5576 107.323L49.608 101.991C49.0737 101.426 49.0737 100.495 49.5236 99.5924C49.7486 99.141 50.058 98.7178 50.4798 98.3228C51.7453 97.1379 53.4045 96.884 54.192 97.7022L59.1415 103.034Z" fill="#3D65EC"/>
            <path d="M55.6543 105.997L54.4169 107.154L49.6361 101.991C49.1018 101.426 49.1018 100.495 49.5517 99.5925L55.6543 105.997Z" fill="#0A45C4"/>
            <path d="M58.2962 106.701C59.556 105.52 59.9411 103.88 59.1565 103.038C58.3718 102.195 56.7145 102.469 55.4548 103.65C54.195 104.831 53.8099 106.471 54.5946 107.314C55.3792 108.156 57.0365 107.882 58.2962 106.701Z" fill="#6D8BF1"/>
            <path d="M42.0711 41.3887L35.378 44.7179C34.6468 45.0846 33.8032 44.8025 33.4094 44.0972L32.3689 42.1222L27.7006 33.3762C27.3069 32.6708 27.5881 31.768 28.2912 31.373L34.7593 27.79C35.4905 27.395 36.3904 27.6489 36.7841 28.3824L41.3681 36.8746L42.718 39.3574C43.1398 40.0909 42.8305 41.0219 42.0711 41.3887Z" fill="#ED7655"/>
            <path d="M42.0711 41.3888L35.378 44.718C34.6468 45.0847 33.8031 44.8026 33.4094 44.0973L32.3689 42.1224C32.397 42.0095 32.622 39.0471 35.7436 37.4108C38.7808 35.8308 41.2556 36.8465 41.3681 36.8747L42.7179 39.3575C43.1398 40.091 42.8304 41.022 42.0711 41.3888Z" fill="white"/>
            <path d="M38.1057 89.5768V93.1598C37.234 93.3291 36.3622 93.442 35.4341 93.5266C34.6748 93.583 33.9155 93.6113 33.1843 93.6113V90C33.9155 90 34.6748 89.9718 35.4341 89.9153C36.334 89.8589 37.234 89.7461 38.1057 89.5768Z" fill="#0A45C4"/>
            <path d="M33.9156 79.9844C33.9156 79.9844 35.2936 79.9844 35.7435 79.9844C35.7435 79.9844 34.6468 80.7461 33.2688 80.7461C32.6782 80.7461 32.8469 80.2383 33.9156 79.9844Z" fill="white"/>
            <path d="M37.8527 83.0314C40.0182 82.8057 42.0711 82.9467 42.0711 82.9467C42.0711 82.9467 39.6807 83.7367 37.459 83.9906C35.2655 84.2446 34.1687 84.1035 34.1124 83.9906C34.0281 83.7367 36.0248 83.2289 37.8527 83.0314Z" fill="white"/>
            <path d="M34.8717 38.8777C36.5491 38.8777 37.9089 37.5135 37.9089 35.8307C37.9089 34.1479 36.5491 32.7837 34.8717 32.7837C33.1943 32.7837 31.8345 34.1479 31.8345 35.8307C31.8345 37.5135 33.1943 38.8777 34.8717 38.8777Z" fill="white"/>
            <path d="M53.1795 65.2571L48.7924 67.5423C48.483 67.6834 48.3986 68.0784 48.5674 68.3605L49.8891 70.6176C50.0579 70.8997 50.3953 70.9843 50.6766 70.8433L54.9793 68.4452C55.2605 68.2759 55.373 67.9373 55.2043 67.6552L53.9669 65.4828C53.7981 65.2006 53.4607 65.116 53.1795 65.2571Z" fill="#6D8BF1"/>
            <path d="M16.7891 70.7869L12.2333 72.7618C11.9239 72.9029 11.7833 73.2697 11.9521 73.5518L13.1332 75.9217C13.2738 76.2038 13.6113 76.3167 13.8925 76.2038L18.3359 74.1161C18.6171 73.975 18.7577 73.6364 18.6171 73.3261L17.5203 71.069C17.4078 70.7869 17.0703 70.674 16.7891 70.7869Z" fill="#FFC95B"/>
            <path d="M0.0843672 39.3291C0.0843672 39.3291 -0.281224 38.0877 0.590571 36.1974C1.49049 34.3071 2.98098 31.909 5.1464 31.6269C7.31183 31.3448 7.45244 37.072 8.43672 38.4827C9.42101 39.8934 9.42101 39.9216 9.42101 39.9216C9.42101 39.9216 9.70223 42.63 5.62448 42.3761C1.54673 42.1222 0.168734 40.0344 0.0843672 39.3291Z" fill="#F9D4CA"/>
            <path d="M14.1455 38.0595L18.5326 42.7711C18.7576 42.9969 18.7294 43.3636 18.5045 43.5893C17.2952 44.6614 13.4424 47.4263 7.3961 45.4796C-9.66713e-05 43.0815 0.0842705 39.3574 0.0842705 39.3574C0.0842705 39.3574 3.12149 43.0815 7.31173 41.2194C8.80222 40.5423 10.9958 38.8213 12.2894 37.8903C12.88 37.4389 13.6674 37.5235 14.1455 38.0595Z" fill="#F29A82"/>
            <path d="M34.8719 4.79631C34.8719 4.79631 34.5906 4.09098 33.8876 2.79317C33.1845 1.49536 32.9033 1.74928 32.3971 2.28533C31.8909 2.82138 31.5534 5.10665 30.8504 6.46088C30.1473 7.81512 29.5005 8.66151 29.5005 8.66151C29.5005 8.66151 32.7908 9.81825 33.9438 7.73048C35.0687 5.6427 34.8719 4.79631 34.8719 4.79631Z" fill="#F9D4CA"/>
            <path d="M24.804 9.00009L23.8197 12.5549C23.7072 12.9781 23.9322 13.4296 24.3259 13.5988C25.7039 14.1349 28.8818 14.8684 32.0596 11.6239C36.2498 7.3073 34.8718 4.79633 34.8718 4.79633C34.8718 4.79633 34.1407 8.43582 30.5972 8.66153C29.3317 8.74617 27.2225 8.35118 26.0133 8.18191C25.4508 8.12548 24.9446 8.46404 24.804 9.00009Z" fill="#F4A893"/>
            <path d="M98.1189 70.7023C98.1189 70.7023 98.372 69.997 98.7376 68.5299C99.1032 67.0911 98.7095 67.0911 97.9783 67.1475C97.2471 67.1757 95.4754 68.671 94.0412 69.207C92.6069 69.7431 91.5664 69.9124 91.5664 69.9124C91.5664 69.9124 93.2256 72.9876 95.4754 72.2258C97.7252 71.4641 98.1189 70.7023 98.1189 70.7023Z" fill="#F9D4CA"/>
            <path d="M87.8543 67.0628L84.7608 69.0377C84.3952 69.2634 84.2546 69.7431 84.4514 70.138C85.0983 71.4641 86.9825 74.1443 91.5102 73.8622C97.5002 73.4954 98.1471 70.7023 98.1471 70.7023C98.1471 70.7023 95.1661 72.9029 92.4101 70.7023C91.4258 69.9123 90.1322 68.1913 89.3166 67.2603C88.9229 66.8371 88.3323 66.7525 87.8543 67.0628Z" fill="#F4A893"/>
            <path opacity="0.2" d="M92.1009 75.188C92.1009 75.188 87.1795 76.4011 88.0794 77.5579C89.0637 78.7993 89.1199 79.025 91.3978 79.5046C93.7039 79.9842 96.5161 77.8682 96.5161 77.8682L92.1009 75.188Z" fill="#514800"/>
            <path d="M76.8024 31.6269C76.8024 31.6269 74.8057 31.2037 72.6966 33.2069C70.5874 35.21 69.7156 41.953 69.7156 41.953H71.1217C71.1217 41.953 71.656 36.2821 73.5121 34.1661C75.087 32.3605 76.8024 31.6269 76.8024 31.6269Z" fill="#3D65EC"/>
            </svg>
            <h1>No internet connection</h1>
            <p>Seems like you're not connected to the internet!</p>
            <p>Check your connection and refresh the page.</p>
         </div>
      </div>
   )
}

export default NoInternetModal;