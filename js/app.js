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
                        title: "Ande we are here...",
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



function dragElement(elmnt) {
    var pos1 = 0, pos3 = 0, max = window.innerWidth - 40;
  
    var element = document.querySelector('.flexsection');
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        // set the element's new position:
        if (pos3 > 0 && pos3 < max) {
            element.style.left = (element.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        left = returnPosition(element.style.left);
        if (left < max / 2) {
            element.style.left = '70px';
        } else {
            element.style.left = '100vw';
        }
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function returnPosition(position) {
        var substring = position.substring(0, position.length - 2);
        return substring
    }
}


document.addEventListener('DOMContentLoaded', () => {
    makeTimeline();
    makeTimelineDescription();
    setupDefaultTextFields();
    dragElement(document.querySelector('.sticker'));

    document.querySelectorAll('.sticker').forEach(function(item) {
        item.addEventListener('dblclick', function() {
            document.querySelector('.flexsection').style.left = "100vw";
        });
        

    });



    // Scroll to top on click
    document.querySelector('#more-arrows').onclick = () => {
        window.scrollTo(0, 0);
    };

    //Show and hide scroll button
    document.addEventListener("scroll", () => {
        var y = window.scrollY;
        const arrow_box = document.getElementsByClassName("arrowup");
        if (y >= 600) {
            arrow_box[0].classList.add("active--button");
        } else {
            arrow_box[0].classList.remove("active--button");
        }
    });

    //Timeline event listener
    document.querySelectorAll('.timeline__point').forEach(function(item) {
        var id = item.id.split('_')[1];

        item.addEventListener("click", function() {
            var date = document.querySelector('.timeline__date');
            date.innerHTML = makeDateString(timeline_dates[id]["date"]);

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
            //popup.style.opacity = "1";
            popup.classList.add('timeline__popupDate--active');
        });

        item.addEventListener("mouseleave", function() {
            var popup = document.querySelector('#popup_' + id);
            //popup.style.opacity = "0";
            popup.classList.remove('timeline__popupDate--active');
        });
    });

    //Observe and start animations
    const observer_cv_buttons = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('animation--right');
            }
        });
    });
    observer_cv_buttons.observe(document.querySelector('.container__button--one'));
    observer_cv_buttons.observe(document.querySelector('.container__button--two'));
    observer_cv_buttons.observe(document.querySelector('.container__button--three'));

    const observer_cv_content = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation--left');
                observer_cv_content.unobserve(entry.target);
            }
        });
    });
    observer_cv_content.observe(document.querySelector('.container__text--one'));
    observer_cv_content.observe(document.querySelector('.container__text--two'));
    observer_cv_content.observe(document.querySelector('.container__text--three'));

    const text_one_study = document.querySelectorAll('.container__text--one.study')[0];
    const text_two_study = document.querySelectorAll('.container__text--two.study')[0];
    const text_three_study = document.querySelectorAll('.container__text--three.study')[0];
    const text_one_experience = document.querySelectorAll('.container__text--one.experience')[0];
    const text_two_experience = document.querySelectorAll('.container__text--two.experience')[0];
    const text_three_experience = document.querySelectorAll('.container__text--three.experience')[0];
    const text_one_technologies = document.querySelectorAll('.container__text--one.technologies')[0];
    const text_two_technologies = document.querySelectorAll('.container__text--two.technologies')[0];
    const text_three_technologies = document.querySelectorAll('.container__text--three.technologies')[0];
    const button_one = document.querySelector('.container__button--one');
    const button_two = document.querySelector('.container__button--two');
    const button_three = document.querySelector('.container__button--three');

    button_one.onclick = () => {
        showObj(text_one_study);
        showObj(text_two_study);
        showObj(text_three_study);

        hideObj(text_one_experience);
        hideObj(text_two_experience);
        hideObj(text_three_experience);
        hideObj(text_one_technologies);
        hideObj(text_two_technologies);
        hideObj(text_three_technologies);
    };

    button_two.onclick = () => {
        showObj(text_one_experience);
        showObj(text_two_experience);
        showObj(text_three_experience);

        hideObj(text_one_study);
        hideObj(text_two_study);
        hideObj(text_three_study);
        hideObj(text_one_technologies);
        hideObj(text_two_technologies);
        hideObj(text_three_technologies);
    }

    button_three.onclick = () => {
        showObj(text_one_technologies);
        showObj(text_two_technologies);
        showObj(text_three_technologies);

        hideObj(text_one_study);
        hideObj(text_two_study);
        hideObj(text_three_study);
        hideObj(text_one_experience);
        hideObj(text_two_experience);
        hideObj(text_three_experience);
    }


    function showObj(obj) {
        obj.classList.remove('fadeout');
        obj.classList.add('fadein');
    }
    function hideObj(obj) {
        obj.classList.remove('fadein');
        obj.classList.add('fadeout');
    };
})