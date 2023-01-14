export const Footer = ()=>{
    return (
        <footer className="w-full h-fit bottom-0 fixed bg-white mt-24 ">
            <div className="w-[100vw] px-1 flex-row justify-evenly">
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://news.coupang.com/" >회사소개</a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://ir.aboutcoupang.com/English/home/" >Investor Relations</a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://rocketyourcareer.kr.coupang.com" >인재채용</a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://wing.coupang.com/vendor/joining/welcome?inflow=WEB_FOOTER_B">입점 / 제휴문의</a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://csmessenger.coupang.com/cs-center/notice/main">공지사항</a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://csmessenger.coupang.com/cs-center/voc/main">고객의 소리</a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="/np/policies/terms">이용약관</a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://privacy.coupang.com/ko/center/coupang"><b>개인정보 처리방침</b></a>
              <a className="border-gray-400 border-r px-1 text-xs max-sm:text-[0.3rem]" href="https://rocketpay.coupang.com/rocketpay/operationTerms/coupangPcFooter">쿠팡페이 이용약관</a>

            </div>
            <div className="flex w-full justify-evenly gap-1.5 py-2 pl-2">
              <h1 className="text-[2vw]"><a href="/" title="COUPANG">COUPANG</a></h1>
              <div class=" flex gap-1">
                  <address className="w-1/3 text-[0.7rem] max-sm:text-footer">
                      상호명 및 호스팅 서비스 제공 : 쿠팡(주)<br/>
                      대표이사 : 강한승,박대준<br/>
                      서울시 송파구 송파대로 570 <br/>
                      사업자 등록번호 : 120-88-00767 <br/>
                      통신판매업신고 : 2017-서울송파-0680<br/>
                      <a href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=1208800767" class="licensee" title="사업자정  보 확인">사업자정보 확인 &gt;</a>
                  </address>
                  <div class="w-1/3 text-[0.7rem] max-sm:text-footer">
                      <a href="https://csmessenger.coupang.com/cs-center/chat/main" class="call-center" title="365 고객센터">
                          <strong>365고객센터</strong> | 전자금융거래분쟁처리담당<br/>
                          <em>1577-7011 (유료)</em>
                          서울시 송파구 송파대로 570<br/>
                          <span class="contact-fax">email : help@coupang.com</span>
                      </a>
                  </div>
                  <p class="w-1/3 text-[0.7rem] max-sm:text-footer">
                      <strong>우리은행 채무지급보증 안내</strong><br/>
              <span>
                  당사는 고객님이 현금 결제한 금액에 대해<br/>우리은행과 채무지급보증 계약을 체결하여<br/>안전거래를 보장하고 있습니다.<br/>
              </span>
                      {/* <a href="javascript:;" id="serviceCheck" class="service-check" title="서비스 가입사실 확인">서비스 가입사실 확인 &gt;</a> */}
                  </p>
              </div>
            </div>
            <div className="w-full h-fit bg-gray-500 px-1 py-2"> 
                <div className="w-5/6">
                    <div className="text-placeholder leading-[0.37rem] text-white">Among the products sold in the cyber mall, marketplace (open market) products sold by individual sellers registered in Coupang are included. In the case of marketplace (open market) products, Coupang is a mail-order broker and is not a party to mail-order sales. Coupang is not responsible for marketplace (open market) products, transaction information, and transactions. Coupang operates a trust management center (CM112@coupang.com) for consumer protection and safe transactions, and in case of related disputes, disputes are handled according to a separate dispute handling procedure.</div> 
                    <div className="text-placeholder leading-[0.37rem] text-white">Copyright © Coupang Corp. All rights reserved. 2010-2022 All Rights Reserved.</div>
                </div>
                <ul className="w-1/6"></ul>
            </div>
        </footer>
    )
}