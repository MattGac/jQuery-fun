$(function () {

    const dimensions = {
        height: '100px',
        width: '100px'
    }

    const inlineBlock = {
        display: 'inline-block'
    }

    const body = $('body').css('margin', 0);
    const button = $('<button>').text('click');
    const divOne = $('<div>').css({ ...dimensions, background: 'red' })
    const divTwo = $('<div>').css({ ...dimensions, background: 'blue', ...inlineBlock })
    const divThree = $('<div>').css({ ...dimensions, background: 'yellow', ...inlineBlock })
    const divFour = $('<div>').css({ ...dimensions, background: 'green', ...inlineBlock })

    body.prepend(button, divOne, divTwo, divThree, divFour)

    button.click(() => {
        button.hide()
        divOne.animate({
            height: '300px'
        }, 1000, () => {
            divTwo.animate({
                width: '300px'
            }, 1000, () => {
                divThree.css('position', 'absolute')
                divFour.css({ position: 'absolute', left: '400px', top: '300px' })
                divThree.animate({
                    height: '400px'
                }, 1000)
                divFour.animate({
                    top: '600px',
                }, 1000, () => {

                    divFour.animate({
                        width: '300px'
                    }, 1000, ()=>{
                        $('div').css({transition:'2s',backgroundColor:'cyan'})
                    })
                });
            });
        });
    });
});






