
const carros = [
    {
        nome: "Honda Civic 2023",
        preco: "R$ 129.900",
        descricao: "Automático, 2.0, Flex",
        imagem: "carros/honda-civic-sedan-e-hev-2023.jpg"
    },
    {
        nome: "Jeep Compass 2022",
        preco: "R$ 149.900",
        descricao: "Automático, 2.0, Diesel",
        imagem: "carros/jeep-compass-s.jpg"
    },
    {
        nome: "Toyota Corolla 2023",
        preco: "R$ 134.900",
        descricao: "Automático, 2.0, Flex",
        imagem: "carros/Corolla-2023-dest.jpg"
    },
    {
        nome: "Volkswagen T-Cross 2024",
        preco: "R$ 119.900",
        descricao: "Automático, 1.4 TSI, Flex",
        imagem: "carros/sddefault.jpg"
    },
    {
        nome: "BMW X5 2023",
        preco: "R$ 439.900",
        descricao: "Automático, 3.0, Gasolina",
        imagem: "carros/2023-BMW-x5.jpg"
    },
    {
        nome: "Mercedes-Benz GLE 2025",
        preco: "R$ 489.900",
        descricao: "Automático, 3.0, Diesel",
        imagem: "carros/amg-gle.jpg"
    },
    {
        nome: "Lamborghini Huracan 2021",
        preco: "R$ 2.500.000",
        descricao: "Automático, 5.2 V10, Gasolina",
        imagem: "carros/hurucan.jpg"
    },
    {
        nome: "Mercedes-Benz S550 2018",
        preco: "R$ 1.599.000",
        descricao: "Automático, 7.2 V12 Bi-Turbo, Diesel",
        imagem: "carros/s550-2018.jpg"
    },
    {
        nome: "Rolls-Royce Droptail 2026",
        preco: "R$ 32.000.000.000",
        descricao: "Conversível, V12, Exclusivo e Luxuoso",
        imagem: "carros/30k.jpg"
    },
    {
        nome: "Maserati Ghibli 2023",
        preco: "R$ 899.900",
        descricao: "Automático, 3.0 V6, Gasolina",
        imagem: "carros/mase.avif"
    },
    {
        nome: "Aston Martin DB11 2023",
        preco: "R$ 1.799.900",
        descricao: "Automático, 4.0 V8, Gasolina",
        imagem: "carros/ast.jpg"
    },
    {
        nome: "Porsche 911 Carrera 2023",
        preco: "R$ 1.099.900",
        descricao: "Automático, 3.0, Gasolina",
        imagem: "carros/pos.jpg"
    },
    {
        nome: "Rolls-Royce Ghost 2023",
        preco: "R$ 6.000.000",
        descricao: "Automático, 6.75 V12, Gasolina",
        imagem: "carros/ghost.jpg"
    },
    {
        nome: "Bentley Continental GT 2023",
        preco: "R$ 3.800.000",
        descricao: "Automático, 4.0 V8, Gasolina",
        imagem: "carros/bent.webp"
    },
    {
        nome: "Lamborghini Huracán EVO 2023",
        preco: "R$ 2.900.000",
        descricao: "Automático, 5.2 V10, Gasolina",
        imagem: "carros/lambo.jpg"
    },
    {
        nome: "Ferrari Portofino M 2023",
        preco: "R$ 3.500.000",
        descricao: "Automático, 3.9 V8 Turbo, Gasolina",
        imagem: "carros/mm.jpg"
    },
    {
        nome: "McLaren Artura 2023",
        preco: "R$ 2.800.000",
        descricao: "Automático, Híbrido V6, Gasolina/Elétrico",
        imagem: "carros/arthura.webp"
    },
    {
        nome: "Bugatti Chiron Sport 2023",
        preco: "R$ 25.000.000",
        descricao: "Automático, 8.0 W16, Gasolina",
        imagem: "carros/chi.webp"
    }
];


function criarCarroCards() {
    const container = document.getElementById('carsContainer');

    carros.forEach(carro => {
        const card = document.createElement('div');
        card.className = 'car-card';

        card.innerHTML = `
            <img src="${carro.imagem}" 
                 alt="${carro.nome}" 
                 class="car-image"
                 onerror="this.src='carros/placeholder.jpg'; this.onerror=null;">
            <div class="car-info">
                <h3>${carro.nome}</h3>
                <p class="car-price">${carro.preco}</p>
                <p>${carro.descricao}</p>
                <button class="btn" onclick="contatarVendedor('${carro.nome}')">Contatar Vendedor</button>
            </div>
        `;

        container.appendChild(card);

        const img = card.querySelector('img');
        img.addEventListener('error', function () {
            console.error(`Error loading image for ${carro.nome}: ${carro.imagem}`);
        });
    });
}


function contatarVendedor(nomeCarro) {
    alert(`Obrigado pelo interesse no ${nomeCarro}! Um de nossos vendedores entrará em contato em breve.`);
}


window.onload = function () {
    criarCarroCards();
};



document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();


            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                mensagem: document.getElementById('mensagem').value
            };


            alert(`Obrigado ${formData.nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!`);


            contactForm.reset();
        });
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


function criarCarroCards() {
    const container = document.getElementById('carsContainer');
    container.innerHTML = '';

    carros.forEach((carro, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transitionDelay = `${index * 0.1}s`;

        card.innerHTML = `
                <div class="car-image-wrapper">
                    <img src="${carro.imagem}" 
                         alt="${carro.nome}" 
                         class="car-image"
                         onerror="this.src='carros/placeholder.jpg'; this.onerror=null;">
                </div>
                <div class="car-info">
                    <h3>${carro.nome}</h3>
                    <p class="car-price">${carro.preco}</p>
                    <p class="car-description">${carro.descricao}</p>
                    <button class="btn" onclick="contatarVendedor('${carro.nome}')">
                        Contatar Vendedor
                    </button>
                </div>
            `;

        container.appendChild(card);
        observer.observe(card);
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();


        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (input.required && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                showError(input, 'Este campo é obrigatório');
            } else {
                input.classList.remove('error');
                removeError(input);
            }
        });

        if (!isValid) return;


        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando...';

        setTimeout(() => {
            const formData = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                mensagem: document.getElementById('mensagem').value
            };

            alert(`Obrigado ${formData.nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!`);
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Enviar Mensagem';
        }, 1500);
    });
}
