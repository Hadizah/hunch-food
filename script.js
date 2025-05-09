const slides = document.querySelectorAll('.slide')
let currentslide = 0;


function showPreviousSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active')
}
// Add event listeners for navigation buttons //
document.getElementById('previous-button').addEventListener('click', showPreviousSlide)
document.getElementById('next-button').addEventListener('click', showNextSlide)

// Show the first slide//
slides[0].classList.add('active');


document.addEventListener('DOMContentLoaded', () => {
    // --- "No orders yet" section ---
    const orderNowButton = document.querySelector('.no-orders-section .button.primary');
    if (orderNowButton) {
        orderNowButton.addEventListener('click', () => {
            // You might want to scroll to the order form or navigate to a menu page
            console.log('Order Now button clicked!');
            const orderFormSection = document.querySelector('.order-form-section');
            if (orderFormSection) {
                orderFormSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- Order Form Submission ---
    const orderForm = document.querySelector('.order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const review = document.getElementById('review').value;
            const protein = document.getElementById('preferred-protein').value;
            const spice = document.getElementById('spice-level').value;
            const request = document.getElementById('special-request').value;

            // Basic validation (you'll likely want more robust validation)
            if (!name || !phone) {
                alert('Please enter your name and phone number.');
                return;
            }

            const orderData = {
                name: name,
                phone: phone,
                review: review,
                protein: protein,
                spice: spice,
                request: request
                // Add any other relevant data
            };

            console.log('Order Data:', orderData);

            // In a real application, you would send this data to a server using fetch or XMLHttpRequest
            // fetch('/api/orders', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(orderData),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log('Success:', data);
            //     alert('Your order has been placed!');
            //     orderForm.reset(); // Clear the form
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     alert('There was an error placing your order.');
            // });
        });
    }

    // --- Sign-up Section - Basic Step Navigation (Conceptual) ---
    const signupSteps = document.querySelectorAll('.signup-steps .step');
    const signupForm = document.querySelector('.signup-form');
    const continueButton = document.querySelector('.signup-section .button.primary');

    let currentStep = 0; // Assuming only the first step's form is visible initially

    function updateSignupStep() {
        signupSteps.forEach((step, index) => {
            if (index === currentStep) {
                step.classList.add('active');
                // In a real multi-step form, you would show/hide relevant form fields here
            } else {
                step.classList.remove('active');
            }
        });

        // Basic example: Log the current step (in a real scenario, you'd control form visibility)
        console.log('Current Sign-up Step:', currentStep + 1);

        // Example: Disable continue button on the last step (you'd likely have a "Submit" button instead)
        if (currentStep >= signupSteps.length - 1) {
            if (continueButton) {
                continueButton.textContent = 'Submit'; // Change button text on the last step
                // You would then handle the final submission here
                continueButton.removeEventListener('click', nextStep); // Remove the next step listener
                continueButton.addEventListener('click', submitSignup); // Add a submit listener
            }
        }
    }

    function nextStep() {
        if (currentStep < signupSteps.length - 1) {
            currentStep++;
            updateSignupStep();
        }
    }

    if (continueButton) {
        continueButton.addEventListener('click', nextStep);
    }

    function submitSignup() {
        const signupName = document.getElementById('signup-name').value;
        const signupEmail = document.getElementById('signup-email').value;
        const signupPhone = document.getElementById('signup-phone').value;

        // Perform signup data submission here (similar to the order form)
        const signupData = {
            name: signupName,
            email: signupEmail,
            phone: signupPhone
        };
        console.log('Signup Data:', signupData);
        alert('Sign-up functionality would be implemented here.');
    }

    // Initialize the sign-up step (if needed - assuming first step is active by default in HTML/CSS)
    // updateSignupStep();
});



// Home page.html//
document.addEventListener('DOMContentLoaded', () => {
    // --- Explore Meals Carousel Functionality ---//
    const mealPlansCarousel = document.querySelector('.meal-plans-carousel');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    if (mealPlansCarousel && prevArrow && nextArrow) {
        prevArrow.addEventListener('click', () => {
            mealPlansCarousel.scrollLeft -= 350; 
        });

        nextArrow.addEventListener('click', () => {
            mealPlansCarousel.scrollLeft += 350; 
        });
    }

    // --- Craving Jollof Order Form Submission ---
    const jollofOrderForm = document.getElementById('jollof-order-form');
    if (jollofOrderForm) {
        jollofOrderForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const quantity = document.getElementById('quantity').value;
            const specialRequest = document.getElementById('special-request').value;

            // Basic validation
            if (!name || !phone) {
                alert('Please enter your name and phone number.');
                return;
            }
            if (isNaN(quantity) || parseInt(quantity) < 1) {
                alert('Please enter a valid quantity.');
                return;
            }

            const orderData = {
                name: name,
                phone: phone,
                quantity: quantity,
                specialRequest: specialRequest
                // Add any other relevant data
            };

            console.log('Jollof Order Data:', orderData);

           
        });
    }


});


