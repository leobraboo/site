window.addEventListener('DOMContentLoaded', event => {
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById("submitButton").addEventListener("click", async (e)=>{
    try {
        e.preventDefault()
        const conteudo = {
            nome: document.getElementById("name").value,
            email: document.getElementById("email").value,
            tel: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        }

        const { data } = await axios.post(`http://localhost:3003/enviarEmail`, conteudo)
        return console.log(data.message)

    } catch (error) {
        console.log(error)

    }

})

// async function submitSuccessMessage(e) {
//     try {
//         e.preventDefault()
//         const conteudo = {
//             nome: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             tel: document.getElementById("phone").value,
//             message: document.getElementById("message").value,
//         }

//         const { data } = await axios.post(`http://localhost:3003/enviarEmail`, conteudo)
//         return alert(data.message)

//     } catch (error) {
//         console.log(error)

//     }


// }
window.sr = ScrollReveal ({reset: true})

ScrollReveal({
	reseat : true,
	distance: '60px',
	duration: 2000,
	delay:500
});

ScrollReveal().reveal('.container' ,{delay:500 , origin:'left'} )
