document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.querySelector(".survey-btn.no-btn");
  const popup = document.getElementById("feedback-popup");
  const closePopup = document.querySelector(".close-popup");

  if (!noBtn || !popup || !closePopup) {
    console.error("필수 요소가 존재하지 않습니다.");
    return;
  }

  noBtn.addEventListener("click", function () {
    popup.classList.add("show"); // 팝업 표시
  });

  closePopup.addEventListener("click", function () {
    popup.classList.remove("show"); // 팝업 숨기기
  });

  // ✅ 팝업 모달 동작
  const popupModal = document.getElementById("popupModal");
  const openPopupBtn = document.querySelector(".cta-btn.btm");
  const closePopupBtn = document.getElementById("closePopup");

  if (openPopupBtn) {
    openPopupBtn.addEventListener("click", function () {
      popupModal.style.display = "block";
    });
  }

  if (closePopupBtn) {
    closePopupBtn.addEventListener("click", function () {
      popupModal.style.display = "none";
    });
  }

  // ✅ Testimonials 슬라이더 무한 루프
  const track = document.querySelector(".testimonial-track");
  const testimonials = document.querySelectorAll(".testimonial");

  testimonials.forEach((testimonial) => {
    const clone = testimonial.cloneNode(true);
    track.appendChild(clone);
  });

  // ✅ Bottom CTA 및 Hero Scroll 버튼 처리
  const bottomCTA = document.querySelector(".bottom-cta");
  const heroSection = document.querySelector(".hero");
  const scrollBtn = document.querySelector(".scroll-btn");

  if (!bottomCTA || !heroSection || !scrollBtn) {
    console.error("필수 요소가 존재하지 않습니다.");
    return;
  }

  window.addEventListener("scroll", function () {
    let heroBottom = heroSection.getBoundingClientRect().bottom;
    let viewportHeight = window.innerHeight;

    if (heroBottom <= viewportHeight) {
      bottomCTA.classList.add("show");
      scrollBtn.style.opacity = "0"; // 스크롤 버튼 숨김
      scrollBtn.style.pointerEvents = "none";
    } else {
      bottomCTA.classList.remove("show");
      scrollBtn.style.opacity = "1"; // 스크롤 버튼 다시 보이기
      scrollBtn.style.pointerEvents = "auto";
    }
  });

  // ✅ Feature 섹션 스크롤 시 등장 애니메이션 (JS 효과 정상 작동)
  const features = document.querySelectorAll(".feature");

  function checkScroll() {
    features.forEach((feature, index) => {
      const featureTop = feature.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (featureTop < windowHeight * 0.8) {
        feature.classList.add("visible");

        // 방향성 애니메이션 추가 (짝수는 왼쪽, 홀수는 오른쪽에서 등장)
        if (index % 2 === 0) {
          feature.classList.add("slide-left");
        } else {
          feature.classList.add("slide-right");
        }
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // ✅ DOM 로드 후 첫 번째 체크 실행 (화면이 깨지는 문제 방지)
});
