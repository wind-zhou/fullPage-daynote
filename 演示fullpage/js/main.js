$(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        sectionsColor: ['#f00', '#4BBFC3', '#7BAABE', '#0f0', '#00f'],
        scrollingSpeed: 1000,
        loopHorizontal: false,
        keyboardScrolling: false,
        continuousVertical: true,
        navigation: true,
        navigationPosition: 'left',
        controlArrowColor: '#f00',
        anchors: ["page1", "page2", "page3", 'page4', 'page5'], //为每页添加锚点
        afterLoad: function(anchor, MyIndex) {
            var index = ++MyIndex.index;

            if (index == 2) {
                $(".show").addClass("hinge")
            }

            if (index == 4) {
                $(".img").addClass("active")
            }
        },
        onLeave: function(Index, nextIndex, direction) {

            var index = ++Index.index;

            if (index == 2) {
                $(".show").removeClass("hinge")
            }

            if (index == 4) {
                $(".img").removeClass("active")
            }
        }
    });
});