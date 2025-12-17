// 需求：点击卡片切换颜色和文字，实现动态交互（符合实验“至少一处JS动态效果”要求）
const dynamicCard = document.getElementById('dynamic-card');
let isClicked = false; // 标记是否点击过

// 给卡片添加点击事件
dynamicCard.addEventListener('click', function() {
    if (!isClicked) {
        // 第一次点击：变色+显示动态
        this.style.backgroundColor = #19692c;
        this.style.transform = 'scale(1.02)'; // 轻微放大效果
        this.innerHTML = '最新动态：正在学习SpringBoot+MyBatis，准备做一个学生管理系统！';
        isClicked = true;
    } else {
        // 再次点击：恢复原样
        this.style.backgroundColor = #218838;
        this.style.transform = 'scale(1)';
        this.innerHTML = '点击查看我的最新动态';
        isClicked = false;
    }
});

// 额外添加：页面加载时导航栏淡入效果（优化用户体验，不影响渲染速度）
window.addEventListener('load', function() {
    const header = document.querySelector('.header');
    header.style.opacity = '0'; // 初始透明度0（隐藏）
    let opacity = 0;
    // 定时器逐步提高透明度，实现淡入
    const timer = setInterval(function() {
        opacity += 0.1;
        header.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(timer); // 透明度到1后停止定时器
        }
    }, 30); // 每30毫秒执行一次，速度适中
});