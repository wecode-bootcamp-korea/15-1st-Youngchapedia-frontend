import React from 'react';
import '../Footer/Footer.scss';
function Footer() {
  return (
    <footer className="Footer">
      <section className="top">
        <span>
          지금까지
          <span>★ 592,354,294 개의 평가가 </span>
          쌓였어요.
        </span>
      </section>
      <section className="bottom">
        <div className="infoLeft">
          <ul className="policy">
            <li>서비스 이용약관</li>
            <li>개인정보 처리방침</li>
            <li>회사 안내</li>
          </ul>
          <ul className="policy">
            <li>고객센터</li>
            <li>cs@youngchapedia.co.kr, 02-123-4567</li>
          </ul>
          <ul className="policy">
            <li>제휴 및 대외 협력</li>
            <li>contact@youngcha.com, 02-123-4567</li>
          </ul>
          <ul className="company">
            <li>주식회사 영차</li>
            <li>대표 위코드</li>
            <li>서울특별시 강남구 테헤란로 427 위워크 선릉 2호점</li>
          </ul>
          <ul className="company">
            <li>사업자 등록 번호 123-12-123456</li>
          </ul>
          <ul className="company">
            <li>© 2020 Youngcha. Inc</li>
          </ul>
        </div>
        <div className="infoRight">
          <i className="fa fa-facebook" />
          <i className="fa fa-twitter" />
          <i className="fa fa-youtube" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
