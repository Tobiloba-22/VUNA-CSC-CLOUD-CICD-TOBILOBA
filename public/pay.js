document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form elements
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;
    const cardHolderName = document.getElementById('cardHolderName').value;
    
    // Basic form validation
    if (!cardNumber || !expiryDate || !cvv || !amount || !cardHolderName) {
        alert('Please fill in all the fields.');
        return;
    }
    
    // Simulate payment processing
    simulatePaymentProcessing(cardNumber, expiryDate, cvv, amount, cardHolderName)
        .then(response => {
            if (response.success) {
                alert('Payment successful!');
                // Optionally, redirect to a success page
                window.location.href = '/payment-success';
            } else {
                alert(`Payment failed: ${response.errorMessage}`);
            }
        })
        .catch(error => {
            console.error('Payment processing error:', error);
            alert('An error occurred during payment processing. Please try again.');
        });
});

// Simulated payment processing function
function simulatePaymentProcessing(cardNumber, expiryDate, cvv, amount, cardHolderName) {
    return new Promise((resolve, reject) => {
        // Simulate an API call to the payment gateway
        setTimeout(() => {
            // For this example, we randomly determine if the payment is successful
            const success = Math.random() > 0.2; // 80% chance of success
            if (success) {
                resolve({ success: true });
            } else {
                resolve({ success: false, errorMessage: 'Payment was declined. Please check your card details and try again.' });
            }
        }, 2000); // Simulate a 2-second network delay
    });
}