// Basic info.html//
document.addEventListener('DOMContentLoaded', () => {
    const formSteps = document.querySelectorAll('.form-step');
    const nextStepButtons = document.querySelectorAll('.next-step');
    const prevStepButtons = document.querySelectorAll('.prev-step');
    const healthForm = document.getElementById('health-form');
    const stepIndicators = document.querySelectorAll('.step-indicator span');

    let currentStep = 0;

    function updateStep() {
        formSteps.forEach((step, index) => {
            step.classList.remove('active');
            if (index === currentStep) {
                step.classList.add('active');
            }
        });

        stepIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentStep) {
                indicator.classList.add('active');
            }
        });
    }

    nextStepButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Basic validation for the current step 
            const currentActiveStep = formSteps[currentStep];
            const requiredInputs = currentActiveStep.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error'); // Add a visual cue for error
                } else {
                    input.classList.remove('error');
                }
            });

            if (isValid && currentStep < formSteps.length - 1) {
                currentStep++;
                updateStep();
            } else if (!isValid) {
                alert('Please fill in all required fields.');
            }
        });
    });

    prevStepButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                updateStep();
            }
        });
    });

    healthForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Collect all form data
        const formData = new FormData(healthForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('Form Data Submitted:', data);
        alert('Health assessment submitted!');
        
    });

    // Health Calculator Functionality 
    const calculatorButton = document.querySelector('.health-calculator button');
    const calculatorResultDiv = document.querySelector('.health-calculator .calculator-result');

    if (calculatorButton) {
        calculatorButton.addEventListener('click', () => {
            const age = parseInt(document.getElementById('calculator-age').value);
            const weight = parseFloat(document.getElementById('calculator-weight').value);
            const height = parseFloat(document.getElementById('calculator-height').value) / 100; // Convert cm to meters

            if (!isNaN(age) && !isNaN(weight) && !isNaN(height) && height > 0) {
                const bmi = weight / (height * height);
                
            } else {
                calculatorResultDiv.textContent = 'Please enter valid age, weight, and height.';
            }
        });
    }

    // Initialize the form to show the first step
    updateStep();
});



// Payment Successful.html //
document.addEventListener('DOMContentLoaded', () => {
    const trackOrderButton = document.querySelector('.payment-successful-card .button.secondary');
    if (trackOrderButton) {
        trackOrderButton.addEventListener('click', () => {
            // Add logic to redirect or show the order tracking information
            console.log('Track order button clicked');
            window.location.href = '/track-order'; 
        });
    }

    const waitlistButtons = document.querySelectorAll('.waitlist-buttons .button.primary');
    waitlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add logic to handle joining the waitlist 
            console.log('Join waitlist button clicked');
            alert('You have joined the waitlist!'); // 
           
        });
    });
});


// Card details //
document.addEventListener('DOMContentLoaded', () => {
    const paymentModals = document.querySelectorAll('.payment-modal');
    const submitPaymentOptionButton = document.querySelector('.submit-payment-option');
    const continuePaymentButtons = document.querySelectorAll('.continue-payment');
    const closeButtons = document.querySelectorAll('.close-button');

    let currentStep = 'payment-step-1';

    function showModal(modalId) {
        paymentModals.forEach(modal => {
            modal.classList.remove('active');
        });
        const modalToShow = document.getElementById(modalId);
        if (modalToShow) {
            modalToShow.classList.add('active');
            currentStep = modalId;
        }
    }

    if (submitPaymentOptionButton) {
        submitPaymentOptionButton.addEventListener('click', function() {
            const nextStep = this.dataset.next;
            const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
            console.log('Selected Payment Method:', selectedPaymentMethod);
            showModal(nextStep);
        });
    }

    continuePaymentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = this.dataset.next;
            if (currentStep === 'payment-step-2') {
                const selectedOnlineMethod = document.querySelector('input[name="online-payment-method"]:checked').value;
                console.log('Selected Online Method:', selectedOnlineMethod);
                if (nextStep) {
                    showModal(nextStep);
                } else {
                    // Handle final payment processing logic here for online methods
                    console.log('Proceeding with online payment for:', selectedOnlineMethod);
                    alert('Processing your online payment...');
                }
            } else if (currentStep === 'payment-step-3') {
                // Handle card details submission logic here
                const cardType = document.getElementById('card-type').value;
                const cardNumber = document.getElementById('card-number').value;
                const cardName = document.getElementById('card-name').value;
                const expiryDate = document.getElementById('expiry-date').value;
                const cvv = document.getElementById('cvv').value;
                console.log('Card Details:', { cardType, cardNumber, cardName, expiryDate, cvv });
                alert('Processing your card payment...');
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // For simplicity, go back to the first step
            showModal('payment-step-1');
        });
    });

    // Initially show the first payment step
    showModal(currentStep);
});