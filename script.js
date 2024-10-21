document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Bạn có thể xử lý gửi dữ liệu tại đây
    document.getElementById('formMessage').innerText = `Cảm ơn ${name}! Tin nhắn của bạn đã được gửi.`;
    
    // Xóa form sau khi gửi
    this.reset();
});
