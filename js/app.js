var today = new Date();
var todayDate = today.getMonth() + 1 + '/' + today.getFullYear();
var timeline_dates = [  {date: "10/2016",
                        title: "Start education at University of Science and Technology",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius erat vitae dolor bibendum sollicitudin. Fusce vehicula purus justo, quis gravida nulla ultrices vel. Proin venenatis diam massa, non facilisis libero tempor sed. Suspendisse bibendum augue ac nisl ultricies dapibus. Curabitur cursus rhoncus turpis sed consectetur. Duis lorem metus, tristique ut viverra non, luctus et eros. Sed nec pretium magna, ut lobortis erat. Maecenas eleifend turpis dui, sit amet sodales risus sollicitudin non. In maximus sagittis tempor."}, 
                        {date: "01/2020",
                        title: "Engineer's degree at University of Science and Technology",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius erat vitae dolor bibendum sollicitudin. Fusce vehicula purus justo, quis gravida nulla ultrices vel. Proin venenatis diam massa, non facilisis libero tempor sed. Suspendisse bibendum augue ac nisl ultricies dapibus. Curabitur cursus rhoncus turpis sed consectetur. Duis lorem metus, tristique ut viverra non, luctus et eros. Sed nec pretium magna, ut lobortis erat. Maecenas eleifend turpis dui, sit amet sodales risus sollicitudin non. In maximus sagittis tempor."},
                        {date: "04/2020",
                        title: "NOKIA - tester automative",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius erat vitae dolor bibendum sollicitudin. Fusce vehicula purus justo, quis gravida nulla ultrices vel. Proin venenatis diam massa, non facilisis libero tempor sed. Suspendisse bibendum augue ac nisl ultricies dapibus. Curabitur cursus rhoncus turpis sed consectetur. Duis lorem metus, tristique ut viverra non, luctus et eros. Sed nec pretium magna, ut lobortis erat. Maecenas eleifend turpis dui, sit amet sodales risus sollicitudin non. In maximus sagittis tempor."}, 
                        {date: "02/2021",
                        title: "NOKIA - SCRUM Master",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius erat vitae dolor bibendum sollicitudin. Fusce vehicula purus justo, quis gravida nulla ultrices vel. Proin venenatis diam massa, non facilisis libero tempor sed. Suspendisse bibendum augue ac nisl ultricies dapibus. Curabitur cursus rhoncus turpis sed consectetur. Duis lorem metus, tristique ut viverra non, luctus et eros. Sed nec pretium magna, ut lobortis erat. Maecenas eleifend turpis dui, sit amet sodales risus sollicitudin non. In maximus sagittis tempor."}, 
                        {date: "07/2021",
                        title: "Master's degree at University of Science and Technology",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius erat vitae dolor bibendum sollicitudin. Fusce vehicula purus justo, quis gravida nulla ultrices vel. Proin venenatis diam massa, non facilisis libero tempor sed. Suspendisse bibendum augue ac nisl ultricies dapibus. Curabitur cursus rhoncus turpis sed consectetur. Duis lorem metus, tristique ut viverra non, luctus et eros. Sed nec pretium magna, ut lobortis erat. Maecenas eleifend turpis dui, sit amet sodales risus sollicitudin non. In maximus sagittis tempor."}, 
                        {date: todayDate,
                        title: "And we are here...",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius erat vitae dolor bibendum sollicitudin. Fusce vehicula purus justo, quis gravida nulla ultrices vel. Proin venenatis diam massa, non facilisis libero tempor sed. Suspendisse bibendum augue ac nisl ultricies dapibus. Curabitur cursus rhoncus turpis sed consectetur. Duis lorem metus, tristique ut viverra non, luctus et eros. Sed nec pretium magna, ut lobortis erat. Maecenas eleifend turpis dui, sit amet sodales risus sollicitudin non. In maximus sagittis tempor."}]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function makeDateString(date) {
    var month = date.split('/')[0];
    var year = date.split('/')[1];
    
    if (month.charAt(0) == '0') {
        month = month.charAt(1);
    }

    return months[month-1] + ", " + year;
}

function appendPointsToTimeline(width, number) {
    var circle = document.createElement("div");
    var popupDate = document.createElement("div");

    circle.classList.add("timeline__point");
    circle.id = "point_" + number;
    if (width != '0') {
        circle.style.left = width - 1 + '%';
    }

    popupDate.classList.add("timeline__popupDate");
    popupDate.innerHTML = makeDateString(timeline_dates[number]["date"]);
    popupDate.id = "popup_" + number;

    document.querySelector('.timeline__line').appendChild(circle);
    document.querySelector('#point_' + number).appendChild(popupDate);
}

function appendPipelineToTimeline(width, year) {
    var pipeline = document.createElement("div");

    pipeline.classList.add('timeline__pipeline');
    pipeline.style.left = width - 3 + '%'
    pipeline.innerHTML = year;

    document.querySelector('.timeline__line').appendChild(pipeline);
}

function makeTimeline() {
    var firstDate = timeline_dates[0]["date"];
    var lastDate = timeline_dates[timeline_dates.length-1]["date"];

    var firstMonths = parseFloat(firstDate.split('/')[1]) * 12 + parseFloat(firstDate.split('/')[0]);
    var lastMonths = parseFloat(lastDate.split('/')[1]) * 12 + parseFloat(lastDate.split('/')[0]);
    var difference = lastMonths - firstMonths;
    for (var i = 0; i < timeline_dates.length; i++) {
        var current = parseFloat(timeline_dates[i]["date"].split('/')[1]) * 12 + parseFloat(timeline_dates[i]["date"].split('/')[0]);
        var width = Math.round((current - firstMonths)*100/difference)
        appendPointsToTimeline(width, i);
    }

    var firstMonthSplit = timeline_dates[0]["date"].split('/');
    var lastMonthSplit = timeline_dates[timeline_dates.length - 1]["date"].split('/');

    var firstWidth = (12 - firstMonthSplit[0])*100/difference
    appendPipelineToTimeline(firstWidth, firstMonthSplit[1]);
    for (var year = parseInt(firstMonthSplit[1]) + 1; year < lastMonthSplit[1]; year++) {
        width = 12 - firstMonthSplit[0] + (year - firstMonthSplit[1]) * 12;
        appendPipelineToTimeline(width*100/difference, year);
    }

    document.querySelector('.timeline__point').classList.add('timeline__point--active');
}

function makeTimelineDescription() {
    for (var i = 0; i < timeline_dates.length; i++) {
        var event = document.createElement('div');
        event.classList.add('event');
        event.id = "event_" + i;
        document.querySelector('.timeline__description').appendChild(event);

        var title = document.createElement('div');
        var content = document.createElement('div');

        title.classList.add('event__title');
        title.id = 'event-title_' + i;
        title.innerHTML = timeline_dates[i]["title"];
        document.querySelector('#event_' + i).appendChild(title);

        content.classList.add('event__content');
        content.id = 'event-content_' + i;
        content.innerHTML = timeline_dates[i]["description"];
        document.querySelector('#event_' + i).appendChild(content);
    }
}

function setupDefaultTextFields() {
    var date = document.querySelector('.timeline__date');
    date.innerHTML = makeDateString(timeline_dates[0]["date"]);

    var event = document.querySelector('.event');
    event.classList.add('active')
}

function dragElement(elmnt, max) {
    var pos1 = 1000, pos3 = 0;
    var moved = false;
    var cardId = elmnt.id.split('_')[1];
  
    var card = document.querySelector('#card_' + cardId);
    var card_content = document.querySelector('#card__content_' + cardId);

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        card.classList.remove('card--transition');
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        max = window.innerWidth;
        moved = true;
        elmnt.classList.add('card__sticker--active');
        card_content.classList.add('card__content--active');
        card.style.zIndex = '10';
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        // set the element's new position:
        if (pos3 > 0 && pos3 < max) {
            card.style.left = (card.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        left = returnPosition(card.style.left);
        max = window.innerWidth;
        if (left < (2 * max / 3)) {
            openCard(cardId);
        } else {
            closeCard(cardId);
        }

        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function openCard(cardId) {
    var card = document.querySelector('#card_' + cardId);
    var card_content = document.querySelector('#card__content_' + cardId);
    var card_sticker = document.querySelector('#sticker_' + cardId);
    var card_close = document.querySelector('#close_' + cardId);

    card_close.classList.add('card__close--active');
    card_content.classList.add('card__content--active');
    card_sticker.classList.add('card__sticker--active');
    card.classList.add('card--transition');
    card.style.zIndex = '20';
    card.style.left = '0px'; 
}

function closeCard(cardId) {
    var card = document.querySelector('#card_' + cardId);
    var card_content = document.querySelector('#card__content_' + cardId);
    var card_close = document.querySelector('#close_' + cardId);
    var card_sticker = document.querySelector('#sticker_' + cardId);

    card.style.zIndex = '2';
    card.style.left = '100vw';
    card_content.classList.remove('card__content--active');
    card_sticker.classList.remove('card__sticker--active');
    card_close.classList.remove('card__close--active');

    card.classList.add('card--transition');
    setTimeout(function() {
        card.classList.remove('card--transition');
    }, 300);
}

function returnPosition(position) {
    var substring = position.substring(0, position.length - 2);
    return substring;
}

function followCursorPosition(event) {
    var cursor1 = document.querySelector('.cursor__one');
    var cursor2 = document.querySelector('.cursor__two');

    cursor1.style.display = "block";
    cursor1.style.left = event.clientX + 'px';
    cursor1.style.top = event.clientY + 'px';

    cursor2.style.display = "block";
    cursor2.style.left = event.clientX + 2 + 'px';
    cursor2.style.top = event.clientY + 2 + 'px';
}

function addClickMeOnCursor() {
    var cursor = document.querySelector('.cursor__one')

    cursor.classList.add("cursor__one--click");

    document.querySelector('.cursor__text').innerHTML = "click";
    document.querySelector('.cursor__two').style.opacity = "0";
}
function removeClickMeOnCursor() {
    var cursor = document.querySelector('.cursor__one');
    cursor.classList.remove("cursor__one--click");
    document.querySelector('.cursor__text').innerHTML = "";
    document.querySelector('.cursor__two').style.opacity = "1";
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('mousemove', followCursorPosition);

    makeTimeline();
    makeTimelineDescription();
    setupDefaultTextFields();

    document.querySelectorAll('.card__sticker').forEach(function(item) {
        dragElement(item);
        item.addEventListener("mouseenter", function() {
            var id = item.id.split('_')[1];
            addClickMeOnCursor();
        });
        item.addEventListener("mouseleave", removeClickMeOnCursor);
    });
    document.querySelectorAll('.card__close').forEach(function(item) {
        console.log();
        item.addEventListener('mouseenter', addClickMeOnCursor);
        item.addEventListener('mouseleave', removeClickMeOnCursor);
        item.addEventListener('click', function() {
            var id = item.id.split('_')[1];
            closeCard(id);
        });

    });

    document.querySelectorAll('.tile').forEach(function(item) {
        var id = item.id.split('_')[1];
        var string_id = item.id;

        item.addEventListener("mouseenter", ()=> {
            document.querySelectorAll('.tile').forEach(function(tile) {
                if (tile.id != string_id) {
                    tile.classList.add('tile--blured');
                }
            });
            item.classList.add('highlight');
        });
        item.addEventListener("mouseleave", ()=> {
            item.classList.remove('highlight');
            document.querySelectorAll('.tile').forEach(function(tile) {
                tile.classList.remove('tile--blured');
            });
        });
        item.addEventListener("click", function() {
            extendTile(id);
        });
    });
    //Timeline event listener
    document.querySelectorAll('.timeline__point').forEach(function(item) {
        var id = item.id.split('_')[1];

        item.addEventListener("click", function() {
            var date = document.querySelector('.timeline__date');
            date.classList.add('timeline__date--out');
            setTimeout(function() {
                date.innerHTML = makeDateString(timeline_dates[id]["date"]);
                date.classList.remove('timeline__date--out');
            }, 200);            

            document.querySelectorAll('.timeline__point').forEach(function(item) {
                item.classList.remove('timeline__point--active');
            });
            document.querySelectorAll('.event').forEach(function(item) {
                item.classList.remove('active');
            })
            item.classList.add('timeline__point--active');
            document.querySelector('#event_' + id).classList.add('active');
        });

        item.addEventListener("mouseenter", function() {
            var popup = document.querySelector('#popup_' + id);
            popup.classList.add('timeline__popupDate--active');
        });

        item.addEventListener("mouseleave", function() {
            var popup = document.querySelector('#popup_' + id);
            popup.classList.remove('timeline__popupDate--active');
        });
    });
})