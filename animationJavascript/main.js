const buttons = document.querySelectorAll(".exp-btn");
    const contents = document.querySelectorAll(".exp-content");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        // 清除選取樣式
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");

        // 顯示對應內容
        const target = button.getAttribute("data-target");
        contents.forEach(content => {
          content.style.display = content.id === target ? "block" : "none";
        });
      });
    });


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('#experience-menu li').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('#experience-menu li').forEach(li => li.classList.remove('selected'));
        tab.classList.add('selected');

        const tabId = tab.id;
        document.querySelectorAll('.tab').forEach(section => {
          section.style.display = 'none';
        });
        document.querySelector(`.tab.${tabId}`).style.display = 'block';
      });
    });
  });