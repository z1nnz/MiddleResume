      document.addEventListener("DOMContentLoaded", function () {
        // 進度圓動畫 (程式能力區塊)
        document.querySelectorAll(".progress-circle").forEach((circle) => {
          const percent = parseInt(circle.dataset.percent);
          const progress = circle.querySelector(".progress");
          const text = circle.querySelector(".progress-text");
          const skill = text.textContent;
          const dashArray = 314;

          // 定義動畫函式
          const animateCircle = () => {
          // 先取消過渡效果並重置
          progress.style.transition = "none";
          progress.style.strokeDashoffset = dashArray;
          // 強制重繪 (取得邊界盒)
          progress.getBoundingClientRect();
          // 再設定過渡效果並啟動動畫
          progress.style.transition = "stroke-dashoffset 2s ease-in-out";
          progress.style.strokeDashoffset = dashArray - (dashArray * percent) / 100;
        };

          // 初次執行動畫
          setTimeout(animateCircle, 300);

          // 當滑鼠進入時，重新執行動畫並切換數字
          circle.addEventListener("mouseenter", () => {
            text.textContent = percent + "%";
            animateCircle();
          });

          // 當滑鼠離開時，恢復原始技能名稱
          circle.addEventListener("mouseleave", () => {
            text.textContent = skill;
          });
          });

        document.querySelectorAll(".progress-fill").forEach((fill) => {
          const percent = fill.dataset.percent;

          const animateFill = () => {
            fill.style.transition = "none";
            fill.style.width = "0%";
            void fill.offsetWidth;
            fill.style.transition = "width 2s ease-in-out";
            fill.style.width = percent + "%";
          };

          setTimeout(animateFill, 300);
          fill.parentElement.addEventListener("mouseenter", animateFill);
        });
      });
  