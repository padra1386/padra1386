$(document).ready(function () {
    let registerUser = document.getElementById('register-user');
    console.log(registerUser);
    let registerUserChart = new Chart(registerUser, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                data: [15333, 21555, 18496, 24200, 10600, 10600, 15600],
                backgroundColor: 'transparent',
                borderColor: '#fff',
                borderWidth: 2,
                pointBackgroundColor: '#fff'
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                }
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false,
            }
        }
    })
    let Comment = document.getElementById('comment');
    console.log(registerUser);
    let CommentChart = new Chart(Comment, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                data: [19600, 21555, 18496, 24200, 24560, 22400 , 15600],
                backgroundColor: '#fff',
                borderColor: '#fff',
                borderWidth: 2,
                pointBackgroundColor: '#fff'
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                }
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false,
            }
        }
    })
    let shop = document.getElementById('shop-user');
    console.log(registerUser);
    let shopChart = new Chart(shop, {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                data: [19600, 21555, 18496, 24200, 24560, 22400 , 15600],
                backgroundColor: 'transparent',
                borderColor: '#fff',
                borderWidth: 2,
                pointBackgroundColor: '#fff'
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                }
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false,
            }
        }
    })
    let approve = document.getElementById('approve-comment');
    console.log(registerUser);
    let approveChart = new Chart(approve, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', '', ''],
            datasets: [{
                data: [19600, 21555, 18496, 24200, 24560, 22400 , 15600],
                backgroundColor: '#fff',
                borderColor: '#fff',
                borderWidth: 2,
                pointBackgroundColor: '#fff'
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                }
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    display: false
                }],
            },
            legend: {
                display: false,
            }
        }
    })
    let view = document.getElementById('view');
    console.log(view);
    let viewChart = new Chart(view, {
        type: 'line',
        data: {
            labels: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه'],
            datasets: [{
                data: [15333, 21555, 19670, 24200, 16500, 21600 , 15600],
                backgroundColor: 'rgba(0,0,0,.4)',
                borderColor: '#555',
                borderWidth: 3,
                pointBackgroundColor: '#333'
            }]
        },
        options: {
            legend: {
                display: false,
            }
        }
    })

    resizeTemplate();

    $(window).resize(resizeTemplate);

    function resizeTemplate() {
        if($(window).width() <= 768) {
            $('#sideBar').collapse('hide');
        } else {
            $('#sideBar').collapse('show');
        }
    }


    $('#sideBar').on('hide.bs.collapse' , function(e) {
        $('#main').removeClass('col-md-10')
    })
    
});